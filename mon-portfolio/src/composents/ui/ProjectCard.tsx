import { Project } from "@/data/project";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            {/* On boucle sur les technologies du projet */}
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {tech}
                </span>
                ))}
            </div>
            <Link
                href={`/projects/${project.slug}`}
                className="text-blue-600 font-semibold hover:underline">
                    Voir les détails &rarr;
            </Link>
            </div>
  );
}