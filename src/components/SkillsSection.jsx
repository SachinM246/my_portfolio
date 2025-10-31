import { useState } from "react";

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

const categories = ['All', 'Languages', 'Frameworks & Libraries', 'Database & Tools'];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredSkills = skills.filter((skill) => activeCategory === 'All' || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30 dark:bg-secondary/40">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            className={`py-2 px-5 rounded-full transition-colors duration-300 ${activeCategory === category
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-secondary/70 hover:bg-secondary text-muted-foreground'
                                }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-md card-hover">
                            <div className="text-left mb-4">
                                <h3 className="text-sm ">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-1 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-1 rounded-full origin-left animate-[grow_1.5s_ease_out]"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-xs text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}