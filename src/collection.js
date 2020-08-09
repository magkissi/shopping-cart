import React from 'react'
import Card from './card';
import './collection.css';



function Collection ({items}) {
    const collectionItems = items.map(item => {
        return <Card
            key={item.name}
            image={item.image}
            description={item.description}
            name={item.name}
            price={item.price}
        
        />
    })

    return (
        
        <div className="collection__container">
          {collectionItems}  
        </div>
    )
}

export default Collection;
