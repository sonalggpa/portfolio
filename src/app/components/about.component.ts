import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  private readonly experienceStartDate = new Date(2022, 9, 17); // October 17, 2022

  get experienceYears(): string {
    const now = new Date();
    const totalMonths =
      (now.getFullYear() - this.experienceStartDate.getFullYear()) * 12 +
      (now.getMonth() - this.experienceStartDate.getMonth());
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return `${years}.${months}`;
  }
}
