import React, { useState, useEffect } from 'react';
import { Card } from './Card.js';
import { pullCards } from './CatalogPage.js';
// TODO: Handle multiple pages (sobbing)
export function CategoryPage() {
    const [subcategoryCards, updateCards] = useState([]); 
    const [pageNumber, updatePageNumber] = useState(0);
    useEffect(() => {
        pullCards(pageNumber, "subcategory", updateCards);  // we're gonna need a custom pullCards for this one
    }, [pageNumber])
    return (
        // Render the cards
        <div className="container text-left">
            <div className="row row-cols-4">
                {subcategoryCards}
            </div>
        </div>
        
        // TODO: add navigation to additional pages (if needed)
    );
}