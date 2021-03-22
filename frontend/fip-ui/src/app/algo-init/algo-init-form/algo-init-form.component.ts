import {Component, Input, OnInit} from '@angular/core';
import {IAlgorithm} from '../../shared/model/algo-interface.model';

@Component({
  selector: 'app-algo-init-form',
  templateUrl: './algo-init-form.component.html',
  styleUrls: ['./algo-init-form.component.css']
})
export class AlgoInitFormComponent implements OnInit {
  @Input() selectedAlgorithm: IAlgorithm;

  constructor() { }

  ngOnInit(): void {
  }

}
