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
    @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem> (); 

    @Output() optionChange: EventEmitter<any> = new EventEmitter<any>();

    isNewItem: boolean;

  constructor() { }

  ngOnInit() { 
    if(this.item) {
      this.isNewItem = false;
      } else{
        this.isNewItem = true;
        this.item = new BudgetItem('', null);
      }
      
  }

  onSubmit(form: NgForm){
      this.formSubmit.emit(form.value);
      form.reset();
      // console.log(form);
  }

  onOptionChange(){
    this.optionChange.emit();
  }
}
