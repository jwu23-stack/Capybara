import React, { useState, useEffect } from 'react';
import { Card } from './Card.js';
import { getDatabase, ref, get } from 'firebase/database';
// TODO: Handle multiple pages (sobbing)
// props: Classes to display (comma separated string), name of category
export function SubcategoryPage(props) {
    const [classCards, updateCards] = useState([]); 
    const [pageNumber, updatePageNumber] = useState(0);
    useEffect(() => {
        let isMounted = true;
        const database = getDatabase();
        const classRef = ref(database, "class");
        const ids = "0".split(","); // This will be a prop in the future
        let cards = [];
        let response = [];

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