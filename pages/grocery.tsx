import styles from "../styles/Groceries.module.css";
import Head from "next/head";

import TopBar from "../components/TopBar";
import GroceryList from "../components/GroceryList";

import groceries from "../components/sample/groceries";

export default function grocery() {
	return (
		<div className={styles.container}>
			<Head>
				<title>SpiceRack - Groceries</title>
				<meta name="description" content="Spice Rack - Grocery List" />
				<link rel="icon" href="/favicon.ico" /> {/* Salt tall grinder on left, small jaRs on right, one with R? */}
			</Head>

			<header className={styles.header}>
				<TopBar />
			</header>
			<main className={styles.main}>
				<GroceryList groceries={groceries} />
			</main>
		</div>
	);
}