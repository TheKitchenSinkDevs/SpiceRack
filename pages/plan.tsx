import styles from "../styles/Groceries.module.css";
import Head from "next/head";

import TopBar from "../components/TopBar";


export default function plan() {
	return (
		<div className={styles.container}>
			<header>
				<TopBar />
			</header>
			<main className={styles.main}>
				Meal planning here
			</main>
		</div>
	);
}