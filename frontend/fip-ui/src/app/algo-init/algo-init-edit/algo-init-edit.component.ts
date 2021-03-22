import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlgoInitDataTransferService} from '../service/algo-init-data-transfer.service';
import {Subscription} from 'rxjs';
import {IAlgorithm} from '../../shared/model/algo-interface.model';
import {InMemoryDataStoreService} from '../../shared/service/in-memory-data-store.service';

@Component({
  selector: 'app-algo-init-edit',
  templateUrl: './algo-init-edit.component.html',
  styleUrls: ['./algo-init-edit.component.css']
})
export class AlgoInitEditComponent implements OnInit, OnDestroy {

  selectedAlgorithm: IAlgorithm;
  selectedAlgoSubscription$: Subscription;

  constructor(private inMemoryDataStoreService: InMemoryDataStoreService) { }

  ngOnInit(): void {
    this.selectedAlgoSubscription$ = this.inMemoryDataStoreService.selectedAlgorithmIdx$.subscribe(
      (index: number) => this.selectedAlgorithm = this.inMemoryDataStoreService.getDefaultAlgorithmById(index)
    );


  }

  ngOnDestroy(): void {
    this.selectedAlgoSubscription$.unsubscribe();
  }
}
