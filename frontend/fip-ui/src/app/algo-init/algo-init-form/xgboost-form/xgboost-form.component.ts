import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-xgboost-form',
  templateUrl: './xgboost-form.component.html',
  styleUrls: ['./xgboost-form.component.css']
})
export class XgboostFormComponent implements OnInit {

  algorithmForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
