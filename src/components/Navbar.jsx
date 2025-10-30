import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { use, useEffect, useState } from "react";


const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between px-32 py-1">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10 mr-2">
                        <span className="text-glow text-foreground">Sachin</span> Portfolio
                    </span>
                </a>
                {/* Desktop Navigation */}

                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            href={item.href}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Navigation */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors duration-300 z-50"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-transform duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-4">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                className="text-forground/80 hover:text-primary transition-colors duration-300"
                                href={item.href}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};