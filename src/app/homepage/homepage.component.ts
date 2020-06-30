import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget.item.model';
import { UpdatedEvent } from "../budget-item-list/budget-item-list.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  constructor() { }

    ngOnInit(): void {
    }
    
    addItem(newItem: BudgetItem){
          this.budgetItems.push(newItem)
          
          this.totalBudget += newItem.amount;
          
    }
    
    deleteItem(item: BudgetItem){
        let index = this.budgetItems.indexOf(item);
        this.budgetItems.splice (index, 1);
        this.totalBudget -= item.amount;
    }
    updateItem(updateEvent: UpdatedEvent){
            this.budgetItems[this.budgetItems.indexOf(updateEvent.old)]= updateEvent.new;
            this.totalBudget -= updateEvent.old.amount;
            this.totalBudget +=updateEvent.new.amount;
    }
  }