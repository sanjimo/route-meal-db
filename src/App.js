import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Meals from './components/Meals/Meals';
import Home from './components/Home/Home';
import MealDetail from './components/MealDetail/MealDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/home'><Home></Home></Route>
          <Route exact path='/'><Home></Home></Route>
          <Route exact path='/meals'><Meals></Meals></Route>
          <Route path='/meal/:idMeal'><MealDetail></MealDetail></Route>
          <Route exact path='/about'><About></About></Route>
          <Route path='*'><NotFound></NotFound></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
