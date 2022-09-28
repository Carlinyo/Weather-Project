import { LoadScript, GoogleMap } from "@react-google-maps/api";

interface GeoData {
  lat: number;
  lng: number;
}

const MapComponent: React.FC<GeoData> = ({ lat, lng }) => {
  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyBumxyPqCPqLcgnDmf_9wlKqFPjiOiPl1c">
        <GoogleMap
          center={{
            lat: lat,
            lng: lng,
          }}
          zoom={10}
        >
          <></>
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default MapComponent;
