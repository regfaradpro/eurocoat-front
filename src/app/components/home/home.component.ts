import { AnimateOnScrollDirective } from '../../core/animate-on-scroll.directive';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppFacade } from '../../core/facades/app.facade';
import { SectionTitleComponent } from '../ui/section-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SectionTitleComponent, AnimateOnScrollDirective],
  template: `
   <!-- Hero Section -->
<section class="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">

  <!-- Background -->
  <div class="absolute inset-0 z-0">
    <img 
      src="https://picsum.photos/1920/1080?grayscale&blur=2"
      class="w-full h-full object-cover scale-105"
      alt="Industrial Background"
    >
    <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-slate-900"></div>
  </div>

  <!-- Content -->
  <div class="relative z-10 text-center px-6 max-w-4xl">

    <span class="text-amber-400 font-semibold tracking-[0.3em] uppercase text-sm mb-6 block animate-fade-in-up delay-100">
      Expertise Europe & Maroc
    </span>

    <h1 class="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-lg animate-fade-in-up delay-200">
      L'Excellence du <br/>
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
        Revêtement Technique
      </span>
    </h1>

    <p class="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-300">
      Spécialiste des sols industriels, résines époxy et rénovations architecturales pour les professionnels exigeants.
    </p>

    <div class="flex flex-col md:flex-row gap-6 justify-center animate-fade-in-up delay-300">
      <a routerLink="/contact"
         class="px-10 py-4 bg-amber-500 text-white font-semibold rounded-lg shadow-xl hover:shadow-amber-500/40 hover:-translate-y-1 transition-all duration-300">
        Demander un audit gratuit
      </a>

      <a routerLink="/realisations"
         class="px-10 py-4 border border-white/40 text-white rounded-lg backdrop-blur-sm hover:bg-white hover:text-slate-900 transition-all duration-300">
        Voir nos réalisations
      </a>
    </div>

  </div>
</section>


    <!-- Key Stats (Molecules) -->
    <section class="py-12 bg-slate-900 border-b border-slate-800" animateOnScroll>

      <div class="container mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800">
          <div class="p-4">
            <div class="text-4xl font-bold text-white mb-2">15+</div>
            <div class="text-slate-400 text-sm uppercase tracking-wide">Années d'Expérience</div>
          </div>
          <div class="p-4">
            <div class="text-4xl font-bold text-white mb-2">250k</div>
            <div class="text-slate-400 text-sm uppercase tracking-wide">m² Réalisés</div>
          </div>
          <div class="p-4">
            <div class="text-4xl font-bold text-white mb-2">100%</div>
            <div class="text-slate-400 text-sm uppercase tracking-wide">Normes UE</div>
          </div>
          <div class="p-4">
            <div class="text-4xl font-bold text-white mb-2">300+</div>
            <div class="text-slate-400 text-sm uppercase tracking-wide">Projets Livrés</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Expertise Teaser (Organism) -->
    <section class="py-24 bg-white" animateOnScroll>

      <div class="container mx-auto px-6">
        <app-section-title 
          title="Nos Domaines d'Intervention" 
          subtitle="Des solutions techniques adaptées aux contraintes de chaque secteur : résistance, hygiène, esthétique.">
        </app-section-title>

        <div class="grid md:grid-cols-3 gap-8">
          @for (service of facade.services; track service.id) {
            <div class="group p-8 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col h-full">
              <div class="w-14 h-14 bg-blue-100 text-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="service.icon"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3">{{ service.title }}</h3>
              <p class="text-slate-600 mb-6 flex-grow">{{ service.desc }}</p>
              <a routerLink="/services" class="inline-flex items-center text-blue-900 font-semibold group-hover:text-amber-600 transition-colors mt-auto">
                En savoir plus <span class="ml-2">→</span>
              </a>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Map / Geographic Scope (Organism) -->
    <section class="py-24 bg-slate-50" animateOnScroll>

      <div class="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div class="md:w-1/2">
          <span class="text-amber-600 font-bold uppercase tracking-wider text-sm">Zone d'intervention</span>
          <h2 class="text-4xl font-serif font-bold text-slate-900 mt-2 mb-6">Le Partenaire Privilégié entre l'Europe et le Maroc</h2>
          <p class="text-slate-600 mb-6 leading-relaxed">
            Nous accompagnons les foncières, promoteurs et industriels sur leurs projets transfrontaliers. Notre maîtrise des normes européennes garantit une qualité constante, que votre projet soit à Paris, Casablanca, Tanger ou Madrid.
          </p>
          <ul class="space-y-3 mb-8">
            <li class="flex items-center text-slate-700">
              <span class="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
              Respect strict des délais
            </li>
            <li class="flex items-center text-slate-700">
              <span class="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
              Équipes mobiles et certifiées
            </li>
            <li class="flex items-center text-slate-700">
              <span class="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
              Sourcing matériaux premium
            </li>
          </ul>
        </div>
        <div class="md:w-1/2 relative">
          <div class="aspect-video bg-slate-200 rounded-lg overflow-hidden shadow-2xl group">
             <!-- Abstract Map Representation -->
             <div class="w-full h-full bg-slate-800 flex items-center justify-center relative">
                <div class="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/41/Blank_map_of_Europe_cropped.svg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                <div class="z-10 text-white text-center p-8 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10">
                  <p class="text-2xl font-bold">Siège Europe & Maroc</p>
                  <p class="text-amber-400">Intervention Rapide</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {
  facade = inject(AppFacade);
}
