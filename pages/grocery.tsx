import styles from "../styles/Groceries.module.css";

import TopBar from "../components/TopBar";
import GroceryList from "../components/GroceryList";

import groceries from "../components/sample/groceries";

export default function grocery() {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<TopBar />
			</header>
			<main className={styles.main}>
				<GroceryList groceries={groceries} />
			</main>
		</div>
	);
}