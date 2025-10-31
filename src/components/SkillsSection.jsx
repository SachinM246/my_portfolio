const skills = [
    // Languages
    { name: 'JavaScript', level: 90, category: 'Languages' },
    { name: 'TypeScript', level: 85, category: 'Languages' },
    { name: 'Node.js', level: 90, category: 'Languages' },
    { name: 'Python', level: 70, category: 'Languages' },
    { name: 'C++', level: 75, category: 'Languages' },
    { name: 'SQL', level: 80, category: 'Languages' },
    { name: 'HTML', level: 95, category: 'Languages' },
    { name: 'CSS', level: 90, category: 'Languages' },
    // Frameworks & Libraries
    { name: 'React', level: 90, category: 'Frameworks & Libraries' },
    { name: 'React Native', level: 85, category: 'Frameworks & Libraries' },
    { name: 'Express.js', level: 90, category: 'Frameworks & Libraries' },
    { name: 'Next.js', level: 85, category: 'Frameworks & Libraries' },
    { name: 'Socket.io', level: 80, category: 'Frameworks & Libraries' },
    { name: 'Tailwind CSS', level: 85, category: 'Frameworks & Libraries' },
    { name: 'Bootstrap', level: 80, category: 'Frameworks & Libraries' },
    // Database & Tools
    { name: 'PostgreSQL', level: 85, category: 'Database & Tools' },
    { name: 'MongoDB', level: 90, category: 'Database & Tools' },
    { name: 'MySQL', level: 80, category: 'Database & Tools' },
    { name: 'Supabase', level: 85, category: 'Database & Tools' },
    { name: 'Git', level: 90, category: 'Database & Tools' },
    { name: 'Docker', level: 75, category: 'Database & Tools' },
    { name: 'Postman', level: 85, category: 'Database & Tools' },
    { name: 'VS Code', level: 90, category: 'Database & Tools' },
    { name: 'Figma', level: 70, category: 'Database & Tools' },
];

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30 dark:bg-secondary/40">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-md card-hover">
                            <div className="text-left mb-4">
                                <h3 className="text-lg font-semibold">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-base text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}