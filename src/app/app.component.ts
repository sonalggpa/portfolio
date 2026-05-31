import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { SkillsComponent } from './components/skills.component';
import { ProjectsComponent } from './components/projects.component';
import { ExperienceComponent } from './components/experience.component';
import { SystemDesignComponent } from './components/system-design.component';
import { ContactComponent } from './components/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    SystemDesignComponent,
    ContactComponent
  ],
  template: `
    <div class="min-h-screen bg-dark-900 flex flex-col font-sans">
      <!-- Navbar Placeholder -->
      <nav class="sticky top-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/5 py-4">
        <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div class="font-mono text-xl font-bold text-white">
            <span class="text-primary-500">&lt;</span>
            Sonal Gupta 
            <span class="text-primary-500">/&gt;</span>
          </div>
          <div class="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" class="hover:text-primary-400 transition-colors">About</a>
            <a href="#skills" class="hover:text-primary-400 transition-colors">Skills</a>
            <a href="#projects" class="hover:text-primary-400 transition-colors">Projects</a>
            <a href="#experience" class="hover:text-primary-400 transition-colors">Experience</a>
            <a href="#system-design" class="hover:text-primary-400 transition-colors">System Design</a>
          </div>
        </div>
      </nav>

      <main class="flex-grow">
        <app-hero></app-hero>
        <app-about></app-about>
        <app-skills></app-skills>
        <app-projects></app-projects>
        <app-experience></app-experience>
        <app-system-design></app-system-design>
        <app-contact></app-contact>
      </main>

      <footer class="py-8 border-t border-white/5 text-center text-sm text-slate-500">
        <p>Built with Angular & Tailwind CSS | © 2026 Sonal Gupta. All rights reserved.</p>
      </footer>
    </div>
  `
})
export class AppComponent {
  title = 'portfolio-app';
}
