import {Component, Input, OnInit} from '@angular/core';
import {IAlgorithm} from '../../../shared/model/algo-interface.model';

@Component({
  selector: 'app-xgboost-card',
  templateUrl: './xgboost-card.component.html',
  styleUrls: ['./xgboost-card.component.css']
})
export class XgboostCardComponent implements OnInit {

  @Input() initAlgorithm: IAlgorithm;

  constructor() { }

  ngOnInit(): void {
  }

}
