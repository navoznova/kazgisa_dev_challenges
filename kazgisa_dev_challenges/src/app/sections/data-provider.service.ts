import { Injectable } from '@angular/core';
import { FoodNode } from '../share/food-node.interface';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  data: FoodNode[] = [
    {
      name: 'Fruit',
      children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
    },
    {
      name: 'Vegetables',
      children: [
        {
          name: 'Green',
          children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
        },
        {
          name: 'Orange',
          children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
        },
      ],
    },
  ];

  constructor() { }

  addSection(sections: FoodNode){
    this.data.push(sections);
  }

  deleteSection(index: number){
    this.data.slice(index, 1);
  }

  updateSectionName(index: number, name: string){

  }
}
