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
                banner: 'zupra/zupra-banner.jpg',
                imageCategory: 'zupra/imageCategory.png',
                images: [
                    {
                        _id: 0,
                        img: 'zupra/zupra1.jpg'
                    },{
                        _id: 1,
                        img: 'zupra/zupra2.jpg'
                    },{
                        _id: 2,
                        img: 'zupra/zupra3.jpg'
                    },{
                        _id: 3,
                        img: 'zupra/zupra4.jpg'
                    }
                ],
                categories: 1,
                slogan: 'Volver a volar',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
                warranty: '4 años',
                versions: [{
                    _id:0, 
                    name: 'Premium',
                    urlImage: 'zupra/versions/version.jpg',
                    list: [
                        '6 Cilindros en V, 1.5 Litros de 16 válvulas',
                        'Transmision 8 velocidades',
                        'Estructura de la carroceria de ultima tecnogia',
                        'Monitor de cámara de reversa',
                        'Luces LED'
                    ],
                    base_price: 31000,                
                }],
                colors:[
                    {
                        _id:0,
                        name: 'yellow',
                        color: 'zupra/colors/yellow.png',
                        imageColor: 'zupra/colors/yellow-car.png',
                        price: 500
                    },
                    {
                        _id:1,
                        name: 'Rojo',
                        color: 'zupra/colors/red.png',
                        imageColor: 'zupra/colors/red-car.png',
                        price: 600
                    },
                    {
                        _id:2,
                        name: 'Acero',
                        color: 'zupra/colors/grey.png',
                        imageColor: 'zupra/colors/grey-car.png',
                        price: 550
                    }
                ],
                interiors: [
                    {
                        _id: 0,
                        imageInterior: 'zupra/interior/interior-base.jpg',
                        name: 'Base',
                        complements: [
                            'Full Led',
                            'Leather'
                        ],
                        price: 300
                    },
                    {
                        _id: 1,
                        imageInterior: 'zupra/interior/interior-medium.jpg',
                        name: 'medium',
                        complements: [
                            'Full Led',
                            'Leather',
                            'dual zone climate control'
                        ],
                        price: 300
                    },
                    {
                        _id: 2,
                        imageInterior: 'zupra/interior/interior-premium.png',
                        name: 'Premium',
                        complements: [
                            'Full Led',
                            'Leather',
                            'dual zone climate control',
                            'Bose Music'
                        ],
                        price: 300
                    }
                ],
                rims:[
                    {
                        _id:0,
                        size: '16"',
                        model: 'LL',
                        img: 'zupra/rims/rims1.png',
                        material: 'Aluminio',
                        price: 0
                    },
                    {
                        _id:1,
                        size: '17"',
                        model: 'LS',
                        img: 'zupra/rims/rims2.png',
                        material: 'Aluminio',
                        price: 300
                    },
                    {
                        _id:2,
                        size: '18"',
                        model: 'HL',
                        img: 'zupra/rims/rims3.png',
                        material: 'Aluminio',
                        price: 500
                    }
                ]
            },
            {
                _id: 1,
                name: 'm3x',
                banner: 'm3x/m3x-banner.jpg',
                imageCategory: 'm3x/imageCategory.png',
                images: [
                    {
                        _id: 0,
                        img: 'm3x/m3x1.jpg'
                    },{
                        _id: 1,
                        img: 'm3x/m3x2.jpg'
                    },{
                        _id: 2,
                        img: 'm3x/m3x3.jpg'
                    },{
                        _id: 3,
                        img: 'm3x/m3x4.jpg'
                    }
                ],
                categories: 0,
                slogan: 'Comodidad con Estilo',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
                warranty: '10 años',
                versions: [
                    {
                        _id: 1,
                        name: 'Standart',
                        urlImage: 'm3x/versions/version1.jpg',
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
                        urlImage: 'm3x/versions/version2.jpg',
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
                        urlImage: 'm3x/versions/version3.jpg',
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
                interiors: [
                    {
                        _id: 0,
                        imageInterior: 'm3x/interior/interior-base.jpg',
                        name: 'Base',
                        complements: [
                            'Full Led',
                            'Leather'
                        ],
                        price: 300
                    },
                    {
                        _id: 1,
                        imageInterior: 'm3x/interior/interior-medium.jpg',
                        name: 'medium',
                        complements: [
                            'Full Led',
                            'Leather',
                            'dual zone climate control'
                        ],
                        price: 300
                    },
                    {
                        _id: 2,
                        imageInterior: 'm3x/interior/interior-premium.png',
                        name: 'Premium',
                        complements: [
                            'Full Led',
                            'Leather',
                            'dual zone climate control',
                            'Bose Music'
                        ],
                        price: 300
                    }
                ],
                colors:[
                    {
                        _id:0,
                        name: 'Blue',
                        color: 'm3x/colors/blue.png',
                        imageColor: 'm3x/colors/blue-car.png',
                        price: 500
                    },
                    {
                        _id:1,
                        name: 'Green',
                        color: 'm3x/colors/green.png',
                        imageColor: 'm3x/colors/green-car.png',
                        price: 600
                    },
                    {
                        _id:2,
                        name: 'White',
                        color: 'm3x/colors/white.png',
                        imageColor: 'm3x/colors/white-car.png',
                        price: 550
                    },
                    {
                        _id:3,
                        name: 'Yellow',
                        color: 'm3x/colors/yellow.png',
                        imageColor: 'm3x/colors/yellow-car.png',
                        price: 550
                    }
                ],
                rims:[
                    {
                        _id:0,
                        size: '16"',
                        model: 'LL',
                        img: 'm3x/rims/rims1.png',
                        material: 'Aluminio',
                        price: 0
                    },
                    {
                        _id:1,
                        size: '17"',
                        model: 'LS',
                        img: 'm3x/rims/rims2.png',
                        material: 'Aluminio',
                        price: 200
                    },
                    {
                        _id:2,
                        size: '18"',
                        model: 'HL',
                        img: 'm3x/rims/rims3.png',
                        material: 'Aluminio',
                        price: 300
                    }
                ]
            },
            {
                _id: 2,
                name: 'Auri3',
                banner: 'auri3/auri-banner.jpg',
                imageCategory: 'auri3/imageCategory.png',
                images: [
                    {
                        _id: 0,
                        img: 'auri3/auri1.jpg'
                    },{
                        _id: 1,
                        img: 'auri3/auri2.jpg'
                    },{
                        _id: 2,
                        img: 'auri3/auri3.jpg'
                    },{
                        _id: 3,
                        img: 'auri3/auri4.jpg'
                    }
                ],
                categories: 0,
                slogan: 'Comodidad con Estilo',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
                warranty: '10 años',
                versions: [
                    {
                        _id: 1,
                        name: 'Standart',
                        urlImage: 'auri3/versions/version1.jpg',
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
                        urlImage: 'auri3/versions/version2.jpg',
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
                        urlImage: 'auri3/versions/version3.jpg',
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
                interiors: [
                    {
                        _id: 0,
                        imageInterior: 'auri3/interior/interior-base.jpg',
                        name: 'Base',
                        complements: [
                            'Full Led',
                            'Leather'
                        ],
                        price: 300
                    },
                    {
                        _id: 1,
                        imageInterior: 'auri3/interior/interior-medium.jpg',
                        name: 'medium',
                        complements: [
                            'Full Led',
                            'Leather',
                            'dual zone climate control'
                        ],
                        price: 300
                    },
                    {
                        _id: 2,
                        imageInterior: 'auri3/interior/interior-premium.jpg',
                        name: 'Premium',
                        complements: [
                            'Full Led',
                            'Leather',
                            'dual zone climate control',
                            'Bose Music'
                        ],
                        price: 300
                    }
                ],
                colors:[
                    {
                        _id:0,
                        name: 'Yellow',
                        color: 'auri3/colors/yellow.png',
                        imageColor: 'auri3/colors/yellow-car.png',
                        price: 500
                    },
                    {
                        _id:1,
                        name: 'Red',
                        color: 'auri3/colors/red.png',
                        imageColor: 'auri3/colors/red-car.png',
                        price: 600
                    },
                    {
                        _id:2,
                        name: 'White Snow',
                        color: 'auri3/colors/white.png',
                        imageColor: 'auri3/colors/white-car.png',
                        price: 550
                    }
                ],
                rims:[
                    {
                        _id:0,
                        size: '16"',
                        model: 'LL',
                        img: 'auri3/rims/rims1.png',
                        material: 'Aluminio',
                        price: 0
                    },
                    {
                        _id:1,
                        size: '17"',
                        model: 'LS',
                        img: 'auri3/rims/rims2.png',
                        material: 'Aluminio',
                        price: 230
                    },
                    {
                        _id:2,
                        size: '18"',
                        model: 'HL',
                        img: 'auri3/rims/rims3.png',
                        material: 'Aluminio',
                        price: 240
                    }
                ]
            },
            {
                _id: 3,
                name: 'Peug',
                banner: 'peug/peug-banner.jpg',
                imageCategory: 'peug/imageCategory.png',
                images: [
                    {
                        _id: 0,
                        img: 'peug/peug1.jpg'
                    },{
                        _id: 1,
                        img: 'peug/peug2.jpg'
                    },{
                        _id: 2,
                        img: 'peug/peug3.jpg'
                    },{
                        _id: 3,
                        img: 'peug/peug4.jpg'
                    }
                ],
                categories: 0,
                slogan: 'Comodidad con Estilo',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
                warranty: '10 años',
                versions: [
                    {
                        _id: 1,
                        name: 'Standart',
                        urlImage: 'peug/versions/version1.jpg',
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
                        urlImage: 'peug/versions/version2.jpg',
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
                        name: 'Premium',
                        urlImage: 'peug/versions/version3.jpg',
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
                interiors: [
                    {
                        _id: 0,
                        imageInterior: 'peug/interior/interior-base.jpg',
                        name: 'Base',
                        complements: [
                            'Full Led',
                            'Leather'
                        ],
                        price: 300
                    },
                    {
                        _id: 1,
                        imageInterior: 'peug/interior/interior-medium.jpg',
                        name: 'medium',
                        complements: [
                            'Full Led',
                            'Leather',
                            'dual zone climate control'
                        ],
                        price: 300
                    },
                    {
                        _id: 2,
                        imageInterior: 'peug/interior/interior-premium.jpg',
                        name: 'Premium',
                        complements: [
                            'Full Led',
                            'Leather',
                            'dual zone climate control',
                            'Bose Music'
                        ],
                        price: 300
                    }
                ],
                colors:[
                    {
                        _id:0,
                        name: 'Black',
                        color: 'peug/colors/black.png',
                        imageColor: 'peug/colors/black-car.png',
                        price: 500
                    },
                    {
                        _id:1,
                        name: 'White Pearl',
                        color: 'peug/colors/white.png',
                        imageColor: 'peug/colors/white-car.png',
                        price: 600
                    },
                    {
                        _id:2,
                        name: 'Acero',
                        color: 'peug/colors/grey.png',
                        imageColor: 'peug/colors/grey-car.png',
                        price: 550
                    }
                ],
                rims:[
                    {
                        _id:0,
                        size: '16"',
                        model: 'LL',
                        img: 'peug/rims/rims1.png',
                        material: 'Aluminio',
                        price: 50
                    },
                    {
                        _id:1,
                        size: '17"',
                        model: 'LS',
                        img: 'peug/rims/rims2.png',
                        material: 'Aluminio',
                        price: 250
                    },
                    {
                        _id:2,
                        size: '18"',
                        model: 'HL',
                        img: 'peug/rims/rims3.png',
                        material: 'Aluminio',
                        price: 400
                    }
                ]
            },
            {
                _id: 4,
                name: 'Copa',
                banner: 'copa/copa-banner.jpg',
                imageCategory: 'copa/imageCategory.png',
                images: [
                    {
                        _id: 0,
                        img: 'copa/copa1.jpg'
                    },{
                        _id: 1,
                        img: 'copa/copa2.jpg'
                    },{
                        _id: 2,
                        img: 'copa/copa3.jpg'
                    },{
                        _id: 3,
                        img: 'copa/copa4.jpg'
                    }
                ],
                categories: 2,
                slogan: 'Espacio para toda la familia',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
                warranty: '1 año',
                versions: [
                    {
                        _id: 4,
                        name: 'Standart',
                        urlImage: 'copa/versions/version1.jpg',
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
                        urlImage: 'copa/versions/version2.jpg',
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
                        urlImage: 'copa/versions/version3.jpg',
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
                interiors: [
                    {
                        _id: 0,
                        imageInterior: 'copa/interior/interior-base.png',
                        name: 'Base',
                        complements: [
                            'Full Led',
                            'Leather'
                        ],
                        price: 300
                    },
                    {
                        _id: 1,
                        imageInterior: 'copa/interior/interior-medium.png',
                        name: 'medium',
                        complements: [
                            'Full Led',
                            'Leather',
                            'dual zone climate control'
                        ],
                        price: 300
                    },
                    {
                        _id: 2,
                        imageInterior: 'copa/interior/interior-premium.png',
                        name: 'Premium',
                        complements: [
                            'Full Led',
                            'Leather',
                            'dual zone climate control',
                            'Bose Music'
                        ],
                        price: 300
                    }
                ],
                colors:[
                    {
                        _id:0,
                        name: 'Iron',
                        color: 'copa/colors/iron.png',
                        imageColor: 'copa/colors/iron-car.png',
                        price: 500
                    },
                    {
                        _id:1,
                        name: 'Red',
                        color: 'copa/colors/red.png',
                        imageColor: 'copa/colors/red-car.png',
                        price: 600
                    },
                    {
                        _id:2,
                        name: 'Steel',
                        color: 'copa/colors/steel.png',
                        imageColor: 'copa/colors/steel-car.png',
                        price: 550
                    }
                ],
                rims:[
                    {
                        _id:0,
                        size: '16"',
                        model: 'LL',
                        img: 'copa/rims/rims1.png',
                        material: 'Aluminio',
                        price: 0
                    },
                    {
                        _id:1,
                        size: '17"',
                        model: 'LS',
                        img: 'copa/rims/rims2.png',
                        material: 'Aluminio',
                        price: 0
                    },
                    {
                        _id:2,
                        size: '18"',
                        model: 'HL',
                        img: 'copa/rims/rims3.png',
                        material: 'Aluminio',
                        price: 0
                    }
                ]
            },
            {
                _id: 5,
                name: 'Discover',
                banner: 'discover/Discover-banner.jpg',
                imageCategory: 'discover/imageCategory.png',
                images: [
                    {
                        _id: 0,
                        img: 'discover/Discover1.jpg'
                    },{
                        _id: 1,
                        img: 'discover/Discover2.jpg'
                    },{
                        _id: 2,
                        img: 'discover/Discover3.jpg'
                    },{
                        _id: 3,
                        img: 'discover/Discover4.jpg'
                    }
                ],
                categories: 2,
                slogan: 'Espacio para toda la familia',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
                warranty: '1 año',
                versions: [
                    {
                        _id: 6,
                        name: 'Premium',
                        urlImage: 'discover/versions/version.jpg',
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
                interiors: [
                    {
                        _id: 0,
                        imageInterior: 'discover/interior/interior-base.jpg',
                        name: 'Base',
                        complements: [
                            'Full Led',
                            'Leather'
                        ],
                        price: 300
                    },
                    {
                        _id: 2,
                        imageInterior:  'discover/interior/interior-premium.jpg',
                        name: 'Premium',
                        complements: [
                            'Full Led',
                            'Leather',
                            'dual zone climate control',
                            'Bose Music'
                        ],
                        price: 300
                    }
                ],
                colors:[
                    {
                        _id:0,
                        name: 'Blue',
                        color:  'discover/colors/blue.png',
                        imageColor:  'discover/colors/blue-car.png',
                        price: 500
                    },
                    {
                        _id:1,
                        name: 'Gold',
                        color: 'discover/colors/gold.png',
                        imageColor: 'discover/colors/gold-car.png',
                        price: 600
                    },
                    {
                        _id:2,
                        name: 'Orange',
                        color: 'discover/colors/orange.png',
                        imageColor: 'discover/colors/orange-car.png',
                        price: 550
                    }
                ],
                rims:[
                    {
                        _id:0,
                        size: '16"',
                        model: 'LL',
                        img: 'discover/rims/rims1.png',
                        material: 'Aluminio',
                        price: 0
                    },
                    {
                        _id:1,
                        size: '17"',
                        model: 'LS',
                        img: 'discover/rims/rims2.png',
                        material: 'Aluminio',
                        price: 0
                    },
                    {
                        _id:2,
                        size: '18"',
                        model: 'HL',
                        img: 'discover/rims/rims3.png',
                        material: 'Aluminio',
                        price: 0
                    }
                ]
            },
            {
                _id: 6,
                name: 'Prisa',
                banner: 'prisa/prisa-banner.jpg',
                imageCategory: 'prisa/imageCategory.png',
                images: [
                    {
                        _id: 0,
                        img: 'prisa/prisa1.jpg'
                    },{
                        _id: 1,
                        img: 'prisa/prisa2.jpg'
                    },{
                        _id: 2,
                        img: 'prisa/prisa3.jpg'
                    },{
                        _id: 3,
                        img: 'prisa/prisa4.jpg'
                    }
                ],
                slogan: 'El futuro, ahora',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
                categories: 3,
                warranty: '3 años',
                versions: [
                    {
                        _id: 7,
                        name: 'Standart',
                        urlImage: 'prisa/versions/version1.jpg',
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
                        urlImage: 'prisa/versions/version2.jpg',
                        list: [
                            '4 Cilindros, 1.5 Litros de 16 válvulas',
                            'Transmision 8 velocidades',
                            'Estructura de la carroceria de ultima tecnogia',
                            'Monitor de cámara de reversa'
                        ],
                        base_price: 40000
                    }
                ],
                interiors: [
                    {
                        _id: 0,
                        imageInterior: 'prisa/interior/interior-base.jpg',
                        name: 'Base',
                        complements: [
                            'Full Led',
                            'Leather'
                        ],
                        price: 300
                    },
                    {
                        _id: 1,
                        imageInterior: 'prisa/interior/interior-medium.jpg',
                        name: 'medium',
                        complements: [
                            'Full Led',
                            'Leather',
                            'dual zone climate control'
                        ],
                        price: 300
                    },
                    {
                        _id: 2,
                        imageInterior: 'prisa/interior/interior-premium.jpg',
                        name: 'Full',
                        complements: [
                            'Full Led',
                            'Leather',
                            'dual zone climate control',
                            'Bose Music'
                        ],
                        price: 300
                    }
                ],                
                colors:[
                    {
                        _id:0,
                        name: 'Blue',
                        color: 'prisa/colors/blue.png',
                        imageColor: 'prisa/colors/blue-car.png',
                        price: 500
                    },
                    {
                        _id:1,
                        name: 'Red',
                        color: 'prisa/colors/red.png',
                        imageColor: 'prisa/colors/red-car.png',
                        price: 450
                    },
                    {
                        _id:2,
                        name: 'White',
                        color: 'prisa/colors/white.png',
                        imageColor: 'prisa/colors/white-car.png',
                        price: 700
                    }
                ],
                rims:[
                    {
                        _id:0,
                        size: '16"',
                        model: 'LL',
                        img: 'prisa/rims/rims1.png',
                        material: 'Aluminio',
                        price: 0
                    },
                    {
                        _id:1,
                        size: '17"',
                        model: 'LS',
                        img: 'prisa/rims/rims2.png',
                        material: 'Aluminio',
                        price: 20
                    },
                    {
                        _id:2,
                        size: '18"',
                        model: 'HL',
                        img: 'prisa/rims/rims3.png',
                        material: 'Aluminio',
                        price: 30
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
                image: 'sedan.png',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            },
            {
                _id:1,
                name: 'Sport',
                image: 'sport.png',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            },
            {
                _id:2,
                name: 'SUV',
                image: 'suv.png',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
            },
            {
                _id:3,
                name: 'Hibridos',
                image: 'hibrido.png',
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


