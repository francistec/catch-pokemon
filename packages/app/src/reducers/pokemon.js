const pokemons = (state = [], action) => {
    switch (action.type) {
      case 'SET_POKEMON_TO_LIST':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ];
      default:
        return state
    }
}
  
export default pokemons;