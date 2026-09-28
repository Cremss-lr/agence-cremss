import { Team } from "./Team";
import { RecipeCard } from "./RecipeCard";
import { Wave } from "../../components/wave";

export function Studio() {
  return (
    <section id="studio">
      <Team />
      <RecipeCard />
      <Wave />
    </section>
  );
}
