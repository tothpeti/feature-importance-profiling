import {Component, Input, OnInit} from '@angular/core';
import {IAlgorithm} from '../../../shared/model/algo-interface.model';

@Component({
  selector: 'app-linear-svc-card',
  templateUrl: './linear-svc-card.component.html',
  styleUrls: ['./linear-svc-card.component.css']
})
export class LinearSvcCardComponent implements OnInit {

  @Input() initAlgorithm: IAlgorithm;

  constructor() { }

  ngOnInit(): void {
  }

}
