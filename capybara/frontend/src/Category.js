class Category {
    id;
    name = "";
    subcategories = [];
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