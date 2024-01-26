export interface SearchData {
  name: string;
  city: string;
  meal: NewMeal;
}

export type NewMeal = "Breakfast" | "Lunch" | "Dinner" | "" | string;
