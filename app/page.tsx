// src/app/page.tsx
"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function HomePage() {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} textAlign="center">
        <Heading
          as="h1"
          size="2xl"
          bgGradient="linear(to-r, teal.500, green.500)"
          bgClip="text"
        >
          Welcome to Asswuffah Fiqh Diaries
        </Heading>

        <Text fontSize="xl" color="gray.600" maxW="container.md">
          Embark on a journey of Islamic knowledge through our structured
          lessons. Learn at your own pace with our carefully curated content
          covering Aqeedah, Fiqh, Seerah, and more.
        </Text>

        <Box
          borderRadius="lg"
          overflow="hidden"
          boxShadow="xl"
          bg="white"
          p={8}
          maxW="container.md"
          w="full"
        >
          <VStack spacing={4}>
            <Heading size="lg" color="teal.600">
              Start Your Learning Journey
            </Heading>
            <Text color="gray.600">
              Access our comprehensive collection of Islamic lessons designed to
              help you understand and implement Islamic teachings in your daily
              life.
            </Text>
            <NextLink href="/lessons" passHref>
              <Button size="lg" colorScheme="teal" mt={4} px={8}>
                Browse Lessons
              </Button>
            </NextLink>
          </VStack>
        </Box>

        <Box mt={8} p={6} bg="gray.50" borderRadius="lg" maxW="container.md">
          <VStack spacing={4}>
            <Heading size="md" color="gray.700">
              What Youll Find
            </Heading>
            <Box
              display="grid"
              gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={6}
              textAlign="left"
            >
              {[
                {
                  title: "Structured Learning",
                  desc: "Step-by-step guided lessons",
                },
                {
                  title: "Rich Content",
                  desc: "Detailed explanations with references",
                },
                {
                  title: "Easy Navigation",
                  desc: "Simple and intuitive interface",
                },
                {
                  title: "Regular Updates",
                  desc: "New lessons added periodically",
                },
              ].map((item) => (
                <Box
                  key={item.title}
                  p={4}
                  bg="white"
                  borderRadius="md"
                  shadow="sm"
                >
                  <Text fontWeight="bold" color="teal.600">
                    {item.title}
                  </Text>
                  <Text color="gray.600" fontSize="sm">
                    {item.desc}
                  </Text>
                </Box>
              ))}
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}
