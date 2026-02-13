
import { Injectable, computed, inject, signal } from '@angular/core';
import { ContentService, ProjectMedia } from '../../services/content.service';

type FilterType = 'all' | 'industrial' | 'design' | 'process';

@Injectable({
  providedIn: 'root'
})
export class AppFacade {
  private contentService = inject(ContentService);

  // State
  private activeFilterSignal = signal<FilterType>('all');
  private isLoadingVideosSignal = signal<boolean>(false);
  private videosLoadedSignal = signal<boolean>(false);

  // Exposed Signals
  readonly companyName = this.contentService.companyName;
  readonly services = this.contentService.services;
  readonly allProjects = this.contentService.portfolio;
  readonly activeFilter = this.activeFilterSignal.asReadonly();
  readonly isLoadingVideos = this.isLoadingVideosSignal.asReadonly();

  // Derived State
  readonly filteredProjects = computed(() => {
    const filter = this.activeFilterSignal();
    const items = this.allProjects();
    return filter === 'all' ? items : items.filter(i => i.category === filter);
  });

  readonly filters: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'Tout voir' },
    { id: 'industrial', label: 'Industriel' },
    { id: 'design', label: 'Design & Wrapping' },
    { id: 'process', label: 'Vidéos' } // Renamed for clarity
  ];

  // Actions
  setGalleryFilter(filterId: FilterType) {
    this.activeFilterSignal.set(filterId);

    // If user clicks on 'process' (Videos) or 'all', trigger fetch if not loaded
    if ((filterId === 'process' || filterId === 'all') && !this.videosLoadedSignal()) {
      this.loadVideos();
    }
  }

  getServiceById(id: string) {
    return this.services.find(s => s.id === id);
  }

  private async loadVideos() {
    if (this.isLoadingVideosSignal()) return;

    this.isLoadingVideosSignal.set(true);
    try {
      await this.contentService.fetchCloudinaryVideos();
      this.videosLoadedSignal.set(true);
    } catch (err) {
      console.error('Failed to load videos', err);
    } finally {
      this.isLoadingVideosSignal.set(false);
    }
  }
}
