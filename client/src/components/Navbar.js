import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavbarComponent() {
	return (
		<Navbar sticky='top' bg='light'>
			<Nav variant='tabs'>
				<Nav.Item>
					<Nav.Link href='#dashboard'>Dashboard</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href='#members'>Mitglieder</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href='#inventory'>Inventar</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href='#finance'>Finanzen</Nav.Link>
				</Nav.Item>
			</Nav>
		</Navbar>
	)
}

export default NavbarComponent
