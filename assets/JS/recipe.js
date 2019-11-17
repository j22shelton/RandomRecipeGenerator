

$(document).ready(function() {
    var recipes = ['Thai Stir Fry', 'Breaded Garlic Chicken', 'Stuffed Bell Peppers', 'Salmon', 'Korean Crack Slaw', 'Jambalaya', 'Thai Cashew Chicken', 'Red Lentil Curry', 'OnePan Mexican', 'Stri-Fry', 'Chilli', 'Fajitas'
]
    $("#random-button").on("click", function() {
      var random = recipes[Math.floor(Math.random() * recipes.length)];
      $("#random-recipe").text(random);
    });

});


