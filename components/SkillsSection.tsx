import React from 'react';
import { content } from '@/lib/content';

const SkillsSection: React.FC = () => {
  const { skills } = content.skillsSection;
  const skillsRow1 = skills.slice(0, 4);
  const skillsRow2 = skills.slice(4, 9);
  const skillsRow3 = skills.slice(9);

  const renderSkill = (skill: typeof skills[0]) => {
    return (
      <div key={skill.name} className="flex items-center justify-center p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={skill.imageUrl} alt={skill.name} className="h-10 sm:h-12 md:h-14" />
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          {content.skillsSection.title}
        </h2>
        <div className="hidden md:flex flex-col items-center gap-4">
          <div className="flex justify-center gap-4">
            {skillsRow1.map(renderSkill)}
          </div>
          <div className="flex justify-center gap-4">
            {skillsRow2.map(renderSkill)}
          </div>
          <div className="flex justify-center gap-4">
            {skillsRow3.map(renderSkill)}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center justify-center p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={skill.imageUrl} alt={skill.name} className="h-10 sm:h-12 md:h-14" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
