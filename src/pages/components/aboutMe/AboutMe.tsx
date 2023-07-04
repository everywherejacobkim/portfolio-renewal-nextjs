import { FaUserGraduate, FaAward, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { GoProject } from "react-icons/go";

const AboutMe = () => {

  return (
    <>
        <section id="about" className="flex justify-end bg-aboutMe-wall w-full h-screen bg-cover">
            <div className="container mt-4 md:mt-12 md:w-1/2 md:mr-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <article className="p-4 bg-white rounded shadow">
                    <FaUserGraduate className="text-4xl mb-4" />
                    <h5 className="text-xl font-semibold">Education</h5>
                    <p className="mb-2">
                    2 Years Post Degree Diploma Web & Mobile App Design & Development
                    <br />
                    (Developer stream)
                    </p>
                    <p>4 Years Bachelor's Degree Education Technology</p>
                </article>

                <article className="p-4 bg-white rounded shadow">
                    <FaAward className="text-4xl mb-4" />
                    <h5 className="text-xl font-semibold">Experience</h5>
                    <p className="mb-2">2+ Years Practical Projects & Capstone</p>
                    <p>5+ Years Program Coordinator & Technical Administrative Assistant</p>
                </article>

                <article className="p-4 bg-white rounded shadow">
                    <GoProject className="text-4xl mb-4" />
                    <h5 className="text-xl font-semibold">Projects</h5>
                    <p>10+ Completed Freelance Projects</p>
                </article>
                </div>

            <div className="mt-8 text-center">
                <div className="text-4xl mt-4">
                    <FaQuoteLeft className="" />
                </div>
                <div className="mx-4 stroke-slate-200">
                    <p className="md:text-xl text-gray-100">
                    I'm a travel enthusiast with a deep passion for exploring new places. I love immersing myself in different cultures, trying local cuisines, and capturing those precious moments through the lens. When I'm not immersed in my code editor, you can often find me strolling through Vancouver's beautiful parks and streets, accompanied by my adorable dog. We enjoy discovering hidden gems and enjoying the simple pleasures of nature.
                    </p>
                    <p className="md:text-xl text-gray-100 mt-4">
                    I have a keen interest in learning and technology. I'm constantly expanding my knowledge and applying it to small projects, creating cool applications along the way. Let's connect, share our travel tales, and explore the world of learning and innovation together!
                    </p>
                </div>
                <div className="text-4xl mt-4 flex justify-end">
                    <FaQuoteRight className=""/>
                </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default AboutMe;
