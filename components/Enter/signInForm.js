// Sign in with Google button
function SignInForm() {
	const signInWithGoogle = async () => {
		await signInWithPopup(auth, googleAuthProvider);
	};

	return (
		<>
			<button className="btn-google" onClick={signInWithGoogle}>
				<img src={"/google.png"} width="30px" /> Sign in with Google
			</button>
			<button onClick={() => signInAnonymously(auth)}>Sign in Anonymously</button>
		</>
	);
}

export default SignInForm;
