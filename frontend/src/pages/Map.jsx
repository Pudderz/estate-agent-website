import React, { useState, useEffect, useRef } from "react";
import ReactMapGl, { Marker, FlyToInterpolator } from "react-map-gl";
// app.js
import "mapbox-gl/dist/mapbox-gl.css";
import useSupercluster from "use-supercluster";
import useSwr from "swr";

// using data crimes data as example data to create supercluster example.

// https://www.youtube.com/watch?v=3HYvbP2pQRA&t=1754s&ab_channel=LeighHalliday
// using this video as a guide to set up superclusters on mapbox
const URL =
  "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export const Map = () => {
  const mapRef = useRef();

  const [viewport, setViewport] = useState({
    latitude: 52.381896,
    longitude: -1.075408,
    zoom: 8,
    width: "100vw",
    height: "100vh",
  });

  // fetches data and converts the data into a proper format
  const { data, error } = useSwr(URL, { fetcher });

  const crimes = data && !error ? data.slice(0, 2000) : [];
  console.log(crimes);
  const points = crimes.map((crime) => ({
    type: "Feature",
    properties: { cluster: false, crimeId: crime.id, category: crime.category },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(crime.location.longitude),
        parseFloat(crime.location.latitude),
      ],
    },
  }));

  // get map bounds
  const bounds = mapRef.current
    ? mapRef.current.getMap().getBounds().toArray().flat()
    : null;

  // get clusters

  const { clusters, supercluster  } = useSupercluster({
    points,
    zoom: viewport.zoom,
    bounds,
    options: {
      radius: 75,
      maxZoom: 20,
    },
  });

  console.log(clusters);

  const handleViewportChange = (viewport) => {
    setViewport(viewport);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setViewport({
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });

    return () => {
      window.removeEventListener("resize", () => {
        setViewport({
          ...viewport,
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });
    };
  }, []);

  const goToNYC = () => {
    setViewport({ ...viewport, longitude: -74.1, latitude: 40.7, zoom: 8 });
  };

  const goToLondon = () => {
    setViewport({
      ...viewport,
      latitude: 51.509865,
      longitude: -0.118092,
      zoom: 8,
    });
  };

  const handleClusterClick = (longitude, latitude,id) => {
    const expansionZoom = Math.min(supercluster.getClusterExpansionZoom(id), 18);

    return () =>
      setViewport({
        ...viewport,
        zoom: expansionZoom,
        longitude,
        latitude,
        transitionInterpolator: new FlyToInterpolator(),
        transitionDuration: "auto",
      });
  };


  const handleMarkerClick = (longitude, latitude)=>{
   return ()=> setViewport({
      ...viewport,
      longitude,
      latitude,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: "auto",
    });
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
        {...viewport}
        ref={mapRef}
        // transitionDuration={300}
        // transitionInterpolator={new FlyToInterpolator()}
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        maxZoom={18}
      >
        {clusters.map((point) => {
          const [longitude, latitude] = point.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount,
          } = point.properties;
          if (isCluster) {
            const pointSize = 20 + pointCount / points.length * 40;

            return (
              <Marker key={point.id} latitude={latitude} longitude={longitude}>
                <div
                  className="cluster-marker"
                  onClick={handleClusterClick(longitude, latitude, point.id)}
                  style={{
                    width: `${pointSize}px`,
                    height: `${pointSize}px`,
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }
          return (
            <Marker
              key={point.properties.crimeId}
              latitude={latitude}
              longitude={longitude}
            >
              <button className="marker" onClick={handleMarkerClick(longitude, latitude)}>
                <img src={"./Marker.png"} alt="marker" />
              </button>
            </Marker>
          );
        })}
        {/* <Marker
                latitude={51.509865}
                longitude={-0.118092}
                >

                </Marker> */}
      </ReactMapGl>
    </div>
  );
};

export default Map;
