import { ProjectCard } from "./ProjectCard";
import { ReservedTable } from "./ReservedTable";
import { Wave } from "../../components/wave";

export function Projects() {
  return (
    <section id="realisations">
      <ProjectCard />
      <ReservedTable />
      <Wave />
    </section>
  );
}
