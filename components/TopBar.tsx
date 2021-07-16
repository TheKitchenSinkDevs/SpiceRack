import { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	NavbarText
} from "reactstrap";


export default function TopBar() {

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return(
		<Navbar expand="md">
			<NavbarBrand href="/">SpiceRack</NavbarBrand>
			<NavbarToggler onClick={toggle}/>
			<Collapse isOpen={isOpen} navbar>
				<Nav className="mr-auto" navbar>
					<NavItem>
						<NavLink>My Recipes</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>Planning</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>Groceries</NavLink>
					</NavItem>
				</Nav>
				<NavbarText>Account</NavbarText>
			</Collapse>
		</Navbar>
	);
}