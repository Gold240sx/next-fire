import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import { UserContext } from "../context/userContext";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

// import { GetServerSideProps } from "next";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<UserContext.Provider value={{ user: {}, username: "mike" }}>
				<Navbar />
				<Component {...pageProps} />
				<ToastContainer />
			</UserContext.Provider>
		</>
	);
}

export default MyApp;
