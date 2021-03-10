import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-linear-svc-form',
  templateUrl: './linear-svc-form.component.html',
  styleUrls: ['./linear-svc-form.component.css']
})
export class LinearSvcFormComponent implements OnInit {
  algorithmForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
