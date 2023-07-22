import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  tableName : string = '';
  fileName : string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit() {
    this.fileName = this.route.snapshot.paramMap.get('fileId')!;
    this.tableName = this.route.snapshot.paramMap.get('table')!;
  }
}
