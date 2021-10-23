function getRecipeById(recipe_id){
    return Promise.resolve(`Pigs In A Blanket Id: ${recipe_id}`)
}

module.exports = {
    getRecipeById
}