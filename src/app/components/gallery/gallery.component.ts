
import { Component, inject } from '@angular/core';
import { AppFacade } from '../../core/facades/app.facade';
import { SectionTitleComponent } from '../ui/section-title.component';
import { ProjectCardComponent } from '../ui/project-card.component';
import { VideoCardComponent } from '../ui/video-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [SectionTitleComponent, ProjectCardComponent, VideoCardComponent, CommonModule],
  template: `
    <div class="bg-slate-50 min-h-screen pt-12 pb-24">
      <div class="container mx-auto px-6">
        
        <app-section-title 
          title="Nos Réalisations" 
          subtitle="Découvrez la qualité de nos interventions et notre maîtrise technique en images et vidéos.">
        </app-section-title>

        <!-- Filters -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          @for (filter of facade.filters; track filter.id) {
            <button 
              (click)="facade.setGalleryFilter(filter.id)"
              class="px-6 py-2 rounded-full border transition-all duration-300 font-medium text-sm tracking-wide"
              [class.bg-slate-900]="facade.activeFilter() === filter.id"
              [class.text-white]="facade.activeFilter() === filter.id"
              [class.border-slate-900]="facade.activeFilter() === filter.id"
              [class.bg-white]="facade.activeFilter() !== filter.id"
              [class.text-slate-600]="facade.activeFilter() !== filter.id"
              [class.border-slate-300]="facade.activeFilter() !== filter.id"
              [class.hover:border-amber-500]="facade.activeFilter() !== filter.id"
            >
              {{ filter.label }}
            </button>
          }
        </div>

        <!-- Content Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Loading Skeletons -->
          @if (facade.isLoadingVideos()) {
             @for (i of [1,2,3]; track i) {
               <div class="rounded-lg overflow-hidden bg-white shadow border border-slate-100 h-full animate-pulse">
                 <div class="aspect-[4/3] bg-slate-200"></div>
                 <div class="p-4 space-y-3">
                   <div class="h-3 bg-slate-200 rounded w-1/4"></div>
                   <div class="h-5 bg-slate-200 rounded w-3/4"></div>
                 </div>
               </div>
             }
          }

          <!-- Actual Items -->
          @for (item of facade.filteredProjects(); track item.url) {
            
            <div class="animate-fade-in-up">
              <!-- Switch between Image Card and Video Card -->
              @if (item.type === 'video') {
                <app-video-card [item]="item"></app-video-card>
              } @else {
                <app-project-card [item]="item"></app-project-card>
              }
            </div>

          } @empty {
            @if (!facade.isLoadingVideos()) {
              <div class="col-span-full text-center py-20">
                <div class="inline-block p-4 rounded-full bg-slate-100 mb-4 text-slate-400">📷</div>
                <h3 class="text-xl font-bold text-slate-700">Aucun contenu trouvé</h3>
                <p class="text-slate-500">Essayez de changer de catégorie.</p>
              </div>
            }
          }
        </div>
      </div>
    </div>
  `
})
export class GalleryComponent {
  facade = inject(AppFacade);
}
