import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss'],
})
export class VersionComponent {
  env = '';
  version = '';
  creationDate = '';
  gitRevision = '';

  constructor() {
    this.env = environment.environment;
    this.version = environment.version;
    this.creationDate = environment.creationDate;
    this.gitRevision = environment.gitRevision;
  }
}
