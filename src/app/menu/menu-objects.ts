export class MenuCategory {
    constructor(
        public name: string,
        public description: string,
        public subCategories: Array<MenuSubCategory>) { }
}

export class MenuSubCategory {
    constructor(
        public name: string,
        public priceString: string,
        public items: Array<MenuItem>) { }
}

export class MenuItem {
    constructor(
        public name: string,
        public description: string = null,
        public price: number = null,
        public isPopular: boolean = false) { }
}
