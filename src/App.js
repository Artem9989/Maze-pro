import './App.css';
import {Provider, connect} from 'react-redux';
import { compose } from 'redux';
import {getMazeValue} from './redux/maze-reducer'
import store from './redux/redux-store.js'
import MazeContainer from './components/MazeContainer';

function App() {
  return (
    <div className="App">
      <MazeContainer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  params: state
})
let AppContainer = compose( connect(mapStateToProps, { getMazeValue }))(App);
  

const MazePage = (props) => {
	return <Provider store={store}>
		<AppContainer />
	  </Provider>


  }
  export default MazePage;

