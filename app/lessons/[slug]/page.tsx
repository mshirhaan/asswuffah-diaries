// src/app/lessons/[slug]/page.tsx
import { Box, Container, Heading } from "@chakra-ui/react";
import { getAllLessons, getLessonBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const lessons = await getAllLessons();
  return lessons.map((lesson) => ({
    slug: lesson.slug,
  }));
}

export default async function LessonPage({
  params,
}: {
  params: { slug: string };
}) {
  const lesson = await getLessonBySlug(params.slug);

  if (!lesson) {
    notFound();
  }

  return (
    <Container maxW="container.md" py={8}>
      <Box className="prose">
        {/* next-mdx-remote/rsc uses MDXRemote component directly */}
        <MDXRemote source={lesson.content} />
      </Box>
    </Container>
  );
}
