
import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="min-h-screen bg-slate-50 pt-12 pb-24">
      <div class="container mx-auto px-6">
        <div class="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          <!-- Contact Info Side (Organism) -->
          <div class="md:w-5/12 bg-slate-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
            <!-- Decorative circle -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div class="relative z-10">
              <h2 class="text-3xl font-serif font-bold mb-6">Parlons de votre projet</h2>
              <p class="text-slate-300 mb-8 leading-relaxed">Nos ingénieurs sont à votre disposition pour étudier vos besoins techniques et vous proposer une solution sur mesure.</p>
              
              <div class="space-y-8">
                <div class="flex items-start gap-4 group">
                  <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">📍</div>
                  <div>
                    <h4 class="font-bold text-white text-lg">Maroc & Europe</h4>
                    <p class="text-sm text-slate-400 mt-1">Siège: Casablanca, Maroc</p>
                    <p class="text-sm text-slate-400">Bureau: Paris, France</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4 group">
                  <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">📞</div>
                  <div>
                    <h4 class="font-bold text-white text-lg">Téléphone</h4>
                    <p class="text-sm text-slate-400 mt-1">+212 5 22 00 00 00</p>
                    <p class="text-sm text-slate-400">+33 1 00 00 00 00</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 group">
                  <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">✉️</div>
                  <div>
                    <h4 class="font-bold text-white text-lg">Email</h4>
                    <p class="text-sm text-slate-400 mt-1">contact@eurocoat-prestige.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-12 pt-8 border-t border-white/10">
               <p class="text-xs text-slate-500">Nous répondons généralement sous 24h ouvrées.</p>
            </div>
          </div>

          <!-- Form Side (Organism) -->
          <div class="md:w-7/12 p-10 lg:p-12">
            @if (submitted()) {
              <div class="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <div class="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6 shadow-sm">✓</div>
                <h3 class="text-3xl font-bold text-slate-900 mb-3">Message Envoyé</h3>
                <p class="text-slate-600 max-w-sm mx-auto">Merci de nous avoir contactés. Notre équipe technique reviendra vers vous très rapidement.</p>
                <button (click)="reset()" class="mt-10 px-8 py-3 bg-slate-900 text-white rounded hover:bg-slate-800 transition-colors">Nouvelle demande</button>
              </div>
            } @else {
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="form-group">
                    <label class="block text-sm font-bold text-slate-700 mb-2">Nom Complet</label>
                    <input formControlName="name" type="text" 
                      class="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition placeholder:text-slate-400" 
                      placeholder="Votre nom">
                    @if (contactForm.get('name')?.touched && contactForm.get('name')?.invalid) {
                      <p class="text-red-500 text-xs mt-1">Ce champ est requis</p>
                    }
                  </div>
                  <div class="form-group">
                    <label class="block text-sm font-bold text-slate-700 mb-2">Entreprise</label>
                    <input formControlName="company" type="text" 
                      class="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition placeholder:text-slate-400" 
                      placeholder="Nom de société">
                  </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                  <div class="form-group">
                    <label class="block text-sm font-bold text-slate-700 mb-2">Email Pro</label>
                    <input formControlName="email" type="email" 
                      class="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition placeholder:text-slate-400" 
                      placeholder="email@entreprise.com">
                    @if (contactForm.get('email')?.touched && contactForm.get('email')?.invalid) {
                      <p class="text-red-500 text-xs mt-1">Email valide requis</p>
                    }
                  </div>
                  <div class="form-group">
                    <label class="block text-sm font-bold text-slate-700 mb-2">Téléphone</label>
                    <input formControlName="phone" type="tel" 
                      class="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition placeholder:text-slate-400" 
                      placeholder="+33 ...">
                  </div>
                </div>

                <div class="form-group">
                  <label class="block text-sm font-bold text-slate-700 mb-2">Type de Projet</label>
                  <select formControlName="type" 
                    class="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.7em] bg-[right:1.5rem_center] bg-no-repeat">
                    <option value="" disabled selected>Sélectionner le type d'intervention...</option>
                    <option value="industrial">Sol Industriel / Usine</option>
                    <option value="parking">Parking / Étanchéité</option>
                    <option value="design">Wrapping / Design Intérieur</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea formControlName="message" rows="4" 
                    class="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition placeholder:text-slate-400" 
                    placeholder="Décrivez votre projet, la surface approximative, le délai souhaité..."></textarea>
                  @if (contactForm.get('message')?.touched && contactForm.get('message')?.invalid) {
                    <p class="text-red-500 text-xs mt-1">Un message est requis</p>
                  }
                </div>

                <button type="submit" [disabled]="contactForm.invalid" class="w-full bg-amber-500 text-white font-bold py-4 rounded-lg hover:bg-amber-600 transition-all transform hover:-translate-y-1 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                  Envoyer ma demande de devis
                </button>
              </form>
            }
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  private fb: FormBuilder = inject(FormBuilder);
  contactForm: FormGroup;
  submitted = signal(false);

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      type: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      setTimeout(() => {
        this.submitted.set(true);
      }, 500);
    }
  }

  reset() {
    this.submitted.set(false);
    this.contactForm.reset({type: ''});
  }
}
    