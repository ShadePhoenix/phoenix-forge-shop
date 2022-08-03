# Phoenix Forge e-Shop Project

## MVP

At a minimum your e-shop website should have two pages:

-   Home Page
    -   This will contain:
        -   A Grid of products
        -   Carousel of featured products
        -   Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants
-   All products should be stored in Firestore:
    -   You should store the following information:
        -   quantity
        -   variants (could be colors, sizes, etc)
        -   price per unit
        -   name
        -   image url
        -   favourited or not (boolean)
            All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application

### Bonus

Using Firestore and react create, a cart system. Create a cart page in your react app Add logic to prevent users from adding items to cart that are no longer in stock. You will have to check the current cart and the product quantity Cart page should have the following:

-   List of products in cart

    -   Ability to change quantity of products in cart
    -   Ability to remove items from cart

-   TIPS :
    -   Make sure your site is scoped to one category of products

### Useful links

-   [React-router-dom](https://reactrouter.com/docs/en/v6/getting-started/overview)
-   [Dummy JSON](https://dummyjson.com/)
-   [Fake Store](https://fakestoreapi.com/)

## Project Breakdown

### Tasks:

-   Use routes
-   Minimum 2 pages (Other pages optional)

    1. Homepage
        - Product carousel for featured products
        - Introduction to the store page
    2. Product page
        - Routing so that the product page shows the product's info page when you click on an item
        - Product grid
    3. (Optional) Where to find us (Map and contact information displayed here)
        - Map display
        - Contact form
        - Other social links
    4. (Optional) Admin page to edit products
        - For test purposes it can be unsecure (or coded/stored password)
        - Admin login page
        - Inventory page

-   Search bar
-   Firestore database
    -   Product data should store the following info:
        -   Quantity (how many of the item the store has)
        -   Variants (colours, sizes, etc.)
        -   Price per unit
        -   Name
        -   Image url
        -   Product description
        -   Favorite or not (bool)
    -   All data must be on firestore, no static data
-   Shopping cart system
    -   Don't allow the adding of out-of-stock products
    -   Track total price of cart
    -   Track total number of products in cart
