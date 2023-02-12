import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../db/firebase";
import { getFirestore, collection, doc, getDoc, onSnapshot, query, where, limit } from "firebase/firestore";

export function useUserData() {
	const [user] = useAuthState(auth);
	const [username, setUsername] = useState(null);

	useEffect(() => {
		let unsubscribe;

		if (user) {
			const ref = doc(getFirestore(), "users", user.uid);
			unsubscribe = onSnapshot(ref, (doc) => {
				setUsername(doc.data()?.username);
			});
		} else {
			setUsername(null);
		}
	}, [user, username]);

	return { user, username };
}

// export default useUserData;
