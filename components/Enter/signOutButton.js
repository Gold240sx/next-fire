import { signOut } from "firebase/auth";
import { auth } from "../../db/firebase";

// Sign out button
export function SignOutButton() {
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("signed out");
		await signOut(auth);
	};

	return <button onClick={handleSubmit}>Sign Out</button>;
}

// export default SignOutButton;
