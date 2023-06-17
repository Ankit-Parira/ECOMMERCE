

const productsArray = [
    {
        id: "price_1NJzTtSIhFcrFu0PWSeWqLE8",
        title: "Coffee",
        price: 100
    },
    {
        id: "price_1NJzY3SIhFcrFu0PovAVRDgE",
        title: "Sunglasses",
        price: 200
    },
    {
        id: "price_1NJzZqSIhFcrFu0PIJbq5ulb",
        title: "Camera",
        price: 50000


    },

    {
        id: "price_1NJzabSIhFcrFu0PD4uYxibb",
        title: "Phone",
        price:60000

    },
    {
        id: "price_1NJzbRSIhFcrFu0PFGJdZICx",
        title: "Iphone14 pro max",
        price:150000

    },
    {
        id:"price_1NJzcfSIhFcrFu0PVihNXIQ0",
        title: "Fresh Vegetables",
        price:50
    }

];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };