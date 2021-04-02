import React, {useState, useEffect} from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import ReactMapGl from 'react-map-gl';
// app.js
import 'mapbox-gl/dist/mapbox-gl.css';



export const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: 51.509865,
        longitude: -0.118092,
        zoom: 8,
        width: window.innerWidth,
        height: window.innerHeight,
    })

    const handleViewportChange =(viewport)=>{
        setViewport(viewport);
    }

    useEffect(() => {
        window.addEventListener("resize",()=>{
            setViewport({...viewport,
                width: window.innerWidth,
                height: window.innerHeight,
            })
        })
        return () => {
            window.removeEventListener("resize",()=>{
                setViewport({...viewport,
                    width: window.innerWidth,
                    height: window.innerHeight,
                })
            })
        }
    }, [])


    const goToNYC = () => {
        setViewport({...viewport, longitude: -74.1, latitude: 40.7, zoom:8});
    }

    const goToLondon = () => {
        setViewport({...viewport, latitude: 51.509865,
            longitude: -0.118092, zoom:8});
    }

    return (
        <div className=" w-screen h-screen overflow-hidden p-0">
            <div>
              <button onClick={goToNYC}>New York City</button>  
              <button onClick={goToLondon}>London</button>  
            </div>
            <ReactMapGl 
            className="w-full h-full overflow-hidden p-0"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            {...viewport} onViewportChange={handleViewportChange} 
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            >
                {/* <Marker
                latitude={51.509865}
                longitude={-0.118092}
                >

                </Marker> */}

            </ReactMapGl>

            
        </div>
    )
}

export default Map;