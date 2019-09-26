<template>
  <div>
    <p> Test {{recipe_name}}</p>
    <form>
      <div class="name">
        <input type="text" placeholder="Recipe Name" id="recipeName"/>
      </div>
      <div class="ingredients">
        <input type="text" placeholder="Ingredient" id="ingredientName"/>
        <input type="text" placeholder="Amount" id="ingredientAmount"/>
      </div>
      <div class="steps">

      </div>
      <div class="notes">
        <input type="text" placeholder="Additional Notes" id="recipeNotes"/>
      </div>
    </form>
  </div>
</template>

<style src="./RecipePage.css"></style>
<script src="./RecipePage.js"></script>