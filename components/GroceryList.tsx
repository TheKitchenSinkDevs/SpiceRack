
import {
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Checkbox,
	Divider,
	ListSubheader
} from "@material-ui/core";

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
	const groceryListByCategory: GroceryCategories = {} as GroceryCategories;
	props.groceries.forEach((item) => {
		if (!groceryListByCategory[item.category]) {
			groceryListByCategory[item.category] = [item];
		} else {
			groceryListByCategory[item.category].push(item);
		}
	});

	const groceryList = Object.keys(groceryListByCategory).map((category: string) => {
		const items = groceryListByCategory[category].map((item: GroceryItem) => {
			return (
				<div key={item.name}>
					<ListItem button dense>
						<ListItemIcon>
							<Checkbox
								edge="start"
								tabIndex={-1}
							/>
						</ListItemIcon>
						<ListItemText primary={item.name} secondary={item.quantity.count + " " + item.quantity.unit} />
					</ListItem>
					<Divider />
				</div>
			);
		});

		return (
			<List
				key={category}
				subheader={
					<ListSubheader component="div">
						{category}
					</ListSubheader>
				}
			>
				{items}
			</List>


		);
	});


	return (
		<div>
			<List>
				{groceryList}
			</List>
		</div>
	);
}