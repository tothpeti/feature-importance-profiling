import {Component, Input, OnInit} from '@angular/core';
import {IAlgorithm} from '../../../shared/model/algo-interface.model';
import {InMemoryDataStoreService} from '../../../shared/service/in-memory-data-store.service';

@Component({
  selector: 'app-tree-card',
  templateUrl: './tree-card.component.html',
  styleUrls: ['./tree-card.component.css']
})
export class TreeCardComponent implements OnInit {
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
