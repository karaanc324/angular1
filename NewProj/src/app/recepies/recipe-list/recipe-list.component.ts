import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'https://www.gimmesomeoven.com/wp-content/uploads/2016/03/Homemade-Hummus-Recipe.jpg'),
    new Recipe('2nd Recipe', 'just for fun', 'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-3-1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
