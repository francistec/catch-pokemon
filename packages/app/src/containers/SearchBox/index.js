import { connect } from 'react-redux'
import { setPokemonToList } from './actions'
import { SearchBox } from '../../components'
import * as Selectors from './selector';
import { compose } from 'redux';
import searchBoxSaga  from './saga';
import injectSaga from '../../utils/injectSaga';


const mapStateToProps = state => ({
  pokemons: Selectors.getAllPokemons(state)
});

const mapDispatchToProps = dispatch => ({
  addPokemon: pokemon => dispatch(setPokemonToList(pokemon))
})

console.log(searchBoxSaga);
const withSage = injectSaga({key: 'searchBoxSaga', saga: searchBoxSaga});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export const SearchBoxContainer = compose(
  withConnect
)(SearchBox);

