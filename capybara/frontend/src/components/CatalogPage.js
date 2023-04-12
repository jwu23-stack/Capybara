import React, { useState, useEffect } from 'react';
import { Card } from './Card.js';
import { getDatabase, ref, get } from 'firebase/database';
// TODO: Handle multiple pages (sobbing)
// TODO: Make cards clickable
export function CatalogPage() {
    const [categoryCards, updateCards] = useState([]); 
    const [pageNumber, updatePageNumber] = useState(0);
    useEffect(() => {
        let isMounted = true;
        const database = getDatabase();
        const subcategoryRef = ref(database, "category");
        let cards = [];
        let response = [];

        // Pull all the categories
        get(subcategoryRef).then((snapshot) => {
            if (snapshot.exists()) {
                response = snapshot.val();
            } else {
                console.log("No cagtegories!");                     
            } 
        }).then(() => {
            response.forEach((entry, index) => {
                cards.push(<Card goTo={"/category/" + index} title={entry.name} image="../img/apple.png"></Card>);  
            })
            if (isMounted) {
                updateCards(cards);
            }
        });
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