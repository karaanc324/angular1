import {Recipe} from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Pizza', 'Oveerloaded', 'https://www.kingarthurflour.com/sites/default/files/recipe_legacy/20-3-large.jpg',
        [new Ingredient('Maida',1), new Ingredient('Cheese', 20)]),
        new Recipe('Butter Chicken', 'With naan', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSf0e_O8tIVB0co0IIZ5dUaI_WXQAbdfKoErUSorcKrXhgGLIjX&usqp=CAU',
        [new Ingredient('Chicken',1), new Ingredient('MButter', 1)]),
        new Recipe('Aaloo poori', 'Delicious', 'https://recipes.timesofindia.com/thumb/53109843.cms?width=1200&height=1200',
        [new Ingredient('Wheat',1), new Ingredient('Aaloo', 20)])
      ];
    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }
    

    addToShoppingList(ingridients: Ingredient[]) {
        this.shoppingListService.addIngridients(ingridients);
      }
}