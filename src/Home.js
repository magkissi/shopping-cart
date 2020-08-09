import React from 'react';
import './home.css';
import Collection from './collection';
import { items } from './items';

 

function Home() {
    return (
        <React.Fragment>
        <div className="header">
                <a href="/"><h4>Home</h4></a>
               |
                <a href="/"><h4>Cart</h4></a>
        </div>
        <div className="home__collection">
                <Collection items={items}/>
            </div>
        </React.Fragment>    
    )
}

export default Home;


