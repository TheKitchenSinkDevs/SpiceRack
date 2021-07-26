import { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	NavbarText,
	Container
} from "reactstrap";
import Link from "next/link";

export default function TopBar() {

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar expand="md" light>
			<Container>
				<NavbarBrand href="/">SpiceRack</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<Link href="/recipes">
								<NavLink>My Recipes</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link href="/plan">
								<NavLink>Planning</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link href="/grocery">
								<NavLink>Groceries</NavLink>
							</Link>
						</NavItem>
					</Nav>
					<Nav className="navbar-right">
						<NavbarText>
							<NavLink>Account</NavLink>
						</NavbarText>
					</Nav>

				</Collapse>
			</Container>
		</Navbar>
	);
}