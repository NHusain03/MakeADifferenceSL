'use client';
import { Navbar, Link, Text } from "@nextui-org/react";

const Navigation = () => {
    const collapseItems = [
        "Home",
        "Projects",
        "Gallery",
        "Contact Us"
    ];

    const collapseLinks = [
        "/",
        "/projects",
        "#",
        "/contact"
    ]

    return (
        <Navbar isBordered variant="sticky" css={{
            $$navbarBackgroundColor: "#D5ECD4",
            $$navbarBlurBackgroundColor: "#D5ECD4",
            color: "#00534E"
        }}>
            <Navbar.Toggle showIn="xs" />
            <Navbar.Brand
                css={{
                    "@xs": {
                        w: "12%",
                        jc: "left"
                    },
                }}
            >
                <Text b color="inherit" hideIn={"xs"}>
                    MDSL
                </Text>
            </Navbar.Brand>
            <Navbar.Content
                enableCursorHighlight
                hideIn="xs"
                variant="default"
            >
                <Navbar.Link href="/">Home</Navbar.Link>
                <Navbar.Link href="/projects">Projects</Navbar.Link>
                <Navbar.Link href="#">Gallery</Navbar.Link>
                <Navbar.Link href="/contact">Contact Us</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <a href="https://www.gofundme.com/f/Vilippu-Koottu-Pannai-awakening-integrated-farm" className="bg-slgreen text-xs text-nyanza p-3 rounded-lg sm:ml-10 sm:text-md">DONATE</a>
                </Navbar.Item>
            </Navbar.Content>
            <Navbar.Collapse disableAnimation>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem key={index}
                    >
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href={collapseLinks[index]}
                        >
                            {item}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation