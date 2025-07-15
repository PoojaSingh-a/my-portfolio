import { Briefcase, CalendarDays } from "lucide-react"; // Optional: using lucide-react for icons

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6 bg-gradient-to-br from-black via-gray-950 to-black text-white relative">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
                    Experience
                </h2>

                <div className="grid md:grid-cols-1 gap-10 relative">
                    {/* Timeline Line (optional style) */}
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 md:p-12 shadow-lg hover:shadow-xl hover:border-white/20 transition-all duration-300 group">

                        <p className="flex items-center text-sm text-gray-400 mb-2">
                            <CalendarDays className="w-4 h-4 mr-2 text-pink-400" />
                            Jan 2025 – June 2025
                        </p>

                        <h3 className="flex items-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-1">
                            <Briefcase className="w-5 h-5 mr-2 text-white/70" />
                            Fullstack Developer Intern
                        </h3>

                        <h4 className="text-md font-semibold text-white mb-4">
                            Pedestal Techno World Pvt. Ltd.
                        </h4>

                        <ul className="list-disc list-inside text-gray-300 text-sm leading-relaxed space-y-1 ml-1">
                            <li>Contributing to the development of web-based applications.</li>
                            <li>Collaborating with the team to enhance system functionality and performance.</li>
                            <li>Implementing backend services and database integrations.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
