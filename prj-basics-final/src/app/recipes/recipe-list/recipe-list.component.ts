import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Aaloo poori', 'Delicious', 'https://recipes.timesofindia.com/thumb/53109843.cms?width=1200&height=1200')
  ];

  @Output() recipeItemEvent = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  emitRecipe(recipe: Recipe) {
    console.log('got recipe '+ recipe.name)
    this.recipeItemEvent.emit(recipe);
  }

}
