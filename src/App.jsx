import './App.scss';
import Details from './Components/Details/Details';
import List from './Components/List/List';

export default function App() {
  return (
    <div className="app">
      <List />
      <Details />
    </div>
  );
}