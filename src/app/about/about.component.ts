import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  backgroundImageUrl: string = 'src/assets/img.png';

  profile = {
    name: "Gamal Ali Hamed",
    title: " Full-Stack .NET Developer Trainee",
    summary: `A fresh Graduate Mechatronics Engineering passionate about programming, Currently enhancing my skillset as a Full-Stack .NET Developer trainee at ITI – Alexandria branch, focusing on robust software engineering and web technologies `,

  };

}
