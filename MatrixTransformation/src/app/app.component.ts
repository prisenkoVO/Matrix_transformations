import { Component, Input, Output, EventEmitter } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MarixTransformation';
  
  @Input() columns: number;
  @Input() rows: number;

  @Output() submitColumns: EventEmitter<Array<number>> = new EventEmitter();
  @Output() submitRows: EventEmitter<Array<number>> = new EventEmitter();

  listColumns:Array<number> = [];
  listRows:Array<number> = [];
  
  constructor() { }

  ngOnInit() {
  }

  public onSubmit(columns:number, rows:number){
    
    // const countColumns:Array<number> = [];
    // const countRows:Array<number> = [];
    this.listColumns = [];
    this.listRows = [];
    for (var i = 1; i <= columns; i++) {
      this.listColumns.push(i);
    }
    
    for (var i = 1; i <= rows; i++) {
      this.listRows.push(i);
    }

    this.submitColumns.emit(this.listColumns)
    this.submitRows.emit(this.listRows)
    
  }
}
