import { signOut } from "firebase/auth";
import { auth } from "../../db/firebase";

// Sign out button
export function SignOutButton() {
	return <button onClick={() => signOut(auth)}>Sign Out</button>;
}

// export default SignOutButton;
