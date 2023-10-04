import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/pages/components/header";
import Footer from "@/pages/components/footer";
import projects from "../projects.json";
import { FcIdea } from "react-icons/fc";
import { MdLiveTv } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

type Props = {};

const index = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { id } = router.query;

  const selectedProject = projects.find((project) => project.id === id);

  return (
    <div className="bg-white">
      <Header />
      {selectedProject && (
        <div className="pl-12 max-w-7xl mx-auto">
          <div className="flex flex-row-reverse shadow-lg rounded-lg overflow-hidden my-2">
            <Link href={selectedProject.link}>
              <div>
                <Image
                  src={selectedProject.image}
                  width={1000}
                  height={600}
                  alt={selectedProject.title}
                />
              </div>
            </Link>
            <div className="p-16">
              <h3 className="text-4xl font-semibold">
                {selectedProject.title}
              </h3>
              <p className="text-lg mt-1 font-medium text-primary-200">
                {selectedProject.stack}
              </p>
              <div className="flex flex-col gap-4 my-8">
                <div className="flex items-start gap-3">
                  <FcIdea className="w-6 h-6" />
                  <p className="w-3/4 text-lg font-medium text-gray-600">
                    {selectedProject.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <MdLiveTv className="w-6 h-6 animate-bounce" />
                  <Link href={selectedProject.link}>
                    <p className="font-medium text-primary-200 hover:text-primary-40">
                      {selectedProject.link}
                    </p>
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <BsGithub className="w-6 h-6" />
                  <Link href={selectedProject.code}>
                    <p className="font-medium text-primary-200 hover:text-primary-40">
                      {selectedProject.code}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {selectedProject.pdf && (
            <iframe
              src={selectedProject.pdf}
              width="100%"
              height="900px"
              className="mt-4 rounded-lg"
            ></iframe>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default index;
