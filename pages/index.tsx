import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import TopBar from "../components/TopBar";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>SpiceRack</title>
				<meta name="description" content="A Kitchen Planning Tool" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<TopBar/>
			</header>
			<main className={styles.main}>
				<h2>Welcome to Spice Rack</h2>
			</main>

			<footer className={styles.footer}>
				
			</footer>
		</div>
	);
}
