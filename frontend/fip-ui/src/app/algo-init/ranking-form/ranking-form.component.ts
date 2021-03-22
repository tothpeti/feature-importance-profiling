import { Component, OnInit } from '@angular/core';
import {InMemoryDataStoreService} from '../../shared/service/in-memory-data-store.service';

@Component({
  selector: 'app-ranking-form',
  templateUrl: './ranking-form.component.html',
  styleUrls: ['./ranking-form.component.css']
})
export class RankingFormComponent implements OnInit {

  constructor(private inMemoryDataStoreService: InMemoryDataStoreService) { }

  ngOnInit(): void {
  }

  onSelectMethod(e): void {
    const isChecked: boolean = e.target.checked;
    const methodName: string = e.target.value;
    const containsList: boolean = this.inMemoryDataStoreService.containsRankingMethodByName(methodName);

    if (isChecked && !containsList) {
      this.inMemoryDataStoreService.addSelectedRankingMethod(methodName);
    } else if (!isChecked && containsList) {
      this.inMemoryDataStoreService.deleteRankingMethodByName(methodName);
    }

    console.log(this.inMemoryDataStoreService.selectedRankingMethods);
  }

}
