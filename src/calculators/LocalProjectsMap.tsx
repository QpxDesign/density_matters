import React, { useState, useRef, useEffect } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import LocalProjectData from "../assets/LocalProjects.json"
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken =
    "pk.eyJ1IjoicXB4ZGVzaWduIiwiYSI6ImNreHJrMHc3djRtNzIyb29rODhidHd5d2oifQ.HHiNG99FXsJ_GPIO1eFk1w";

// Create Polygon GeoJSON online -  https://geojson.io/#map=2.96/20.77/25.84
// Draw a polygon - https://docs.mapbox.com/mapbox-gl-js/example/geojson-polygon/

//sources for projects 
// capital heights - https://www.wmata.com/about/news/Congress-Heights-housing-development.cfm

export default function LocalProjectsMap() {
    const mapContainer: any = useRef(null);
    const map: any = useRef(null);
    const [lng, setLng] = useState(-77.0369);
    const [lat, setLat] = useState(38.9072);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12?optimize=true",
            center: [lng, lat],
            zoom: zoom,
        });
        map.current.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true,
                },
                trackUserLocation: true,
                showUserHeading: true,
            })
        );
        LocalProjectData.forEach(element => {
            var marker = new mapboxgl.Marker({})
            .setLngLat([element.lng, element.lat])
            .setPopup(
              new mapboxgl.Popup({
                offset: 25,
              }) // add popups
                .setHTML(
                 element.name
                         )
            ).addTo(map.current);
      
        });
        map.current.addControl(new mapboxgl.NavigationControl());

        
    });
    return (
        <div className="map-container" ref={mapContainer}></div>
    )
}
