const { createSlice } = require("@reduxjs/toolkit");

const uniqueId = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
  };

const products = [
    {
        id: uniqueId(),
        name: 'Doggy T-shirt!',
        description:"Oversized T-shirt",
        category: 'Clothes',
        quantity: 10,
        price: 30,
        image: '/assets/images/zaraTshirt.jpg',
        rating: 3,
    },
    {
        id: uniqueId(),
        name: 'Chair',
        description:"White chair, for relaxation.",
        category: 'furniture',
        quantity: 10,
        price: 200,
        image: '/assets/images/sofa.png',
        rating: 3,
    },
    {
        id: uniqueId(),
        name: 'Chair 1',
        description:"White chair, for relaxation.",
        category: 'furniture',
        quantity: 10,
        price: 200,
        image: '/assets/images/sofa.png',
        rating: 3,
    },
    {
        id: uniqueId(),
        name: 'Chair 2',
        description:"White chair, for relaxation.",
        category: 'furniture',
        quantity: 10,
        price: 200,
        image: '/assets/images/sofa.png',
        rating: 3,
    },
    {
        id: uniqueId(),
        name: 'Chair 3',
        description:"White chair, for relaxation.",
        category: 'furniture',
        quantity: 10,
        price: 200,
        image: '/assets/images/sofa.png',
        rating: 3,
    },
    {
        id: uniqueId(),
        name: 'Chair 4',
        description:"White chair, for relaxation.",
        category: 'furniture',
        quantity: 10,
        price: 200,
        image: '/assets/images/sofa.png',
        rating: 3,
    },
    {
        id: uniqueId(),
        name: 'Chair 5',
        description:"White chair, for relaxation.",
        category: 'furniture',
        quantity: 10,
        price: 200,
        image: '/assets/images/sofa.png',
        rating: 3,
    },
    {
        id: uniqueId(),
        name: 'Iphone 15',
        description:"Apple Mobile",
        category: 'Electronics',
        quantity: 10,
        price: 299,
        image: '/assets/images/iphone.jpg',
        rating: 3,
    },
]

const productsSlice = createSlice({
    name: 'products',
    description:"",
    initialState: products,
    reducers: {

    }
})

export const {} = productsSlice.actions

export default productsSlice.reducer