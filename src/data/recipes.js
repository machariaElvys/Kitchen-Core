import pancakesImg from "../assets/images/pancakes.jpg";
import stirFryImg from "../assets/images/stirfry.jpg";
import spaghettiImg from "../assets/images/spaghetti.jpg";
import smoothieImg from "../assets/images/smoothie.jpg";
import chapatiBeansImg from "../assets/images/chapati-beans.jpg";

const recipes = [
  {
    id: 1,
    title: "Classic Pancakes",
    category: "Breakfast",
    time: "20 mins",
    image: pancakesImg,
    description: "Soft, fluffy pancakes perfect for breakfast.",
    ingredients: [
      "2 cups flour",
      "2 tablespoons sugar",
      "1 tablespoon baking powder",
      "2 eggs",
      "1½ cups milk",
      "2 tablespoons butter"
    ],
    steps: [
      "Mix the dry ingredients in a bowl.",
      "Whisk eggs, milk, and melted butter in another bowl.",
      "Combine wet and dry ingredients gently.",
      "Pour batter on a hot pan.",
      "Cook both sides until golden brown."
    ]
  },
  {
    id: 2,
    title: "Chicken Stir Fry",
    category: "Lunch",
    time: "30 mins",
    image: stirFryImg,
    description: "A quick and colorful chicken stir fry.",
    ingredients: [
      "Chicken breast",
      "Bell peppers",
      "Onion",
      "Soy sauce",
      "Garlic",
      "Cooking oil"
    ],
    steps: [
      "Slice the chicken and vegetables.",
      "Heat oil in a pan.",
      "Cook chicken until lightly browned.",
      "Add garlic, onions, and peppers.",
      "Pour in soy sauce and stir well."
    ]
  },
  {
    id: 3,
    title: "Spaghetti Bolognese",
    category: "Dinner",
    time: "40 mins",
    image: spaghettiImg,
    description: "Rich tomato and beef sauce over spaghetti.",
    ingredients: [
      "Spaghetti",
      "Minced beef",
      "Tomato sauce",
      "Onion",
      "Garlic",
      "Salt and pepper"
    ],
    steps: [
      "Boil spaghetti until tender.",
      "Cook onion and garlic in a pan.",
      "Add minced beef and cook through.",
      "Stir in tomato sauce and season.",
      "Serve sauce over spaghetti."
    ]
  },
  {
    id: 4,
    title: "Tropical Fruit Smoothie",
    category: "Drinks",
    time: "10 mins",
    image: smoothieImg,
    description: "A refreshing smoothie made with fresh fruits.",
    ingredients: [
      "Mango",
      "Banana",
      "Pineapple",
      "Yogurt",
      "Honey",
      "Ice cubes"
    ],
    steps: [
      "Peel and chop the fruits.",
      "Add everything to a blender.",
      "Blend until smooth.",
      "Taste and adjust sweetness.",
      "Serve chilled."
    ]
  },
  {
    id: 5,
    title: "Chapati & Beans",
    category: "Local",
    time: "50 mins",
    image: chapatiBeansImg,
    description: "A filling and tasty local favorite.",
    ingredients: [
      "Chapati",
      "Boiled beans",
      "Onion",
      "Tomatoes",
      "Cooking oil",
      "Salt"
    ],
    steps: [
      "Cook onions in oil until soft.",
      "Add tomatoes and let them soften.",
      "Add boiled beans and season.",
      "Simmer for a few minutes.",
      "Serve hot with chapati."
    ]
  }
];

export default recipes;