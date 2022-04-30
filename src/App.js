import React from "react";
import Navbar from './components/navbar'
import Sector from "./components/Sector";
import Map from './components/Map'
import Slideshow from "./components/Slideshow";
import { BrowserRouter,  Switch, Route , NavLink as Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import './styles.css'
import BabaniMg from "./companies/BabaniMg";
import AdriatikMare from "./companies/AdriatikMare";
import Admin from "./components/Admin";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact>
        <Slideshow imgUrl='https://images.pexels.com/photos/5848486/pexels-photo-5848486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          <Sector 
          imageUrl='https://images.pexels.com/photos/4015400/pexels-photo-4015400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          title='Kompania e Mishit'
          pathUrl='babanimg/'
          />
          <Sector 
          imageUrl='https://images.pexels.com/photos/10375857/pexels-photo-10375857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          title='Kompania e Midhjeve'
          pathUrl='mareadriatik/'
          />
        </div>

        </Route>
        <Route path='/mareadriatik'>
          <AdriatikMare />
          <Map />
        </Route>
        <Route path='/babanimg'>
          <BabaniMg />
        </Route>
        <Route path='/admin'>
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;

