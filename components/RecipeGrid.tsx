import {
	Container,
	Row,
	Col,
	Card,
	CardTitle,
	CardText,
	CardImg,
	CardBody,
	Button,
	ButtonGroup
} from "reactstrap";

import recipes from "./sample/recipes";

import styles from "../styles/recipeGrid.module.css";

export default function RecipeGrid(props: any) {

	const sampleRecipes = Object.values(recipes).map((item) => {
		return (
			<Col key={item.name} xs="6" >
				<Card>
					<CardBody>
						<CardTitle tag="h5">{item.name}</CardTitle>
						<CardText>{item.description}</CardText>
						<ButtonGroup>
							<Button color="primary">Add to Meal Plan</Button>
							<Button>Edit</Button>
						</ButtonGroup>
					</CardBody>
				</Card>
			</Col>
		);
	});
	return (
		<Container className={styles.container}>
			<Row class="row gy-5">
				{sampleRecipes}
			</Row>
		</Container>
	);
}