import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: Array<MenuItem>;

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      new MenuItem('Bagel with Spread', 'Bagel with Butter', '', 1.79),
      new MenuItem('Bagel with Spread', 'Bagel w/Peanut Butter, Jam or Nutella', '', 2.09),
      new MenuItem('Bagel with Spread', 'Bagel with Peanut Butter & Jam', '', 2.69),
      new MenuItem('Bagel with Spread', 'Bagel with Plain Cream Cheese', '', 2.87),
      new MenuItem('Bagel with Spread', 'Bagel with Flavored Cream Cheese', '', 3.62),
      new MenuItem('Bagel with Spread', 'Bagel with Lox Cream Cheese', '', 4.37),
      new MenuItem('Bagel with Spread', 'Bagel with Hummus', '', 2.89),
      new MenuItem('Bagel with Spread', 'Bagel w/Cream Cheese, Tomato & Onion', '', 3.19),
      new MenuItem('Bagel with Spread', 'Bagel with Cream Cheese & Lox', '', 6.29),

      new MenuItem('Breakfast Sandwiches & Wraps', 'Breakfast Bagel', 'Egg, scallions & cheese', 4.95),
      new MenuItem('Breakfast Sandwiches & Wraps', 'Bagelry Supreme',
        'Egg, scallions, cheese, & choice of canadian bacon or pork sausage', 5.69),
      new MenuItem('Breakfast Sandwiches & Wraps', 'The Lean Supreme Bagel', 'Egg whites, scallions, provolone, turkey sausage', 6.09),
      new MenuItem('Breakfast Sandwiches & Wraps', 'The Fourteener', 'Egg, scallions, double cheese, turkey sausage', 6.89),
      new MenuItem('Breakfast Sandwiches & Wraps', 'The Lean Veggie Bagel', 'Egg whites, cheese & assorted fresh veggies', 6.35),
      new MenuItem('Breakfast Sandwiches & Wraps', 'Breakfast Wrap', 'Egg, scallions & cheese', 5.19),
      new MenuItem('Breakfast Sandwiches & Wraps', 'Supreme Wrap',
        'Egg, scallions, cheese, & choice of meat', 6.35),
      new MenuItem('Breakfast Sandwiches & Wraps', 'The Lean Supreme Wrap', 'Egg whites, scallions, provolone, turkey sausage', 6.79),
      new MenuItem('Breakfast Sandwiches & Wraps', 'Veggie Breakfast Wrap', 'Egg, scallions, cheese & assorted fresh veggies', 6.35),
      new MenuItem('Breakfast Sandwiches & Wraps', 'The Lean Veggie Wrap', 'Egg whites, cheese & assorted fresh veggies', 6.89),

      new MenuItem('Lunch Sandwiches', 'Turkey Creek Club', 'Turkey, bacon, provolone, lettuce & tomato', 8.49),
      new MenuItem('Lunch Sandwiches', 'Mt. Evans', 'Turkey, ham, swiss, tomato & sprouts', 8.49),
      new MenuItem('Lunch Sandwiches', 'Berthoud Pass', 'Ham, salami, pepperoni, provolone, lettuce, tomato, & italian dressing', 8.99),
      new MenuItem('Lunch Sandwiches', 'Loveland Pass', 'Roast beef, bacon, mozzarella, lettuce, tomato, red onion & mustard', 8.99),
      new MenuItem('Lunch Sandwiches', 'Bergen Peak', 'Lox, cream cheese, tomato, red onion & capers', 8.99),
      new MenuItem('Lunch Sandwiches', 'Pikes Peak Reuben', 'Corned beef, swiss, sauerkraut & dressing', 8.99),
      new MenuItem('Lunch Sandwiches', 'Bagelry Tuna Melt', 'Homemade tuna salad, provolone, tomato & onion', 8.99),
      new MenuItem('Lunch Sandwiches', 'Veggie Melt', 'All the veggies & swiss (served open face)', 7.49),
      new MenuItem('Lunch Sandwiches', 'Pizza Bagel', 'Pepperoni, mozzarella & sauce', 6.29),
      new MenuItem('Lunch Sandwiches', 'Ham & Cheese', 'Ham & cheddar', 7.49),
      new MenuItem('Lunch Sandwiches', 'BLT', 'Bacon, lettuce & tomato', 6.79),

      new MenuItem('Lunch Wraps & Other', 'California Turkey', 'Turkey, cheddar, avocado, lettuce & tomato', 8.49),
      new MenuItem('Lunch Wraps & Other', 'Spicy Chicken Salad', 'Homemade chicken salad, pepperjack, lettuce & tomato', 8.49),
      new MenuItem('Lunch Wraps & Other', 'Veggie Hummus', 'Homemade hummus & assorted fresh veggies', 8.49),

      new MenuItem('Lunch Wraps & Other', 'Create Your Own Sandwich or Wrap', 'Choice of one protein, one cheese & assorted veggies', 8.49),
      new MenuItem('Lunch Wraps & Other', 'Extra Meat', '', 1.99),
      new MenuItem('Lunch Wraps & Other', 'Extra Cheese or Avocado', '', .79),
      new MenuItem('Lunch Wraps & Other', 'Add Bacon', '', .99),
      new MenuItem('Lunch Wraps & Other', 'Add Veggies', '', .49),

      new MenuItem('Salads', 'Bagelry House Salad', 'Mixed greens, dried cranberries, walnuts, apple & blue cheese', 6.99),
      new MenuItem('Salads', 'California Turkey Salad', 'Mixed greens, turkey, avocado, blue cheese, tomato, cucumbers, sprouts', 8.69),
      new MenuItem('Salads', 'Chef Salad', 'Mixed greens, turkey, ham, cheddar & veggies', 7.59),
      new MenuItem('Salads', 'Tuna, Chicken, or Egg Salad', 'Mixed greens, homemade tuna, chicken, or egg salad & provolone', 7.59),
      new MenuItem('Salads', 'Garden Veggie Salad', 'Mixed greens & assorted fresh veggies', 6.59),
      new MenuItem('Salads', 'House Side Salad', '', 1.99),

      new MenuItem('Coffee & Espresso', 'Caramel Macchiato', 'Sm $3.69 Md $4.19 Lg $4.59', null),
      new MenuItem('Coffee & Espresso', 'White Chocolate Mocha', 'Sm $3.69 Md $4.19 Lg $4.59', null),
      new MenuItem('Coffee & Espresso', 'Caffe Mocha', 'Sm $3.39 Md $3.99 Lg $4.29', null),
      new MenuItem('Coffee & Espresso', 'Caffe Latte-Flavored', 'Sm $3.39 Md $3.99 Lg $4.29', null),
      new MenuItem('Coffee & Espresso', 'Caffe Latte', 'Sm $2.99 Md $3.59 Lg $3.89', null),
      new MenuItem('Coffee & Espresso', 'Cappuccino', 'Sm $2.99 Md $3.59 Lg $3.89', null),
      new MenuItem('Coffee & Espresso', 'Caffe Americano', 'Sm $2.19 Md $2.59 Lg $2.99', null),
      new MenuItem('Coffee & Espresso', 'Red Eye', 'Sm $2.39 Md $2.89 Lg $3.39', null),
      new MenuItem('Coffee & Espresso', 'Freshly Brewed Coffee', 'Sm $1.89 Md $2.09 Lg $2.29', null),
      new MenuItem('Coffee & Espresso', 'Box of Fresh Brewed Coffee', '8-10 cups', 18.99),
      new MenuItem('Coffee & Espresso', 'Espresso', 'One shot $1.39 Two shots $2.09', null),

      new MenuItem('Smoothies & Frozen Drinks', 'Banana Cream', 'Sm $4.39 Md $4.79 Lg $5.39', null),
      new MenuItem('Smoothies & Frozen Drinks', 'Coconut Cream', 'Sm $4.39 Md $4.79 Lg $5.39', null),
      new MenuItem('Smoothies & Frozen Drinks', 'Coconut Cream', 'Sm $4.39 Md $4.79 Lg $5.39', null),
      new MenuItem('Smoothies & Frozen Drinks', 'Four Berry Delight', 'Sm $4.39 Md $4.79 Lg $5.39', null),
      new MenuItem('Smoothies & Frozen Drinks', 'Orange Cream', 'Sm $4.39 Md $4.79 Lg $5.39', null),
      new MenuItem('Smoothies & Frozen Drinks', 'Strawberry Cream', 'Sm $4.39 Md $4.79 Lg $5.39', null),
      new MenuItem('Smoothies & Frozen Drinks', 'Strawberry Banana', 'Sm $4.39 Md $4.79 Lg $5.39', null),
      new MenuItem('Smoothies & Frozen Drinks', 'Strawberry Mango', 'Sm $4.39 Md $4.79 Lg $5.39', null),
      new MenuItem('Smoothies & Frozen Drinks', 'Caramel Macchiato', 'Sm $4.39 Md $4.79 Lg $5.39', null),
      new MenuItem('Smoothies & Frozen Drinks', 'Mocha', 'Sm $4.39 Md $4.79 Lg $5.39', null),
      new MenuItem('Smoothies & Frozen Drinks', 'Chai Chiller', 'Sm $4.39 Md $4.79 Lg $5.39', null),
      new MenuItem('Smoothies & Frozen Drinks', 'Latte', 'Sm $4.39 Md $4.79 Lg $5.39', null),
      new MenuItem('Smoothies & Frozen Drinks', 'Toffee Coffee', 'Sm $4.39 Md $4.79 Lg $5.39', null),
      new MenuItem('Smoothies & Frozen Drinks', 'White Chocolate Mocha', 'Sm $4.39 Md $4.79 Lg $5.39', null),
      new MenuItem('Smoothies & Frozen Drinks', 'Fountain Soda', 'Sm $1.39 Md $1.69 Lg $2.19', null),

      new MenuItem('Teas & Others', 'Hot Tea', 'Sm $1.89 Md $2.09 Lg $2.29', null),
      new MenuItem('Teas & Others', 'Oregon Chai Tea Latte', 'Sm $3.29 Md $3.89 Lg $4.29', null),
      new MenuItem('Teas & Others', 'Iced Oregon Chaie Tea', 'Sm $3.29 Md $3.89 Lg $4.29', null),
      new MenuItem('Teas & Others', 'Iced Coffe-Flavored', 'Sm $2.09 Md $2.29 Lg $2.49', null),
      new MenuItem('Teas & Others', 'Hot Caramel Apple', 'Sm $3.49 Md $3.69 Lg $3.99', null),
      new MenuItem('Teas & Others', 'Hot Chocolate', 'Sm $2.89 Md $3.19 Lg $3.49', null),
      new MenuItem('Teas & Others', 'Hot Apple Cider', 'Sm $2.89 Md $3.19 Lg $3.49', null),
      new MenuItem('Teas & Others', 'Milk Steamer-Flavored', 'Sm $2.89 Md $3.19 Lg $3.49', null),
      new MenuItem('Teas & Others', 'Freshly Brewed Iced Tea', 'Sm $1.39 Md $1.69 Lg $2.19', null)
    ];
  }
}
