const menu = [
  // Classic Burgers
  {
    id: 1,
    title: "Classic Burgers",
    items: [
      {
        id: 0,
        name: "Classic Cheeseburger",
        desc: "Juicy beef patty, cheddar cheese, lettuce, tomato, pickles, and our signature sauce, all served on a toasted brioche bun.",
        price: 10.99
      },
      {
        id: 1,
        name: "Bacon Cheeseburger",
        desc: "Beef patty, crispy bacon, American cheese, lettuce, tomato, and our special house sauce on a sesame seed bun.",
        price: 11.99
      },
      {
        id: 2,
        name: "Double Decker Burger",
        desc: "Two beef patties, double cheddar cheese, lettuce, tomato, pickles, and a tangy burger sauce on a toasted brioche bun.",
        price: 13.99
      },
      {
        id: 3,
        name: "BBQ Burger",
        desc: "Grilled beef patty, barbecue sauce, cheddar cheese, crispy onion rings, and lettuce on a sesame seed bun.",
        price: 12.99
      }
    ]
  },
  // Signature Burgers
  {
    id: 2,
    title: "Signature Burgers",
    items: [
      {
        id: 4,
        name: "Truffle Mushroom Burger",
        desc: "Prime beef patty, sautéed mushrooms, Swiss cheese, truffle aioli, and arugula on a pretzel bun.",
        price: 14.99
      },
      {
        id: 5,
        name: "Spicy BBQ Bacon Burger",
        desc: "Spicy BBQ sauce, crispy bacon, pepper jack cheese, onion rings, and jalapeños on a sesame seed bun.",
        price: 13.99
      },
      {
        id: 6,
        name: "Blue Cheese Bliss",
        desc: "Beef patty, blue cheese crumbles, caramelized onions, arugula, and garlic aioli on a toasted brioche bun.",
        price: 14.49
      },
      {
        id: 7,
        name: "Vegan Delight",
        desc: "Grilled veggie patty, avocado, vegan cheese, lettuce, tomato, and vegan mayo on a whole wheat bun.",
        price: 12.99
      }
    ]
  },
  // Sides
  {
    id: 3,
    title: "Sides",
    items: [
      {
        id: 8,
        name: "Classic Fries",
        desc: "Golden crispy fries seasoned with sea salt.",
        price: 3.99
      },
      {
        id: 9,
        name: "Sweet Potato Fries",
        desc: "Sweet potato fries served with a side of spicy mayo.",
        price: 4.99
      },
      {
        id: 10,
        name: "Onion Rings",
        desc: "Crunchy onion rings served with a side of ranch dressing.",
        price: 5.49
      },
      {
        id: 11,
        name: "Loaded Fries",
        desc: "Fries topped with melted cheese, crispy bacon bits, and green onions.",
        price: 6.99
      }
    ]
  },
  // Beverages & Desserts
  {
    id: 4,
    title: "Beverages & Desserts",
    items: [
      {
        id: 12,
        name: "Soft Drinks",
        desc: "Choice of Coke, Diet Coke, Sprite, or Root Beer.",
        price: 2.99
      },
      {
        id: 13,
        name: "Handcrafted Lemonade",
        desc: "Freshly squeezed lemonade served over ice.",
        price: 3.49
      },
      {
        id: 14,
        name: "Milkshakes",
        desc: "Vanilla, chocolate, or strawberry milkshakes topped with whipped cream.",
        price: 5.99
      },
      {
        id: 15,
        name: "Cheesecake",
        desc: "Classic New York-style cheesecake with a graham cracker crust.",
        price: 6.49
      },
      {
        id: 16,
        name: "Chocolate Brownie Sundae",
        desc: "Warm chocolate brownie topped with vanilla ice cream, hot fudge, and whipped cream.",
        price: 6.99
      }
    ]
  },
  // Smoothies
  {
    id: 5,
    title: "Smoothies",
    items: [
      {
        id: 17,
        name: "Berry Blast Smoothie",
        desc: "A blend of strawberries, blueberries, raspberries, and Greek yogurt.",
        price: 6.49
      },
      {
        id: 18,
        name: "Tropical Paradise Smoothie",
        desc: "Mango, pineapple, banana, and coconut milk.",
        price: 6.49
      },
      {
        id: 19,
        name: "Green Detox Smoothie",
        desc: "Spinach, kale, green apple, banana, and almond milk.",
        price: 6.49
      },
      {
        id: 20,
        name: "Peanut Butter Banana Smoothie",
        desc: "Peanut butter, banana, Greek yogurt, and honey.",
        price: 6.49
      }
    ]
  },
  // Salads
  {
    id: 6,
    title: "Salads",
    items: [
      {
        id: 21,
        name: "Caesar Salad",
        desc: "Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing.",
        price: 8.99
      },
      {
        id: 22,
        name: "Greek Salad",
        desc: "Mixed greens, tomatoes, cucumbers, red onions, olives, feta cheese, and Greek dressing.",
        price: 9.99
      },
      {
        id: 23,
        name: "Southwest Chicken Salad",
        desc: "Grilled chicken, black beans, corn, avocado, tomatoes, mixed greens, and chipotle ranch dressing.",
        price: 12.99
      },
      {
        id: 24,
        name: "Caprese Salad",
        desc: "Fresh mozzarella, tomatoes, basil, and balsamic glaze.",
        price: 10.99
      }
    ]
  },
  // Appetizers
  {
    id: 7,
    title: "Appetizers",
    items: [
      {
        id: 25,
        name: "Mozzarella Sticks",
        desc: "Breaded mozzarella sticks served with marinara sauce.",
        price: 7.99
      },
      {
        id: 26,
        name: "Buffalo Wings",
        desc: "Spicy buffalo wings served with celery and blue cheese dressing.",
        price: 9.99
      },
      {
        id: 27,
        name: "Nachos Supreme",
        desc: "Tortilla chips topped with melted cheese, jalapeños, sour cream, guacamole, and salsa.",
        price: 8.99
      },
      {
        id: 28,
        name: "Stuffed Jalapeños",
        desc: "Jalapeños stuffed with cream cheese and wrapped in bacon.",
        price: 7.99
      }
    ]
  },
  // Chicken & Buffalo Wings
  {
    id: 8,
    title: "Chicken & Buffalo Wings",
    items: [
      {
        id: 29,
        name: "Classic Buffalo Wings",
        desc: "Crispy wings tossed in traditional buffalo sauce, served with celery and blue cheese dressing.",
        price: 10.99
      },
      {
        id: 30,
        name: "Honey BBQ Wings",
        desc: "Sweet and tangy honey BBQ sauce on crispy wings, served with ranch dressing.",
        price: 11.49
      },
      {
        id: 31,
        name: "Garlic Parmesan Wings",
        desc: "Wings tossed in garlic butter and parmesan cheese, served with a side of ranch.",
        price: 11.99
      },
      {
        id: 32,
        name: "Spicy Korean Wings",
        desc: "Wings coated in a spicy Korean gochujang sauce, served with sesame seeds and green onions.",
        price: 12.49
      },
      {
        id: 33,
        name: "Lemon Pepper Wings",
        desc: "Crispy wings dusted with lemon pepper seasoning, served with ranch dressing.",
        price: 11.99
      },
      {
        id: 34,
        name: "Teriyaki Wings",
        desc: "Wings glazed with a sweet and savory teriyaki sauce, topped with sesame seeds.",
        price: 11.49
      },
      {
        id: 35,
        name: "Buffalo Tenders",
        desc: "Crispy chicken tenders tossed in buffalo sauce, served with celery and blue cheese dressing.",
        price: 11.99
      },
      {
        id: 36,
        name: "Honey Sriracha Tenders",
        desc: "Chicken tenders coated in a spicy honey sriracha sauce, served with ranch dressing.",
        price: 12.49
      },
      {
        id: 37,
        name: "Southern Fried Chicken",
        desc: "Buttermilk marinated chicken, deep-fried to a golden brown, served with a side of coleslaw.",
        price: 14.99
      },
      {
        id: 38,
        name: "Grilled Chicken Breast",
        desc: "Marinated grilled chicken breast, served with a side of steamed vegetables and rice.",
        price: 13.99
      },
      {
        id: 39,
        name: "Chicken Alfredo",
        desc: "Grilled chicken breast served over fettuccine pasta with creamy Alfredo sauce.",
        price: 15.99
      }
    ]
  }
];
