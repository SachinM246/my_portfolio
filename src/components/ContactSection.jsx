import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react"

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "sachinmathur246@gmail.com",
        href: "mailto:sachinmathur246@gmail.com",
        color: "text-blue-500"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 7060501310",
        href: "tel:+917060501310",
        color: "text-green-500"
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Agra, Uttar Pradesh",
        href: "https://www.google.com/maps/place/Agra,+Uttar+Pradesh",
        color: "text-red-500"
    },
    {
        icon: Github,
        label: "GitHub",
        value: "SachinM246",
        href: "https://github.com/SachinM246",
        color: "text-purple-500"
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Sachin Kumar",
        href: "https://www.linkedin.com/in/sachin-kumar-581337140/",
        color: "text-blue-600"
    }
]

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [status, setStatus] = useState({ type: "", message: "" })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus({ type: "", message: "" })

        try {
            const response = await fetch("https://formspree.io/f/mqaggyvv", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setStatus({
                    type: "success",
                    message: "Message sent successfully! I'll get back to you soon."
                })
                setFormData({ name: "", email: "", subject: "", message: "" })
            } else {
                throw new Error("Failed to send message")
            }
        } catch (error) {
            setStatus({
                type: "error",
                message: "Failed to send message. Please try emailing me directly."
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Have a project in mind? I'm always open to discussing new projects,
                        creative ideas, or opportunities to be part of your visions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information Cards */}
                    <div className="space-y-6">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-3 text-foreground">Let's Connect</h3>
                            <p className="text-muted-foreground">
                                Feel free to reach out through any of these channels. I typically respond within 24 hours.
                            </p>
                        </div>

                        {contactInfo.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target={item.label === "Email" || item.label === "Phone" ? undefined : "_blank"}
                                rel={item.label === "Email" || item.label === "Phone" ? undefined : "noopener noreferrer"}
                                className="group flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className={`p-3 rounded-lg bg-primary/10 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon size={24} />
                                </div>
                                <div className="flex-grow">
                                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                                        {item.value}
                                    </p>
                                </div>
                                <Send size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                            </a>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>

                        {/* Status Messages */}
                        {status.message && (
                            <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${status.type === "success"
                                ? "bg-green-500/10 border border-green-500/20 text-green-600"
                                : "bg-red-500/10 border border-red-500/20 text-red-600"
                                }`}>
                                {status.type === "success" ? (
                                    <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />
                                ) : (
                                    <AlertCircle size={20} className="mt-0.5 flex-shrink-0" />
                                )}
                                <p className="text-sm">{status.message}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="email@example.com"
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Subject Input */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Collaboration"
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-3 px-6 rounded-lg font-medium hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Additional Info */}
                        <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                            <p className="text-sm text-muted-foreground text-center">
                                💡 <span className="font-medium text-foreground">Quick Tip:</span> For urgent inquiries, feel free to reach out via{" "}
                                <a href="mailto:sachinmathur246@gmail.com" className="text-primary hover:underline font-medium">
                                    email
                                </a>{" "}
                                or{" "}
                                <a href="https://www.linkedin.com/in/sachin-kumar-581337140/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                                    LinkedIn
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-block p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
                        <p className="text-lg font-medium text-foreground mb-2">
                            Looking for a developer?
                        </p>
                        <p className="text-muted-foreground mb-4">
                            I'm available for freelance projects and full-time opportunities
                        </p>
                        <a
                            href="mailto:sachinmathur246@gmail.com"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all duration-300 font-medium"
                        >
                            <Mail size={18} />
                            Let's Talk
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}