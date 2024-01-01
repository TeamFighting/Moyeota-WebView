import LatLngStore from '../../../zustand/store/LatLngstore';
import { distance } from '../../util/calc';

interface PositionOptions {
    coords: {
        latitude: number;
        longitude: number;
    };
}

interface Options {
    enableHighAccuracy: boolean;
    timeout: number;
    maximumAge: number;
}
function watchPositionHook() {
    const { currentLat, currentLng } = LatLngStore((state) => state);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function success(pos: PositionOptions) {
        const crd = pos.coords;
        console.log(crd.latitude, crd.longitude);
        const d = distance(currentLat, currentLng, crd.latitude, crd.longitude);
        if (d > 0.01) {
            console.log('위치가 변경되었습니다.');
            localStorage.setItem('latitude', crd.latitude.toString());
            localStorage.setItem('longitude', crd.longitude.toString());
            LatLngStore.setState({
                currentLat: crd.latitude,
                currentLng: crd.longitude,
            });
        }
    }

    function error(err: { code: number; message: string }) {
        console.log('ERROR(' + err.code + '): ' + err.message);
    }

    const options: Options | undefined = {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0,
    };

    navigator.geolocation.watchPosition(success, error, options);
}

export default watchPositionHook;