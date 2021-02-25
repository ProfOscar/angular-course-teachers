import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedInList = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[] = [];
  selectedRecipe: RecipeModel;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.dataStorageService.sendGetRequest('recipes').subscribe(
      (data: any[]) => {
        console.log(data);
        this.recipes = data;
        this.selectedRecipe = this.recipes[0];
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  onRecipeSelected(recipe: RecipeModel) {
    this.recipeSelectedInList.emit(recipe);
  }

}
