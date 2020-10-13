import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';

import 'leaflet/dist/leaflet.css';
import "../styles/pages/Orphanages-map.css";

function map(){
    if(!process.env.REACT_APP_MAPBOX_TOKEN){
        return <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />;
    }
    return <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
}

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p> Muitas crianças estão esperando a sua visita :) </p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map 
                center={[-23.5190829,-46.468151]}
                zoom={15}
                style={{ width: '100%', height: '100%' }} 
            >
                {map()}
            </Map>

            <Link to="" className="create-orphanage" >
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;