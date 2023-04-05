import React, { useState, useEffect } from 'react';
import {Card} from './Card.js';
import { pullCards } from './CatalogPage.js';
// TODO: Handle multiple pages (sobbing)
export function SubcategoryPage() {
    const [classCards, updateCards] = useState([]); 
    const [pageNumber, updatePageNumber] = useState(0);
    useEffect(() => {
        pullCards(pageNumber, "class", updateCards);  // this will need a custom pullCards 
    }, [pageNumber])
    return (
        // Render the cards
        <div className="container text-left">
            <div className="row row-cols-4">
                {classCards}
            </div>
        </div>
        
        // TODO: add navigation to additional pages (if needed)
    );
}