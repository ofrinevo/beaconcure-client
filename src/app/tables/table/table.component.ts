import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FilesService} from "../../files.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  tableName : string = '';
  fileName : string = '';
  table:any = {}
  displayedColumns: string[] = ['name', 'value'];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filesService: FilesService

  ) {}
  ngOnInit() {
    this.fileName = this.route.snapshot.paramMap.get('fileId')!;
    this.tableName = this.route.snapshot.paramMap.get('table')!;
    this.getTable(this.fileName, this.tableName);
  }

  getTable(fileId: string, tableName: string): void {
    this.filesService.getTable(fileId, tableName)
      .subscribe(table => {
        this.table = Object.entries(table)
        for (const key in table) {
          table.push({ key, value: table[key] });
        }
      });
  }

}
