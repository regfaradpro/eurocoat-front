
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectMedia } from '../../services/content.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full">
      
      <!-- Image Type -->
      @if (item().type === 'image') {
        <div class="aspect-[4/3] overflow-hidden">
          <img [src]="item().url" [alt]="item().title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
        </div>
      }

      <!-- Video Type -->
      @if (item().type === 'video') {
        <div class="aspect-[4/3] bg-black relative group-hover:scale-105 transition-transform">
          <video [src]="item().url" class="w-full h-full object-cover opacity-80" muted loop playsinline onmouseover="this.play()" onmouseout="this.pause()"></video>
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
              <div class="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
      }

      <!-- Caption Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span class="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{{ item().category }}</span>
        <h3 class="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{{ item().title }}</h3>
      </div>
    </div>
  `
})
export class ProjectCardComponent {
  item = input.required<ProjectMedia>();
}
