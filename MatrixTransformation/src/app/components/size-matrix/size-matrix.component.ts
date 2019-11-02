import { Component, OnInit, Input } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-size-matrix',
  templateUrl: './size-matrix.component.html',
  styleUrls: ['./size-matrix.component.scss']
})
export class SizeMatrixComponent implements OnInit {

  @Input() columns: number;
  @Input() rows: number;


  constructor() { }

  ngOnInit() {
  }

  onSubmit(columns:number, rows:number){
    let range = n => Array.from(Array(columns).keys())
    console.log(range)
  }

}
