import firestore from "./firebase";

export const defaultDataStruct = {
    Name: "",
    Description: "",
    Price: 0,
    Variants: [],
    ImageURL: "",
    Favourite: false,
    Featured: false,
    Quantity: 0
};

const productsColRef = firestore.collection("products");

//Commands for accessing firestore database
//Gets all products from the firestore database
export const getProducts = async () => {
    const querySnap = await productsColRef.get();
    const docs = querySnap.docs;
    const data = docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    return data;
};

//Gets all products with featured set to true
export const getFeaturedProducts = async () => {};

//Gets a single product by it's ID
export const getProductByID = async (id) => {
    const data = (await productsColRef.doc(id).get()).data();

    return data;
};

//Searches products by name
export const searchProducts = async (search) => {};
