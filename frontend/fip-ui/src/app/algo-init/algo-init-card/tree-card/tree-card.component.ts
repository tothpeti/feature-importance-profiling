import {Component, Input, OnInit} from '@angular/core';
import {IAlgorithm} from '../../../shared/model/algo-interface.model';

@Component({
  selector: 'app-tree-card',
  templateUrl: './tree-card.component.html',
  styleUrls: ['./tree-card.component.css']
})
export class TreeCardComponent implements OnInit {
  @Input() initAlgorithm: IAlgorithm;

  constructor() { }

  ngOnInit(): void {
  }

}
