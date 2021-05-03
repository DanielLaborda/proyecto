import {
    SET_CAR_CATEGORIES,
    SET_VEHICLES,
    FILTER_CARS_WITH_CATEGORY_ID,
    FILTER_CARS_WITH_ID
} from './types';

export function setVehicle() {
    return({
        type: SET_VEHICLES,
        payload: [
            {
                _id: 0,
                name: 'Zupra RT',
                banner: 'http://via.placeholder.com/1200x700',
                categories: 1,
                slogan: 'Volver a volar',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
                versions: [{
                    _id:0, 
                    name: 'Premium',
                    urlImage: 'http://via.placeholder.com/100x100',
                    list: [
                        '6 Cilindros en V, 1.5 Litros de 16 válvulas',
                        'Transmision 8 velocidades',
                        'Estructura de la carroceria de ultima tecnogia',
                        'Monitor de cámara de reversa',
                        'Luces LED'
                    ],
                    base_price: 31000,                
                }],
                extras: [1],
                warranty: '4 años',
                images: [
                    {
                        _id: 0,
                        img: 'http://via.placeholder.com/500x500'
                    },{
                        _id: 1,
                        img: 'http://via.placeholder.com/800x500'
                    },{
                        _id: 2,
                        img: 'http://via.placeholder.com/500x500'
                    },
                ],
                colors:[
                    {
                        _id:0,
                        name: 'Azul',
                        color: '1D2C7B',
                        imageColor: 'http://via.placeholder.com/400x400',
                        price: 500
                    },
                    {
                        _id:1,
                        name: 'Rojo',
                        color: 'B3171B',
                        imageColor: 'http://via.placeholder.com/400x400',
                        price: 600
                    },
                    {
                        _id:2,
                        name: 'Acero',
                        color: '1B1C24',
                        imageColor: 'http://via.placeholder.com/400x400',
                        price: 550
                    }
                ]
            },
            {
                _id: 1,
                name: 'm3x',
                banner: 'http://via.placeholder.com/1200x700',
                categories: 0,
                slogan: 'Comodidad con Estilo',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
                versions: [
                    {
                        _id: 1,
                        name: 'Standart',
                        urlImage: 'http://via.placeholder.com/100x100',
                        list: [
                            '4 Cilindros, 1.5 Litros de 16 válvulas',
                            'Transmision 8 velocidades',
                            'Estructura de la carroceria de ultima tecnogia'
                        ],
                        base_price: 25000
                    },
                    {
                        _id: 2,
                        name: 'Confort',
                        urlImage: 'http://via.placeholder.com/100x100',
                        list: [
                            '4 Cilindros, 1.5 Litros de 16 válvulas',
                            'Transmision 8 velocidades',
                            'Estructura de la carroceria de ultima tecnogia',
                            'Monitor de cámara de reversa'
                        ],
                        base_price: 27000
                    },
                    {
                        _id: 3,
                        name: 'Premium3',
                        urlImage: 'http://via.placeholder.com/100x100',
                        list: [
                            '4 Cilindros, 1.5 Litros de 16 válvulas',
                            'Transmision 8 velocidades',
                            'Estructura de la carroceria de ultima tecnogia',
                            'Monitor de cámara de reversa',
                            'Luces LED'
                        ],
                        base_price: 32000
                    }
                ],
                extras: [1,2],
                warranty: '10 años',
                images: [
                    {
                        _id: 0,
                        img: 'http://via.placeholder.com/500x500'
                    },{
                        _id: 1,
                        img: 'http://via.placeholder.com/800x500'
                    },{
                        _id: 2,
                        img: 'http://via.placeholder.com/500x500'
                    },
                ],
                colors:[
                    {
                        _id:0,
                        name: 'Azul',
                        color: '1D2C7B',
                        imageColor: 'http://via.placeholder.com/400x400',
                        price: 500
                    },
                    {
                        _id:1,
                        name: 'Rojo',
                        color: 'B3171B',
                        imageColor: 'http://via.placeholder.com/400x400',
                        price: 600
                    },
                    {
                        _id:2,
                        name: 'Acero',
                        color: '1B1C24',
                        imageColor: 'http://via.placeholder.com/400x400',
                        price: 550
                    }
                ]
            },
            {
                _id: 2,
                name: 'Hilux',
                banner: 'http://via.placeholder.com/1200x700',
                categories: 2,
                slogan: 'Espacio para toda la familia',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
                versions: [
                    {
                        _id: 4,
                        name: 'Standart',
                        urlImage: 'http://via.placeholder.com/100x100',
                        list: [
                            '4 Cilindros, 1.5 Litros de 16 válvulas',
                            'Transmision 8 velocidades',
                            'Estructura de la carroceria de ultima tecnogia'
                        ],
                        base_price: 26000
                    },
                    {
                        _id: 5,
                        name: 'Confort',
                        urlImage: 'http://via.placeholder.com/100x100',
                        list: [
                            '4 Cilindros, 1.5 Litros de 16 válvulas',
                            'Transmision 8 velocidades',
                            'Estructura de la carroceria de ultima tecnogia',
                            'Monitor de cámara de reversa'
                        ],
                        base_price: 27850,
                    }, 
                    {
                        _id: 6,
                        name: 'Premium',
                        urlImage: 'http://via.placeholder.com/100x100',
                        list: [
                            '4 Cilindros, 1.5 Litros de 16 válvulas',
                            'Transmision 8 velocidades',
                            'Estructura de la carroceria de ultima tecnogia',
                            'Monitor de cámara de reversa',
                            'Luces LED'
                        ],
                        base_price: 28700,
                    }
                ],
                extras: [2,4],
                warranty: '1 año',
                images: [
                    {
                        _id: 0,
                        img: 'http://via.placeholder.com/500x500'
                    },{
                        _id: 1,
                        img: 'http://via.placeholder.com/800x500'
                    },{
                        _id: 2,
                        img: 'http://via.placeholder.com/500x500'
                    },
                ],
                colors:[
                    {
                        _id:0,
                        name: 'Azul',
                        color: '1D2C7B',
                        imageColor: 'http://via.placeholder.com/400x400',
                        price: 500
                    },
                    {
                        _id:1,
                        name: 'Rojo',
                        color: 'B3171B',
                        imageColor: 'http://via.placeholder.com/400x400',
                        price: 600
                    },
                    {
                        _id:2,
                        name: 'Acero',
                        color: '1B1C24',
                        imageColor: 'http://via.placeholder.com/400x400',
                        price: 550
                    }
                ]
            },
            {
                _id: 3,
                name: 'Prisa',
                banner: 'http://via.placeholder.com/1200x700',
                slogan: 'El futuro, ahora',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
                categories: 3,
                versions: [
                    {
                        _id: 7,
                        name: 'Standart',
                        urlImage: 'http://via.placeholder.com/100x100',
                        list: [
                            '4 Cilindros, 1.5 Litros de 16 válvulas',
                            'Transmision 8 velocidades',
                            'Estructura de la carroceria de ultima tecnogia'
                        ],
                        base_price: 35000,
                    },
                    {
                        _id: 8,
                        name: 'Confort',
                        urlImage: 'http://via.placeholder.com/100x100',
                        list: [
                            '4 Cilindros, 1.5 Litros de 16 válvulas',
                            'Transmision 8 velocidades',
                            'Estructura de la carroceria de ultima tecnogia',
                            'Monitor de cámara de reversa'
                        ],
                        base_price: 40000
                    }
                ],
                extras: [1,3,5],
                warranty: '3 años',
                images: [
                    {
                        _id: 0,
                        img: 'http://via.placeholder.com/500x500'
                    },{
                        _id: 1,
                        img: 'http://via.placeholder.com/800x500'
                    },{
                        _id: 2,
                        img: 'http://via.placeholder.com/500x500'
                    },
                ],
                colors:[
                    {
                        _id:0,
                        color: 'Azul',
                        imageColor: 'http://via.placeholder.com/400x400',
                        price: 500
                    },
                    {
                        _id:1,
                        color: 'Rojo',
                        imageColor: 'http://via.placeholder.com/400x400',
                        price: 450
                    },
                    {
                        _id:2,
                        color: 'Acero',
                        imageColor: 'http://via.placeholder.com/400x400',
                        price: 700
                    }
                ]
            },
        ]
    })
}

export function setCarCategories() {
    return({
        type: SET_CAR_CATEGORIES,
        payload: [
            {
                _id:0,
                name: 'Sedan',
                image: 'http://via.placeholder.com/500x500',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            },
            {
                _id:1,
                name: 'Sport',
                image: 'http://via.placeholder.com/500x500',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            },
            {
                _id:2,
                name: 'SUV',
                image: 'http://via.placeholder.com/500x500',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            },
            {
                _id:3,
                name: 'Hibridos',
                image: 'http://via.placeholder.com/500x500',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            }
        ]
    })
}


export function filterCarsWithCategoryId(_id) {
    return({
        type:FILTER_CARS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function filterCarById(_id) {
    return({
        type:FILTER_CARS_WITH_ID,
        payload: _id
    })
}


