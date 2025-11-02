import { useState } from "react";

const skills = [
    // Languages
    {
        name: 'JavaScript',
        level: 90,
        category: 'Languages',
        icon: '🟨',
        color: 'from-yellow-400 to-yellow-600'
    },
    {
        name: 'TypeScript',
        level: 85,
        category: 'Languages',
        icon: '🔷',
        color: 'from-blue-500 to-blue-700'
    },
    {
        name: 'Node.js',
        level: 90,
        category: 'Languages',
        icon: '🟢',
        color: 'from-green-500 to-green-700'
    },
    {
        name: 'Python',
        level: 70,
        category: 'Languages',
        icon: '🐍',
        color: 'from-blue-400 to-yellow-500'
    },
    {
        name: 'C++',
        level: 75,
        category: 'Languages',
        icon: '⚙️',
        color: 'from-blue-600 to-purple-600'
    },
    {
        name: 'SQL',
        level: 80,
        category: 'Languages',
        icon: '🗄️',
        color: 'from-orange-500 to-red-600'
    },
    {
        name: 'HTML',
        level: 95,
        category: 'Languages',
        icon: '📄',
        color: 'from-orange-600 to-red-500'
    },
    {
        name: 'CSS',
        level: 90,
        category: 'Languages',
        icon: '🎨',
        color: 'from-blue-500 to-blue-600'
    },
    // Frameworks & Libraries
    {
        name: 'React',
        level: 90,
        category: 'Frameworks & Libraries',
        icon: '⚛️',
        color: 'from-cyan-400 to-blue-500'
    },
    {
        name: 'React Native',
        level: 85,
        category: 'Frameworks & Libraries',
        icon: '📱',
        color: 'from-cyan-500 to-purple-500'
    },
    {
        name: 'Express.js',
        level: 90,
        category: 'Frameworks & Libraries',
        icon: '🚂',
        color: 'from-gray-600 to-gray-800'
    },
    {
        name: 'Next.js',
        level: 85,
        category: 'Frameworks & Libraries',
        icon: '▲',
        color: 'from-black to-gray-700'
    },
    {
        name: 'Socket.io',
        level: 80,
        category: 'Frameworks & Libraries',
        icon: '🔌',
        color: 'from-gray-700 to-black'
    },
    {
        name: 'Tailwind CSS',
        level: 85,
        category: 'Frameworks & Libraries',
        icon: '💨',
        color: 'from-cyan-400 to-blue-500'
    },
    {
        name: 'Bootstrap',
        level: 80,
        category: 'Frameworks & Libraries',
        icon: '🅱️',
        color: 'from-purple-600 to-purple-800'
    },
    // Database & Tools
    {
        name: 'PostgreSQL',
        level: 85,
        category: 'Database & Tools',
        icon: '🐘',
        color: 'from-blue-600 to-blue-800'
    },
    {
        name: 'MongoDB',
        level: 90,
        category: 'Database & Tools',
        icon: '🍃',
        color: 'from-green-600 to-green-800'
    },
    {
        name: 'MySQL',
        level: 80,
        category: 'Database & Tools',
        icon: '🐬',
        color: 'from-blue-500 to-orange-500'
    },
    {
        name: 'Supabase',
        level: 85,
        category: 'Database & Tools',
        icon: '⚡',
        color: 'from-green-500 to-emerald-600'
    },
    {
        name: 'Git',
        level: 90,
        category: 'Database & Tools',
        icon: '🔱',
        color: 'from-orange-600 to-red-600'
    },
    {
        name: 'Docker',
        level: 75,
        category: 'Database & Tools',
        icon: '🐳',
        color: 'from-blue-500 to-blue-700'
    },
    {
        name: 'Postman',
        level: 85,
        category: 'Database & Tools',
        icon: '📮',
        color: 'from-orange-500 to-orange-700'
    },
    {
        name: 'VS Code',
        level: 90,
        category: 'Database & Tools',
        icon: '💻',
        color: 'from-blue-600 to-blue-800'
    },
    {
        name: 'Figma',
        level: 70,
        category: 'Database & Tools',
        icon: '🎯',
        color: 'from-purple-500 to-pink-500'
    },
];

const categories = ['All', 'Languages', 'Frameworks & Libraries', 'Database & Tools'];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const filteredSkills = skills.filter((skill) =>
        activeCategory === 'All' || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Skills</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Explore my expertise across various technologies and tools
                    </p>
                </div>

                {/* Category filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30 scale-105'
                                : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md'
                                }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 cursor-pointer"
                            onMouseEnter={() => setHoveredSkill(index)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            style={{
                                transform: hoveredSkill === index ? 'translateY(-8px)' : 'translateY(0)',
                            }}
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                            <div className="relative z-10">
                                {/* Icon and name */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`text-4xl w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${skill.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                        {skill.name}
                                    </h3>
                                </div>

                                {/* Progress bar */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                                        <span className="text-sm font-bold text-gray-800 dark:text-gray-200">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                                            style={{
                                                width: hoveredSkill === index ? `${skill.level}%` : '0%',
                                                transitionDelay: '100ms'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Skill level indicator */}
                                <div className="mt-3 flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < Math.floor(skill.level / 20)
                                                ? `bg-gradient-to-r ${skill.color}`
                                                : 'bg-gray-200 dark:bg-gray-700'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats summary */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                            {skills.length}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Total Skills</div>
                    </div>
                    <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                            {skills.filter(s => s.category === 'Languages').length}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Languages</div>
                    </div>
                    <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                            {skills.filter(s => s.category === 'Frameworks & Libraries').length}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Frameworks</div>
                    </div>
                    <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                            {Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Avg Proficiency</div>
                    </div>
                </div>
            </div>
        </section>
    );
}