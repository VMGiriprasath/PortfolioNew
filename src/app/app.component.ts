import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./component/home/home.component";
import { AboutComponent } from "./component/about/about.component";
import { SkillsComponent } from "./component/skills/skills.component";
import { ProjectsComponent } from "./component/projects/projects.component";
import { ContactComponent } from "./component/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [ HomeComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio1';
}
