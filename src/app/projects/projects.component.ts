import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Project {
  genre: string;
  title: string;
  repoLink: string;
  imageUrl: string;
  description: string;
  titleOne: string;
  partOne: string;
  titleTwo: string;
  partTwo: string;
  videoId: string;
  imageOnePath: string;
  imageTwoPath: string;
  imageThreePath: string;
  hasVideo: boolean;
  hasStore: boolean;
  storeUrl: string;
  tagCount: number;
  tags: string[];
  isPortait: boolean;
  thumbnailOnePath: string;
  thumbnailTwoPath: string;
  thumbnailThreePath: string;
  thumbnailString: string
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get<Project[]>('/assets/projects.json').subscribe(data => {
      this.projects = data;
    });
  }
}
