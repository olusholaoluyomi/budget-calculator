import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget.item.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss'],
  providers: [DatePipe]
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() XButtonClick: EventEmitter<any> = new EventEmitter<any>();

  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  myDate = new Date();
  constructor(private datePipe: DatePipe) { 
   this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
}


  ngOnInit(): void {
  }

  onXButtonClick(){
      this.XButtonClick.emit(); 
  }
  onCardClick(){
    this.cardClick.emit();
  }

}
