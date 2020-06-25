import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget.item.model';

@Component({
  selector: 'app-additemform',
  templateUrl: './additemform.component.html',
  styleUrls: ['./additemform.component.scss']
})
export class AdditemformComponent implements OnInit {

    @Input() item: BudgetItem = new BudgetItem('', null);
  constructor() { }

  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem> (); 

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
      this.formSubmit.emit(form.value);
      // console.log(form);
  }

}
