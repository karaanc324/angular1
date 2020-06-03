import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem= new Recipe('', '', '',[])
  // @Output() recipeItemEvent = new EventEmitter<void>();
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
  }

  emitRecipe(recipeItem: Recipe) {
    // this.recipeItemEvent.emit();
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }

}
