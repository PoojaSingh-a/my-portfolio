const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6 relative overflow-hidden border-t border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.02),transparent)] pointer-events-none" />

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                {/* Left Text */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-purple-300 mb-1">Pooja Singh Chouhan</h3>
                    <p className="text-gray-400 text-sm">
                        Full-Stack Developer | Cloud Enthusiast | Nature Advocate 🌿
                    </p>
                </div>

                {/* Links */}
                <div className="flex gap-6 text-sm text-gray-400">
                    <a
                        href="#about"
                        className="hover:text-purple-400 transition"
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="hover:text-purple-400 transition"
                    >
                        Projects
                    </a>
                    <a
                        href="#skills"
                        className="hover:text-purple-400 transition"
                    >
                        Skills
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-purple-400 transition"
                    >
                        Contact
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github text-xl hover:text-purple-400 transition" />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin text-xl hover:text-purple-400 transition" />
                    </a>
                    <a href="mailto:youremail@example.com">
                        <i className="fas fa-envelope text-xl hover:text-purple-400 transition" />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-xs text-gray-500 mt-6 relative z-10">
                © {new Date().getFullYear()} Pooja Singh Chouhan. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
