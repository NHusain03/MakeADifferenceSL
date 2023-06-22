'use client';
import { Navbar, Button, Link, Text } from "@nextui-org/react";

const Navigation = () => {
    return (
        <Navbar isBordered variant={"sticky"} maxWidth={"fluid"} css={{
            $$navbarBackgroundColor: "#FFBE29",
            $$navbarBlurBackgroundColor: "#FFBE29"
          }}>
            <Navbar.Brand>
                <Text b color="#00534E" hideIn="xs">
                    Make A Difference SL
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" style={{color: "#00534E"}}>
                <Navbar.Link href="/">Home</Navbar.Link>
                <Navbar.Link href="/projects">Projects</Navbar.Link>
                <Navbar.Link href="#">Gallery</Navbar.Link>
                <Navbar.Link href="#">Contact Us</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Button auto flat as={Link} href="#" style={{
                        color: "#FFFFFF",
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