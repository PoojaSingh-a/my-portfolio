import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import HomePhoto from '../assets/HomePhoto.png';

const Hero = () => {
    return (
        <section className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-purple-950 via-gray-900 to-black text-white overflow-hidden px-6">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={HomePhoto} // Change this to your desired image
                    alt="Background"
                    className="w-full h-full object-cover opacity-30"
                />
                {/* Dark overlay to improve text readability */}
                <div className="absolute inset-0 bg-black opacity-70" />
            </div>

            {/* Glow/Stars Layer */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_70%)] z-0 pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-4">
                    Pooja Singh Chouhan
                </h1>
                <p className="text-lg md:text-2xl text-purple-300 font-medium animate-fade-in delay-100">
                    Full-Stack Developer • Cloud Enthusiast
                </p>

                <div className="flex flex-wrap justify-center items-center gap-4 mt-10 animate-fade-in delay-200">
                    <a
                        href="https://www.linkedin.com/in/pooja-s-a05356222/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-gray-700 px-5 py-2.5 rounded-full text-sm md:text-base font-semibold transition duration-200"
                    >
                        <FaLinkedin className="text-xl" /> LinkedIn
                    </a>

                    <a
                        href="https://github.com/PoojaSingh-a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-900 hover:bg-gray-700 px-5 py-2.5 rounded-full text-sm md:text-base font-semibold transition duration-200"
                    >
                        <FaGithub className="text-xl" /> GitHub
                    </a>

                    <a
                        href="https://x.com/void_notMain"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-neutral-900 hover:bg-gray-700 px-5 py-2.5 rounded-full text-sm md:text-base font-semibold transition duration-200"
                    >
                        <FaXTwitter className="text-xl" /> X
                    </a>

                    <a
                        href="https://www.instagram.com/_poojasingh1._/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-r from-pink-700 via-red-500 to-purple-700 hover:from-gray-700 hover:via-gray-700 hover:to-gray-700 px-5 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ease-in-out"
                    >
                        <FaInstagram className="text-xl" /> Instagram
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Hero;
