'use client';
import { Navbar, Button, Link, Text } from "@nextui-org/react";

const Navigation = () => {
    return (
        <Navbar isBordered maxWidth={"fluid"} css={{
            $$navbarBackgroundColor: "#FFBE29",
            $$navbarBlurBackgroundColor: "#FFBE29"
          }}>
            <Navbar.Brand>
                <Text b color="#8D153A" hideIn="xs">
                    Make A Difference SL
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" style={{color: "#8D153A"}}>
                <Navbar.Link href="#">Home</Navbar.Link>
                <Navbar.Link href="#">Projects</Navbar.Link>
                <Navbar.Link href="#">Gallery</Navbar.Link>
                <Navbar.Link href="#">Contact Us</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Button auto flat as={Link} href="#" style={{
                        color: "#FFBE29",
                        backgroundColor: "#8D153A"
                        }}> 
                        DONATE
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
}

export default Navigation