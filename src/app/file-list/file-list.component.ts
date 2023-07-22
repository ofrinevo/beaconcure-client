import { Component } from '@angular/core';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {FilesService} from "../files.service";

@Component({
  standalone: true,
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css'],
  imports: [MatListModule, MatButtonModule, NgForOf, RouterLink]
})
export class FileListComponent {

  fileNames: string[] = []
  constructor(private filesService: FilesService) {}

  ngOnInit(): void {
    this.getFileNames();
  }

  getFileNames(): void {
    this.filesService.getFiles()
      .subscribe(fileNames => this.fileNames = fileNames);
  }


}

