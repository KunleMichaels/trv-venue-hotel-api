const faker =  require('faker');
let database = { hotels: [] };

const threshold = 10;

function calcPriceCategory(price_category){
    switch (price_category) {
        case "low":
            return { 'min': 200, 'max': 700, 'dec': 0, 'symbol': '$'};
        case "medium":
            return { 'min': 701, 'max': 1000, 'dec': 0, 'symbol': '$'};
        case "high":
            return { 'min': 1001, 'max': 5000, 'dec': 0, 'symbol': '$'};
        default:
            return { 'min': 200, 'max': 700, 'dec': 0, 'symbol': '$'};
    }
}

function createRooms(price_category){
    let rooms = [];
    const random = faker.datatype.number({ 'min': 3, 'max': 10 });
    const {min, max, dec, symbol} = calcPriceCategory(price_category);
    
    for(let i=0; i<random; i++){
        rooms.push({
            id: faker.datatype.uuid(),
            name: faker.address.cityName(),
            description: faker.random.words(),
            max_occupancy: faker.datatype.number({
                'min': 1,
                'max': 4
            }),
            rating: faker.datatype.number({
                'min': 1,
                'max': 5
            }),
            price_in_usd: faker.finance.amount(min, max, dec, symbol),
            available: faker.datatype.boolean()
        })
    }

    return rooms;
}

function generateImages(){
    let album = [];
    const random = faker.datatype.number({ 'min': 3, 'max': 10 });
    for(let i=0; i<random; i++){
        album.push(faker.image.unsplash.buildings(640, 480, 'hotels'))
    }
    return album;
}

for (let i = 1; i<= threshold; i++) {
    const price_category = faker.random.arrayElement(['low', 'medium', 'high']);

    database.hotels.push({
        "id": faker.datatype.uuid(),
        "name": faker.company.companyName(),
        "description": faker.company.catchPhraseDescriptor(),
        "distance_to_venue": faker.datatype.number({
            'min': 1,
            'max': 50
        }),
        "rating": faker.datatype.number({
            'min': 1,
            'max': 5
        }),
        "price_category": price_category,
        "amenities": faker.random.arrayElements(['free_parking','free_wifi','gym','pets','pool','restaurant','spa'], faker.datatype.number({ 'min': 1, 'max': 7 })),
        "images": generateImages(),
        "rooms": createRooms(price_category)
    });
   }
  
    console.log(JSON.stringify(database));