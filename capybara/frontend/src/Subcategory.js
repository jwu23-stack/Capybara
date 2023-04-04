class Subcategory {
    id;
    name = "";
    classes = "";
    parentCategory = "";
    parentCategoryID = "";
    picture = "";

    constructor(id, name, subcategories, picture) {
        this.id = id;
        this.name = name;
        this.subcatgories = subcategories;
        this.picture = picture;
    }
    
    get numSubCats() {
        return this.subcatgories.length;
    }