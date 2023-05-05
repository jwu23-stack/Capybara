import React, { useState, useEffect } from 'react';
import { Card } from './Card.js';
import { Banner } from './Banner.js'
import { getDatabase, ref, get } from 'firebase/database';
// TODO: Handle multiple pages (sobbing)
// TODD: Add header with image
export function CatalogPage() {
    const [categoryCards, updateCards] = useState([]); 
    const [pageNumber, updatePageNumber] = useState(0);
    const banner = <Banner /> //TODO: Get the right image somehow
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
            
            const numCards = cards.length;
            
            for (let i = 0; i < 12 - numCards; i++) {
                cards.push(<Card invisible={true}></Card>);
            }
            
            console.log(cards.length);
            
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