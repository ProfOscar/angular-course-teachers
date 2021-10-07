import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeModel } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: RecipeModel[] = [];
  selectedId: number = 0;

  constructor(private dataStorageService: DataStorageService) { }

  getRecipes(id?: number) {
    this.dataStorageService.sendGetRequest('recipes').subscribe(
      (data: any[]) => {
        console.log(data);
        this.recipes = data;
        if (id && id <= this.recipes.length) this.selectedId = id;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  get selectedRecipe(): RecipeModel {
    return (this.selectedId > 0 && this.selectedId <= this.recipes.length) ? this.recipes[this.selectedId - 1] : null;
  }

  selectRecipe(id: number) {
    this.selectedId = id;
    // if (this.recipes.length > 0) {
    //   this.selectedId = (id && id <= this.recipes.length) ? id : 0;
    // } else {
    //   this.getRecipes(id);
    // }
  }
}
