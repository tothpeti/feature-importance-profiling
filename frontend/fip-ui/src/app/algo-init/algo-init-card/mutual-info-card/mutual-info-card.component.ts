import {Component, Input, OnInit} from '@angular/core';
import {IAlgorithm} from '../../../shared/model/algo-interface.model';

@Component({
  selector: 'app-mutual-info-card',
  templateUrl: './mutual-info-card.component.html',
  styleUrls: ['./mutual-info-card.component.css']
})
export class MutualInfoCardComponent implements OnInit {

  @Input() initAlgorithm: IAlgorithm;

  constructor() { }

  ngOnInit(): void {
  }

}
