import Card from './Card';
import React from 'react';

const CardList = ({robots}) => {
    
    return (
        <div>
            {
              robots.map(({id, name, email}, i) => {
                return (
                    <Card 
                        key={id} 
                        id={id} 
                        name={name} 
                        email={email}/>
                        )
                })  
            }
        </div>
    );
}

export default CardList;