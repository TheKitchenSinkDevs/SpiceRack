import Head from "next/head";
import styles from "../styles/Home.module.css";

import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>SpiceRack</title>
				<meta name="description" content="A Kitchen Planning Tool" />
				<link rel="icon" href="/favicon.ico" /> {/* Salt tall grinder on left, small jaRs on right, one with R? */}
			</Head>
			<TopBar />
			<main className={styles.main}>
				<h2>Welcome to Spice Rack</h2>
			</main>

			<footer className={styles.footer}>
				<Footer />
			</footer>
		</div>
	);
}
