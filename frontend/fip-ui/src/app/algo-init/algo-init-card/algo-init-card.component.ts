import {Component, OnDestroy, OnInit} from '@angular/core';
import {InMemoryDataStoreService} from '../../shared/service/in-memory-data-store.service';
import {IAlgorithm} from '../../shared/model/algo-interface.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-algo-init-card',
  templateUrl: './algo-init-card.component.html',
  styleUrls: ['./algo-init-card.component.css']
})
export class AlgoInitCardComponent implements OnInit, OnDestroy {

  initAlgoListChangedSubscription$: Subscription;
  initializedAlgorithmList: IAlgorithm[];

  constructor(private inMemoryDataStoreService: InMemoryDataStoreService) { }

  ngOnInit(): void {
    this.initAlgoListChangedSubscription$ = this.inMemoryDataStoreService.initializedAlgoListChanged$.subscribe(
      (algorithms: IAlgorithm[]) => {
        this.initializedAlgorithmList = algorithms;
        console.log(this.inMemoryDataStoreService.initializedAlgoList);
      }
    );

  }

  ngOnDestroy(): void {
    this.initAlgoListChangedSubscription$.unsubscribe();
  }
}
