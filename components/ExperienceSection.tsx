import React from 'react';
import ExperienceTimeline from './ExperienceTimeline';
import { content } from '@/lib/content';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-transparent">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          {content.experienceSection.title}
        </h2>
        <ExperienceTimeline experiences={content.experienceSection.experiences} />
      </div>
    </section>
  );
};

export default ExperienceSection;
