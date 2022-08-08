import firestore from "./firebase";

const defaultDataStruct = {
    name: "",
    description: "",
    price: 0,
    variants: [],
    imageURL: "",
    featured: false,
    quantity: 0
};

const productsColRef = firestore.collection("products");

//Commands for accessing firestore database
//Gets all products from the firestore database
export const getAllProducts = async () => {
    const querySnap = await productsColRef.get();
    const docs = querySnap.docs;
    const data = docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    return data;
};

//Gets all products with featured set to true
export const getFeaturedProducts = async () => {
    const querySnap = await productsColRef.where("featured", "==", true).get();
    const docs = querySnap.docs;
    const data = docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
    });
    return data;
    //const docs = (await filteredProducts).docs;
    //if (!data.hasOwnProperty("ImageURL")) {
    //data["ImageURL"] = "";
    //}
    //return data;
};

//Gets a single product by it's ID
export const getProductByID = async (id) => {
    const docRef = await productsColRef.doc(id).get();
    const data = docRef.data();

    return data;
};

//Searches products by name
export const searchProducts = async (search) => {
    const querySnap = await productsColRef.get();
    const docs = querySnap.docs;
    const data = docs.reduce((acc, doc) => {
        const info = { id: doc.id, ...doc.data() };
        if (info.name.toLowerCase().includes(search.toLowerCase()))
            acc.push(info);
        return acc;
    }, []);
    return data;
};
