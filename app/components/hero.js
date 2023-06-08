'use client';

import Link from 'next/link';
import React from 'react'
import { Card, Text, Row, Button } from '@nextui-org/react';

export const Hero = () => {
    return (
        <div className='max-w-full min-h-screen relative'>
            <img className='object-contain w-full h-full opacity-80 ' src='./1.jpg' />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <Card css={{ mw: "30%", backgroundColor: "#8D153A", border: "0px", p: "$10" }}>
                    <Card.Header>
                        <Text b color='white' size="$3xl">Make A Difference Sri Lanka</Text>
                    </Card.Header>
                    <Card.Body css={{ py: "$10" }}>
                        <Text color="white">
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Text>
                    </Card.Body>
                    <Card.Footer>
                        <Row justify="center">
                            <Button auto as={Link} href="#" style={{
                                backgroundColor: "#FFBE29"
                            }}>
                                <Text color= "#8D153A"size="$md">DONATE</Text>
                            </Button>
                        </Row>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    )
}

export default Hero
