import React, { useState, useEffect } from 'react';
import {Card} from './Card.js';
// TODO: Handle multiple pages (sobbing)
export function CatalogPage() {
    const [categoryCards, updateCards] = useState([]); 
    useEffect(() => {
        updateCards(pullCards(0));  
    }, [])
    return (
        // Render the cards
        <div className="container text-left">
            <div className="row row-cols-4">
                {categoryCards}
            </div>
        </div>
        
        // TODO: add navigation to additional pages (if needed)
    );
}

function pullCards(pageNumber) {
    // Pull down the categories from Firebase (12 at at time)
    // For <entry> in <database>
        // Create a Card component with the correct props
        // Add it to the array of Cards
    
    let output = [];
    for (let i = 0; i < 12; i++) { // for  now, just create 12 dummy cards
        output.push(<Card title="Test" image="../img/apple.png" subtitle="Here's a subtitle"></Card>);
    }
    return output;
}