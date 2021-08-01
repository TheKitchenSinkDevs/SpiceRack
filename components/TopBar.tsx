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
	Container,
	Button
} from "reactstrap";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";


export default function TopBar() {
	const [session, loading] = useSession();
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const accountNav =
		<NavItem>
			<Link href="/account">
				<NavLink>Account</NavLink>
			</Link>
			<Button onClick={() => signOut()} > Sign Out</Button>
		</NavItem>;
	const login =
		<NavItem>
			<Button onClick={() => signIn()} > Login</Button>
		</NavItem>;

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
						{
							session && accountNav
						}
						{
							!session && login
						}
					</Nav>

				</Collapse>
			</Container>
		</Navbar>
	);
}