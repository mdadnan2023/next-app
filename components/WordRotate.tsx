"use client"

import WordRotate from "@/components/magicui/word-rotate";

export async function WordRotateDemo() {
  return (
    <WordRotate
      className="text-4xl font-bold text-black dark:text-white"
      words={["Word", "Rotate"]}
    />
  );
}
