// src/lib/mdx.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const LESSONS_PATH = path.join(process.cwd(), "lessons");

export interface Lesson {
  slug: string;
  title: string;
  description: string;
  content: string;
}

export async function getAllLessons(): Promise<Omit<Lesson, "content">[]> {
  const files = fs.readdirSync(LESSONS_PATH);

  const lessons = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(LESSONS_PATH, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug: file.replace(".mdx", ""),
        title: data.title,
        description: data.description,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  return lessons;
}

export async function getLessonBySlug(slug: string): Promise<Lesson | null> {
  try {
    const filePath = path.join(LESSONS_PATH, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title,
      description: data.description,
      content,
    };
  } catch {
    return null;
  }
}
