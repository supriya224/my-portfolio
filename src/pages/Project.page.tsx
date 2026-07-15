import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { MainLayout } from "../layouts";

export default function ProjectPage() {
  return (
    <MainLayout>
      <section className="bg-[#eae6e1] dark:bg-[#1A1A1A] text-black dark:text-white grid-bg py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex px-4 py-1 rounded-full border border-zinc-800 bg-zinc-900 dark:bg-white/20 dark:text-white text-[11px] uppercase tracking-[2px] text-zinc-400">
              Design Highlights
            </span>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold text-black dark:text-white">
              My work, your{" "}
              <span className="text-blue-700 dark:text-[#91bbff]">
                next inspiration.
              </span>
            </h2>
          </div>

          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
