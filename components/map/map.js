import {YMaps, Map, Placemark} from 'react-yandex-maps';


const Ymap = ({lat, lng}) => {
    const h = "25vh";
    const w = "100%"
    const style = {
        height: h,
        background: '#EBEDF8',
        zIndex: "20",
        width: w,
    };
    return (
        <div style={style}>
            <YMaps>
                <div>
                    <Map defaultState={{
                        center: [lat, lng],
                        zoom: 13,
                        controls: ['zoomControl', 'fullscreenControl'],
                        behaviors: ['multiTouch']
                    }}
                         style={{width: '100%', height: h}}
                         modules={['control.ZoomControl', 'control.FullscreenControl']}
                    >
                        <Placemark defaultGeometry={[41.54511464579863, 60.616101453975695]}/>
                    </Map>
                </div>
            </YMaps>
        </div>
    )
}

export default Ymap