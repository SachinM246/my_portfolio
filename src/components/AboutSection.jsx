import { Briefcase, Code, User, Award, Coffee, Rocket, Download, GraduationCap } from "lucide-react"
import { useState } from "react"

export const AboutSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const stats = [
        { value: "2+", label: "Years Experience", icon: Award },
        { value: "10+", label: "Projects Completed", icon: Rocket },
        { value: "15+", label: "Technologies", icon: Code },
    ];

    const expertise = [
        {
            icon: Code,
            title: "Software Development",
            description: "Building robust and scalable software solutions using modern programming languages and frameworks.",
            skills: ["React", "Node.js", "Python", "TypeScript"],
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: User,
            title: "UI/UX Design",
            description: "Crafting user-centered designs that enhance usability and improve user experience.",
            skills: ["Figma", "Responsive Design", "Tailwind CSS"],
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: Briefcase,
            title: "Project Management",
            description: "Overseeing projects from inception to completion, ensuring they meet requirements and deadlines.",
            skills: ["Agile", "Git", "Team Collaboration"],
            gradient: "from-orange-500 to-red-500"
        }
    ];

    const education = [
        {
            degree: "Master of Technology",
            field: "Corrosion Engineering",
            institution: "Indian Institute of Technology, Roorkee",
            years: "2021 - 2023",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Indian_Institute_of_Technology%2C_Roorkee.svg/200px-Indian_Institute_of_Technology%2C_Roorkee.svg.png",
            gradient: "from-blue-600 to-indigo-600"
        },
        {
            degree: "Bachelor of Technology",
            field: "Metallurgical and Materials Engineering",
            institution: "Indian Institute of Technology, Roorkee",
            years: "2016 - 2020",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Indian_Institute_of_Technology%2C_Roorkee.svg/200px-Indian_Institute_of_Technology%2C_Roorkee.svg.png",
            gradient: "from-green-600 to-teal-600"
        }
    ];

    return (
        <section id="about" className="py-24 px-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Me</span>
                    </h2>
                    <p className="text-gray-800 dark:text-gray-400 max-w-2xl mx-auto">
                        Passionate developer crafting digital experiences with code and creativity
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Left column - Introduction */}
                    <div className="space-y-6">
                        <div className="relative">
                            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>
                            <div className="pl-8">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                                    Passionate Software Developer
                                </h3>
                                <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-4">
                                    With <span className="font-semibold text-purple-600 dark:text-purple-400">2+ years</span> of experience in software development, I specialize in crafting
                                    dynamic web applications using modern technologies like React, Node.js, and Python.
                                    My journey began with a deep curiosity for how things work, leading me to explore
                                    coding and software design.
                                </p>
                                <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
                                    I thrive in collaborative environments, constantly seeking to learn and grow.
                                    My goal is to create impactful software solutions that not only meet user needs
                                    but also push the boundaries of innovation.
                                </p>
                            </div>
                        </div>

                        {/* Stats cards */}
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-300 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
                                            <stat.icon className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                                            {stat.value}
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-800 dark:text-gray-400">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Education Section */}
                        <div className="pt-6">
                            <div className="flex items-center gap-2 mb-4">
                                <GraduationCap className="w-6 h-6 text-purple-600" />
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Education</h4>
                            </div>
                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-300 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${edu.gradient} p-2 flex items-center justify-center shadow-md`}>
                                                <div className="w-full h-full bg-white rounded-md flex items-center justify-center overflow-hidden">
                                                    <img
                                                        src={edu.logo}
                                                        alt={`${edu.institution} logo`}
                                                        className="w-12 h-12 object-contain"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-lg font-bold text-gray-900 dark:text-white">
                                                    {edu.degree}
                                                </div>
                                                <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                                                    {edu.field}
                                                </div>
                                                <div className="text-sm text-gray-800 dark:text-gray-400">
                                                    {edu.institution}
                                                </div>
                                                <div className="text-xs text-gray-600 dark:text-gray-500 mt-1">
                                                    {edu.years}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <a
                                href="#contact"
                                className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-center overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105"
                            >
                                <span className="relative z-10">Get in Touch</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                            <a href="/resume/resume.pdf"
                                download="Sachin_Resume.pdf"
                                className="group px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full text-center font-medium hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                                <Download className="w-4 h-4" />
                                Download Resume
                            </a>
                        </div>
                    </div>

                    {/* Right column - Expertise cards */}
                    <div className="space-y-6">
                        {expertise.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-300 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{
                                    transform: hoveredCard === index ? 'translateX(8px)' : 'translateX(0)',
                                }}
                            >
                                {/* Gradient border effect */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                                <div className="relative z-10">
                                    <div className="flex items-start gap-4">
                                        <div className={`p-4 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <item.icon className="text-white w-6 h-6" />
                                        </div>
                                        <div className="flex-1 text-left">
                                            <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed mb-4">
                                                {item.description}
                                            </p>
                                            {/* Skills tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {item.skills.map((skill, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative corner element */}
                                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity duration-300`}></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom highlight section */}
                <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-600/20 backdrop-blur-sm">
                    <div className="text-center max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            Let's Build Something Amazing Together
                        </h3>
                        <p className="text-gray-800 dark:text-gray-300 mb-6">
                            I'm always excited to collaborate on innovative projects and explore new opportunities.
                            Whether you have a project in mind or just want to connect, feel free to reach out!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/50 text-sm font-medium text-gray-800 dark:text-gray-300">
                                💡 Problem Solver
                            </div>
                            <div className="px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/50 text-sm font-medium text-gray-800 dark:text-gray-300">
                                🚀 Fast Learner
                            </div>
                            <div className="px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/50 text-sm font-medium text-gray-800 dark:text-gray-300">
                                🤝 Team Player
                            </div>
                            <div className="px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/50 text-sm font-medium text-gray-800 dark:text-gray-300">
                                ⚡ Detail-Oriented
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}