var recipes = ['Thai Stir Fry', 'Breaded Garlic Chicken', 'Stuffed Bell Peppers', 'Salmon', 'Korean Crack Slaw', 'Jambalaya', 'Thai Cashew Chicken', 'Red Lentil Curry', 'OnePan Mexican', 'Stri-Fry', 'Chilli', 'Fajitas'
]

function newRecipe() {
    var randomNumber = Math.floor(Math.random()*11, (recipes.length));
    document.getElementById('recipeDisplay').innerHTLM = recipes[randomNumber];
}