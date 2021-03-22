import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AlgoInitDataTransferService} from '../service/algo-init-data-transfer.service';
import {Subscription} from 'rxjs';
import {InMemoryDataStoreService} from '../../shared/service/in-memory-data-store.service';

@Component({
  selector: 'app-algo-init-list',
  templateUrl: './algo-init-list.component.html',
  styleUrls: ['./algo-init-list.component.css']
})
export class AlgoInitListComponent implements OnInit {

  availableAlgoList: string[];
  selectedId: number;

  constructor(private inMemoryDataStoreService: InMemoryDataStoreService) { }

  ngOnInit(): void {
    this.availableAlgoList = this.inMemoryDataStoreService.getAlgorithmList();
  }


  onSelected(index: number): void {
    this.selectedId = index;
    this.inMemoryDataStoreService.selectedAlgorithmIdx$.next(index);
  }

}
