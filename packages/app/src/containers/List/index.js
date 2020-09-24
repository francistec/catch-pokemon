import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux';
import { List } from '../../components'
import * as Selectors from './selector';
import  { pokeListReducer }  from './reducer';
import  injectReducer  from '../../utils/injectReducer';
import { listBindActions } from './actions'
import listSaga  from './saga';
import injectSaga from '../../utils/injectSaga';

const mapStateToProps = state => ({
  pokemonList: Selectors.getAllPokemons(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(listBindActions, dispatch)
})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducers = injectReducer({
  key:'listBox',
  reducer: pokeListReducer
});

const withSaga = injectSaga({key: 'listSaga', saga: listSaga});

export const ListContainer = compose(
  withConnect,
  withReducers,
  withSaga
)(List);

