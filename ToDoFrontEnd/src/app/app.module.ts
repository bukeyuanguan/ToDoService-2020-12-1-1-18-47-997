import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTodoitemComponent } from './create-todoitem/create-todoitem.component';
import { ListTodoitemComponent } from './list-todoitem/list-todoitem.component';
import { TodoitemDetailComponent } from './todoitem-detail/todoitem-detail.component';
import { FormsModule } from '@angular/forms';
import { UpdateTodoItemComponent } from './update-todo-item/update-todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    CreateTodoitemComponent,
    ListTodoitemComponent,
    TodoitemDetailComponent,
    UpdateTodoItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    // MatPaginator,
    // MatTableDataSource
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
