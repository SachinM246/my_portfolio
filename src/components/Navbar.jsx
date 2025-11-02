import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

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
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);

            // Determine active section based on scroll position
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Close mobile menu when clicking outside or on a link
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled
                ? "py-3 bg-background/80 backdrop-blur-md shadow-lg border-b border-border/50"
                : "py-5"
        )}>
            <div className="container mx-auto flex items-center justify-between px-4 md:px-8 lg:px-32">
                {/* Logo */}
                <a
                    className="text-xl font-bold flex items-center group"
                    href="#hero"
                    onClick={handleLinkClick}
                >
                    <span className="relative z-10">
                        <span className="text-primary group-hover:scale-105 inline-block transition-transform duration-300">
                            Sachin
                        </span>
                        <span className="text-foreground ml-0.5 group-hover:scale-105 inline-block transition-transform duration-300">
                            .dev
                        </span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-1">
                    {navItems.map((item, key) => {
                        const sectionId = item.href.substring(1);
                        const isActive = activeSection === sectionId;

                        return (
                            <a
                                key={key}
                                className={cn(
                                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                                    isActive
                                        ? "text-primary"
                                        : "text-foreground/70 hover:text-foreground hover:bg-accent/50"
                                )}
                                href={item.href}
                            >
                                {item.label}
                                {isActive && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                                )}
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className={cn(
                        "md:hidden p-2 rounded-lg transition-all duration-300 z-50 relative",
                        isMenuOpen
                            ? "text-primary bg-accent"
                            : "text-foreground/80 hover:text-primary hover:bg-accent/50"
                    )}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation Menu */}
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-lg z-40",
                        "flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-2 w-full max-w-xs px-8">
                        {navItems.map((item, key) => {
                            const sectionId = item.href.substring(1);
                            const isActive = activeSection === sectionId;

                            return (
                                <a
                                    key={key}
                                    className={cn(
                                        "text-center px-6 py-4 rounded-lg text-lg font-medium",
                                        "transition-all duration-300 transform",
                                        isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                                        isActive
                                            ? "text-primary bg-accent"
                                            : "text-foreground/70 hover:text-foreground hover:bg-accent/50"
                                    )}
                                    style={{
                                        transitionDelay: isMenuOpen ? `${key * 50}ms` : '0ms'
                                    }}
                                    href={item.href}
                                    onClick={handleLinkClick}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
};