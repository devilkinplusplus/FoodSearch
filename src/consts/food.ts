export class Food {
    foodId: string;
    category: string;
    categoryLabel: string;
    image: string;
    label: string;
    foodContentsLabel:string;
    brand:string;
    nutrients: {
      CHOCDF: number;
      ENERC_KCAL: number;
      FAT: number;
      FIBTG: number;
      PROCNT: number;
    };
}

export class Hints {
    food:Food;
}

export class FoodResponse {
    hints:Hints[];
}