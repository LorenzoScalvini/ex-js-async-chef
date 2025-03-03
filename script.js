async function getChefBirthday(id) {
  try {
    const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    if (!recipeResponse.ok) {
      throw new Error('Ricetta non trovata');
    }
    const recipe = await recipeResponse.json();
    const userId = recipe.userId;
    const userResponse = await fetch(`https://dummyjson.com/users/${userId}`);
    if (!userResponse.ok) {
      throw new Error('Utente non trovato');
    }
    const user = await userResponse.json();

    return user.birthDate;
  } catch (error) {
    console.error('Errore:', error.message);
    throw error;
  }
}
getChefBirthday(1)
  .then((birthday) => console.log('Data di nascita dello chef:', birthday))
  .catch((error) => console.error('Errore:', error.message));
