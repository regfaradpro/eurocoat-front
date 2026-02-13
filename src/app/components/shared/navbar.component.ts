
import { Component, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav
  class="fixed w-full top-0 z-50 transition-all duration-500 ease-out"
  [class.glass-nav]="isScrolled()"
  [class.bg-transparent]="!isScrolled()"
  [class.py-6]="!isScrolled()"
  [class.py-3]="isScrolled()"
>

      <div class="container mx-auto px-6 flex justify-between items-center">
        <!-- Logo -->
        <a routerLink="/" class="group text-2xl font-bold font-serif tracking-tighter flex items-center gap-2">
          <div class="w-8 h-8 bg-amber-500 rounded-sm transform rotate-45 transition-all duration-500 group-hover:rotate-0 group-hover:scale-110 shadow-md"></div>
          <span [class.text-white]="isScrolled()" [class.text-slate-900]="!isScrolled()">EuroCoat</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8 items-center font-medium">
          @for (item of navItems; track item.link) {
            <a 
              [routerLink]="item.link" 
              routerLinkActive="text-amber-500"
              [routerLinkActiveOptions]="{exact: true}"
              class="transition-colors hover:text-amber-500"
              [class.text-white]="isScrolled()" 
              [class.text-slate-800]="!isScrolled()"
            >
              {{ item.label }}
            </a>
          }
          <a routerLink="/contact" class="px-5 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition-colors shadow-lg">
            Devis Gratuit
          </a>
        </div>

        <!-- Mobile Toggle -->
        <button (click)="toggleMenu()" class="md:hidden text-2xl focus:outline-none" [class.text-white]="isScrolled()">
          @if (isMobileMenuOpen()) { ✕ } @else { ☰ }
        </button>
      </div>

      <!-- Mobile Menu -->
      @if (isMobileMenuOpen()) {
        <div class="md:hidden absolute top-full left-0 w-full bg-slate-900 text-white shadow-xl animate-fade-in">
          <div class="flex flex-col p-6 space-y-4">
            @for (item of navItems; track item.link) {
              <a (click)="toggleMenu()" [routerLink]="item.link" class="block hover:text-amber-500">{{ item.label }}</a>
            }
            <a (click)="toggleMenu()" routerLink="/contact" class="block text-center bg-amber-500 py-3 rounded mt-4">Demander un Devis</a>
          </div>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navItems = [
    { label: 'Accueil', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'Réalisations', link: '/realisations' },
    { label: 'Contact', link: '/contact' }
  ];

  constructor() {
    // Basic scroll listener
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled.set(window.scrollY > 20);
      });
    }
  }

  toggleMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }
}
