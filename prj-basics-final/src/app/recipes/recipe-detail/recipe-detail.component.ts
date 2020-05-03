import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() incomingRecipe: Recipe
  constructor() { }

  @Input() recipe: Recipe

  ngOnInit() {
  }

  // getRecipe(recipe: Recipe) {
  //   console.log('detail me: '+ recipe.name)
  // }
}
