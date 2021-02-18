import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IngredientModel } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();

  ingredientName: string = '';
  ingredientAmount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient() {
    const newIngredient = new IngredientModel(this.ingredientName, this.ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
