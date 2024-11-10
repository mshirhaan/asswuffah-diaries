import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { getAllLessons } from "@/lib/mdx";
import NextLink from "next/link";

export default async function LessonsPage() {
  const lessons = await getAllLessons();

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" mb={8}>
          <Heading
            as="h1"
            size="xl"
            bgGradient="linear(to-r, teal.500, green.500)"
            bgClip="text"
          >
            Available Lessons
          </Heading>
          <Text mt={4} color="gray.600" fontSize="lg">
            Select a lesson to begin learning
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {lessons.map((lesson) => (
            <NextLink
              key={lesson.slug}
              href={`/lessons/${lesson.slug}`}
              style={{ textDecoration: "none" }}
            >
              <Box
                p={6}
                borderRadius="lg"
                borderWidth="1px"
                _hover={{
                  transform: "translateY(-4px)",
                  shadow: "lg",
                  borderColor: "teal.500",
                }}
                transition="all 0.2s"
                cursor="pointer"
                height="full"
                bg="white"
              >
                <VStack align="stretch" height="full" spacing={4}>
                  <Heading size="md" color="teal.600">
                    {lesson.title}
                  </Heading>
                  <Text color="gray.600" fontSize="sm" flex="1">
                    {lesson.description}
                  </Text>
                  <Text color="teal.500" fontSize="sm" fontWeight="medium">
                    Read More →
                  </Text>
                </VStack>
              </Box>
            </NextLink>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
