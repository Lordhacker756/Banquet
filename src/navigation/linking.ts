const config = {
    screens: {
        Home: {
            path: 'Home'
        },
        Details: {
            path: 'Details/:dish',
            parse: {
                dish: (dish: string) => `${dish}`,
            },
        },
    }
};

const linking = {
    prefixes: ['wobble://'],
    config,
};

export default linking;
