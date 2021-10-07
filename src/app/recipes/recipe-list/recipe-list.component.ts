import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(public recipeService: RecipeService) { }

  ngOnInit(): void {
    if (this.recipeService.recipes.length == 0) {
      this.recipeService.getRecipes();
    }
  }

}
