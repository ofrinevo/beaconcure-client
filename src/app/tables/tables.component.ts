import {Component} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {FilesService} from "../files.service";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  id: string = '';
  tableNames: string[] = []

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filesService: FilesService
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getTables(this.id);
  }

  getTables(fileId: string): void {
    this.filesService.getTablesInFile(fileId)
      .subscribe(tableNames => this.tableNames = tableNames);
  }

}
