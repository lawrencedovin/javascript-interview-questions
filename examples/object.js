let cats = {
    'jerry': 'siamese cat that likes ramen',
    'ketchup': 'fluffy cat likes lasagna',
    'pancake': 'black cat that likes pancakes'
};

for(let [key, value] of Object.entries(cats)) {
    if(value === 'siamese cat that likes ramen') {
        cats[key] = 'siamese cat that likes chicken';
    };
}