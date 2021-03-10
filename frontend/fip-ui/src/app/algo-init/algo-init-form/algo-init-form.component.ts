import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-algo-init-form',
  templateUrl: './algo-init-form.component.html',
  styleUrls: ['./algo-init-form.component.css']
})
export class AlgoInitFormComponent implements OnInit {
  @Input() selectedAlgorithm: string;

  constructor() { }

  ngOnInit(): void {
  }

}
