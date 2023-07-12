import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
    id: number;
    type: string;
    title: string;
    description: string;
    stack: string;
    image: string;
}
  
interface ProjectsGalleryProps {
    projects: Project[];
  }

const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ projects }) => { 
    return (
        <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 md:p-16">
            {projects && projects.map((project) => (
                <motion.div
                    key={project.id}
                    className="bg-white shadow-lg rounded-lg overflow-hidden relative pb-4 w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Image src={project.image} width={500} height={600} alt={project.title} className="object-cover" />
                    <div className="p-4">
                        <h3 className="text-xl font-medium mb-0.5">{project.title}</h3>
                        <p className="text-sm font-medium mb-2 text-primary-200">{project.stack}</p>
                        <p className="text-gray-700">{project.description}</p>
                    </div>
                    {project.type === 'Team' && (
                        <div className="absolute bottom-0 right-0 text-sm font-medium bg-primary-30  text-primary-300 border-2 border-dashed border-primary-40 px-2 py-1 m-2 rounded-full">{project.type}</div>
                    )} 
                    {project.type === 'Solo' && (
                        <div className="absolute bottom-0 right-0 text-sm font-medium bg-red-50  text-primary-300 border-2 border-dashed border-red-300 px-3 py-1 m-2 rounded-full">{project.type}</div>
                    )}
                
                </motion.div>
            ))}
            </div>
        </div>
  );
};

export default ProjectsGallery;
