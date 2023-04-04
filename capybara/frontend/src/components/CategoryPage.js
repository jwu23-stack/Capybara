import React from 'react';
// TODO: Handle multiple pages (sobbing)
// Props: Category name (as it appears in Firebase)
export function CategoryPage(props) {
    let subcategoryCards = [];
    // Pull down list of subcategories (12 at a time)
    // For each <subcategory> in <category>
        // Create a Card component with the approprite props
        // Add to the array of Cards
    return (
        // Render the cards
        <div className="container text-left">
            <div className="row row-cols-4">
                {categories}
            </div>
        </div>
        
        // TODO: add navigation to additional pages (if needed)
    )
}