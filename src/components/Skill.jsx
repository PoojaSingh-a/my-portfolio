const Skills = () => {
    return (
        <section id="skills" className="relative py-16 px-6 bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent)] pointer-events-none z-0" />
            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mt-10 mb-12 tracking-tight">
                    Skills & Technologies
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                    {/* Frontend Skills */}
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:shadow-xl hover:border-white/20 transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-pink-300">Frontend</h3>
                        <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                            <li>HTML5, CSS3, JavaScript (ES6+)</li>
                            <li>React.js, Tailwind CSS</li>
                            <li>Swiper.js</li>
                            <li>Responsive Web Design</li>
                        </ul>
                    </div>

                    {/* Backend Skills */}
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:shadow-xl hover:border-white/20 transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-300">Backend</h3>
                        <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                            <li>Node.js, Express.js</li>
                            <li>MongoDB, MySQL</li>
                            <li>REST APIs</li>
                            <li>Authentication (JWT, Cookies)</li>
                        </ul>
                    </div>

                    {/* Tools & Platforms */}
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:shadow-xl hover:border-white/20 transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Tools & Platforms</h3>
                        <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                            <li>Git, GitHub</li>
                            <li>VS Code</li>
                            <li>XAMPP</li>
                            <li>Google Calendar API</li>
                        </ul>
                    </div>

                    {/* Programming Languages */}
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:shadow-xl hover:border-white/20 transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-green-300">Programming</h3>
                        <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                            <li>Java, C++, C</li>
                            <li>Python (Basic)</li>
                            <li>OOPs, Data Structures</li>
                        </ul>
                    </div>

                    {/* Extra Skills */}
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:shadow-xl hover:border-white/20 transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-purple-300">Others</h3>
                        <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                            <li>Problem Solving (150+ LeetCode)</li>
                            <li>Team Collaboration</li>
                            <li>Agile Basics</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
