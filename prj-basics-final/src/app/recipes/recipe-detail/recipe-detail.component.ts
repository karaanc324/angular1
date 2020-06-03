import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() incomingRecipe: Recipe
  // constructor(private shoppingListService: ShoppingListService) { }
  constructor(private recipeService: RecipeService) {}

  @Input() recipe: Recipe

  ngOnInit() {
  }

  // getRecipe(recipe: Recipe) {
  //   console.log('detail me: '+ recipe.name)
  // }

  addToShoppingList() {
    // this.recipe.ingridients.forEach(ingridient => {
    //   this.shoppingListService.addIngridient(ingridient);
    // })
    this.recipeService.addToShoppingList(this.recipe.ingridients);
  }
}
