import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";
import { auth } from "../db/firebase";
import { signOut } from "firebase/auth";
import { UserContext } from "../context/userContext";

export default function Navbar() {
	const { user, username } = useContext(UserContext);

	const router = useRouter();

	const signOutNow = () => {
		signOut(auth);
		router.reload();
	};

	return (
		<nav id="navbar" className="navbar">
			<ul>
				<li>
					<Link href="/">
						<button
							style={{
								backgroundColor: "black",
								color: "white",
								borderRadius: "unset",
								padding: "5px 8px",
								fontSize: "18px",
							}}>
							FEED
						</button>
					</Link>
				</li>

				{username && (
					<>
						<li className="push-left">
							<button onClick={signOutNow}>Sign Out</button>
						</li>
						<li>
							<Link href="/admin">
								<button className="btn-blue">Write Posts</button>
							</Link>
						</li>
						<li>
							<Link href={`/${username}`}>
								<img src={user?.photoURL || "/hacker.png"} />
							</Link>
						</li>
					</>
				)}

				{!username && (
					<li>
						<Link href="/enter">
							<button className="btn-blue">Login</button>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}
