import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterLink, RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatListModule} from "@angular/material/list";
import {FileListComponent} from "./file-list/file-list.component";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from "@angular/material/button";
import { TablesComponent } from './tables/tables.component';
import { TableComponent } from './tables/table/table.component';
import {MatTableModule} from "@angular/material/table";


const routes: Routes = [
  {path: '', component:FileListComponent},
  {path: 'files', component:FileListComponent},
  {path: 'file/:id', component:TablesComponent},
  {path: 'file/:fileId/:table', component: TableComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule,
    FileListComponent,
    AppRoutingModule,
    MatButtonModule,
    RouterLink,
    [RouterModule.forRoot(routes)],
    MatListModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
