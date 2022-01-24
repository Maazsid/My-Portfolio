import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('projects') projects: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {}

  goToProjects() {
    this.projects.nativeElement.scrollIntoView({behavior: 'smooth'})
  }
}
