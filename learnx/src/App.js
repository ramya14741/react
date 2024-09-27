import logo from './logo.svg';
import './App.css';
import personalInfo from './component/personalInfo/personalnfo';

function App() {
  return (
    <div className="pers">
      <personalInfo> name="Ramya" age="31"</personalInfo>
      <personalInfo name="r" age="31"/> 
    </div>
  );
}

export default App;
