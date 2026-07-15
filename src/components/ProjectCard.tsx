import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    // category: string;
    description: string;
    image: string;
    slug: string;
    height?: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/case-study/${project.slug}`}
      className="
        block
        break-inside-avoid
        bg-[#1A1A1A]
        border
        border-[#91bbff]
        rounded-3xl
        overflow-hidden
        group
        cursor-pointer
        transition-all
        duration-300
        hover:-translate-y-2
        
      ">
      {/* /  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 dark:group-hover:opacity-100 bg-gradient-to-b from-white/20 via-white/10 to-transparent" /> */}
      <div
        className={`p-5 ${project.height}  bg-white/80 dark:bg-[#252525] dark:group-hover:opacity-100 bg-gradient-to-b from-white/20 via-[#91bbff] `}>
        <div className="relative h-full w-full rounded-2xl overflow-hidden bg-zinc-100 ">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="px-6 pb-6 flex justify-between items-end bg-white/80 dark:bg-[#252525] ">
        <div>
          <h3 className="text-black dark:text-white text-3xl font-semibold mb-2 tracking-wider">
            {project.title}
          </h3>

          <p className="text-zinc-400 text-sm font-sans font-semibold">
            {project.description}
          </p>
        </div>

        <span
          aria-label={`View ${project.title} case study `}
          className="
            w-12
            h-12
            rounded-full
            border
            border-[#91bbff]
            flex
            items-center
            justify-center
            text-[#91bbff]
            transition
            group-hover:bg-[#91bbff]
            group-hover:text-black
           
          ">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}
