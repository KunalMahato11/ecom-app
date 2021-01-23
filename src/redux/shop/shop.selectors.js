import { createSelector } from 'reselect';
// import collectionComponent from '../../pages/collection/collection.component';

const selectShop = state => state.shop;

export const selectCollections = createSelector(    
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key]) 
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
)