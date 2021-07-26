
import {
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Checkbox,
	Divider,
	ListSubheader
} from "@material-ui/core";
import styles from "../styles/Groceries.module.css";
import groceries from "./sample/groceries";

interface GroceryItem {
	name: string,
	quantity: {
		count: number,
		unit: string
	},
	category: string
}

interface Props {
	groceries: GroceryItem[]
}

interface GroceryCategories {
	[index: string]: GroceryItem[]
}

export default function GroceryList(props: Props) {

	// TODO: Create API Call by category
	// Sort categories
	const groceryListByCategory: GroceryCategories = {} as GroceryCategories;

	props.groceries.forEach((item) => {
		if (!groceryListByCategory[item.category]) { // Add new category to list
			groceryListByCategory[item.category] = [item];
		} else {
			groceryListByCategory[item.category].push(item);
		}
	});

	const groceryList = Object.keys(groceryListByCategory).map((category: string) => {
		const items = groceryListByCategory[category].map((item: GroceryItem) => {
			return (
				<ListItem button dense key={item.name} className={styles.item}>
					<ListItemIcon>
						<Checkbox
							edge="start"
							tabIndex={-1}
						/>
					</ListItemIcon>
					<ListItemText primary={item.name} secondary={item.quantity.count + " " + item.quantity.unit} />
				</ListItem>
			);
		});

		return (
			<List
				key={category}
				subheader={
					<ListSubheader disableSticky className={styles.subheader}>
						{category}
					</ListSubheader>
				}
			>
				{items}
			</List >


		);
	});


	return (
		<>
			<List>
				{groceryList}
			</List>
		</>
	);
}