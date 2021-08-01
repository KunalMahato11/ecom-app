import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// const config = {
//     apiKey: "AIzaSyBGCVjIv5mVMp9c-pqgRCK0a51WztrQRSU",
//     authDomain: "crwn-db-5.firebaseapp.com",
//     databaseURL: "https://crwn-db-5.firebaseio.com",
//     projectId: "crwn-db-5",
//     storageBucket: "crwn-db-5.appspot.com",
//     messagingSenderId: "434062697851",
//     appId: "1:434062697851:web:28bcacade8047eac6b89de",
//     measurementId: "G-E3BPMYJK50"
// };
const config = {
	apiKey: 'AIzaSyAT5GtSCo-VBRFT_xFQHCBbhl7wvCpHagg',
	authDomain: 'storex-db.firebaseapp.com',
	databaseURL: 'https://storex-db.firebaseio.com',
	projectId: 'storex-db',
	storageBucket: 'storex-db.appspot.com',
	messagingSenderId: '665180833048',
	appId: '1:665180833048:web:6594371eae0d1cd6808a6d',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
