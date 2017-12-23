import * as types from '../constants/actionTypes';
// import { setMap } from './map';
// import { selectBasemap } from './basemap';
// import { loading, loaded } from './loading';
import { fetchFavorite, parseFavorite } from '../loaders/favorites';
// import { loadLayer } from './layers';


/*
export const getFavorite = (id) => (dispatch) => {
    dispatch(loading());

    return fetchFavorite(id).then(favorite => {
        const mapConfig = parseFavorite(favorite);
        const basemap = mapConfig.basemap;

        delete(mapConfig.basemap); // Added below

        dispatch(setMap(mapConfig));

        if (isString(basemap)) {
            dispatch(selectBasemap(basemap));
        }

        // Trigger loading of all overlays
        mapConfig.overlays.forEach(overlay => dispatch(loadLayer(overlay)));

        dispatch(loaded()); // TODO: Dispatch after all overlays are loaded

    }).catch(error => {
        console.log('Error: ', error); // TODO
    });
};
*/

export const openFavoritesDialog = () => ({
    type: types.FAVORITES_DIALOG_OPEN_REQUESTED,
});

export const closeFavoritesDialog = () => ({
    type: types.FAVORITES_DIALOG_CLOSE_REQUESTED,
});



