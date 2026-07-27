// ============================================================
// Beyond Fresh Cafe Frozen Yougurt — Complete Menu Data
// ============================================================
// Parsed from the official Menu.docx document.
// Every category, item, description, and price is preserved.
// ============================================================

export interface MenuSize {
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number | null; // null when price varies by size
  sizes?: MenuSize[];
  comboPrice?: number;
  comboDescription?: string;
  imageUrl?: string; // Phase 5
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  defaultPrice?: number;
  mealAddOn?: string;
  items: MenuItem[];
}

// ============================================================
// SIGNATURE WRAPS
// ============================================================
const signatureWraps: MenuCategory = {
  id: "signature-wraps",
  name: "Signature Wraps",
  defaultPrice: 12.49,
  mealAddOn: "Add $4.49 (12 oz vegetable soup & 12 oz iced tea) = $16.98",
  items: [
    {
      id: "falafel-spinach-wrap",
      name: "Falafel Spinach Wrap",
      description:
        "Falafel, lettuce, spinach, cheese, cucumber, tomato, olive, carrot, onion, tzatziki sauce with grilled whole wheat pita wrap.",
      price: 12.49,
    },
    {
      id: "istanbul-wrap",
      name: "Istanbul Wrap",
      description:
        "Chicken breast, spinach, lettuce, feta, onion, tomato, cucumber, corn, olive, citrus vinaigrette sauce with grilled whole wheat pita wrap.",
      price: 12.49,
    },
    {
      id: "chicken-classic-wrap",
      name: "Chicken Classic Wrap",
      description:
        "Chicken breast, lettuce, cheese, tomato, cucumber, carrot, onion, Caesar dressing with grilled whole wheat pita wrap.",
      price: 12.49,
    },
    {
      id: "tuna-wrap",
      name: "Tuna Wrap",
      description:
        "Marinated tuna with thousand island sauce, lettuce, onion, tomato, cucumber, carrot, thousand island dressing with grilled whole wheat pita wrap.",
      price: 12.49,
    },
    {
      id: "chipotle-steak-wrap",
      name: "Chipotle Steak Wrap",
      description:
        "Beef steak, lettuce, onion, cucumber, tomato, green pepper, chipotle sauce with grilled whole wheat pita wrap.",
      price: 14.99,
      comboPrice: 19.48,
      comboDescription:
        "Add $4.49 (12 oz vegetable soup & 12 oz iced tea)",
    },
    {
      id: "grand-vege-wrap",
      name: "Grand Vege Wrap",
      description:
        "Spinach, lettuce, beet, cheese, cucumber, tomato, corn, carrot, balsamic vinaigrette sauce with grilled whole wheat pita wrap.",
      price: 12.49,
    },
    {
      id: "wrap-burrito",
      name: "Wrap Burrito",
      description:
        "Chicken breast, spinach, quinoa, corn, beans, cucumber, jalapeño, salsa with grilled whole wheat pita wrap.",
      price: 12.49,
    },
    {
      id: "bbq-chicken-wrap",
      name: "BBQ Chicken Wrap",
      description:
        "Chicken marinated with BBQ sauce, lettuce, cheese, onion, tomato, black beans, BBQ sauce with grilled whole wheat pita wrap.",
      price: 12.49,
    },
    {
      id: "avocado-chicken-wrap",
      name: "Avocado Chicken Wrap",
      description:
        "Chicken, lettuce, carrot, avocado, tomato, cucumber, Caesar sauce with grilled whole wheat pita wrap.",
      price: 12.49,
    },
    {
      id: "adobo-chicken-wrap",
      name: "Adobo Chicken Wrap",
      description:
        "Chicken marinated with adobo sauce, lettuce, spinach, cucumber, carrot, corn, adobo sauce with grilled whole wheat pita wrap.",
      price: 12.49,
    },
  ],
};

// ============================================================
// GRILLED PANINIS
// ============================================================
const grilledPaninis: MenuCategory = {
  id: "grilled-paninis",
  name: "Grilled Paninis",
  defaultPrice: 12.49,
  mealAddOn: "Add $4.49 (12 oz vegetable soup & 12 oz iced tea) = $16.98",
  items: [
    {
      id: "chicken-salsa-panini",
      name: "Chicken Salsa Panini",
      description:
        "Chicken breast, cheese, onion, green/yellow pepper, jalapeño, salsa with ciabatta bread.",
      price: 12.49,
    },
    {
      id: "avocado-chicken-panini",
      name: "Avocado Chicken Panini",
      description:
        "Chicken breast, onion, cheese, avocado, tomato, Caesar dressing with ciabatta bread.",
      price: 12.49,
    },
    {
      id: "bbq-chicken-panini",
      name: "BBQ Chicken Panini",
      description:
        "Chicken breast, cheese, onion, tomato, spinach, BBQ sauce with ciabatta bread.",
      price: 12.49,
    },
    {
      id: "pesto-panini",
      name: "Pesto Panini",
      description:
        "Chicken breast, cheese, onion, tomato, green pepper, pesto, balsamic vinaigrette with ciabatta bread.",
      price: 12.49,
    },
    {
      id: "portobello-panini",
      name: "Portobello Panini",
      description:
        "Portobello, cheese, onion, green pepper, spinach, balsamic glaze with ciabatta bread.",
      price: 12.49,
    },
    {
      id: "chipotle-steak-panini",
      name: "Chipotle Steak Panini",
      description:
        "Beef steak, onion, green/yellow pepper, chipotle sauce with ciabatta bread.",
      price: 14.99,
      comboPrice: 19.48,
      comboDescription:
        "Add $4.49 (12 oz vegetable soup & 12 oz iced tea)",
    },
    {
      id: "tuna-panini",
      name: "Tuna Panini",
      description:
        "Marinated tuna, cheese, onion, tomato, cucumber, spinach, thousand islands dressing with ciabatta bread.",
      price: 12.49,
    },
  ],
};

// ============================================================
// PROTEIN SALAD BOWLS
// ============================================================
const proteinSaladBowls: MenuCategory = {
  id: "protein-salad-bowls",
  name: "Protein Salad Bowls",
  defaultPrice: 13.99,
  mealAddOn: "Add $4.49 (12 oz vegetable soup & 12 oz iced tea) = $18.48",
  items: [
    {
      id: "teriyaki-bowl",
      name: "Teriyaki Bowl",
      description:
        "Chicken breast, quinoa/rice or lettuce or half and half, corn, chickpea, tomato, cucumber, green/red pepper, teriyaki sauce.",
      price: 13.99,
    },
    {
      id: "istanbul-bowl",
      name: "Istanbul Bowl",
      description:
        "Chicken breast, lettuce, spinach, tomato, cucumber, onion, olive, cheese, citrus vinaigrette sauce.",
      price: 13.99,
    },
    {
      id: "falafel-bowl",
      name: "Falafel Bowl",
      description:
        "Quinoa, spinach, falafel, carrot, cucumber, olive, corn, tzatziki sauce.",
      price: 13.99,
    },
    {
      id: "festival-bowl",
      name: "Festival Bowl",
      description:
        "Quinoa or spinach-lettuce mix or half and half, chicken breast, cheese, corn, chickpea, green/red pepper, salsa.",
      price: 13.99,
    },
    {
      id: "ocean-bowl",
      name: "Ocean Bowl",
      description:
        "Quinoa or spinach-lettuce mix or half and half, chicken breast, cheese, corn, chickpea, tomato, cucumber, balsamic vinaigrette sauce.",
      price: 13.99,
    },
    {
      id: "rice-chicken-salad-bowl",
      name: "Rice-Chicken Salad Bowl",
      description:
        "Chicken marinated with adobo sauce, rice, corn, cucumber, carrot, green/red pepper, adobo sauce.",
      price: 13.99,
    },
  ],
};

// ============================================================
// SOUPS
// ============================================================
const soups: MenuCategory = {
  id: "soups",
  name: "Soups",
  items: [
    {
      id: "vege-soup",
      name: "Vege Soup",
      description:
        "Celery, quinoa, corn, chickpea, tomato, lemon, spinach, vegetable broth.",
      price: null,
      sizes: [
        { label: "12 oz", price: 6.49 },
        { label: "16 oz", price: 7.49 },
      ],
    },
    {
      id: "moroccan-soup",
      name: "Moroccan Soup",
      description:
        "Tomato, potato, chickpeas, zucchini, carrots, lentils, onion, butternut squash, cabbage, celery, sweet potato.",
      price: null,
      sizes: [
        { label: "8 oz", price: 4.99 },
        { label: "12 oz", price: 6.99 },
      ],
    },
  ],
};

// ============================================================
// SQUEEZES (Fresh Juices)
// ============================================================
const squeezes: MenuCategory = {
  id: "squeezes",
  name: "Squeezes",
  description: "Fresh-pressed juices",
  items: [
    {
      id: "beet-and-5",
      name: "Beet & 5",
      description: "Beet, apple, celery, carrot, ginger, lemon.",
      price: null,
      sizes: [
        { label: "12 oz", price: 7.49 },
        { label: "16 oz", price: 9.49 },
        { label: "24 oz", price: 10.99 },
      ],
    },
    {
      id: "create-your-own-squeeze",
      name: "Create Your Own",
      description:
        "With apple, orange and minimum one more vegetable.",
      price: null,
      sizes: [
        { label: "12 oz", price: 7.49 },
        { label: "16 oz", price: 9.49 },
        { label: "24 oz", price: 10.99 },
      ],
    },
    {
      id: "cold-hunter",
      name: "Cold Hunter",
      description: "Apple, orange, ginger, lemon, celery, salt, black pepper.",
      price: null,
      sizes: [
        { label: "12 oz", price: 7.49 },
        { label: "16 oz", price: 9.49 },
        { label: "24 oz", price: 10.99 },
      ],
    },
    {
      id: "green-citrus",
      name: "Green Citrus",
      description: "Apple, cucumber, celery, lemon, spinach.",
      price: null,
      sizes: [
        { label: "12 oz", price: 7.49 },
        { label: "16 oz", price: 9.49 },
        { label: "24 oz", price: 10.99 },
      ],
    },
    {
      id: "vibrator",
      name: "Vibrator",
      description: "Apple, orange, lemon, ginger, celery.",
      price: null,
      sizes: [
        { label: "12 oz", price: 7.49 },
        { label: "16 oz", price: 9.49 },
        { label: "24 oz", price: 10.99 },
      ],
    },
    {
      id: "apple-juice",
      name: "Apple Juice",
      description:
        "Fresh squeezed apple juice with salt and cayenne pepper.",
      price: null,
      sizes: [
        { label: "12 oz", price: 7.49 },
        { label: "16 oz", price: 9.49 },
        { label: "24 oz", price: 10.99 },
      ],
    },
    {
      id: "kale-aid",
      name: "Kale Aid",
      description: "Kale, apple, celery, lemon, ginger.",
      price: null,
      sizes: [
        { label: "12 oz", price: 7.49 },
        { label: "16 oz", price: 9.49 },
        { label: "24 oz", price: 10.99 },
      ],
    },
    {
      id: "carrot-juice",
      name: "Carrot Juice",
      description:
        "Fresh carrot juice with salt and cayenne pepper.",
      price: null,
      sizes: [
        { label: "12 oz", price: 7.49 },
        { label: "16 oz", price: 9.49 },
        { label: "24 oz", price: 10.99 },
      ],
    },
    {
      id: "celery-juice",
      name: "Celery Juice",
      description:
        "Freshly squeezed celery juice with salt and cayenne pepper.",
      price: null,
      sizes: [
        { label: "12 oz", price: 7.49 },
        { label: "16 oz", price: 9.49 },
        { label: "24 oz", price: 10.99 },
      ],
    },
    {
      id: "beet-juice",
      name: "Beet Juice",
      description:
        "Freshly squeezed beet juice with salt and cayenne pepper.",
      price: null,
      sizes: [
        { label: "12 oz", price: 7.49 },
        { label: "16 oz", price: 9.49 },
        { label: "24 oz", price: 10.99 },
      ],
    },
  ],
};

// ============================================================
// SMOOTHIES
// ============================================================
const smoothies: MenuCategory = {
  id: "smoothies",
  name: "Smoothies",
  items: [
    {
      id: "three-berries-blushing",
      name: "Three Berries Blushing",
      description:
        "Blueberry, raspberry, strawberry, apple juice, yogurt, ice.",
      price: null,
      sizes: [
        { label: "12 oz", price: 6.99 },
        { label: "16 oz", price: 7.99 },
        { label: "24 oz", price: 8.99 },
      ],
    },
    {
      id: "mango-haven",
      name: "Mango Haven",
      description: "Mango, banana, pineapple, coconut milk, milk, ice.",
      price: null,
      sizes: [
        { label: "12 oz", price: 6.99 },
        { label: "16 oz", price: 7.99 },
        { label: "24 oz", price: 8.99 },
      ],
    },
    {
      id: "kale-strength",
      name: "Kale Strength",
      description: "Mango, pineapple, banana, kale, apple juice, ice.",
      price: null,
      sizes: [
        { label: "12 oz", price: 6.99 },
        { label: "16 oz", price: 7.99 },
        { label: "24 oz", price: 8.99 },
      ],
    },
    {
      id: "summer-strawberry",
      name: "Summer Strawberry",
      description:
        "Strawberry, banana, cranberry juice, coconut milk, milk, ice.",
      price: null,
      sizes: [
        { label: "12 oz", price: 6.99 },
        { label: "16 oz", price: 7.99 },
        { label: "24 oz", price: 8.99 },
      ],
    },
    {
      id: "spinach-mango",
      name: "Spinach Mango",
      description:
        "Mango, pineapple, peach, spinach, cranberry juice, ice.",
      price: null,
      sizes: [
        { label: "12 oz", price: 6.99 },
        { label: "16 oz", price: 7.99 },
        { label: "24 oz", price: 8.99 },
      ],
    },
    {
      id: "peanut-butter-chocolate",
      name: "Peanut Butter Chocolate",
      description:
        "Banana, peanut butter, milk, yogurt, chocolate, ice.",
      price: null,
      sizes: [
        { label: "12 oz", price: 6.99 },
        { label: "16 oz", price: 7.99 },
        { label: "24 oz", price: 8.99 },
      ],
    },
    {
      id: "tropical-magic",
      name: "Tropical Magic",
      description:
        "Strawberry, peach, mango, apple juice, yogurt, peanut butter & ice.",
      price: null,
      sizes: [
        { label: "12 oz", price: 6.99 },
        { label: "16 oz", price: 7.99 },
        { label: "24 oz", price: 8.99 },
      ],
    },
    {
      id: "big-blue",
      name: "Big Blue",
      description: "Blueberry, banana, apple juice, yogurt, ice.",
      price: null,
      sizes: [
        { label: "12 oz", price: 6.99 },
        { label: "16 oz", price: 7.99 },
        { label: "24 oz", price: 8.99 },
      ],
    },
    {
      id: "pink-power",
      name: "Pink Power",
      description: "Strawberry, banana, peanut butter, milk, ice.",
      price: null,
      sizes: [
        { label: "12 oz", price: 6.99 },
        { label: "16 oz", price: 7.99 },
        { label: "24 oz", price: 8.99 },
      ],
    },
    {
      id: "mighty-avocado",
      name: "Mighty Avocado",
      description: "Mango, banana, avocado, coconut milk, ice.",
      price: null,
      sizes: [
        { label: "12 oz", price: 6.99 },
        { label: "16 oz", price: 7.99 },
        { label: "24 oz", price: 8.99 },
      ],
    },
    {
      id: "coffee-touch-smoothie",
      name: "Coffee Touch Smoothie",
      description: "Banana, coffee, oats, yogurt, milk, ice.",
      price: null,
      sizes: [
        { label: "12 oz", price: 6.99 },
        { label: "16 oz", price: 7.99 },
        { label: "24 oz", price: 8.99 },
      ],
    },
  ],
};

// ============================================================
// POWER BOWLS
// ============================================================
const powerBowls: MenuCategory = {
  id: "power-bowls",
  name: "Power Bowls",
  defaultPrice: 10.99,
  items: [
    {
      id: "strawberry-banana-bowl",
      name: "Strawberry Banana Bowl",
      description:
        "Strawberry, banana, milk, peanut butter, topped with granola, coconut flakes, banana, blueberry.",
      price: 10.99,
    },
    {
      id: "peanut-butter-yogurt-bowl",
      name: "Peanut Butter Yogurt Bowl",
      description:
        "Strawberry, mango, banana, peanut butter, yogurt, topped with granola, coconut flakes, blueberry, banana.",
      price: 10.99,
    },
    {
      id: "matcha-cinnamon-bowl",
      name: "Matcha Cinnamon Bowl",
      description:
        "Banana, mango, blueberry, yogurt, matcha, cinnamon topped with granola, coconut flakes, blueberry, banana.",
      price: 10.99,
    },
    {
      id: "blueberry-spinach-bowl",
      name: "Blueberry Spinach Bowl",
      description:
        "Blueberry, banana, spinach, cinnamon, coconut milk, topped with granola, coconut flakes, fresh banana, blueberry.",
      price: 10.99,
    },
  ],
};

// ============================================================
// BREAKFAST
// ============================================================
const breakfast: MenuCategory = {
  id: "breakfast",
  name: "Breakfast",
  items: [
    {
      id: "breakfast-panini",
      name: "Breakfast Panini",
      description:
        "Ciabatta bread, cheese, scrambled egg, spinach, salsa.",
      price: 7.49,
    },
    {
      id: "breakfast-wrap",
      name: "Breakfast Wrap",
      description: "Tortilla, scrambled egg, cheese, spinach, salsa.",
      price: 7.49,
    },
    {
      id: "breakfast-combo",
      name: "Breakfast Combo",
      description: "One panini or wrap, 12 oz coffee or iced tea.",
      price: 9.49,
    },
  ],
};

// ============================================================
// BREAKFAST SANDWICHES
// ============================================================
const breakfastSandwiches: MenuCategory = {
  id: "breakfast-sandwiches",
  name: "Breakfast Sandwiches",
  items: [
    {
      id: "pesto-turkey-grilled-cheese",
      name: "Pesto Turkey Grilled Cheese",
      description:
        "Sliced turkey breast, pesto, cheese with grilled whole wheat bread.",
      price: 7.99,
      comboPrice: 9.99,
      comboDescription: "With 12 oz coffee or iced tea",
    },
    {
      id: "pesto-beef-grilled-cheese",
      name: "Pesto Beef Grilled Cheese",
      description:
        "Sliced beef, pesto, cheese with grilled whole wheat bread.",
      price: 7.99,
      comboPrice: 9.99,
      comboDescription: "With 12 oz coffee or iced tea",
    },
    {
      id: "grilled-cheese-sandwich",
      name: "Grilled Cheese Sandwich",
      description: "Cheese with grilled whole wheat bread.",
      price: 6.49,
      comboPrice: 8.49,
      comboDescription: "With 12 oz coffee or iced tea",
    },
  ],
};

// ============================================================
// BREAKFAST BOWLS
// ============================================================
const breakfastBowls: MenuCategory = {
  id: "breakfast-bowls",
  name: "Breakfast Bowls",
  defaultPrice: 9.99,
  items: [
    {
      id: "cali-tex-bowl",
      name: "Cali-Tex Bowl",
      description:
        "16 oz bowl: lettuce, spinach, scrambled egg, bean, adobo sauce.",
      price: 9.99,
    },
    {
      id: "tex-mex-bowl",
      name: "Tex-Mex Bowl",
      description:
        "16 oz bowl: quinoa, spinach, scrambled egg, bean, corn, adobo sauce.",
      price: 9.99,
    },
  ],
};

// ============================================================
// BURGERS & SIDES
// ============================================================
const burgersAndSides: MenuCategory = {
  id: "burgers-and-sides",
  name: "Burgers & Sides",
  items: [
    {
      id: "beef-burger",
      name: "Beef Burger",
      description:
        "Beef patty, tomato, cucumber, lettuce, onion, thousand island sauce with toasted bun. Double patty add $3.",
      price: 10.49,
      comboPrice: 15.48,
      comboDescription: "Add $4.99 (8 oz fries & pop)",
    },
    {
      id: "chicken-burger",
      name: "Chicken Burger",
      description:
        "Chicken patty, tomato, cucumber, lettuce, onion, ranch/thousand island sauce with toasted bun.",
      price: 10.49,
      comboPrice: 15.48,
      comboDescription: "Add $4.99 (8 oz fries & pop)",
    },
    {
      id: "lasagne",
      name: "Lasagne",
      description:
        "24 oz bowl — lasagne with meat sauce, topped with melted cheese.",
      price: 12.99,
    },
    {
      id: "spaghetti",
      name: "Spaghetti",
      description:
        "24 oz bowl — spaghetti with meat sauce, topped with melted cheese.",
      price: 12.99,
    },
    {
      id: "chicken-beef-samosa",
      name: "Chicken & Beef Samosa",
      description:
        "Chicken, beef with onion and mixed vegetables.",
      price: 2.99,
    },
    {
      id: "potato-wedges",
      name: "Potato Wedges",
      description: "Crispy potato wedges.",
      price: null,
      sizes: [
        { label: "8 oz", price: 3.99 },
        { label: "12 oz", price: 5.49 },
      ],
    },
    {
      id: "chicken-wings",
      name: "Chicken Wings",
      description: "5 pieces of chicken wings.",
      price: 8.99,
    },
    {
      id: "chicken-nuggets",
      name: "Chicken Nuggets",
      description: "5 pieces of chicken nuggets.",
      price: 4.99,
    },
  ],
};

// ============================================================
// SUBMARINES
// ============================================================
const submarines: MenuCategory = {
  id: "submarines",
  name: "Submarines",
  defaultPrice: 11.99,
  mealAddOn: "Add $4.99 (one pop & 8 oz fries) = $16.98",
  items: [
    {
      id: "submarine-turkey-breast",
      name: "Submarine with Turkey Breast",
      description:
        "Melted cheese with sub roll, sliced turkey breast, lettuce, tomato, cucumber, onion.",
      price: 11.99,
      comboPrice: 16.98,
      comboDescription: "Add $4.99 (one pop & 8 oz fries)",
    },
    {
      id: "submarine-beef",
      name: "Submarine with Beef",
      description:
        "Melted cheese with sub roll, sliced beef, lettuce, tomato, cucumber, onion.",
      price: 11.99,
      comboPrice: 16.98,
      comboDescription: "Add $4.99 (one pop & 8 oz fries)",
    },
    {
      id: "smoked-beef-sandwich",
      name: "Smoked Beef Sandwich",
      description:
        "Whole wheat bread with mustard and smoked beef.",
      price: 11.99,
      comboPrice: 16.98,
      comboDescription: "Add $4.99 (one pop & 8 oz fries)",
    },
  ],
};

// ============================================================
// QUESADILLAS
// ============================================================
const quesadillas: MenuCategory = {
  id: "quesadillas",
  name: "Quesadillas",
  items: [
    {
      id: "cheese-quesadilla",
      name: "Cheese Quesadilla",
      description: "Grilled tortilla with cheese.",
      price: 5.99,
    },
    {
      id: "corn-cajun-chicken-quesadilla",
      name: "Corn-Cajun Chicken Quesadilla",
      description:
        "Grilled tortilla with chicken with Cajun seasoning, cheese, corn, green pepper, salsa.",
      price: 6.99,
    },
    {
      id: "pesto-chicken-quesadilla",
      name: "Pesto Chicken Quesadilla",
      description:
        "Grilled tortilla with chicken, cheese, pesto, spinach.",
      price: 6.99,
    },
    {
      id: "black-bean-quesadilla",
      name: "Black Bean Quesadilla",
      description:
        "Grilled tortilla with cheese, black beans, onion.",
      price: 6.99,
    },
    {
      id: "black-olive-quesadilla",
      name: "Black Olive Quesadilla",
      description:
        "Grilled tortilla with cheese, olive, onion.",
      price: 6.99,
    },
  ],
};

// ============================================================
// SIDE SALAD BOWLS
// ============================================================
const sideSaladBowls: MenuCategory = {
  id: "side-salad-bowls",
  name: "Side Salad Bowls",
  items: [
    {
      id: "lettuce-spinach-salad",
      name: "Lettuce Spinach Salad",
      description:
        "Lettuce, spinach, tomato, cucumber, onion, olive with citrus vinaigrette sauce. 16 oz bowl.",
      price: 6.49,
    },
    {
      id: "spinach-quinoa-salad",
      name: "Spinach Quinoa Salad",
      description:
        "Quinoa, corn, spinach, edamame, tomato, cucumber, onion, bean, with citrus vinaigrette sauce. 12 oz bowl.",
      price: 6.99,
    },
  ],
};

// ============================================================
// EXTRAS & SIDES
// ============================================================
const extras: MenuCategory = {
  id: "extras",
  name: "Extras & Snacks",
  items: [
    {
      id: "baby-wrap",
      name: "Baby Wrap",
      description:
        "Whole wheat tortilla with chicken, cheese, lettuce, tomato, cucumber.",
      price: 7.99,
    },
    {
      id: "granola-parfait",
      name: "Granola Parfait",
      description:
        "Vanilla yogurt topped with granola, coconut flakes, blueberry.",
      price: 6.99,
    },
    {
      id: "resistance-shot",
      name: "Resistance Shot",
      description:
        "Ginger, lemon, salt, cayenne pepper with half orange.",
      price: 5.49,
    },
  ],
};

// ============================================================
// HOT BEVERAGES
// ============================================================
const hotBeverages: MenuCategory = {
  id: "hot-beverages",
  name: "Hot Beverages",
  items: [
    {
      id: "coffee",
      name: "Coffee",
      description: "Freshly brewed coffee.",
      price: null,
      sizes: [
        { label: "12 oz", price: 2.99 },
        { label: "16 oz", price: 3.49 },
      ],
    },
    {
      id: "espresso",
      name: "Espresso",
      description: "Rich espresso shot.",
      price: null,
      sizes: [
        { label: "12 oz", price: 4.75 },
        { label: "16 oz", price: 5.5 },
      ],
    },
    {
      id: "americano",
      name: "Americano",
      description: "Espresso with hot water.",
      price: null,
      sizes: [
        { label: "12 oz", price: 4.5 },
        { label: "16 oz", price: 5.5 },
      ],
    },
    {
      id: "cappuccino",
      name: "Cappuccino",
      description: "Espresso with steamed and frothed milk.",
      price: null,
      sizes: [
        { label: "12 oz", price: 4.75 },
        { label: "16 oz", price: 5.5 },
      ],
    },
    {
      id: "latte",
      name: "Latte",
      description: "Espresso with steamed milk.",
      price: null,
      sizes: [
        { label: "12 oz", price: 4.75 },
        { label: "16 oz", price: 5.5 },
      ],
    },
    {
      id: "mocha",
      name: "Mocha",
      description: "Espresso with chocolate and steamed milk.",
      price: null,
      sizes: [
        { label: "12 oz", price: 4.75 },
        { label: "16 oz", price: 5.5 },
      ],
    },
    {
      id: "black-tea",
      name: "Black Tea",
      description: "Classic black tea.",
      price: null,
      sizes: [
        { label: "12 oz", price: 2.49 },
        { label: "16 oz", price: 2.99 },
      ],
    },
    {
      id: "green-tea",
      name: "Green Tea",
      description: "Traditional green tea.",
      price: null,
      sizes: [
        { label: "12 oz", price: 2.49 },
        { label: "16 oz", price: 2.99 },
      ],
    },
  ],
};

// ============================================================
// COLD BEVERAGES (FROZEN YOGURT)
// ============================================================
const coldBeverages: MenuCategory = {
  id: "cold-beverages",
  name: "Cold Beverages (Frozen Yogurt)",
  description: "Available in different flavors",
  items: [
    {
      id: "frozen-yogurt",
      name: "Frozen Yogurt",
      description:
        "Creamy frozen yogurt available in a variety of delicious flavors. Ask about today's selection!",
      price: null,
    },
  ],
};

// ============================================================
// FULL MENU EXPORT
// ============================================================
export const menuCategories: MenuCategory[] = [
  signatureWraps,
  grilledPaninis,
  proteinSaladBowls,
  soups,
  squeezes,
  smoothies,
  powerBowls,
  breakfast,
  breakfastSandwiches,
  breakfastBowls,
  burgersAndSides,
  submarines,
  quesadillas,
  sideSaladBowls,
  extras,
  hotBeverages,
  coldBeverages,
];

// Helper to get total item count
export const totalMenuItems = menuCategories.reduce(
  (total, category) => total + category.items.length,
  0
);

// Helper to get a category by ID
export function getCategoryById(id: string): MenuCategory | undefined {
  return menuCategories.find((cat) => cat.id === id);
}

// Helper to get an item by ID across all categories
export function getItemById(id: string): MenuItem | undefined {
  for (const category of menuCategories) {
    const item = category.items.find((i) => i.id === id);
    if (item) return item;
  }
  return undefined;
}

// Helper to format price
export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

// ============================================================
// IMAGE URL GENERATION (Phase 5)
// ============================================================
// Uses LoremFlickr for keyword-based food images.
// Each item has curated keywords for more relevant results.
// URL format: https://loremflickr.com/{w}/{h}/{keywords}?lock={hash}
// The ?lock= parameter ensures consistent images per item.
// ============================================================

// Simple hash for consistent image per item ID
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// Curated keywords for better image relevance
const imageKeywords: Record<string, string> = {
  // Signature Wraps
  "falafel-spinach-wrap": "falafel,wrap,pita",
  "istanbul-wrap": "chicken,wrap,mediterranean",
  "chicken-classic-wrap": "chicken,wrap,lettuce",
  "tuna-wrap": "tuna,wrap,sandwich",
  "chipotle-steak-wrap": "steak,wrap,chipotle",
  "grand-vege-wrap": "vegetable,wrap,healthy",
  "wrap-burrito": "burrito,chicken,wrap",
  "bbq-chicken-wrap": "bbq,chicken,wrap",
  "avocado-chicken-wrap": "avocado,chicken,wrap",
  "adobo-chicken-wrap": "chicken,wrap,spicy",

  // Grilled Paninis
  "chicken-salsa-panini": "panini,chicken,grilled",
  "avocado-chicken-panini": "avocado,panini,sandwich",
  "bbq-chicken-panini": "bbq,panini,sandwich",
  "pesto-panini": "pesto,panini,grilled",
  "portobello-panini": "mushroom,panini,grilled",
  "chipotle-steak-panini": "steak,panini,grilled",
  "tuna-panini": "tuna,panini,sandwich",

  // Protein Salad Bowls
  "teriyaki-bowl": "teriyaki,chicken,bowl",
  "istanbul-bowl": "chicken,salad,mediterranean",
  "falafel-bowl": "falafel,quinoa,bowl",
  "festival-bowl": "chicken,quinoa,salad",
  "ocean-bowl": "chicken,salad,bowl",
  "rice-chicken-salad-bowl": "chicken,rice,bowl",

  // Soups
  "vege-soup": "vegetable,soup,healthy",
  "moroccan-soup": "moroccan,soup,lentil",

  // Squeezes
  "beet-and-5": "beet,juice,fresh",
  "create-your-own-squeeze": "fresh,juice,colorful",
  "cold-hunter": "orange,juice,ginger",
  "green-citrus": "green,juice,celery",
  "vibrator": "citrus,juice,fresh",
  "apple-juice": "apple,juice,fresh",
  "kale-aid": "kale,juice,green",
  "carrot-juice": "carrot,juice,orange",
  "celery-juice": "celery,juice,green",
  "beet-juice": "beet,juice,red",

  // Smoothies
  "three-berries-blushing": "berry,smoothie,blueberry",
  "mango-haven": "mango,smoothie,tropical",
  "kale-strength": "kale,smoothie,green",
  "summer-strawberry": "strawberry,smoothie,pink",
  "spinach-mango": "mango,spinach,smoothie",
  "peanut-butter-chocolate": "chocolate,peanut,smoothie",
  "tropical-magic": "tropical,fruit,smoothie",
  "big-blue": "blueberry,smoothie,purple",
  "pink-power": "strawberry,banana,smoothie",
  "mighty-avocado": "avocado,smoothie,green",
  "coffee-touch-smoothie": "coffee,smoothie,banana",

  // Power Bowls
  "strawberry-banana-bowl": "acai,bowl,strawberry",
  "peanut-butter-yogurt-bowl": "yogurt,bowl,granola",
  "matcha-cinnamon-bowl": "matcha,bowl,smoothie",
  "blueberry-spinach-bowl": "blueberry,bowl,smoothie",

  // Breakfast
  "breakfast-panini": "breakfast,panini,egg",
  "breakfast-wrap": "breakfast,wrap,egg",
  "breakfast-combo": "breakfast,coffee,sandwich",

  // Breakfast Sandwiches
  "pesto-turkey-grilled-cheese": "turkey,sandwich,grilled",
  "pesto-beef-grilled-cheese": "beef,sandwich,grilled",
  "grilled-cheese-sandwich": "grilled,cheese,sandwich",

  // Breakfast Bowls
  "cali-tex-bowl": "breakfast,bowl,egg",
  "tex-mex-bowl": "texmex,bowl,breakfast",

  // Burgers & Sides
  "beef-burger": "burger,beef,fries",
  "chicken-burger": "chicken,burger,sandwich",
  "lasagne": "lasagna,pasta,cheese",
  "spaghetti": "spaghetti,pasta,meat",
  "chicken-beef-samosa": "samosa,fried,appetizer",
  "potato-wedges": "potato,wedges,fries",
  "chicken-wings": "chicken,wings,crispy",
  "chicken-nuggets": "chicken,nuggets,crispy",

  // Submarines
  "submarine-turkey-breast": "submarine,turkey,sandwich",
  "submarine-beef": "sub,beef,sandwich",
  "smoked-beef-sandwich": "smoked,beef,sandwich",

  // Quesadillas
  "cheese-quesadilla": "quesadilla,cheese,mexican",
  "corn-cajun-chicken-quesadilla": "quesadilla,chicken,cajun",
  "pesto-chicken-quesadilla": "quesadilla,pesto,chicken",
  "black-bean-quesadilla": "quesadilla,bean,cheese",
  "black-olive-quesadilla": "quesadilla,olive,cheese",

  // Side Salad Bowls
  "lettuce-spinach-salad": "salad,lettuce,spinach",
  "spinach-quinoa-salad": "quinoa,salad,healthy",

  // Extras
  "baby-wrap": "wrap,chicken,small",
  "granola-parfait": "parfait,yogurt,granola",
  "resistance-shot": "ginger,shot,wellness",

  // Hot Beverages
  "coffee": "coffee,cup,hot",
  "espresso": "espresso,coffee,cup",
  "americano": "americano,coffee,black",
  "cappuccino": "cappuccino,coffee,foam",
  "latte": "latte,coffee,milk",
  "mocha": "mocha,coffee,chocolate",
  "black-tea": "tea,black,cup",
  "green-tea": "green,tea,cup",

  // Cold Beverages
  "frozen-yogurt": "frozen,yogurt,dessert",
};

// Category-level fallback keywords
const categoryKeywords: Record<string, string> = {
  "signature-wraps": "wrap,food",
  "grilled-paninis": "panini,sandwich",
  "protein-salad-bowls": "salad,bowl",
  "soups": "soup,bowl",
  "squeezes": "juice,fresh",
  "smoothies": "smoothie,drink",
  "power-bowls": "acai,bowl",
  "breakfast": "breakfast,food",
  "breakfast-sandwiches": "sandwich,breakfast",
  "breakfast-bowls": "breakfast,bowl",
  "burgers-and-sides": "burger,food",
  "submarines": "submarine,sandwich",
  "quesadillas": "quesadilla,food",
  "side-salad-bowls": "salad,fresh",
  "extras": "food,snack",
  "hot-beverages": "coffee,hot",
  "cold-beverages": "frozen,yogurt",
};

/**
 * Generate a LoremFlickr image URL for a menu item.
 * Uses curated keywords for relevance and a hash-based lock for consistency.
 */
export function generateImageUrl(itemId: string): string {
  return `/images/items/${itemId}.jpg`;
}

// ============================================================
// AUTO-POPULATE IMAGE URLs FOR ALL ITEMS
// ============================================================
// Apply image URLs to every menu item on module load.
for (const category of menuCategories) {
  for (const item of category.items) {
    if (!item.imageUrl) {
      item.imageUrl = generateImageUrl(item.id);
    }
  }
}
