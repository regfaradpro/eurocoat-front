import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[animateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('animate-visible');
          observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(this.el.nativeElement);
  }
}
