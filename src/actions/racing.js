import {
    SET_RACING_INFO
} from './types';

export function setRacingInfo() {
    return({
        type: SET_RACING_INFO,
        payload: [
            {
                name: 'DLMotor Racing Team',
                imagesBanner: [
                    '../../static/images/background1.jpg',
                    '../../static/images/background2.jpg',
                    '../../static/images/background3.png'
                ],
                slogan: 'NO HAY FRONTERAS MÁS ALLÁ DEL LÍMITE',
                description: 'Más potencia, más eficiencia, más ingenio. Siempre remodelando y reconstruyendo para romper los esquemas, en una búsqueda interminable para mejorar nuestra tecnología híbrida.',
                description2: 'No hay mejor test que una prueba deportiva. Competir es el mayor de los retos. Ganar, el mayor de los logros.',
                categories: [
                    {
                        _id: 0,
                        name:'WRC',
                        image: 'http://via.placeholder.com/1200x700',
                        video: 'https://youtube.com/embed/9UEaezz2b8E'
                    },
                    {
                        _id: 1,
                        name:'WEC',
                        image: 'http://via.placeholder.com/1200x700',
                        video: 'https://youtube.com/embed/tLTSW7B4u-k'
                    },
                    {
                        _id: 2,
                        name:'DRIFT',
                        image: 'http://via.placeholder.com/1200x700',
                        video: 'https://www.youtube.com/embed/EWqZP5IJs1Q'
                    },
                    {
                        _id: 3,
                        name:'DAKAR',
                        image: 'http://via.placeholder.com/1200x700',
                        video: 'https://youtube.com/embed/JmYTRsceo7Y'
                    },

                ]
            }
        ]
    })
}
