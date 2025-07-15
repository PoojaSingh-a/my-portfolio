const Education = () => {
    return (
        <section id="education" className="relative py-20 px-6 bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent)] pointer-events-none z-0" />
            <div className="max-w-5xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-white tracking-tight">
                    Education Timeline
                </h2>

                <div className="relative border-l-4 border-white pl-6 space-y-6">
                    {/* Timeline Item 1 */}
                    <div className="relative group">
                        <div className="absolute -left-9 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-purple-500 border-4 border-purple-500 group-hover:scale-110 transition" />
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-md hover:shadow-lg hover:border-white/20 transition-all duration-300">
                            <p className="text-sm text-gray-400 mb-1">2023 - 2025</p>
                            <h3 className="text-xl font-semibold text-white">MCA - <i>Masters of Computer Application</i></h3>
                            <p className="text-pink-300 font-medium">Banasthali Vidyapith</p>
                            <p className="font-base">CGPA - 9.39</p>
                            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                                Data Structures, Java, C#.Net, Software Engineering, Operating Systems, Cloud Computing, Big Data Visualization, Distributed Computing, Cybersecurity
                            </p>
                        </div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="relative group">
                        <div className="absolute -left-9 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-purple-500 border-4 border-purple-500 group-hover:scale-110 transition" />
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-md hover:shadow-lg hover:border-white/20 transition-all duration-300">
                            <p className="text-sm text-gray-400 mb-1">2020 - 2023</p>
                            <h3 className="text-xl font-semibold text-white">BCA - <i>Bachelor of Computer Application</i></h3>
                            <p className="text-blue-300 font-medium">Banasthali Vidyapith</p>
                            <p className="font-base">CGPA - 9.40</p>
                            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                                C, C++, Java, Data Structures, Database management, SQL, Computer Networks, Web Development
                            </p>
                        </div>
                    </div>

                    {/* Timeline Item 3 */}
                    <div className="relative group">
                        <div className="absolute -left-9 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-purple-500 border-4 border-purple-500 group-hover:scale-110 transition" />
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-md hover:shadow-lg hover:border-white/20 transition-all duration-300">
                            <p className="text-sm text-gray-400 mb-1">2018 - 2020</p>
                            <h3 className="text-xl font-semibold text-white">Senior Secondary (PCM,CS)</h3>
                            <p className="text-green-300 font-medium">Atomic Energy Central School No- 4</p>
                            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                                Physics, Chemistry, Mathematics, Computer Science    — developed analytical thinking and problem-solving mindset that shaped my path to tech.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
