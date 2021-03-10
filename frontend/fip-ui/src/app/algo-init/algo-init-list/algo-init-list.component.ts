import { Component, OnInit } from '@angular/core';
import {AlgoInitService} from '../service/algo-init.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-algo-init-list',
  templateUrl: './algo-init-list.component.html',
  styleUrls: ['./algo-init-list.component.css']
})
export class AlgoInitListComponent implements OnInit {
  availableAlgoList: string[];
  selectedId: number;

  constructor(private algoInitService: AlgoInitService) { }

  ngOnInit(): void {
    this.availableAlgoList = this.algoInitService.getAlgorithmList();
  }

  onSelected(index: number): void {
    console.log(index);
    this.selectedId = index;
    this.algoInitService.selectedAlgorithmIdx$.next(index);
  }

}
