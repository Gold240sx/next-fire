import googleImg from "../../assets/images/google.png";
import { auth, googleAuthProvider } from "../../db/firebase";
import { signInAnonymously, signInWithPopup } from "firebase/auth";

// Sign in with Google button
export function SignInForm() {
	// Sign in with Google
	const signInWithGoogle = async () => {
		await signInWithPopup(auth, googleAuthProvider);
	};

	return (
		<>
			<button className="btn-google" onClick={signInWithGoogle}>
				<img src={googleImg} width="30px" height="30px" alt="google icon" /> Sign in with Google
			</button>
			<button onClick={() => signInAnonymously(auth)}>Sign in Anonymously</button>
		</>
	);
}

// export default SignInForm;
