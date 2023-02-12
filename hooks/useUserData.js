import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../db/firebase";
import { getFirestore } from "firebase/firestore";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";

const useUserData = () => {
	const [user] = useAuthState(auth);
	const [userName, setUserName] = useState(null);

	useEffect(() => {
		let unsubscribe;

		if (user) {
			const ref = firestore.collection("users").doc(user.uid);
			unsubscribe = ref.onSnapshot((doc) => {
				setUserName(doc.data().username);
			});
		}
	}, [user]);

	return { user, userName };
};

export default useUserData;
