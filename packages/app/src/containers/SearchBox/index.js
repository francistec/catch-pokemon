import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux';
import { SearchBox } from '../../components'
import * as Selectors from './selector';
import  { pokemonReducer }  from './reducer';
import  injectReducer  from '../../utils/injectReducer';
import { searchboxBindActions } from './actions'
import searchBoxSaga  from './saga';
import injectSaga from '../../utils/injectSaga';

const mapStateToProps = state => ({
  pokemons: Selectors.getAllPokemons(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(searchboxBindActions, dispatch)
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducers = injectReducer({
  key:'searchBox',
  reducer: pokemonReducer
});

const withSaga = injectSaga({key: 'searchBoxSaga', saga: searchBoxSaga});

export const SearchBoxContainer = compose(
  withConnect,
  withReducers,
  withSaga
)(SearchBox);

