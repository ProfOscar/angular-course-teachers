import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel("Spaghetti alla chitarra", "Un particolare tipo di pasta che...", "https://www.lucianopignataro.it/wp-content/uploads/2018/10/Il-Boccon-Divino-Spaghetti-alla-chitarra-con-guanciale-di-nero-casertano-e-cipolla-di-Alife.jpeg")
  ];

  selectedRecipe: RecipeModel;

  constructor() {
    this.selectedRecipe = this.recipes[0];
  }

  ngOnInit(): void {
  }

}
