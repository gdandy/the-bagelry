import { Component, OnInit } from '@angular/core';
import { ImageAlt } from './image-alt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carouselImages: Array<ImageAlt>;
  allImageRollImages: Array<ImageAlt>;
  filterImageRollImages: Array<ImageAlt>;

  constructor() { }

  ngOnInit() {
    this.carouselImages = [
      new ImageAlt('./assets/img/cs-1/sandwich-breakfast-14er.jpg', 'The 14er Breakfast Sandwich'),
      new ImageAlt('./assets/img/cs-1/the-bagelry-sign.jpg', 'The Bagelry'),
      new ImageAlt('./assets/img/cs-1/pablos-coffee-store.jpg', 'Proudly serving Pablo\'s Coffee'),
      new ImageAlt('./assets/img/cs-1/bagel-mountain-power.jpg', 'The Mountain Power Bagel')
    ];

    this.allImageRollImages = [
      new ImageAlt('./assets/img/img-roll/bagel-chocolate-chip.jpg'),
      new ImageAlt('./assets/img/img-roll/bagel-cinnamon-raisin.jpg'),
      new ImageAlt('./assets/img/img-roll/bagel-cranberry-walnut-2.jpg'),
      new ImageAlt('./assets/img/img-roll/bagel-everything.jpg'),
      new ImageAlt('./assets/img/img-roll/bagel-feature-cinnamon-raisin.jpg'),
      new ImageAlt('./assets/img/img-roll/bagel-feature-jalepeno-cheddar.jpg'),
      new ImageAlt('./assets/img/img-roll/bagel-feature-mountain-power.jpg'),
      new ImageAlt('./assets/img/img-roll/bagel-feature-sesame-seed.jpg'),
      new ImageAlt('./assets/img/img-roll/bagel-feature-tomato-basil.jpg'),
      new ImageAlt('./assets/img/img-roll/bagel-feature-walnut.jpg'),
      new ImageAlt('./assets/img/img-roll/bagel-french-toast.jpg'),
      new ImageAlt('./assets/img/img-roll/bagel-poppy-seed.jpg'),
      new ImageAlt('./assets/img/img-roll/bagel-pumpkin-spice.jpg'),
      new ImageAlt('./assets/img/img-roll/bagel-rye.jpg'),
      new ImageAlt('./assets/img/img-roll/bagel-salt.jpg'),
      new ImageAlt('./assets/img/img-roll/bagel-sesame.jpg'),
      new ImageAlt('./assets/img/img-roll/bagel-sundried-tomato.jpg'),
      new ImageAlt('./assets/img/img-roll/bagels-half-dozen.jpg'),
      new ImageAlt('./assets/img/img-roll/bagels-the-dog-bergen-peak.jpg'),
      new ImageAlt('./assets/img/img-roll/bagels-the-dog-fresh-bagels.jpg'),
      new ImageAlt('./assets/img/img-roll/bagels-toasted.jpg'),
      new ImageAlt('./assets/img/img-roll/cream-cheese-honey-walnut-raisin.jpg'),
      new ImageAlt('./assets/img/img-roll/drinks-coffee.jpg'),
      new ImageAlt('./assets/img/img-roll/drinks-dazbog-coffee-3.jpg'),
      new ImageAlt('./assets/img/img-roll/drinks-dreamy-chai-latte.jpg'),
      new ImageAlt('./assets/img/img-roll/drinks-rocky-mountain-soda.jpg'),
      new ImageAlt('./assets/img/img-roll/drinks-tea-earl-grey-supreme.jpg'),
      new ImageAlt('./assets/img/img-roll/drinks-tripple-berry-smoothie.jpg'),
      new ImageAlt('./assets/img/img-roll/quotes-octopus-8-bagels.jpg'),
      new ImageAlt('./assets/img/img-roll/quotes-you-cant-buy-love-but.jpg'),
      new ImageAlt('./assets/img/img-roll/sandwich-breakfast-supreme-dark.jpg'),
      new ImageAlt('./assets/img/img-roll/sandwich-california-turkey-wrap.jpg'),
      new ImageAlt('./assets/img/img-roll/sandwich-turkey-creek-club.jpg'),
      new ImageAlt('./assets/img/img-roll/the-bagelry-making-smear-cream-cheese.jpg'),
      new ImageAlt('./assets/img/img-roll/the-bagelry-sunrise.jpg'),
      new ImageAlt('./assets/img/img-roll/the-bagelry-vista.jpg')
    ];

    // Shuffle the array so we aren't always seeing the same images
    this.shuffle(this.allImageRollImages);

    // Show 12 images at a time
    this.filterImageRollImages = this.allImageRollImages.slice(0, 12);
  }

  // Randomly shuffle the items in an array.  Fisher–Yates shuffle algorithm.
  private shuffle(array) {
    let m = array.length, t, i;

    // While there remain elements to shuffle...
    while (m) {
      // Pick a remaining element...
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
}
