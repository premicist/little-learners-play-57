import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Little Learners — Toddler Learning Games" },
      {
        name: "description",
        content:
          "Offline toddler learning games: object finder, English alphabet, नेपाली वर्णमाला, numbers 1-10, matching, and first words.",
      },
      { property: "og:title", content: "Little Learners — Toddler Learning Games" },
      {
        property: "og:description",
        content:
          "Colorful offline games for toddlers: objects, letters, Devanagari, numbers, matching and first words.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main style={{ position: "fixed", inset: 0 }}>
      <h1 className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
        Little Learners — Toddler Learning Games
      </h1>
      <iframe
        src="/app/index.html"
        title="Little Learners toddler learning games"
        style={{ width: "100%", height: "100%", border: "none", display: "block" }}
        allow="microphone"
      />
    </main>
  );
}
