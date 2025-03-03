async function getChefBirthday(id) {
  try {
    const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    if (!recipeResponse.ok) {
      throw new Error('Ricetta non trovata');
    }
    const recipe = await recipeResponse.json();

    const userId = recipe.userId;
    if (!userId) {
      throw new Error('ID utente non valido');
    }

    const userResponse = await fetch(`https://dummyjson.com/users/${userId}`);
    if (!userResponse.ok) {
      throw new Error('Utente non trovato');
    }
    const user = await userResponse.json();

    return dayjs(user.birthDate).format('DD/MM/YYYY');
  } catch (error) {
    console.error('Errore:', error.message);
    throw error;
  }
}

(async () => {
  try {
    const birthday = await getChefBirthday(1);
    console.log('Data di nascita dello chef:', birthday);
  } catch (error) {
    console.error('Errore:', error.message);
  }
})();
