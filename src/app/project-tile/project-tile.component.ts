// project-tile.component.ts
import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProjectViewComponent } from '../project-view/project-view.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.css']
})
export class ProjectTileComponent {
  safeURL!: SafeResourceUrl;
  @Input() genre!: string;
  @Input() title!: string;
  @Input() repoLink!: string;
  @Input() imageUrl!: string;
  @Input() description!: string;
  @Input() titleOne!: string;
  @Input() partOne!: string;
  @Input() titleTwo!: string;
  @Input() partTwo!: string;
  @Input() videoId!: string;
  @Input() imageOnePath!: string;
  @Input() imageTwoPath!: string;
  @Input() imageThreePath!: string;
  @Input() hasVideo!: boolean;
  @Input() hasStore!: boolean;
  @Input() storeUrl!: string;
  @Input() tagCount!: number;
  @Input() tags!: string[];
  @Input() isPortait!: boolean;
  @Input() thumbnailOnePath!: string;
  @Input() thumbnailTwoPath!: string;
  @Input() thumbnailThreePath!: string;
  @Input() thumbnailString!: string;

  constructor(private dialog: MatDialog,  private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoId);
  }

  openProjectView(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      projectTitle: this.title,
      repoLink: this.repoLink,
      projectDescription: this.description,
      youtubeVideoUrl: this.videoId,
      partOneTitle: this.titleOne,
      partOneText: this.partOne,
      partTwoTitle: this.titleTwo,
      partTwoText: this.partTwo,
      imageOnePath: this.imageOnePath,
      imageTwoPath: this.imageTwoPath,
      imageThreePath: this.imageThreePath,
      hasVideo: this.hasVideo,
      hasStore: this.hasStore,
      storeUrl: this.storeUrl
    };
    dialogConfig.panelClass = 'custom-container';
    dialogConfig.backdropClass = 'custom-modal';
    const dialogRef = this.dialog.open(ProjectViewComponent, dialogConfig);
  }
  Tag(tag: string): string {
    if (tag == "C_"){
      return  "C#";
    }
    return tag;
  }
}
