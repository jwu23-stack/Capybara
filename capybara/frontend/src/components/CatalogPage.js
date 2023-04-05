import React, { useState, useEffect } from 'react';
import {Card} from './Card.js';
import { getDatabase, ref, get } from 'firebase/database';
// TODO: Handle multiple pages (sobbing)
export function CatalogPage() {
    const [categoryCards, updateCards] = useState([]); 
    const [pageNumber, updatePageNumber] = useState(0);
    useEffect(() => {
        pullCards(pageNumber, "category", updateCards);  
    }, [pageNumber])
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


export function pullCards(pageNumber, dbPath, updateCards) {
    // Pull down the categories from Firebase (12 at at time)
    let output = [];
    const database = getDatabase();
    const categoriesRef = ref(database, dbPath)
    get(categoriesRef).then((snapshot) => {
        if (snapshot.exists()) {
            updateCards(createCards(snapshot.val()));
        } else {
            console.log("No categories!");
        }
    })
    console.log(output);
    return output;
}

function createCards(data) {
    let cardArray = [];
    // For <entry> in <database>
    data.forEach((entry) => {
        // Create a Card component with the correct props and add it to the array of Cards
        cardArray.push(<Card title={entry.name} image="../img/apple.png"></Card>);
    })
    return cardArray;
}