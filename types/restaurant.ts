interface RestaurantType {
    id: number;
    name: string;
    dishes: {
        id: number;
        name: string;
        price: number;
        discount: number;
        image: any;
    }[];
}[]

export default RestaurantType;