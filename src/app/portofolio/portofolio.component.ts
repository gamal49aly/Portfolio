import { Component,OnInit ,ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../interfaces/project.model';
import { ProjectService } from '../services/project.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-portofolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portofolio.component.html',
  styleUrl: './portofolio.component.css'
})

export class  PortofolioComponent implements OnInit {
projects: Project[] = [];
  selectedProject: Project | null = null;

  @ViewChild('projectModal') projectModalRef!: ElementRef;
  modalInstance!: Modal;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  // TrackBy function for *ngFor
  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }

  selectProject(project: Project): void {
    this.selectedProject = project;
    console.log("Selected Project:", this.selectedProject);

    // Open modal programmatically
    if (!this.modalInstance) {
      this.modalInstance = new Modal(this.projectModalRef.nativeElement);
    }
    this.modalInstance.show();
  }

  closeModal(): void {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
    this.selectedProject = null;
    console.log("Modal Closed");
  }
}