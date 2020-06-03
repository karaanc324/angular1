import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingChanged = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];


    getShoppingList() {
        return this.ingredients.slice();
    }

    addIngridient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingChanged.emit(this.ingredients.slice());
    }

    addIngridients(ingredients: Ingredient[]) {
        // to add array spread operator...
        this.ingredients.push(...ingredients)
        this.ingChanged.emit(this.ingredients.slice());
    }
}