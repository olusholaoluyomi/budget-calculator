import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget.item.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  constructor() { }

    ngOnInit(): void {
    }
    
    addItem(newItem: BudgetItem){
          this.budgetItems.push(newItem)
    }
    
    deleteItem(item: BudgetItem){
        let index = this.budgetItems.indexOf(item);
        this.budgetItems.splice (index, 1);
    }
  }