import { auth } from "../db/firebase";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { UsernameForm, SignOutButton, SignInForm } from "../components/Enter/index";
// import googleImg from "../assets/images/google.png";
// import Metatags from "@components/Metatags";

// import debounce from "lodash.debounce";

export default function Enter(props) {
	const { user, username } = useContext(UserContext);

	console.log("user: ", user);

	return (
		<main>
			{/* <Metatags title="Enter" description="Sign up for this amazing app!" /> */}
			{user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInForm />}
		</main>
	);
}
