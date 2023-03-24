import RestaurantType from "../../types/restaurant";
import {
    egg_salad,
    fruits_and_vegetable,
    grilled_paneer,
    momos,
    paneer_salad,
    salad,
    sandwich,
    shushi,
    shushi_2,
    toast_with_eggs,
    veg_shushi,
    vegetable_salad
} from "../assets";

const restaurants: RestaurantType[] = [
    {
        id: 1,
        name: 'The Japanese Restaurant',
        dishes: [
            {
                id: 1,
                name: 'Shushi',
                price: 500,
                discount: 20,
                image: shushi
            },
            {
                id: 2,
                name: 'Traditional Shushi',
                price: 980,
                discount: 25,
                image: shushi_2
            },
            {
                id: 3,
                name: 'Veg Shushi',
                price: 200,
                discount: 35,
                image: veg_shushi
            },
        ],
    },
    {
        id: 2,
        name: 'The Indian Restaurant',
        dishes: [
            {
                id: 5,
                name: 'Egg Salad',
                price: 150,
                discount: 15,
                image: egg_salad
            },
            {
                id: 6,
                name: 'Paneer Salad',
                price: 600,
                discount: 35,
                image: paneer_salad
            },
            {
                id: 7,
                name: 'Salad',
                price: 100,
                discount: 25,
                image: salad
            },
            {
                id: 8,
                name: 'Vegetable Salad',
                price: 250,
                discount: 15,
                image: vegetable_salad
            },
            {
                id: 9,
                name: 'Fruits & Vegetable',
                price: 100,
                discount: 25,
                image: fruits_and_vegetable
            },
            {
                id: 10,
                name: 'Grilled Paneer',
                price: 1000,
                discount: 15,
                image: grilled_paneer
            }]
    },
    {
        id: 3,
        name: 'The Italian Restaurant',
        dishes: [
            {
                id: 11,
                name: 'Sandwich',
                price: 250,
                discount: 20,
                image: sandwich
            },
            {
                id: 12,
                name: 'Toast with Eggs',
                price: 150,
                discount: 15,
                image: toast_with_eggs
            },
        ],
    },
    {
        id: 4,
        name: 'The Chinese Restaurant',
        dishes: [
            {
                id: 4,
                name: 'Momos',
                price: 200,
                discount: 10,
                image: momos
            },
        ],
    },
]

export default restaurants;
