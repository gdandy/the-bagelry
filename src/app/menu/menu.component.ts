import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuCategory, MenuSubCategory, MenuItem } from './menu-objects';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {
  allCategories: Array<MenuCategory>;
  allCategoryNames: Array<string>;
  activeCategoryName: string;
  activeCategories: Array<MenuCategory>;

  constructor() { }

  setActive(menuCategoryName) {
    this.activeCategoryName = menuCategoryName;

    this.activeCategories = this.activeCategoryName === 'All'
      ? this.allCategories
      : this.allCategories.filter(category => category.name === this.activeCategoryName);

    // Scroll to the top of the menu when it is changed
    const menuItemsTop = $('#menuItems').offset().top - 138;
    window.scrollTo(0, menuItemsTop);

    return false;
  }

  ngOnInit() {
    this.allCategories = [
      new MenuCategory('Bagels + Shmears', null, [
        new MenuSubCategory('Bagels', 'Bagelry Dozen (14) $11.79 / Half Dozen (6) $5.89 / Each $1.19', [
          new MenuItem('Blueberry'),
          new MenuItem('Cinnamon Raisin'),
          new MenuItem('Cranberry Walnut'),
          new MenuItem('Everything'),
          new MenuItem('Garlic'),
          new MenuItem('Jalapeno/Cheddar'),
          new MenuItem('Mountain Power'),
          new MenuItem('Onion'),
          new MenuItem('Plain'),
          new MenuItem('Poppy Seed'),
          new MenuItem('Salt'),
          new MenuItem('Sesame Seed'),
          new MenuItem('Sun-dried Tomato Basil'),
          new MenuItem('Wheat'),
          new MenuItem('Baker\'s Special')
        ]),
        new MenuSubCategory('Whipped Cream Cheese Shmears', 'Shmear Tub $4.69', [
          new MenuItem('Chive'),
          new MenuItem('Garlic & Herb'),
          new MenuItem('Honey Walnut Raisin'),
          new MenuItem('Lox'),
          new MenuItem('Low-Fat Plain'),
          new MenuItem('Low-Fat Veggie'),
          new MenuItem('Plain'),
          new MenuItem('Jalapeno'),
          new MenuItem('Strawberry')
        ]),
        new MenuSubCategory('Specials', null, [
          new MenuItem('Bagelry Dozen (14) & 2 shmears', null, 17.99),
          new MenuItem('Bagelry Half Dozen (6) & 1 shmear', null, 9.99)
        ])
      ]),
      new MenuCategory('Breakfast', null, [
        new MenuSubCategory('Breakfast Sandwiches', null, [
          new MenuItem('Breakfast Bagel', 'Egg, scallions & cheese', 4.95),
          new MenuItem('Bagelry Supreme', 'Egg, scallions, cheese, & choice of canadian bacon or pork sausage', 5.69),
          new MenuItem('The Lean Supreme Bagel', 'Egg whites, scallions, provolone, turkey sausage', 6.09),
          new MenuItem('The Fourteener', 'Egg, scallions, double cheese, turkey sausage', 6.89),
          new MenuItem('The Lean Veggie Bagel', 'Egg whites, cheese & assorted fresh veggies', 6.35)
        ]),
        new MenuSubCategory('Breakfast Wraps', null, [
          new MenuItem('Breakfast Wrap', 'Egg, scallions & cheese', 5.19),
          new MenuItem('Supreme Wrap', 'Egg, scallions, cheese, & choice of meat', 6.35),
          new MenuItem('The Lean Supreme Wrap', 'Egg whites, scallions, provolone, turkey sausage', 6.79),
          new MenuItem('Veggie Breakfast Wrap', 'Egg, scallions, cheese & assorted fresh veggies', 6.35),
          new MenuItem('The Lean Veggie Wrap', 'Egg whites, cheese & assorted fresh veggies', 6.89)
        ]),
        new MenuSubCategory('Bagel with Spreads', null, [
          new MenuItem('Bagel with Butter', null, 1.79),
          new MenuItem('Bagel w/Peanut Butter, Jam or Nutella', null, 2.09),
          new MenuItem('Bagel with Peanut Butter & Jam', null, 2.69),
          new MenuItem('Bagel with Plain Cream Cheese', null, 2.87),
          new MenuItem('Bagel with Flavored Cream Cheese', null, 3.62),
          new MenuItem('Bagel with Lox Cream Cheese', null, 4.37),
          new MenuItem('Bagel with Hummus', null, 2.89),
          new MenuItem('Bagel w/Cream Cheese, Tomato & Onion', null, 3.19),
          new MenuItem('Bagel with Cream Cheese & Lox', null, 6.29)
        ])
      ]),
      new MenuCategory('Lunch', null, [
        new MenuSubCategory('Lunch Sandwiches', null, [
          new MenuItem('Turkey Creek Club', 'Turkey, bacon, provolone, lettuce & tomato', 8.49),
          new MenuItem('Mt. Evans', 'Turkey, ham, swiss, tomato & sprouts', 8.49),
          new MenuItem('Berthoud Pass',
            'Ham, salami, pepperoni, provolone, lettuce, tomato, & italian dressing', 8.99),
          new MenuItem('Loveland Pass',
            'Roast beef, bacon, mozzarella, lettuce, tomato, red onion & mustard', 8.99),
          new MenuItem('Bergen Peak', 'Lox, cream cheese, tomato, red onion & capers', 8.99),
          new MenuItem('Pikes Peak Reuben', 'Corned beef, swiss, sauerkraut & dressing', 8.99),
          new MenuItem('Bagelry Tuna Melt', 'Homemade tuna salad, provolone, tomato & onion', 8.99),
          new MenuItem('The Melt', 'Your choice of meat and cheese', 5.99),
          new MenuItem('Pizza Bagel', 'Pepperoni, mozzarella & sauce', 6.29),
          new MenuItem('BLT', 'Bacon, lettuce & tomato', 6.79)
        ], true),
        new MenuSubCategory('Lunch Wraps & Others', null, [
          new MenuItem('California Turkey', 'Turkey, cheddar, avocado, lettuce & tomato', 8.49),
          new MenuItem('Spicy Chicken Salad', 'Homemade chicken salad, pepperjack, lettuce & tomato', 8.49),
          new MenuItem('Veggie Hummus', 'Homemade hummus & assorted fresh veggies', 8.49),
          new MenuItem('Create Your Own Sandwich or Wrap', 'Choice of one protein, one cheese & assorted veggies', 8.49)
        ]),
        new MenuSubCategory('Extras', null, [
          new MenuItem('Extra Meat', null, 1.99),
          new MenuItem('Extra Cheese or Avocado', null, .79),
          new MenuItem('Add Bacon', null, .99),
          new MenuItem('Add Veggies', null, .49)
        ])
      ]),
      new MenuCategory('Drinks', null, [
        new MenuSubCategory('Coffee & Espresso', null, [
          new MenuItem('Caramel Macchiato', 'Sm $3.69 / Md $4.19 / Lg $4.59'),
          new MenuItem('White Chocolate Mocha', 'Sm $3.69 / Md $4.19 / Lg $4.59'),
          new MenuItem('Caffe Mocha', 'Sm $3.39 / Md $3.99 / Lg $4.29'),
          new MenuItem('Caffe Latte-Flavored', 'Sm $3.39 / Md $3.99 / Lg $4.29'),
          new MenuItem('Caffe Latte', 'Sm $2.99 / Md $3.59 / Lg $3.89'),
          new MenuItem('Cappuccino', 'Sm $2.99 / Md $3.59 / Lg $3.89'),
          new MenuItem('Caffe Americano', 'Sm $2.19 / Md $2.59 / Lg $2.99'),
          new MenuItem('Red Eye', 'Sm $2.39 / Md $2.89 / Lg $3.39'),
          new MenuItem('Freshly Brewed Coffee', 'Sm $1.89 / Md $2.09 / Lg $2.29'),
          new MenuItem('Box of Fresh Brewed Coffee', '$18.99 and contains 8-10 cups'),
          new MenuItem('Espresso', 'One shot $1.39 / Two shots $2.09'),
        ], true),
        new MenuSubCategory('Smoothies & Frozen Drinks', 'Sm $4.39 / Md $4.79 / Lg $5.39', [
          new MenuItem('Banana Cream'),
          new MenuItem('Coconut Cream'),
          new MenuItem('Coconut Cream'),
          new MenuItem('Four Berry Delight'),
          new MenuItem('Orange Cream'),
          new MenuItem('Strawberry Cream'),
          new MenuItem('Strawberry Banana'),
          new MenuItem('Strawberry Mango'),
          new MenuItem('Caramel Macchiato'),
          new MenuItem('Mocha'),
          new MenuItem('Chai Chiller'),
          new MenuItem('Latte'),
          new MenuItem('Toffee Coffee'),
          new MenuItem('White Chocolate Mocha'),
        ]),
        new MenuSubCategory('Teas & Other', null, [
          new MenuItem('Fountain Soda', 'Sm $1.39 / Md $1.69 / Lg $2.19'),
          new MenuItem('Hot Tea', 'Sm $1.89 / Md $2.09 / Lg $2.29'),
          new MenuItem('Oregon Chai Tea Latte', 'Sm $3.29 / Md $3.89 / Lg $4.29'),
          new MenuItem('Iced Oregon Chaie Tea', 'Sm $3.29 / Md $3.89 / Lg $4.29'),
          new MenuItem('Iced Coffe-Flavored', 'Sm $2.09 / Md $2.29 / Lg $2.49'),
          new MenuItem('Hot Caramel Apple', 'Sm $3.49 / Md $3.69 / Lg $3.99'),
          new MenuItem('Hot Chocolate', 'Sm $2.89 / Md $3.19 / Lg $3.49'),
          new MenuItem('Hot Apple Cider', 'Sm $2.89 / Md $3.19 / Lg $3.49'),
          new MenuItem('Milk Steamer-Flavored', 'Sm $2.89 / Md $3.19 / Lg $3.49'),
          new MenuItem('Freshly Brewed Iced Tea', 'Sm $1.39 / Md $1.69 / Lg $2.19')
        ])
      ])
    ];

    this.allCategoryNames = Array.from(new Set(this.allCategories.map((category: MenuCategory) => category.name)));
    this.allCategoryNames.unshift('All');

    this.activeCategoryName = 'All';
    this.activeCategories = this.allCategories;
  }

  ngAfterViewInit() {
    const menuNav = $('#menuNav');
    const menuNavParent = $('#menuNav').parent();
    const menuNavHeight = $('footer').height();
    const footer = $('footer');

    $(window).scroll(function () {
      const scroll = $(window).scrollTop();

      // Make food menu navigation sticky and same width when scrolling
      const currentMenuWidth = menuNav.width();

      // Whe scrolled past the starting position of the menu navigation
      if (scroll >= 550) {
        const footerTop = footer.offset().top;

        // Prevent hovering over the footer so remove sticky positioning and align to bottom of column
        // if (scroll + menuNavHeight - 150 > footerTop) {
        //   menuNav.removeClass('sticky');
        //   menuNavParent.addClass('mt-auto');
        //   menuNav.width('auto');
        // } else
        if (!menuNav.hasClass('sticky')) {
          menuNav.addClass('sticky');
          menuNavParent.removeClass('mt-auto');
          menuNav.width(currentMenuWidth);
        }
      } else {
        // Ensure the sticky positioning is removed and back to automatic width
        if (menuNav.hasClass('sticky')) {
          menuNav.removeClass('sticky');
          menuNav.width('auto');
        }

        // Ensure the menuNav alignment to bottom of column is removed
        if (menuNavParent.hasClass('mt-auto')) {
          menuNavParent.removeClass('mt-auto');
        }
      }
    });
  }
}
