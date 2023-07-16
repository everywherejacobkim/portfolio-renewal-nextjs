import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import FlipCard from 'react-card-flip';
import { GiClick } from 'react-icons/gi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML/ CSS/ JavaScript', 'TypeScript', 'React', 'React Native', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'SQL', 'MongoDB', 'GraphQL', 'REST API'],
    },
    {
      title: 'DevOps',
      skills: ['AWS', 'Docker', 'CI/CD', 'Git', 'Cypress', 'Storybook'],
    },
    {
      title: 'Other',
      skills: ['Git/ Github', 'Agile/ Jira/ Trello', 'CMS Management', 'Problem Solving', 'Teamwork & Collaboration', 'Communication'],
    },
  ];

  const [isFlipped, setIsFlipped] = useState(Array(skillCategories.length).fill(false));

  const toggleFlip = (index: number) => {
    const flippedState = [...isFlipped];
    flippedState[index] = !flippedState[index];
    setIsFlipped(flippedState);
  };

  const trail = useTrail(skillCategories.length, {
    from: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { mass: 1, tension: 500, friction: 40 },
    delay: 200,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFlipped(Array(skillCategories.length).fill(true));
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary-400 text-center">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {trail.map((style, index) => (
          <animated.div key={index} style={style}>
            <FlipCard isFlipped={isFlipped[index]} flipDirection="horizontal">
              {/* Front of the flip card */}
              <div className="flex items-center gap-2 justify-center bg-primary-500 rounded-lg shadow-md px-10 py-6 cursor-pointer" onClick={() => toggleFlip(index)}>
                <h2 className="text-2xl font-bold text-primary-30">{skillCategories[index].title}</h2>
                <div className="text-gray-100">
                  <GiClick />
                </div>
              </div>
              {/* Back of the flip card */}
              <div className="bg-primary-500 rounded-lg shadow-md px-10 py-6 cursor-pointer" onClick={() => toggleFlip(index)}>
                <h2 className="text-2xl font-bold mb-4 text-primary-100">{skillCategories[index].title}</h2>
                <ul className="list-disc pl-6 text-gray-100">
                  {skillCategories[index].skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="mb-2">{skill}</li>
                  ))}
                </ul>
              </div>
            </FlipCard>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
