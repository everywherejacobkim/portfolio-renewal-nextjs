import { FaUserGraduate, FaAward, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { BsFillSendFill } from "react-icons/bs";

const AboutMe = () => {

  return (
    <>
        <section id="about" className="flex justify-end bg-aboutMe-wall w-full h-screen bg-cover">
            <div className="container mt-4 md:mt-12 md:w-1/2 md:mr-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 cursor-default">
                <article className="p-6 bg-white rounded shadow animation hover:ease-in-out">
                    <FaUserGraduate className="text-4xl mb-2 -mt-1" />
                    <h5 className="text-xl font-semibold mb-2">Education</h5>
                    <p className="mb-3">
                    2 Years Post Degree Diploma Web & Mobile App Design & Development
                    <br />
                    (Developer stream)
                    </p>
                    <p>4 Years Bachelor's Degree Education Technology</p>
                </article>

                <article className="p-4 bg-white rounded shadow">
                    <FaAward className="text-4xl mb-2" />
                    <h5 className="text-xl font-semibold mb-2">Experience</h5>
                    <p className="mb-3">2+ Years Practical Projects & Web Developer Role</p>
                    <p>5+ Years Program Coordinator & Technical Support Role</p>
                </article>

                <article className="p-4 bg-white rounded shadow">
                    <GoProject className="text-4xl mb-2" />
                    <h5 className="text-xl font-semibold mb-2">Projects</h5>
                    <p className="mb-3">10+ Completed Freelance Projects</p>
                    <div className="flex items-center gap-1">
                        <BsFillSendFill className="text-primary-300" />
                        <a href="https://github.com/everywherejacobkim" target="_blank" rel="noopener noreferrer">
                            <p className="text-primary-200 font-semibold">Github Profile</p>
                        </a>
                    </div>
                </article>
                </div>

            <div className="relative mt-9 pt-1 pb-2 bg-space-pattern bg-primary-500/20 rounded">
                <div className="absolute -top-8 -left-4 text-3xl mt-4">
                    <FaQuoteLeft className="text-gray-100" />
                </div>
                <div className="mx-4 py-6 px-4 stroke-slate-200 cursor-default">
                    <p className="md:text-xl text-gray-100 tracking-">
                    I'm a travel enthusiast with a deep passion for exploring new places. I love immersing myself in different cultures, trying local cuisines, and capturing those precious moments through the lens. When I'm not immersed in my code editor, you can often find me strolling through Vancouver's beautiful parks and streets, accompanied by my adorable dog. We enjoy discovering hidden gems and enjoying the simple pleasures of nature.
                    </p>
                    <p className="md:text-xl text-gray-100 mt-4">
                    I have a keen interest in learning and technology. I'm constantly expanding my knowledge and applying it to small projects, creating cool applications along the way. Let's connect, share our travel tales, and explore the world of learning and innovation together !
                    </p>
                </div>
                <div className="absolute -right-3 -bottom-4 text-3xl mt-4 flex justify-end">
                    <FaQuoteRight className="text-gray-100"/>
                </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default AboutMe;
