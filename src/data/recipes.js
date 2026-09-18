import pancakesImg from "../assets/images/pancakes.jpg";
import stirFryImg from "../assets/images/stirfry.jpg";
import spaghettiImg from "../assets/images/spaghetti.jpg";
import smoothieImg from "../assets/images/smoothie.jpg";
import chapatiBeansImg from "../assets/images/chapati-beans.jpg";
import coffeeImg from "../assets/images/coffee.jpg"


const recipes = [
  {
    id: 1,
    title: "Fluffy Blueberry Pancakes",
    category: "Breakfast",
    time: "20 mins",
    image: pancakesImg,
    description: "Soft, fluffy pancakes perfect for breakfast.",
    ingredients: [
      "1½ cups all-purpose flour",
      "2 tablespoons sugar",
      "½ tablespoon baking powder",
      "2 eggs",
      "1½ cups milk",
      "2 tablespoons melted butter",
      "1 teaspoon vanilla extract",
      "1 cup fresh or frozen blueberries",
      " Extra butter and maple syrup"

    ],
    steps: [
      "In a large mixing bowl, whisk together the flour, sugar, baking powder, baking soda, and salt until completely uniform.",
      "In a separate medium bowl, vigorously whisk your buttermilk, egg, melted butter, and vanilla extract together.",
      "Pour the wet mixture into the dry ingredients. Stir with a spatula just until the flour disappears. It is completely fine (and actually preferred) if the batter remains slightly lumpy, overmixing makes the pancakes dense.",
      "Heat a large non-stick skillet or griddle over medium heat and lightly coat it with a small pat of butter.",
      "Ladle about ¼ cup of batter per pancake onto the hot skillet. Immediately drop a generous handful of fresh blueberries directly on top of each bubbling circle of batter.",
      "Let them cook for 2 to 3 minutes until bubbles form on the surface and the edges look set and dry. Flip carefully and cook for another 1 to 2 minutes until both sides are perfectly golden brown.",
      "Stack them high on a plate, top with a square of butter, and drizzle generously with maple syrup."
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
      "450g boneless chicken breasts or thighs, cut into bite-sized strips.",
      "2 cups of mixed chopped veggies",
      "2 cloves garlic (minced) and 1 tablespoon fresh ginger",
      " tablespoon sesame oil or vegetable oil for frying",
      "Whisk together ¼ cup soy sauce, 2 tablespoons honey, 1 tablespoon rice vinegar, and 1 teaspoon cornstarch mixed with ¼ cup water.",
      
    ],
    steps: [
      "Heat your oil in a large skillet or wok over medium-high heat. Add the chicken pieces and cook until they are nicely browned and cooked through, about 5 to 7 minutes. Remove the chicken from the pan and set it aside.",
      "Toss your chopped vegetables directly into the same hot skillet. Stir-fry continuously for 3 to 5 minutes until they are vibrant and tender-crisp.",
      "Lower the heat slightly, drop in your minced garlic and grated ginger, and stir-fry for exactly 1 minute until you can smell the aroma.",
      "Return the cooked chicken to the pan. Give your prepared sauce a quick re-stir and pour it over everything. Cook and toss constantly for 1 to 2 minutes. The cornstarch will activate, transforming the liquid into a thick, glossy glaze that clings perfectly to the chicken and vegetables.",
      "Garnish with green onions or sesame seeds if desired, and serve immediately over a hot bowl of rice or noodles."
    ]
  },
  {
    id: 3,
    title: "Spaghetti Carbonara",
    category: "Dinner",
    time: "40 mins",
    image: spaghettiImg,
    description: "Rich tomato and beef sauce over spaghetti.",
    ingredients: [
      "375g Spaghetti",
      "6 to 8 slices of thick-cut bacon, finely chopped",
      "4 to 5 green onions (scallions), finely chopped",
      " 1 cup freshly grated Parmesan (or Pecorino Romano)",
      " 2 large whole eggs plus ¼ cup heavy cream",
      " A generous amount of freshly cracked black pepper and a pinch of salt"
    ],
    steps: [
      "Drop the spaghettini into a large pot of rolling, salted boiling water. Cook until it is al dente (tender but still retaining a slight bite). ",
      "Scoop out and save ½ cup of hot pasta water right before draining the noodles, then set the pasta aside.",
      "While the pasta boils, place your chopped bacon into a large skillet over medium heat. Fry for 5 to 7 minutes until the fat renders completely and the bits turn crispy and golden brown.",
      "Toss in the green onions during the last minute of cooking just to soften them up.",
      "In a medium bowl, vigorously whisk together the 2 whole eggs, heavy cream, grated cheese, and a liberal amount of black pepper until it forms a uniform, thick mixture.",
      "Add the warm, drained pasta directly into the skillet with the hot bacon and scallions. Toss well so the bacon fat completely coats the strands",
      "Turn off the stove heat entirely and slide the skillet off the hot burner. Pour the egg and cheese mixture over the pasta while tossing continuously. If the sauce feels a bit too thick, splash in a few tablespoons of your reserved hot pasta water. The residual heat of the pasta will cook the egg perfectly into a velvety, creamy glaze without clumping.",
      "Plate immediately and top with an extra dust of grated Parmesan and another crack of black pepper."
    ]
  },
  {
    id: 4,
    title: "BlueBerry Smoothie",
    category: "Drinks",
    time: "10 mins",
    image: smoothieImg,
    description: "A refreshing smoothie made with fresh fruits.",
    ingredients: [
      "1½ cups frozen blueberries and 1 ripe banana (sliced)",
      "1 cup milk (whole milk, almond milk, or oat milk)",
      "½ cup plain or vanilla Greek yogurt",
      "1 tablespoon honey or maple syrup9(optional)",
      
    ],
    steps: [
      "Pour the milk and Greek yogurt into the bottom of your blender first. Placing liquids at the bottom helps the blades rotate smoothly without getting jammed by the frozen fruit.",
      "Dump the frozen blueberries and sliced banana segments directly on top of the yogurt base. If you are adding honey, drizzle it in now.",
      "Start your blender on a low speed for 10 to 15 seconds to break down the large frozen chunks, then ramp it up to high speed. Blend continuously for about 45 to 60 seconds until the mixture is perfectly uniform, velvety, and a solid deep-purple hue.",
      "Pour the smooth blend into a tall glass, pop in a straw, and scatter a few fresh blueberries around for that classic café finish.",
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
  },

  {
    
    id: 6,
    title: "Coffee",
    category: "Local",
    time: "10 mins",
    image: coffeeImg,
    description: "A filling and tasty local favorite.",
    ingredients: [
      "Instant Coffee: 1½",
      "Sugar(adjust to taste)",
      "Hot Water",
      "Milk: 1 cup"
    ],
    steps: [
      "In your favorite mug, combine the instant coffee powder and sugar. Pour in the hot boiling water.",
      "Stir briskly with a spoon, beating the mixture continuously for 3 to 4 minutes. Keep whipping until the liquid transforms into a thick, light-brown, creamy paste with a frothy layer",
      "Heat your milk in a small saucepan over medium heat until it comes to a brief boil.",
      "Pour the hot, foamy milk into your mug over the beaten coffee paste. Stir gently to incorporate, then top it off with the remaining micro-foam.",
      "Dust with a pinch of cinnamon or cocoa powder if you like."
    ]
  }
];

export default recipes;