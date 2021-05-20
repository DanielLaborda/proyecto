import {
    SET_GARAGE_INFO
} from './types';


export function setGarageInfo() {
    return({
        type: SET_GARAGE_INFO,
        payload: [
            {
                position: [51.505, -0.09],
                name: 'DLMotor Garage London',
                image: '../../static/images/garageBackground.jpg',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                contact: '555-555-555'
            }
        ]
    })
}



