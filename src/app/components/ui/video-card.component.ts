
import { Component, input, computed, signal, ElementRef, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectMedia } from '../../services/content.service';

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="group relative bg-slate-900 rounded-lg overflow-hidden shadow-lg h-full border border-slate-800">
      
      <!-- Video Player container -->
      <div
        class="relative bg-black overflow-hidden" 
        [class.aspect-[9/16]]="isPortrait()"
        [class.aspect-[16/9]]="!isPortrait()"
      >
      @if (posterUrl()) {
        <div 
          class="absolute inset-0 bg-center bg-cover blur-2xl scale-110 opacity-40"
          [style.background-image]="'url(' + posterUrl() + ')'"
        ></div>
      }

        <!-- Optimized Video Element -->
        <video 
            #videoPlayer
            [poster]="posterUrl()"
            class="w-full h-full object-contain bg-black transition-all duration-500"
            playsinline
            loading="lazy"
            preload="none"
            muted
            loop
            (mouseenter)="hoverPlay()"
            (mouseleave)="hoverPause()"
            (ended)="onEnded()"
          >
            <source [src]="optimizedUrl()" [type]="'video/mp4'">
        </video>


        <!-- Custom Play Button Overlay (Hidden when playing) -->
        @if (!isPlaying()) {
          <div 
            (click)="play()"
            class="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-500 opacity-100 group-hover:opacity-0">
            <div class="w-16 h-16 bg-amber-500/90 hover:bg-amber-500 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm transform group-hover:scale-110 transition-all duration-300">
              <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        }

        <!-- Badge -->
        <div class="absolute top-4 right-4 z-20 pointer-events-none">
          <span class="px-2 py-1 bg-black/60 backdrop-blur text-white text-xs font-bold rounded border border-white/10 uppercase tracking-wider">
            {{ formatDuration(item().duration) }}
          </span>
        </div>
      </div>

      <!-- Caption -->
      <div class="p-4 bg-white">
        <span class="text-amber-600 text-xs font-bold uppercase tracking-wider mb-1 block">
          {{ item().category }}
        </span>
        <h3 class="text-slate-900 font-bold text-lg leading-tight">{{ item().title }}</h3>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
  `]
})
export class VideoCardComponent {
  item = input.required<ProjectMedia>();

  isPlaying = signal(false);
  videoElement = viewChild<ElementRef<HTMLVideoElement>>('videoPlayer');

  isPortrait = computed(() => {
    const item = this.item();
    return item.height && item.width
      ? item.height > item.width
      : false;
  });


  // Compute optimized Cloudinary URL
  /*optimizedUrl = computed(() => {
    return this.item().url;
  });*/

  optimizedUrl = computed(() => {
    const originalUrl = this.item().url;
    // Check if it's a Cloudinary URL to inject transformations
    if (originalUrl.includes('cloudinary.com')) {
      // Inject f_auto, q_auto, vc_auto (video codec auto) before /v{version} or /upload
      // Simple regex replacement for demo purposes. 
      // In a real app, use the @cloudinary/url-gen SDK.
      return originalUrl.replace('/upload/', '/upload/f_auto,q_auto,vc_auto/');
    }
    return originalUrl;
  });


  // Generate poster from video URL (Cloudinary specific: replace .mp4 with .jpg)
  posterUrl = computed(() => {
    const url = this.optimizedUrl();
    if (url.includes('cloudinary.com')) {
      return url.replace(/\.[^/.]+$/, ".jpg");
    }
    return null; // Fallback or empty
  });

  play() {
    this.isPlaying.set(true);
    this.videoElement()?.nativeElement.play();
  }

  onEnded() {
    this.isPlaying.set(false);
    // Optional: Reset to poster
    if (this.videoElement()?.nativeElement) {
      this.videoElement()!.nativeElement.load();
    }
  }

  formatDuration(seconds?: number): string {
    if (!seconds) return 'HD';
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  }

  hoverPlay() {
    const video = this.videoElement()?.nativeElement;
    if (!video) return;

    video.play();
  }

  hoverPause() {
    const video = this.videoElement()?.nativeElement;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
  }

}
