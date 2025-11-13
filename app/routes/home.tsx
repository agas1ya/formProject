import { Welcome } from "~/welcome/welcome";
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
      <Welcome /> 
    </main>
  );
}
