import { Component } from '@angular/core';
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css'],
  imports: [MatListModule]
})
export class FileListComponent {

}
