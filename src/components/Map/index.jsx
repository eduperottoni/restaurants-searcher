import React, { useState } from 'react';
import { GoogleApiWrapper , Map, Marker} from 'google-maps-react';

export const MapContainer = (props) =>{
    // const[map, setMap] = useState(null)
    const { google } = props;

    // function searchByQuery(query){
    //     const service = new google.maps.places.PlacesService(map);
    //     const request ={
    //         location:map.center,
    //         radius:'200',
    //         type: ['restaurant'],
    //         query,
    //     };

    //     service.textSearch(request,(results, status) =>{
    //         if (status === google.maps.places.PlacesServiceStatus.OK){
    //             console.log(results);
    //         }
    //     });
    // }

    // function searchNearby(map, center) {
    //     const service = new google.maps.places.PlacesService(map);
    //     const request ={
    //         location:map.center,
    //         radius:'20000',
    //         type: ['restaurant'],
    //     };

    //     service.nearbySearch(request,(results, status) =>{
    //         if (status === google.maps.places.PlacesServiceStatus.OK){
    //             console.log(results);
    //         }
    //     });
    // }

    // function onMapReady(_, map){
    //     setMap(map)
    //     searchNearby(map,map.center)
    // }
    // onReady={onMapReady} onRecenter={onMapReady}

    return (<Map google={google} centerAroundCurrentLocation />)
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language:'pt-BR',
})(MapContainer);
