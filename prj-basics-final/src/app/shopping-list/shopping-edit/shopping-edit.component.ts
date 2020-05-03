import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }
  // @Output() ingredient = new EventEmitter<{name: string, amount: number}>();
  @Output() ingredient = new EventEmitter<Ingredient>();
  ngOnInit() {
  }

  addShoppingItem(nameInp: HTMLInputElement, amount: HTMLInputElement) {
    console.log('shopping edt ', nameInp.value, amount.value)
    this.ingredient.emit(new Ingredient(nameInp.value, amount.valueAsNumber))
  }
}
