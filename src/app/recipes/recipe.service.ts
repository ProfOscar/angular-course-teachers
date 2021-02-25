import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeModel } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: RecipeModel[] = [];
  selectedRecipe: RecipeModel;

  constructor(private dataStorageService: DataStorageService) { }

  getRecipes() {
    this.dataStorageService.sendGetRequest('recipes').subscribe(
      (data: any[]) => {
        console.log(data);
        this.recipes = data;
        // this.selectedRecipe = this.recipes[0];
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}
