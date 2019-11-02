import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-matrix',
  templateUrl: './input-matrix.component.html',
  styleUrls: ['./input-matrix.component.scss']
})
export class InputMatrixComponent implements OnInit {

  countColumns = [1,2,3]
  countRows = [1,2,3]

  constructor() { }

  ngOnInit() {
  }

}
