import styles from "../styles/Groceries.module.css";

import TopBar from "../components/TopBar";

export default function groceries() {
	return (
		<div className={styles.container}>
			<header>
				<TopBar />
			</header>
			<main className={styles.main}>
				Grocery lists here
			</main>
		</div>
	);
}