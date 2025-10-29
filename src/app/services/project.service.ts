import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public projects: Project[] = [
   
   
    {
      id: 1,
      title: "Coffe Shop Website",
      shortDescription: "Simple responsive Coffe Shop website (ITI Task).",
      technologies: ["HTML", "CSS", "Bootstrap"],
      imageUrl: "assets/coffee.png",
      details: "Designed and developed a responsive static website for a coffee shop as part of the ITI training program. The project focused on Bootstrap components, layout design, and mobile responsiveness."
    },
    {
      id: 2,
      title: "Connect4 Game App",
      shortDescription: "The classic Connect4 game in C# (ITI Task).",
      technologies: ["C#",  "OOP", "Windows Forms"],
      imageUrl: "assets/connect.png",
      details: "Built a desktop game of the classic Connect 4 game using Windows Forms with C# Programming Language, applying object-oriented programming concepts and clean code structure to implement the game logic."
    },
    
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}