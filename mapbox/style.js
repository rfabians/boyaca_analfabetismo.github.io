
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "municipio_alfabetismo_1": {
            "type": "geojson",
            "data": json_municipio_alfabetismo_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_municipio_alfabetismo_1_0",
            "type": "fill",
            "source": "municipio_alfabetismo_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'personas_analfabetas'], 50.0], ['<=', ['get', 'personas_analfabetas'], 136.0]], 0.6, ['all', ['>', ['get', 'personas_analfabetas'], 136.0], ['<=', ['get', 'personas_analfabetas'], 186.6]], 0.6, ['all', ['>', ['get', 'personas_analfabetas'], 186.6], ['<=', ['get', 'personas_analfabetas'], 225.2]], 0.6, ['all', ['>', ['get', 'personas_analfabetas'], 225.2], ['<=', ['get', 'personas_analfabetas'], 285.6]], 0.6, ['all', ['>', ['get', 'personas_analfabetas'], 285.6], ['<=', ['get', 'personas_analfabetas'], 350.0]], 0.6, ['all', ['>', ['get', 'personas_analfabetas'], 350.0], ['<=', ['get', 'personas_analfabetas'], 410.0]], 0.6, ['all', ['>', ['get', 'personas_analfabetas'], 410.0], ['<=', ['get', 'personas_analfabetas'], 482.8]], 0.6, ['all', ['>', ['get', 'personas_analfabetas'], 482.8], ['<=', ['get', 'personas_analfabetas'], 614.2]], 0.6, ['all', ['>', ['get', 'personas_analfabetas'], 614.2], ['<=', ['get', 'personas_analfabetas'], 871.0]], 0.6, ['all', ['>', ['get', 'personas_analfabetas'], 871.0], ['<=', ['get', 'personas_analfabetas'], 3958.0]], 0.6, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'personas_analfabetas'], 50.0], ['<=', ['get', 'personas_analfabetas'], 136.0]], '#fff5f0', ['all', ['>', ['get', 'personas_analfabetas'], 136.0], ['<=', ['get', 'personas_analfabetas'], 186.6]], '#fee3d6', ['all', ['>', ['get', 'personas_analfabetas'], 186.6], ['<=', ['get', 'personas_analfabetas'], 225.2]], '#fdc6af', ['all', ['>', ['get', 'personas_analfabetas'], 225.2], ['<=', ['get', 'personas_analfabetas'], 285.6]], '#fca486', ['all', ['>', ['get', 'personas_analfabetas'], 285.6], ['<=', ['get', 'personas_analfabetas'], 350.0]], '#fc8161', ['all', ['>', ['get', 'personas_analfabetas'], 350.0], ['<=', ['get', 'personas_analfabetas'], 410.0]], '#f85d42', ['all', ['>', ['get', 'personas_analfabetas'], 410.0], ['<=', ['get', 'personas_analfabetas'], 482.8]], '#ea372a', ['all', ['>', ['get', 'personas_analfabetas'], 482.8], ['<=', ['get', 'personas_analfabetas'], 614.2]], '#cc191d', ['all', ['>', ['get', 'personas_analfabetas'], 614.2], ['<=', ['get', 'personas_analfabetas'], 871.0]], '#a91016', ['all', ['>', ['get', 'personas_analfabetas'], 871.0], ['<=', ['get', 'personas_analfabetas'], 3958.0]], '#67000d', '#ffffff']}
        }
],
}