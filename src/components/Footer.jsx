import { Mail, Phone, MapPin, Github, Linkedin, Heart, ArrowUp } from "lucide-react"

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        href: "mailto:sachinmathur246@gmail.com",
        color: "hover:text-blue-500"
    },
    {
        icon: Phone,
        label: "Phone",
        href: "tel:+917060501310",
        color: "hover:text-green-500"
    },
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/SachinM246",
        color: "hover:text-purple-500"
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/sachin-kumar-581337140/",
        color: "hover:text-blue-600"
    }
]

const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
]

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-card border-t border-border relative">
            {/* Main Footer Content */}
            <div className="container mx-auto max-w-6xl px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Sachin Mathur
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Full Stack Developer specializing in React, Node.js, and modern web technologies.
                            Building innovative solutions one line of code at a time.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin size={16} className="text-red-500" />
                            <span>Agra, Uttar Pradesh</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground">Connect With Me</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Let's build something amazing together!
                        </p>
                        <div className="flex flex-wrap gap-5 ml-12">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target={item.label === "Email" || item.label === "Phone" ? undefined : "_blank"}
                                    rel={item.label === "Email" || item.label === "Phone" ? undefined : "noopener noreferrer"}
                                    className={`p-3 bg-background border border-border rounded-lg ${item.color} transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg group`}
                                    aria-label={item.label}
                                >
                                    <item.icon size={20} className="transition-transform group-hover:scale-110" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                        &copy; {new Date().getFullYear()} Sachin Mathur. Made with
                        <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
                        and lots of coffee ☕
                    </p>

                    <div className="flex items-center gap-4 text-sm">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            Privacy Policy
                        </a>
                        <span className="text-border">|</span>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="absolute right-8 -top-6 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </button>
        </footer>
    )
}