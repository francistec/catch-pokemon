import { connect } from 'react-redux'
import { setPokemonToList } from '../actions'
import { SearchBox } from '../components'

const mapStateToProps = state => ({
  pokemosn: {
      a:1
  }
});


const mapDispatchToProps = dispatch => ({
  addPokemon: pokemon => dispatch(setPokemonToList(pokemon))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)