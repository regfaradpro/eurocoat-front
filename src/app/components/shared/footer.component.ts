
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          
          <!-- Brand -->
          <div class="col-span-1 md:col-span-2">
            <h2 class="text-2xl font-serif font-bold text-white mb-4">EuroCoat Prestige</h2>
            <p class="mb-4 max-w-sm">Leader en revêtement industriel et rénovation de surface au Maroc et en Europe. Qualité certifiée et expertise technique.</p>
            <div class="flex space-x-4">
              <a href="#" class="text-white hover:text-amber-500">LinkedIn</a>
              <a href="#" class="text-white hover:text-amber-500">Instagram</a>
            </div>
          </div>

          <!-- Links -->
          <div>
            <h3 class="text-white font-bold mb-4 uppercase text-sm tracking-wider">Navigation</h3>
            <ul class="space-y-2">
              <li><a routerLink="/" class="hover:text-amber-500 transition-colors">Accueil</a></li>
              <li><a routerLink="/services" class="hover:text-amber-500 transition-colors">Services</a></li>
              <li><a routerLink="/realisations" class="hover:text-amber-500 transition-colors">Réalisations</a></li>
              <li><a routerLink="/contact" class="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h3 class="text-white font-bold mb-4 uppercase text-sm tracking-wider">Légal</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-amber-500 transition-colors">Mentions Légales</a></li>
              <li><a href="#" class="hover:text-amber-500 transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#" class="hover:text-amber-500 transition-colors">CGV</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 EuroCoat Prestige. Tous droits réservés.</p>
          <p>Conçu pour l'Excellence.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
