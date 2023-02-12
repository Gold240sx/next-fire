import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import { UserContext } from "../context/userContext";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useUserData } from "../hooks/useUserData";

// import { GetServerSideProps } from "next";

function MyApp({ Component, pageProps }: AppProps) {
	const userData = useUserData();

	return (
		<>
			<UserContext.Provider value={userData}>
				<Navbar />
				<Component {...pageProps} />
				<ToastContainer />
			</UserContext.Provider>
		</>
	);
}

export default MyApp;
