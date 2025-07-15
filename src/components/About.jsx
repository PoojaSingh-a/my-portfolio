const About = () => {
    return (
        <section id="about" className="relative py-24 px-6 bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden">
            {/* Decorative radial background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_70%)] pointer-events-none z-0" />

            <div className="max-w-6xl mx-auto relative z-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.05)] px-6 md:px-12 py-16">

                <h2 className="text-4xl md:text-4xl font-extrabold text-center mb-10 text-purple-300 tracking-tight">
                    About Me
                </h2>
                <div className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto text-center space-y-2">
                    <p>
                        Hello! 👋 I'm <span className="text-white font-semibold">Pooja Singh Chouhan</span>, a passionate
                        <span className="text-purple-400 font-medium"> Full-Stack Developer </span> and
                        <span className="text-blue-400 font-medium"> Cloud Enthusiast</span>. I specialize in crafting scalable and user-friendly web applications that solve real-world problems.
                    </p>
                    <p className="mt-4">
                        I love transforming ideas into interactive interfaces and robust backends — from creating dynamic UIs with React, to building APIs with Node.js.
                    </p>
                    <p>
                         My goal is to contribute to meaningful projects that promote positive change — writing clean code that leads to changes.
                    </p>
                    <p>
                        When I’m not coding, you’ll find me exploring new tech trends, learning new skills and brainstorming innovative solutions. Let’s innovate, create, and grow together! 💡✨
                    </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    {[
                        ['Java / C++', 'orange'],
                        ['React.js', 'purple'],
                        ['Node.js', 'indigo'],
                        ['MySQL / MongoDB', 'blue'],
                        ['Cloud', 'green'],
                        ['Git & GitHub', 'red'],
                    ].map(([tech, color]) => (
                        <span
                            key={tech}
                            className={`bg-${color}-800/30 border border-${color}-600 text-${color}-300 px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition-transform duration-200`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
