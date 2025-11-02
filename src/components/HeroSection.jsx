import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { useState, useEffect } from "react"

export const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [typedText, setTypedText] = useState("");
    const roles = ["Full Stack Developer", "MERN Specialist", "UI/UX Enthusiast", "Problem Solver"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing effect
    useEffect(() => {
        const currentRole = roles[roleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (typedText.length < currentRole.length) {
                    setTypedText(currentRole.slice(0, typedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (typedText.length > 0) {
                    setTypedText(currentRole.slice(0, typedText.length - 1));
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [typedText, isDeleting, roleIndex]);

    // Mouse tracking for parallax effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const socialLinks = [
        { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
        { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
        { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
        { icon: Mail, href: "#contact", label: "Email", color: "hover:text-red-500" },
    ];

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
            {/* Dynamic gradient background - brighter for light mode */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200/40 via-blue-200/40 to-pink-200/40 dark:from-purple-500/10 dark:via-blue-500/10 dark:to-pink-500/10"></div>

            {/* Animated orbs with better light mode visibility */}
            <div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/40 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse"
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    transition: 'transform 0.5s ease-out'
                }}
            ></div>
            <div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/40 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse"
                style={{
                    transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
                    transition: 'transform 0.5s ease-out',
                    animationDelay: '1s'
                }}
            ></div>

            {/* Floating particles with light mode visibility */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/50 dark:bg-purple-500/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    ></div>
                ))}
            </div>

            {/* Main content */}
            <div className="container max-w-5xl mx-auto text-center z-10 relative">
                <div className="space-y-6">
                    {/* Greeting badge */}
                    <div className="opacity-0 animate-fade-in">
                        <span className="inline-block px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 shadow-sm">
                            👋 Welcome to my portfolio
                        </span>
                    </div>

                    {/* Name with profile image inline */}
                    <div className="flex flex-col items-center gap-6 mb-4">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                            <span className="opacity-0 animate-fade-in block mb-2 text-gray-800 dark:text-gray-300">
                                Hi, I'm
                            </span>
                            <span className="opacity-0 animate-fade-in-delay-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 inline-block">
                                Sachin Mathur
                            </span>
                        </h1>
                    </div>

                    {/* Typing effect role */}
                    <div className="h-12 opacity-0 animate-fade-in-delay-2">
                        <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-400">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                                {typedText}
                            </span>
                            <span className="animate-pulse">|</span>
                        </p>
                    </div>

                    {/* Description with better light mode colors */}
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-delay-3">
                        Passionate about creating <span className="font-semibold text-purple-700 dark:text-purple-400">fast</span>,
                        <span className="font-semibold text-blue-700 dark:text-blue-400"> reliable</span>, and
                        <span className="font-semibold text-pink-700 dark:text-pink-400"> user-focused</span> web applications.
                        I love turning ideas into interactive, real-time products using MERN, Next.js, and Supabase.
                    </p>

                    {/* Social links with better light mode styling */}
                    <div className="flex justify-center gap-4 pt-4 opacity-0 animate-fade-in-delay-3">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                aria-label={social.label}
                                className={`p-3 rounded-full bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-sm`}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons with better contrast */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 opacity-0 animate-fade-in-delay-4 mb-8">
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-center overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 dark:hover:shadow-purple-500/30 hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                View My Work
                                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-full border-2 border-purple-600 text-purple-700 dark:text-purple-400 font-semibold text-center hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 bg-white/50 dark:bg-transparent"
                        >
                            Let's Talk
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator with better visibility */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10 ml-60">
                <span className="text-sm text-gray-700 dark:text-gray-400 mb-2 font-medium">Scroll to explore</span>
                <div className="w-6 h-10 rounded-full border-2 border-purple-600 dark:border-purple-400 flex justify-center p-1">
                    <div className="w-1 h-2 bg-purple-600 dark:bg-purple-400 rounded-full animate-pulse"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
            `}</style>
        </section>
    )
}