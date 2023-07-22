import { Component } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  id : string = '';
  tableNames = ['table1', 'table2', 'table3', ]
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }
}
