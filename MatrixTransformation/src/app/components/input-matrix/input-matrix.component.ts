import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-matrix',
  templateUrl: './input-matrix.component.html',
  styleUrls: ['./input-matrix.component.scss']
})
export class InputMatrixComponent implements OnInit {

  @Input() listColumns:Array<number>
  @Input() listRows:Array<number>

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
    console.log(this.listColumns)
    console.log(this.listRows)
  }

}
