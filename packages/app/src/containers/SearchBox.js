import { connect } from 'react-redux'
import { setPokemonToList } from '../actions'
import { SearchBox } from '../components'
import * as Selectors from '../selectors/pokemons';

const mapStateToProps = state => ({
  pokemosn: Selectors.getAllPokemons(state)
});

const mapDispatchToProps = dispatch => ({
  addPokemon: pokemon => dispatch(setPokemonToList(pokemon))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)