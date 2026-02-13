
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text-center mb-16 animate-fade-in-up">
      <h2 class="text-4xl font-serif font-bold text-slate-900 mb-4">{{ title() }}</h2>
      <div class="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
      @if (subtitle()) {
        <p class="mt-4 text-slate-600 max-w-xl mx-auto text-lg">{{ subtitle() }}</p>
      }
    </div>
  `
})
export class SectionTitleComponent {
  title = input.required<string>();
  subtitle = input<string>();
}
