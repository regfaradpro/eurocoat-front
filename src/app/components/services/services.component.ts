
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../ui/section-title.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [SectionTitleComponent],
  template: `
    <div class="bg-slate-900 text-white py-24 relative overflow-hidden">
      <!-- Decorative background element -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
      
      <div class="container mx-auto px-6 text-center relative z-10">
        <h1 class="text-4xl md:text-6xl font-serif font-bold mb-4">Nos Solutions Techniques</h1>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg">Une gamme complète de revêtements pour valoriser et protéger vos actifs immobiliers et industriels.</p>
      </div>
    </div>

    <section class="py-20">
      <div class="container mx-auto px-6 space-y-24">
        
        <!-- Service 1: Industrial (Feature Block) -->
        <div class="flex flex-col md:flex-row items-center gap-12 group">
          <div class="md:w-1/2 order-2 md:order-1">
            <span class="text-amber-600 font-bold uppercase text-xs tracking-wider mb-2 block">Haute Résistance</span>
            <h2 class="text-3xl font-bold text-slate-900 mb-4">Sols Industriels & Résines</h2>
            <p class="text-slate-600 mb-6 leading-relaxed">
              Pour les environnements exigeants (usines, entrepôts logistiques, laboratoires), nous appliquons des systèmes résine époxy et polyuréthane ultra-résistants.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-slate-700 bg-slate-50 p-3 rounded-lg">
                <span class="text-green-500 mr-2">✓</span> Résistance mécanique et chimique élevée
              </li>
              <li class="flex items-center text-slate-700 bg-slate-50 p-3 rounded-lg">
                <span class="text-green-500 mr-2">✓</span> Normes antidérapantes et hygiène (HACCP)
              </li>
              <li class="flex items-center text-slate-700 bg-slate-50 p-3 rounded-lg">
                <span class="text-green-500 mr-2">✓</span> Marquage au sol industriel intégré
              </li>
            </ul>
          </div>
          <div class="md:w-1/2 order-1 md:order-2 h-80 rounded-xl overflow-hidden shadow-lg relative">
             <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
            <img src="https://picsum.photos/800/600?random=10" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Industrial Floor">
          </div>
        </div>

        <!-- Service 2: Design Wrapping -->
        <div class="flex flex-col md:flex-row items-center gap-12 group">
          <div class="md:w-1/2 h-80 rounded-xl overflow-hidden shadow-lg relative">
            <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
            <img src="image_fx_ (1).jpg" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Kitchen Wrapping">
          </div>
          <div class="md:w-1/2">
             <span class="text-amber-600 font-bold uppercase text-xs tracking-wider mb-2 block">Rénovation Premium</span>
            <h2 class="text-3xl font-bold text-slate-900 mb-4">Architectural Wrapping</h2>
            <p class="text-slate-600 mb-6 leading-relaxed">
              Donnez une seconde vie à vos intérieurs (cuisines, banques d'accueil, portes, ascenseurs) sans gros travaux. Nos films adhésifs architecturaux imitent à la perfection le marbre, le bois ou le béton.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-slate-700 bg-slate-50 p-3 rounded-lg">
                 <span class="text-green-500 mr-2">✓</span> Rapidité d'exécution sans nuisances
              </li>
              <li class="flex items-center text-slate-700 bg-slate-50 p-3 rounded-lg">
                 <span class="text-green-500 mr-2">✓</span> Finitions Marbre, Bois, Pierre réalistes
              </li>
              <li class="flex items-center text-slate-700 bg-slate-50 p-3 rounded-lg">
                 <span class="text-green-500 mr-2">✓</span> Solution économique et écologique
              </li>
            </ul>
          </div>
        </div>

        <!-- Service 3: Parkings -->
        <div class="flex flex-col md:flex-row items-center gap-12 group">
          <div class="md:w-1/2 order-2 md:order-1">
             <span class="text-amber-600 font-bold uppercase text-xs tracking-wider mb-2 block">Génie Civil</span>
            <h2 class="text-3xl font-bold text-slate-900 mb-4">Systèmes Parkings & Étanchéité</h2>
            <p class="text-slate-600 mb-6 leading-relaxed">
              Traitement complet des parkings souterrains et aériens. Étanchéité circulable, résines souples pontant les fissures et protection des bétons carbonatés.
            </p>
            <div class="mt-6 border-l-4 border-amber-500 pl-4">
              <p class="italic text-slate-500">"La longévité de vos structures dépend de la qualité de leur protection."</p>
            </div>
          </div>
          <div class="md:w-1/2 order-1 md:order-2 h-80 rounded-xl overflow-hidden shadow-lg relative">
            <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
            <img src="https://picsum.photos/800/600?random=11" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Parking Floor">
          </div>
        </div>

      </div>
    </section>
  `
})
export class ServicesComponent {}
