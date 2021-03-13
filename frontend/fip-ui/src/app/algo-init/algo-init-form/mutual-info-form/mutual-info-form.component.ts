import {Component, Input, OnInit} from '@angular/core';
import {IAlgorithm} from '../../../shared/model/algo-interface.model';
import {InMemoryDataStoreService} from '../../../shared/service/in-memory-data-store.service';
import {MutualInformationModel} from '../../../shared/model/mutual-information.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-mutual-info-form',
  templateUrl: './mutual-info-form.component.html',
  styleUrls: ['./mutual-info-form.component.css']
})
export class MutualInfoFormComponent implements OnInit {

  @Input() selectedDefaultAlgorithm: IAlgorithm;
  // algorithmForm: FormGroup;

  constructor(private inMemoryDataStoreService: InMemoryDataStoreService) { }

  ngOnInit(): void {
    // this.initForm();
  }

  /*
  initForm(): void {
    const algorithmName = this.selectedDefaultAlgorithm.algoName;
    this.algorithmForm = new FormGroup({
      name: new FormControl(algorithmName)
    });
    console.log(this.algorithmForm.value.name);
  }

   */

  onSubmit(): void {
    const newAlgo = new MutualInformationModel();
    this.inMemoryDataStoreService.addInitializedAlgorithm(newAlgo);
  }
}
