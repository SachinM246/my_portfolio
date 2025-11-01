import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { useState } from "react"

const projects = [
    {
        id: 1,
        title: "Freight Forwarding System",
        description: "Developed an end-to-end shipping line booking system automating booking, documentation, and team workflows, reducing processing time from 45 to 15 minutes.",
        imageUrl: "/projects/image2.png",
        tags: ["Next.js", "TypeScript", "Supabase", "Node.js", "Docker", "GCP", "Tailwind CSS", "Material UI"],
        demoUrl: "https://freightforwarding.unicnnect.in/bookings",
        githubUrl: "https://github.com/SachinM246",
    },
    {
        id: 2,
        title: "Billing System",
        description: "Built a multi-currency billing module generating tax-compliant invoices and notes, cutting invoice creation time from 20 minutes to just 3 minutes.",
        imageUrl: "/projects/image3.png",
        tags: ["Next.js", "TypeScript", "Supabase", "Node.js", "Docker", "GCP", "Tailwind CSS", "Material UI"],
        demoUrl: "https://billing-48705880498.asia-east1.run.app/job",
        githubUrl: "https://github.com/SachinM246",
    },
    {
        id: 3,
        title: "ChatApp",
        description: "Developed a real-time chat application using the MERN stack and Socket.io with secure authentication, message persistence, and a responsive UI built with Tailwind CSS.",
        imageUrl: "/projects/image1.png",
        tags: ["React", "Socket.io", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        demoUrl: "https://calm-moonbeam-36594e.netlify.app",
        githubUrl: "https://github.com/SachinM246/Chattify",
    }
]

const ProjectCard = ({ project }) => {
    const [showAllTags, setShowAllTags] = useState(false)
    const visibleTags = 4
    const hasMoreTags = project.tags.length > visibleTags

    return (
        <div
            className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/50 flex flex-col"
        >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden bg-muted">
                <img
                    src={project.imageUrl}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 relative">
                    {project.tags.slice(0, visibleTags).map((tag, index) => (
                        <span
                            key={index}
                            className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                        >
                            {tag}
                        </span>
                    ))}
                    {hasMoreTags && (
                        <div className="relative">
                            <button
                                onMouseEnter={() => setShowAllTags(true)}
                                onMouseLeave={() => setShowAllTags(false)}
                                className="bg-muted text-muted-foreground text-xs font-medium px-3 py-1 rounded-full hover:bg-muted/80 transition-colors cursor-pointer"
                            >
                                +{project.tags.length - visibleTags}
                            </button>

                            {/* Tooltip with remaining tags */}
                            {showAllTags && (
                                <div className="absolute left-0 bottom-full mb-2 z-10 bg-primary/90 border border-border rounded-lg shadow-xl p-3 min-w-[200px] animate-in fade-in slide-in-from-bottom-2 duration-200">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.slice(visibleTags).map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-primary/10 text-secondary text-xs font-medium px-3 py-1 rounded-full border border-primary/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    {/* Tooltip arrow */}
                                    <div className="absolute -bottom-1 left-4 w-2 h-2 bg-popover border-r border-b border-border rotate-45"></div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm font-medium flex-1 justify-center group/btn"
                        aria-label={`View ${project.title} demo`}
                    >
                        <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        Live Demo
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2 border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300"
                        aria-label={`View ${project.title} on GitHub`}
                    >
                        <Github size={20} className="text-foreground hover:text-primary transition-colors" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Here are some of the projects I've worked on recently. Each project showcases my technical skills and problem-solving abilities.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/SachinM246"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium group"
                    >
                        View All Projects on GitHub
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    )
}