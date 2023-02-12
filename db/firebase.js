import { initializeApp, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, where, getDocs, query, limit } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCGCxfWuWHydUaXOGx4IU5zYzIJHJXXcoo",
	authDomain: "next-fire-5ac74.firebaseapp.com",
	projectId: "next-fire-5ac74",
	storageBucket: "next-fire-5ac74.appspot.com",
	messagingSenderId: "324261672372",
	appId: "1:324261672372:web:c249f4d14884dd35282ee1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function createFirebaseApp(config) {
	try {
		return getApp();
	} catch {
		return initializeApp(config);
	}
}

const firebaseApp = createFirebaseApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

export const firestore = getFirestore(firebaseApp);

export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = "state_changed";

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
	// const usersRef = collection(firestore, 'users');
	// const query = usersRef.where('username', '==', username).limit(1);
	// const q = query(collection(firestore, "users"), where("username", "==", username), limit(1));
	// const userDoc = (await getDocs(q)).docs[0];
	// return userDoc;
}

/**`
 * Converts a firestore document to JSON
//  * @param  {DocumentSnapshot} doc
//  */
// export function postToJSON(doc) {
// 	const data = doc.data();
// 	return {
// 		...data,
// 		// Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
// 		createdAt: data?.createdAt.toMillis() || 0,
// 		updatedAt: data?.updatedAt.toMillis() || 0,
// 	};
// }
