import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget.item.model';

@Component({
  selector: 'app-additemform',
  templateUrl: './additemform.component.html',
  styleUrls: ['./additemform.component.scss']
 
})
export class AdditemformComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  @Output() optionChange: EventEmitter<any> = new EventEmitter<any>();

  isNewItem: boolean;
  isIncome: boolean = true;

  optionValue: string = "income";

 
  ngOnInit() {
    if (this.item) {
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', null);
    }
  }

  onSubmit(form: NgForm) {
    let value = form.value;
    if (this.optionValue == "expense") {
      value.amount = -value.amount;
    }
    this.formSubmit.emit(value);
    form.reset();
  }

  onOptionChange() {
    if (this.optionValue == "income") {

      this.isIncome = true;
    } else {
      this.isIncome = false;
    }
  }
}
