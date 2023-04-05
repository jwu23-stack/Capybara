import React, { useState, useEffect } from 'react';
import { Card } from './Card.js';
import { getDatabase, ref, get } from 'firebase/database';
// TODO: Handle multiple pages (sobbing)
// props: Subcategories to display (comma separated string), name of category
export function CategoryPage(props) {
    const [subcategoryCards, updateCards] = useState([]); 
    const [pageNumber, updatePageNumber] = useState(0);
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            pullCards(pageNumber, "0,1", updateCards, isMounted);  // "0,1" will be a prop in the future               
        }
        return () => {
            isMounted = false;
        }
    }, [pageNumber]);

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

function pullCards(pageNumber, subcategoryIds, updateCards, isMounted) {
    // Pull down the categories from Firebase (12 at at time)
    updateCards([]);
    const database = getDatabase();
    const baseURL = "/subcategory/";
    const ids = subcategoryIds.split(",");
    ids.forEach((id)=> {
        const subcategoryRef = ref(database, baseURL + id);
        get(subcategoryRef).then((snapshot) => {
            if (snapshot.exists()) {
                updateCards((cards)=>[cards, <Card title={snapshot.val().name} image="../img/apple.png"></Card>]);
            } else {
                console.log("No cagtegories!");                     
            } 
        });
    });
}