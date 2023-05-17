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
        
        LocalProjectData.notable_stations.forEach(element => {
            var stationIcon = document.createElement("div")
            stationIcon.className = "stationIcon"
            var marker = new mapboxgl.Marker({element:stationIcon})
                .setLngLat([element.lng, element.lat])
                .setPopup(
                    new mapboxgl.Popup({
                        offset: 25,
                    }) // add popups
                        .setHTML(
                            `<div class='popup-box'>
                            <h3>${element.name}</h3>
                            <h4>${element.notes}</h4>
                            </div>`
                            
                        )
                ).addTo(map.current);


        });
        LocalProjectData.developments.forEach(element => {
            var buildingsIcon = document.createElement("div")
            buildingsIcon.className = "buildingsIcon"
            var marker = new mapboxgl.Marker({element: buildingsIcon})
                .setLngLat([element.lng, element.lat])
                .setPopup(
                    new mapboxgl.Popup({
                        offset: 25,
                    }) // add popups
                        .setHTML(
                            `<div class='popup-box'>
                            <img src='/images/${element.image_slug}'/>
                            <h2>${element.name}</h2>
                            <h4>${element.notes}</h3>
                            <h4><strong>TYPE:</strong> ${element.type}</h4>
                            <h4><strong>STATUS:</strong> ${element.status}</h4>
                            </div>`
                        )
                ).addTo(map.current);


        });
        map.current.addControl(new mapboxgl.NavigationControl());
        map.current.on("load", () => {
            map.current.addSource("purple", {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates: LocalProjectData.transit_lines.purple,
                    },
                }
            })
            map.current.addSource("yellow", {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates: LocalProjectData.transit_lines.yellow,
                    },
                }
            })
            map.current.addSource("red", {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates: LocalProjectData.transit_lines.red,
                    },
                }
            })
            map.current.addSource("green", {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates: LocalProjectData.transit_lines.green,
                    },
                }
            })
            map.current.addSource("blue", {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates: LocalProjectData.transit_lines.blue,
                    },
                }
            })
            map.current.addSource("silver", {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates: LocalProjectData.transit_lines.silver,
                    },
                }
            })
            map.current.addSource("orange", {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates: LocalProjectData.transit_lines.orange,
                    },
                }
            })
            map.current.addLayer({
                id: "purple",
                type: "line",
                source: "purple",
                layout: {
                    "line-join": "round",
                    "line-cap": "round",
                },
                paint: {
                    "line-color": "#59178a",
                    "line-width": 8,
                },
            });
            map.current.addLayer({
                id: "yellow",
                type: "line",
                source: "yellow",
                layout: {
                    "line-join": "round",
                    "line-cap": "round",
                },
                paint: {
                    "line-color": "#FFD100",
                    "line-width": 8,
                },
            });
            map.current.addLayer({
                id: "red",
                type: "line",
                source: "red",
                layout: {
                    "line-join": "round",
                    "line-cap": "round",
                },
                paint: {
                    "line-color": "#BF0D3E",
                    "line-width": 8,
                },
            })
            map.current.addLayer({
                id: "blue",
                type: "line",
                source: "blue",
                layout: {
                    "line-join": "round",
                    "line-cap": "round",
                },
                paint: {
                    "line-color": "#009CDE",
                    "line-width": 8,
                },
            })
            map.current.addLayer({
                id: "green",
                type: "line",
                source: "green",
                layout: {
                    "line-join": "round",
                    "line-cap": "round",
                },
                paint: {
                    "line-color": "#00B140",
                    "line-width": 8,
                },
            })
            map.current.addLayer({
                id: "orange",
                type: "line",
                source: "orange",
                layout: {
                    "line-join": "round",
                    "line-cap": "round",
                },
                paint: {
                    "line-color": "#ED8B00",
                    "line-width": 8,
                },
            })
            map.current.addLayer({
                id: "silver",
                type: "line",
                source: "silver",
                layout: {
                    "line-join": "round",
                    "line-cap": "round",
                },
                paint: {
                    "line-color": "#919D9D",
                    "line-width": 8,
                },
            })

        })


    });
    return (
        <div className="map-container" ref={mapContainer}></div>
    )
}
