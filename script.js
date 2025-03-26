function searchRecipes() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let recipes = document.getElementsByClassName("recipe-item");

    for (let i = 0; i < recipes.length; i++) {
        let recipeName = recipes[i].getElementsByTagName("p")[0].textContent.toLowerCase();
        if (recipeName.includes(input)) {
            recipes[i].style.display = "block";
        } else {
            recipes[i].style.display = "none";
        }
    }
}

