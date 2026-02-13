
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar.component';
import { FooterComponent } from './components/shared/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <div class="flex flex-col min-h-screen">
      <app-navbar></app-navbar>
      <main class="flex-grow pt-16"> <!-- Padding top for fixed navbar -->
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `
})
export class AppComponent {}
