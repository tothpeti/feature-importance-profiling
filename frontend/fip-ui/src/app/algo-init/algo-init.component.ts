import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../shared/service/data-transfer.service';
import {InMemoryDataStoreService} from '../shared/service/in-memory-data-store.service';

@Component({
  selector: 'app-algo-init',
  templateUrl: './algo-init.component.html',
  styleUrls: ['./algo-init.component.css']
})
export class AlgoInitComponent implements OnInit {

  constructor(private dataTransferService: DataTransferService,
              private inMemoryDataStoreService: InMemoryDataStoreService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.dataTransferService.postData(
      this.inMemoryDataStoreService.selectedRankingMethods,
      this.inMemoryDataStoreService.initializedAlgoList);
  }
}
