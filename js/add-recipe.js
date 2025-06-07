document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('add-recipe-form');
  const successMessage = document.getElementById('success-message');
  const recipeListContainer = document.createElement('div');
  recipeListContainer.className = 'recipe-list';
  document.querySelector('.add-recipe-container').appendChild(recipeListContainer);

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const prepTime = document.getElementById('prepTime').value.trim();
    const cookTime = document.getElementById('cookTime').value.trim();
    const servings = document.getElementById('servings').value.trim();
    const instructions = document.getElementById('instructions').value.trim();
    const ingredients = document.getElementById('ingredients').value.trim();
    const tools = document.getElementById('tools').value.trim();

    if (!title || !prepTime || !cookTime || !servings || !instructions || !ingredients || !tools) {
      alert('Please fill in all fields!');
      return;
    }

    const recipeData = {
      title,
      prepTime,
      cookTime,
      servings,
      instructions,
      ingredients,
      tools,
    };

    console.log('Recipe Submitted:', recipeData);

    successMessage.textContent = '🎉 Recipe added successfully!';
    successMessage.style.display = 'block';

    addRecipeToDOM(recipeData);
    form.reset();

    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  });

  function addRecipeToDOM(recipe) {
    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';

    recipeCard.innerHTML = `
      <h3>${recipe.title}</h3>
      <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
      <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
      <p><strong>Servings:</strong> ${recipe.servings}</p>
      <p><strong>Ingredients:</strong><br>${recipe.ingredients.replace(/\n/g, '<br>')}</p>
      <p><strong>Instructions:</strong><br>${recipe.instructions.replace(/\n/g, '<br>')}</p>
      <p><strong>Tools:</strong> ${recipe.tools}</p>
      <button class="delete-btn">Delete</button>
    `;

    recipeCard.querySelector('.delete-btn').addEventListener('click', () => {
      recipeCard.remove();
    });

    recipeListContainer.prepend(recipeCard); // add newest on top
  }
});
