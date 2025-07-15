import BVPortal from '../assets/BV_Portal.png';
import InvoicingSystem from '../assets/InvoicingSystem.JPG';
import GreenSpark from '../assets/GreenSpark.JPG';

const Projects = () => {
    const projects = [
        {
            title: "Invoicing System",
            description:
                "A full-stack platform where businesses can generate invoices, manage clients, send emails with Google Calendar reminders, and download PDFs.",
            tech: ["React.js", "Node.js", "MySQL", "JWT", "EmailJS", "Google Calendar API"],
            link: "https://github.com/PoojaSingh-a/Invoice-System",
            image: InvoicingSystem,
        },
        {
            title: "GreenSpark 🌱",
            description:
                "Environmental web platform for users to join nearby campaigns like tree plantation, earn points, and promote eco-activities.",
            tech: ["React.js", "Framer Motion", "Tailwind", "Eventbrite API"],
            link: "https://github.com/PoojaSingh-a/SaveTheGreen",
            image: GreenSpark,
        },
        {
            title: "Blog & Beyond",
            description:
                "A feature-rich blog website with user authentication, blog editing, read-more pages, and UI themes.",
            tech: ["Node.js", "Express", "MongoDB", "EJS", "JWT"],
            link: "https://github.com/PoojaSingh-a/BlogsAndBeyond",
            image: null, // Add image here if available
        },
        {
            title: "BV Portal",
            description:
                "A full-stack university portal designed for managing academic records, student login, result viewing, and admin functionalities. Built with responsive UI and secure access.",
            tech: ["Html", "CSS", "JSP", "MySQL"],
            link: null, // Add link if available
            image: BVPortal,
        },
    ];

    return (
        <section id="projects" className="relative py-16 px-6 bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent)] pointer-events-none z-0" />
            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-md hover:shadow-xl hover:border-white/20 transition-all duration-300"
                        >
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-40 object-cover rounded-lg mb-4 border border-white/10"
                                />
                            )}
                            <h3 className="text-2xl font-semibold mb-2 text-purple-300">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                                {project.description}
                            </p>
                            <p className="text-sm text-gray-400 mb-2">
                                <span className="font-medium text-white">Tech Stack:</span>{" "}
                                {project.tech.join(", ")}
                            </p>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-3 text-sm text-pink-400 hover:underline"
                                >
                                    View on GitHub →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
