import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative ">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Software Developer</h3>

                        <p className="text-muted-foreground">
                            With 2 Years of Experience in software development, I specialize in crafting
                            dynamic web applications using modern technologies like React, Node.js, and Python.
                            My journey began with a deep curiosity for how things work, leading me to explore
                            coding and software design.
                        </p>

                        <p className="text-muted-foreground">
                            I thrive in collaborative environments, constantly seeking to learn and grow.
                            My goal is to create impactful software solutions that not only meet user needs
                            but also push the boundaries of innovation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>

                            <a className="px-6 py-2 border border-primary text-primary rounded-full text-center hover:bg-primary/10 transition-colors duration-300">
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="text-primary w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">Software Development</h4>
                                    <p className="text-muted-foreground ">
                                        Building robust and scalable software solutions using modern programming languages and frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="text-primary w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">UI/UX Design</h4>
                                    <p className="text-muted-foreground ">
                                        Crafting user-centered designs that enhance usability and improve user experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="text-primary w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">Project Management</h4>
                                    <p className="text-muted-foreground ">
                                        Overseeing projects from inception to completion, ensuring they meet requirements and deadlines.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}