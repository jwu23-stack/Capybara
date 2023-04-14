import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from './Card.js';
import { getDatabase, ref, get } from 'firebase/database';
// TODO: Handle multiple pages (sobbing)
// TODO: Add header with image
export function CategoryPage({ subcategoryName }) {
    const [subcategoryCards, updateCards] = useState([]); 
    const [pageNumber, updatePageNumber] = useState(0);
    const urlParams = useParams();
    useEffect(() => {
        let isMounted = true;
        const database = getDatabase();
        const categoryRef = ref(database, "category/" + urlParams.categoryID);
        const subcategoryRef = ref(database, "subcategory");
        let ids = [];
        let cards = [];
        let response = [];
        get(categoryRef).then((snapshot) => {
            if (snapshot.exists() && snapshot.val().subcategories) {
                ids = snapshot.val().subcategories.split(",").map(Number);
            } else {
                console.log("Invalid category!")
                // TODO: Show some kind of error page
            }
        }).then(() => {
            get(subcategoryRef).then((snapshot) => {
                if (snapshot.exists()) {
                    response = snapshot.val();
                } else {
                    console.log("No cagtegories!");                     
                } 
            }).then(() => { 
                ids.forEach((id) => {
                    cards.push(<Card goTo={"/subcategory/" + id} title={response[id].name} image="../img/apple.png"></Card>);
                })
                if (isMounted) {
                    updateCards(cards);
                }
            }); 
        });
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