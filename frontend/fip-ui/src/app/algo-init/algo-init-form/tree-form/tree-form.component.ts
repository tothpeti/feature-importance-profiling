import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AlgoInitService} from '../../service/algo-init.service';

@Component({
  selector: 'app-tree-form',
  templateUrl: './tree-form.component.html',
  styleUrls: ['./tree-form.component.css']
})
export class TreeFormComponent implements OnInit {

  algorithmForm: FormGroup;

  constructor(private algoInitService: AlgoInitService) { }

  ngOnInit(): void {
  }

}
