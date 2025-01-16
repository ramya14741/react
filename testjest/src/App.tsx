import { Skills } from 'components/skills/Skills';
import './App.css';
import { Application } from 'components/application/Application';
import { Counter } from 'components/counter/Counter';

function App() {
  return (
    <div className="App">
     <Application/>
     <Skills skills={["HTML","CSS"]}></Skills>
     <Counter/>
    </div>
  );
}

export default App;
