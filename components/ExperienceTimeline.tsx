"use client";
import React from 'react';
import TimelineItem, { Experience } from './TimelineItem';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <div className="mt-12 flex justify-center">
      <div>
        {experiences.map((experience) => (
          <TimelineItem key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
