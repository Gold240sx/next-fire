import { auth, googleAuthProvider } from "../db/firebase";
import { doc, writeBatch, getDoc, getFirestore } from "firebase/firestore";
import { signInWithPopup, signInAnonymously, signOut } from "firebase/auth";
import { UserContext } from "../context/userContext";
import { useEffect, useState, useCallback, useContext } from "react";
import { useRouter } from "next/router";
import { UsernameForm, SignOutButton, SignInForm } from "../components/Enter/index";
// import Metatags from "@components/Metatags";

// import debounce from "lodash.debounce";

export default function Enter(props) {
	const { user, username } = useContext(UserContext);

	return (
		<main>
			{/* <Metatags title="Enter" description="Sign up for this amazing app!" /> */}
			{user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInForm />}
		</main>
	);
}
