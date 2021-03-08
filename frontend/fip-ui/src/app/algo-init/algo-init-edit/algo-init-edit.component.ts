import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlgoInitService} from '../service/algo-init.service';
import {Subscription} from 'rxjs';
import {IAlgoParameterModel} from "../../shared/model/algo-parameter.model";

@Component({
  selector: 'app-algo-init-edit',
  templateUrl: './algo-init-edit.component.html',
  styleUrls: ['./algo-init-edit.component.css']
})
export class AlgoInitEditComponent implements OnInit, OnDestroy {

  selectedAlgo: IAlgoParameterModel;
  selectedAlgoSubscription: Subscription;

  constructor(private algoInitService: AlgoInitService) { }

  ngOnInit(): void {
    this.selectedAlgoSubscription = this.algoInitService.selectedAlgorithm.subscribe(
      (index: number) => this.selectedAlgo = this.algoInitService.getAlgorithmById(index)
    );
  }

  ngOnDestroy(): void {
    this.selectedAlgoSubscription.unsubscribe();
  }
}
