import React from 'react';

// Props: subcategory name (as it appears in the firebase database)
export function SubcategoryPage(props) {
    let classCards = [];
    // pull down the list of classes in this subcategory
    // for <class>  in  <subcategory>
        // create a card component
        // add it to the array of cards
    return (
        // Render the cards
        <div className="container text-left">
            <div className="row row-cols-4">
                {classCards}
            </div>
        </div>
    )
}