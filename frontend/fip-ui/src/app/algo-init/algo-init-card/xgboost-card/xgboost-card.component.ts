import {Component, Input, OnInit} from '@angular/core';
import {IAlgorithm} from '../../../shared/model/algo-interface.model';
import {InMemoryDataStoreService} from '../../../shared/service/in-memory-data-store.service';

@Component({
  selector: 'app-xgboost-card',
  templateUrl: './xgboost-card.component.html',
  styleUrls: ['./xgboost-card.component.css']
})
export class XgboostCardComponent implements OnInit {

  @Input() initAlgorithm: IAlgorithm;
  @Input() initIndex: number;

  constructor(private inMemoryDataStoreService: InMemoryDataStoreService) { }

  ngOnInit(): void {
  }

  onEdit(): void {
    this.inMemoryDataStoreService.editInitAlgorithm$.next({
      index: this.initIndex,
      algorithm: this.initAlgorithm
    });
  }

  onRemove(): void {
    this.inMemoryDataStoreService.deleteInitializedAlgorithm(this.initIndex);
  }
}
