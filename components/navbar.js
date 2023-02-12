import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Navbar() {
	const { user, username } = useContext(UserContext);

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
						<li>
							<Link href="/admin">
								<button>Write Posts</button>
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
							<button style={{ backgroundColor: "blue", color: "white", fontSize: "10px" }}>Login</button>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}
