import React from 'react';

// Props: subcategory name (as it appears in the firebase database)
export function SubcategoryPage(props) {
    let classCards = [];
    // pull down the list of classes in this subcategory
    // for <class>  in  <subcategory>
        // create a card component
        // add it to the array of cards
    return (
        // Render the Cards
        <div class="card-deck">
            {classCards}
        </div>
    )
}