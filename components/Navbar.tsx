import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavbarComp() {
	return (
		<Navbar
			bg="dark"
			data-bs-theme="dark"
		>
			<Container>
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link>
						<Link href="/">Home</Link>
					</Nav.Link>
					<Nav.Link>
						<Link href="projects">Projects</Link>
					</Nav.Link>
					<Nav.Link>
						<Link href="education">Education</Link>
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}
