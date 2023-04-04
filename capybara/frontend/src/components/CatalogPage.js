import React from 'react';
// TODO: Handle multiple pages (sobbing)
export function CatalogPage() {
    let categories = [];
    // Pull down the categories from Firebase (12 at at time)
    // For <entry> in <database>
        // Create a Card component with the correct props
    return (
        // Render the cards
        <div class="container text-left">
            <div class="row row-cols-4">
                {categories}
            </div>
        </div>
        
        // TODO: add navigation to additional pages (if needed)
    );
}