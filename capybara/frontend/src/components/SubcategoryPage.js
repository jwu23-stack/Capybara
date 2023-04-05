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
        if (isMounted) {
            pullCards(pageNumber, "0", updateCards);  // "0" will be a prop in the future   
        }
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

function pullCards(pageNumber, classIds, updateCards) {
    // Pull down the categories from Firebase (12 at at time)
    updateCards([]);
    const database = getDatabase();
    const baseURL = "/class/";
    const ids = classIds.split(",");
    ids.forEach((id)=> {
        const classRef = ref(database, baseURL + id);
        get(classRef).then((snapshot) => {
            if (snapshot.exists()) {
                updateCards((classCards) => [...classCards, <Card title={snapshot.val().name} image="../img/apple.png"></Card>]);
            } else {
                console.log("No cagtegories!");                     
            } 
        });
    })
}