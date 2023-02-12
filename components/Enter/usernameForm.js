import React from "react";
import { useState, useContext } from "react";
import { getFirestore, doc, writeBatch } from "firebase/firestore";

export const UsernameForm = () => {
	const [formValue, setFormValue] = useState("");
	const [isValid, setIsValid] = useState(false);
	const [loading, setLoading] = useState(false);

	// const { user, username } = useContext(UserContext);

	const onSubmit = async (e) => {
		e.preventDefault();

		// Create refs for both documents
		const userDoc = doc(getFirestore(), "users", user.uid);
		const usernameDoc = doc(getFirestore(), "usernames", formValue);

		// Commit both docs together as a batch write.
		const batch = writeBatch(getFirestore());
		batch.set(userDoc, { username: formValue, photoURL: user.photoURL, displayName: user.displayName });
		batch.set(usernameDoc, { uid: user.uid });

		await batch.commit();
	};

	const onChange = (e) => {
		// Force form value typed in form to match correct format
		const val = e.target.value.toLowerCase();
		const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

		// Only set form value if length is < 3 OR it passes regex
		if (val.length < 3) {
			setFormValue(val);
			setLoading(false);
			setIsValid(false);
		}

		if (re.test(val)) {
			setFormValue(val);
			setLoading(true);
			setIsValid(false);
		}
	};

	//

	useEffect(() => {
		checkUsername(formValue);
	}, [formValue]);

	return (
		!username && (
			<section>
				<h3>Choose Username</h3>
				<form onSubmit={onSubmit}>
					<input name="username" placeholder="myname" value={formValue} onChange={onChange} />
					<UsernameMessage username={formValue} isValid={isValid} loading={loading} />
					<button type="submit" className="btn-green" disabled={!isValid}>
						Choose
					</button>

					<h3>Debug State</h3>
					<div>
						Username: {formValue}
						<br />
						Loading: {loading.toString()}
						<br />
						Username Valid: {isValid.toString()}
					</div>
				</form>
			</section>
		)
	);
};

// export default UsernameForm;
