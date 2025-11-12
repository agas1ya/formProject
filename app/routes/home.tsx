import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "App" },
    { name: "description", content: "A fresh starter app" },
  ];
}

export default function Home() {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="text-2xl font-semibold">Welcome</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        This is a clean starter route — remove or replace this content with
        your own components.
      </p>
    </main>
  );
}
