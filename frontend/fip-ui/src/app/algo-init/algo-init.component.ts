import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataTransferService} from '../shared/service/data-transfer.service';
import {InMemoryDataStoreService} from '../shared/service/in-memory-data-store.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-algo-init',
  templateUrl: './algo-init.component.html',
  styleUrls: ['./algo-init.component.css']
})
export class AlgoInitComponent implements OnInit, OnDestroy {

  isRankingListEmpty = true;
  isAlgorithmListEmpty = true;
  algoSubscription$: Subscription;
  rankingSubscription$: Subscription;

  constructor(private dataTransferService: DataTransferService,
              private inMemoryDataStoreService: InMemoryDataStoreService) { }

  ngOnInit(): void {
    this.algoSubscription$ = this.inMemoryDataStoreService.initializedAlgoListChanged$.subscribe(
      algoList => this.isAlgorithmListEmpty = algoList.length <= 0
    );

    this.rankingSubscription$ = this.inMemoryDataStoreService.rankingAlgoListChanged$.subscribe(
      rankingList => this.isRankingListEmpty = rankingList.length <= 0
    );
  }

  ngOnDestroy(): void {
    this.algoSubscription$.unsubscribe();
    this.rankingSubscription$.unsubscribe();
  }

  onSubmit(): void {
    this.dataTransferService.postData(
      this.inMemoryDataStoreService.selectedRankingMethods,
      this.inMemoryDataStoreService.initializedAlgoList);
  }
}
