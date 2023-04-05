import React, { useState, useEffect } from 'react';
import { Card } from './Card.js';
import { getDatabase, ref, get } from 'firebase/database';
// TODO: Handle multiple pages (sobbing)
export function CatalogPage() {
    const [categoryCards, updateCards] = useState([]); 
    const [pageNumber, updatePageNumber] = useState(0);
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            pullCards(pageNumber, "category", updateCards);    
        } 
        return () => {
            isMounted = false;
        }
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

function pullCards(pageNumber, dbPath, updateCards) {
    // Pull down the categories from Firebase (12 at at time)
    const database = getDatabase();
    const categoriesRef = ref(database, dbPath)
    get(categoriesRef).then((snapshot) => {
        if (snapshot.exists()) {
            snapshot.val().forEach((entry) => {
                updateCards((categoryCards) => [...categoryCards, <Card title={entry.name} image="../img/apple.png"></Card>]);  
            })
        } else {
            console.log("No categories!");
        }
    })
}