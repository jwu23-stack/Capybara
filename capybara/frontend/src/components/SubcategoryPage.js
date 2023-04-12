import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from './Card.js';
import { getDatabase, ref, get } from 'firebase/database';
// TODO: Handle multiple pages (sobbing)
// TODO: Add header with image
export function SubcategoryPage({ subcategoryName }) {
    const [classCards, updateCards] = useState([]); 
    const [pageNumber, updatePageNumber] = useState(0);
    const urlParams = useParams();
    useEffect(() => {
        let isMounted = true;
        const database = getDatabase();
        const subcategoryRef = ref(database, "subcategory/" + urlParams.subcategoryID);
        const classRef = ref(database, "class");
        let ids = [];
        let cards = [];
        let response = [];
        get(subcategoryRef).then((snapshot) => {
            if (snapshot.exists() && snapshot.val().classes) {
                ids = snapshot.val().classes.split(",").map(Number);
            } else {
                console.log("No classes!")
                // TODO: Show some sort of error page
            }
        }).then(() => {
            // Pull all the categories
            get(classRef).then((snapshot) => {
                if (snapshot.exists()) {
                    response = snapshot.val();
                } else {
                    console.log("No cagtegories!");                     
                } 
            }).then(() => {
                ids.forEach((id) => {
                    cards.push(<Card title={response[id].name} image="../img/apple.png"></Card>);
                })
                if (isMounted) {
                    updateCards(cards);
                }
            });
        })
        return () => {
            isMounted = false;
        }
    }, [pageNumber]);

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