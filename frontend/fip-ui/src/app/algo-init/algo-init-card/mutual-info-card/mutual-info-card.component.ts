import {Component, Input, OnInit} from '@angular/core';
import {IAlgorithm} from '../../../shared/model/algo-interface.model';
import {InMemoryDataStoreService} from '../../../shared/service/in-memory-data-store.service';

@Component({
  selector: 'app-mutual-info-card',
  templateUrl: './mutual-info-card.component.html',
  styleUrls: ['./mutual-info-card.component.css']
})
export class MutualInfoCardComponent implements OnInit {

  @Input() initAlgorithm: IAlgorithm;
  @Input() initIndex: number;

  constructor(private inMemoryDataStoreService: InMemoryDataStoreService) { }

  ngOnInit(): void {
  }

  onRemove(): void {
    this.inMemoryDataStoreService.deleteInitializedAlgorithm(this.initIndex);
  }
}
