import styles from "../styles/Recipes.module.css";
import { useState } from "react";
import Head from "next/head";

import {
	NavLink,
	Nav,
	NavItem,
	TabPane,
	TabContent
} from "reactstrap";
import classnames from "classnames";

import TopBar from "../components/TopBar";
import RecipeGrid from "../components/RecipeGrid";
import RecipeCreator from "../components/RecipeCreator";

export default function recipes() {
	const [activeTab, setActiveTab] = useState("1");
	const toggle = (tab: string) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>SpiceRack - My Recipes</title>
				<meta name="description" content="My Recipes" />
				<link rel="icon" href="/favicon.ico" /> {/* Salt tall grinder on left, small jaRs on right, one with R? */}
			</Head>
			<header>
				<TopBar />
			</header>
			<main className={styles.main}>
				<Nav tabs>
					<NavItem>
						<NavLink
							className={classnames({ active: activeTab === "1" })}
							onClick={() => { toggle("1"); }}
						>
							Recipe List
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: activeTab === "2" })}
							onClick={() => { toggle("2"); }}
						>
							Create New Recipe
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent activeTab={activeTab}>
					<TabPane tabId="1">
						<RecipeGrid />
					</TabPane>
					<TabPane tabId="2">
						<RecipeCreator />
					</TabPane>
				</TabContent>
			</main>

		</div>
	);
}