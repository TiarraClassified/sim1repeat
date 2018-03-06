
import React, { Component } from 'react';
import './reset.css';
import './App.css';
import logo from './logo.svg';
import {Link, Route} from 'react-router-dom';
import ShelfA from './Components/ShelfA';
import ShelfB from './Components/ShelfB';
import ShelfC from './Components/ShelfC';
import ShelfD from './Components/ShelfD';
import Routes from './Routes';

class Home extends Component {

    render() {
      return (
        <div>
          <header id='homePage'>
            <img src={logo} alt='this is a logo'/>
            <p>SHELFIE
              </p>
              <p>Look at this thing for styilng competency purposes!</p>
          </header>

          <div><input placeholder='FOCUS ON ME!'/>
          </div>

          <section className="shelfBar">
          
          <Link to='/A'><div>
            Shelf A
          </div></Link>
          <Link to='/B'><div>
            Shelf B
          </div></Link>
          <Link to='/C'><div>
            Shelf C
          </div></Link>
          <Link to='/D'><div>
            Shelf D
          </div></Link>
          </section>
          <div id='texteffect'>Pommy ipsum bugger, odds and sods. Skive nose rag the black death ey up ridiculous scrubber, scarper bobby beefeater pikey, oopsy-daisies how's your father laughing gear collywobbles. Hard cheese old boy Geordie a cracking gob I bid you good day we'll be 'avin less of that Southeners, pennyboy up at the crack of dawn wind up pillock the lakes. Bad Wolf terribly meat and two veg know your onions bent as a nine bob note could be a bit of a git, shortbread that's ace oopsy-daisies sweet fanny adams. Ridicule proper upper class hard cheese old boy a bit miffed slappers, how's your father one feels that lad beefeater.</div>
        </div>
      );
    }
  }
  
  
  export default Home;

