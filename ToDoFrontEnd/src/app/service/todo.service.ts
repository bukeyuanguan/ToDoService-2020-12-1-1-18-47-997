import { TodoHttpService } from './todo-http.service';
import { Injectable } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';
import { TodoStoreService } from './todo-store.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public updatingToDoItem: ToDoItem;
  public selectedTodoItem: ToDoItem;
  private currentId: number = 0;
  public getAllFailMessage: string;
  public createFailMessage: string;
  public updateFailMessage: string;
  public deleteFailMessage: string;
  private _todoItems: Array<ToDoItem>;

  constructor(private todoStore: TodoStoreService, private todoHttpService: TodoHttpService) {
    this._todoItems = todoStore.GetAll();
    this.updatingToDoItem = new ToDoItem(-1, "", "", false);
    this.selectedTodoItem = new ToDoItem(-1, "", "", false);
    this.getAllFailMessage = '';
    this.createFailMessage = '';
    this.updateFailMessage = '';
    this.deleteFailMessage = '';
    //this.currentId = this.todoItems.length;
  }

  public get todoItems(): Array<ToDoItem> {
    this.getAllFailMessage = '';
    const allToDoItem = new Array<ToDoItem>();
    this.todoHttpService.GetAll().subscribe(todoItems => {
      allToDoItem.push(...todoItems);
    },
    error =>{
      this.getAllFailMessage = 'get all fail because web API error';
    });
    return allToDoItem;
  }

  public SetUpdatingTodoItemId(id: number): void {
    const foundTodoItem = this.todoStore.FindById(id);

    if (foundTodoItem !== undefined) {
      this.updatingToDoItem = Object.assign({}, foundTodoItem);
    }
  }

  public Create(todoItem: ToDoItem) {
    this.createFailMessage = '';
    this.todoHttpService.Create(todoItem).subscribe(todoItem => {
      console.log(todoItem);
    },
    error => {
      this.createFailMessage = 'create fail because web API error';
    });
  }
  public UpdateTodoItem(updateTodoItems: ToDoItem) {
    this.todoHttpService.Update(updateTodoItems).subscribe(todoItem => {
      console.log(todoItem);
    },
    error => {
      this.updateFailMessage = 'update fail because web API error';
    });
  }

  public DeleteTodoItem(id: number): void{
    this.todoHttpService.Delete(id).subscribe(todoItem => {
      console.log(todoItem);
    },
    error => {
      this.deleteFailMessage = 'delete fail because web API error';
    });
  }

  public SetSelectedTodoItemId(id: number):void{
    this.selectedTodoItem = this.todoStore.FindById(id);
  }
}
