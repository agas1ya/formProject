import { PersonalDetails } from "~/Components/form";
import type { Route } from "../../.react-router/types/app/routes/+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "App" },
    { name: "description", content: "A fresh starter app" },
  ];
}

export default function Home() {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <PersonalDetails /> 
    </main>
  );
}
