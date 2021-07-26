import { useState } from "react";
import {
	Container,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	FormGroup,
	FormFeedback,
	FormText,
	Form,
	Input,
	Label,
	Row,
	Col,
	CustomInput
} from "reactstrap";
import React from "react";


export default function RecipeCreator() {

	const [servings, setServings] = useState("");
	const checkFormat = (e) => {
		switch (e.target.id) {
			case "servings":
				setServings(e.target.value);
				break;
			default:
				break;
		}
	};

	return (
		<Form>
			<FormGroup row>
				<Label for="name" sm={2}>Recipe Name</Label>
				<Input type="text" name="name" id="name" placeholder="Recipe Name" />
			</FormGroup>
			<FormGroup row>
				<Label for="desc" sm={2}>Recipe Ingredients</Label>
				<Input type="textarea" name="description" id="desc" placeholder="Recipe Ingredients" />
			</FormGroup>
			<FormGroup>
				<Label for="categories">Categories</Label>
				<Input
					type="select"
					name="categories"
					id="categories"
					multiple
				>
					<option>Breakfast</option>
					<option>Lunch</option>
					<option>Dinner</option>
					<option>Snack</option>
					<option>Vegetarian</option>
				</Input>
			</FormGroup>
			<FormGroup>
				<Label for="servings">Number of Servings</Label>
				<Input
					type="text"
					name="servings"
					id="servings"
					invalid={isNaN(servings)}
					value={servings}
					onChange={checkFormat}
				/>
				<FormFeedback invalid>Servings must be a number.</FormFeedback>
			</FormGroup>
			<FormGroup>
				<Label for="generateNutrition">Options</Label>
				<CustomInput type="checkbox" id="generateNutrition" label="Generate Nutrtional Data" />
			</FormGroup>
		</Form>
	);
}