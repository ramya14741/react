import logo from './logo.svg';
import './App.css';

function App() {
  const fruits = [
    {id:1,name:"Apple"},
    {id:2, name:"Banana"},
    {id:3, name:"Cherry"}
  ];
  return(
    <ul>
   {fruits.map((fruit)=>(
    <li key={fruit.id}>{fruit.name}</li>
   ))}
    </ul>
  )
}

export default App;
