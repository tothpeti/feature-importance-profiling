import { Injectable } from '@angular/core';
import {IAlgorithm} from '../../shared/model/algo-interface.model';
import {Subject} from 'rxjs';
import {RandomForestModel} from '../../shared/model/random-forest.model';
import {MutualInformationModel} from '../../shared/model/mutual-information.model';
import {ExtraTreesModel} from '../../shared/model/extra-trees.model';
import {LinearSvcModel} from '../../shared/model/linear-svc.model';
import {XgboostModel} from '../../shared/model/xgboost.model';

@Injectable({
  providedIn: 'root'
})
export class AlgoInitDataTransferService {

  constructor() { }

}
