import {Component, OnInit} from '@angular/core';
import { FoodNode } from '../share/food-node.interface';
import { DataProviderService } from './data-provider.service';
  

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})

export class SectionsComponent implements OnInit{
  data!: FoodNode [];

  constructor( private dataProvider: DataProviderService) {
  }

  ngOnInit (){
    this.data = this.dataProvider.data;
  }




}