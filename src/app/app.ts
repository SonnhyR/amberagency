import { Component, signal, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('amber-agency');
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initGlitterEffect();
    }
  }

  private initGlitterEffect() {
    document.addEventListener('mousemove', (e) => {
      // Create glitter particle occasionally
      if (Math.random() > 0.3) return;
      
      const particle = document.createElement('div');
      particle.className = 'glitter-particle';
      
      // Random size
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Position at cursor + slight random offset
      particle.style.left = `${e.clientX + (Math.random() * 20 - 10)}px`;
      particle.style.top = `${e.clientY + (Math.random() * 20 - 10)}px`;
      
      document.body.appendChild(particle);
      
      // Clean up after animation
      setTimeout(() => {
        particle.remove();
      }, 1000);
    });
  }
}
