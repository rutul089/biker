const bikeList = [{
    "id": 1,
    "stock": 3,
    "name": "Top bike store",
    "price": 1500,
    "address": "4351  Mulberry Lane,West Palm Beach",
    "rating": 4,
    "distance": 12,
    "description": 'Etiam ultricies maximus est eget facilisis. Sed non hendrerit nulla. Fusce tempor dolor et aliquet tempus. Vivamus finibus augue efficitur ex rhoncus maximus. Donec maximus magna nisi, id accumsan nibh faucibus ac.',
    "status": "Open",
    "time": "09.00 AM - 19.00 PM",
    "img": "https://image.shutterstock.com/image-photo/riding-mountain-bike-on-sunrise-600w-528260011.jpg",
    images: [
        'https://image.shutterstock.com/image-photo/riding-mountain-bike-on-sunrise-600w-528260011.jpg',
        'https://image.shutterstock.com/z/stock-photo-bike-at-the-summer-sunset-on-the-tiled-road-in-the-city-park-cycle-closeup-wheel-on-blurred-summer-433516981.jpg',
        'https://image.shutterstock.com/z/stock-photo-handsome-bike-mechanic-repairs-bicycle-in-workshop-closeup-portrait-of-young-bearded-man-wearing-1213592689.jpg',
        'https://image.shutterstock.com/z/stock-photo-sport-woman-looking-at-mobile-phone-outdoors-healthy-lifestyle-and-sport-concept-657810862.jpg',
        'https://image.shutterstock.com/z/stock-photo-young-woman-riding-mountain-bike-on-forest-trail-583471528.jpg',
    ]
}, {
    "id": 2,
    "stock": 10,
    "name": "Bike road store",
    "price": 1244,
    "address": "3675  Goldcliff Circle",
    "description": "Donec sit amet neque metus. Quisque placerat, velit et auctor consequat, magna sem scelerisque tellus, vel venenatis nulla sem vitae mauris.",
    "rating": 5,
    "distance": 42,
    "status": "Close",
    "time": "09.00 AM - 19.00 PM",
    "img": "https://image.shutterstock.com/image-photo/silhouette-bike-on-sky-background-600w-311072927.jpg",
    images: [
        'https://image.shutterstock.com/image-photo/silhouette-bike-on-sky-background-600w-311072927.jpg',
        'https://image.shutterstock.com/z/stock-photo-bike-at-the-summer-sunset-on-the-tiled-road-in-the-city-park-cycle-closeup-wheel-on-blurred-summer-433516981.jpg',
        'https://image.shutterstock.com/z/stock-photo-handsome-bike-mechanic-repairs-bicycle-in-workshop-closeup-portrait-of-young-bearded-man-wearing-1213592689.jpg',
        'https://image.shutterstock.com/z/stock-photo-sport-woman-looking-at-mobile-phone-outdoors-healthy-lifestyle-and-sport-concept-657810862.jpg',
        'https://image.shutterstock.com/z/stock-photo-young-woman-riding-mountain-bike-on-forest-trail-583471528.jpg',
    ]
}, {
    "id": 3,
    "stock": 1,
    "name": "Classic bike store",
    "price": 1300,
    "address": "1541  Elliot Avenue",
    "rating": 3,
    "distance": 42,
    "description": "Vestibulum ipsum ligula, blandit eu ex quis, iaculis egestas purus. Nam eu quam posuere, congue urna et, molestie risus. Nullam rutrum rutrum lorem quis porta. Nunc ultrices metus id dui suscipit, vestibulum finibus erat pretium. Sed aliquet suscipit gravida. Mauris turpis lectus, pharetra et suscipit ac, dapibus vitae velit. In in consequat ante, viverra pharetra nibh. Morbi ut massa maximus, ullamcorper justo vitae, dapibus ligula. Cras a venenatis velit. Donec ac ex nisl. Phasellus in porta nunc.",
    "status": "Open",
    "time": "09.00 AM - 19.00 PM",
    "img": "https://image.shutterstock.com/z/stock-photo-healthy-lifestyle-people-riding-bicycles-in-city-park-748916257.jpg",
    images: [
        'https://image.shutterstock.com/z/stock-photo-healthy-lifestyle-people-riding-bicycles-in-city-park-748916257.jpg',
        'https://image.shutterstock.com/z/stock-photo-bike-at-the-summer-sunset-on-the-tiled-road-in-the-city-park-cycle-closeup-wheel-on-blurred-summer-433516981.jpg',
        'https://image.shutterstock.com/z/stock-photo-handsome-bike-mechanic-repairs-bicycle-in-workshop-closeup-portrait-of-young-bearded-man-wearing-1213592689.jpg',
        'https://image.shutterstock.com/z/stock-photo-sport-woman-looking-at-mobile-phone-outdoors-healthy-lifestyle-and-sport-concept-657810862.jpg',
        'https://image.shutterstock.com/z/stock-photo-young-woman-riding-mountain-bike-on-forest-trail-583471528.jpg',
    ]
}, {
    "id": 4,
    "stock": 13,
    "name": "Black bike community",
    "price": 1000,
    "address": "2392  Nuzum Court",
    "rating": 2,
    "distance": 52,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis auctor quam, in vehicula nisi pulvinar eget. Vivamus vel risus dolor. Nam in risus nec tellus sodales mattis in nec tortor.",
    "status": "Close",
    "time": "09.00 AM - 19.00 PM",
    "img": "https://image.shutterstock.com/image-photo/retro-bicycle-basket-leaning-against-600w-529559653.jpg",
    images: [
        'https://image.shutterstock.com/image-photo/retro-bicycle-basket-leaning-against-600w-529559653.jpg',
        'https://image.shutterstock.com/z/stock-photo-bike-at-the-summer-sunset-on-the-tiled-road-in-the-city-park-cycle-closeup-wheel-on-blurred-summer-433516981.jpg',
        'https://image.shutterstock.com/z/stock-photo-handsome-bike-mechanic-repairs-bicycle-in-workshop-closeup-portrait-of-young-bearded-man-wearing-1213592689.jpg',
        'https://image.shutterstock.com/z/stock-photo-sport-woman-looking-at-mobile-phone-outdoors-healthy-lifestyle-and-sport-concept-657810862.jpg',
        'https://image.shutterstock.com/z/stock-photo-young-woman-riding-mountain-bike-on-forest-trail-583471528.jpg',
    ]
}, {
    "id": 5,
    "stock": 31,
    "name": "Free bike community",
    "price": 900,
    "address": "2244  Jehovah Drive",
    "rating": 5,
    "description": "Integer ac auctor nulla. Nullam erat nulla, aliquet ut lectus non, tincidunt euismod dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    "distance": 37,
    "status": "Close",
    "time": "09.00 AM - 19.00 PM",
    "img": "https://image.shutterstock.com/z/stock-photo-young-stylish-girl-posing-in-the-park-with-bicycle-woman-hipster-cycling-at-sunset-blurred-529670539.jpg",
    images: [
        'https://image.shutterstock.com/z/stock-photo-young-stylish-girl-posing-in-the-park-with-bicycle-woman-hipster-cycling-at-sunset-blurred-529670539.jpg',
        'https://image.shutterstock.com/z/stock-photo-bike-at-the-summer-sunset-on-the-tiled-road-in-the-city-park-cycle-closeup-wheel-on-blurred-summer-433516981.jpg',
        'https://image.shutterstock.com/z/stock-photo-handsome-bike-mechanic-repairs-bicycle-in-workshop-closeup-portrait-of-young-bearded-man-wearing-1213592689.jpg',
        'https://image.shutterstock.com/z/stock-photo-sport-woman-looking-at-mobile-phone-outdoors-healthy-lifestyle-and-sport-concept-657810862.jpg',
        'https://image.shutterstock.com/z/stock-photo-young-woman-riding-mountain-bike-on-forest-trail-583471528.jpg',
    ]
}, {
    "id": 6,
    "stock": 23,
    "name": "Wild bike community",
    "price": 2000,
    "address": "2722  Emeral Dreams Drive",
    "rating": 4,
    "distance": 12,
    "description": "Aliquam et maximus ligula. Curabitur nibh turpis, tristique nec ipsum in, bibendum maximus neque. Sed imperdiet in magna scelerisque fermentum.",
    "status": "Open",
    "time": "09.00 AM - 20.00 PM",
    "img": "https://image.shutterstock.com/image-photo/riding-mountain-bike-on-sunrise-600w-528260011.jpg",
    images: [
        'https://image.shutterstock.com/image-photo/riding-mountain-bike-on-sunrise-600w-528260011.jpg',
        'https://image.shutterstock.com/z/stock-photo-bike-at-the-summer-sunset-on-the-tiled-road-in-the-city-park-cycle-closeup-wheel-on-blurred-summer-433516981.jpg',
        'https://image.shutterstock.com/z/stock-photo-handsome-bike-mechanic-repairs-bicycle-in-workshop-closeup-portrait-of-young-bearded-man-wearing-1213592689.jpg',
        'https://image.shutterstock.com/z/stock-photo-sport-woman-looking-at-mobile-phone-outdoors-healthy-lifestyle-and-sport-concept-657810862.jpg',
        'https://image.shutterstock.com/z/stock-photo-young-woman-riding-mountain-bike-on-forest-trail-583471528.jpg',
    ]
}, {
    "id": 7,
    "stock": 54,
    "name": "Wild bike community",
    "price": 2300,
    "address": "199  Roosevelt Road",
    "rating": 5,
    "description": "Sed pulvinar iaculis odio. Fusce iaculis quis dui in mollis. Proin laoreet urna in scelerisque convallis. In eu feugiat nisi, nec molestie risus. Proin tincidunt orci a ante convallis fringilla. ",
    "distance": 65,
    "status": "Open",
    "time": "09.00 AM - 20.00 PM",
    "img": "https://image.shutterstock.com/z/stock-photo-silhouette-of-a-bike-on-sky-background-on-sunset-311072918.jpg",
    images: [
        'https://image.shutterstock.com/z/stock-photo-silhouette-of-a-bike-on-sky-background-on-sunset-311072918.jpg',
        'https://image.shutterstock.com/z/stock-photo-bike-at-the-summer-sunset-on-the-tiled-road-in-the-city-park-cycle-closeup-wheel-on-blurred-summer-433516981.jpg',
        'https://image.shutterstock.com/z/stock-photo-handsome-bike-mechanic-repairs-bicycle-in-workshop-closeup-portrait-of-young-bearded-man-wearing-1213592689.jpg',
        'https://image.shutterstock.com/z/stock-photo-sport-woman-looking-at-mobile-phone-outdoors-healthy-lifestyle-and-sport-concept-657810862.jpg',
        'https://image.shutterstock.com/z/stock-photo-young-woman-riding-mountain-bike-on-forest-trail-583471528.jpg',
    ]
}]

export { bikeList };