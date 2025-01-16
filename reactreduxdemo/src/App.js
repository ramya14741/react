import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/icecreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HooksCakeContainer></HooksCakeContainer>
      <CakeContainer/>
      <IcecreamContainer></IcecreamContainer>
      <NewCakeContainer></NewCakeContainer>
      <ItemContainer cake></ItemContainer>
      <ItemContainer icecream></ItemContainer>
    </div>
    </Provider>
  );
}

export default App;
