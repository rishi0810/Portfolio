import React from 'react';
import Image from 'next/image';

export interface Experience {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
  responsibilities: string[];
  iconUrl: string;
  iconUrlDark?: string;
}

interface TimelineItemProps {
  experience: Experience;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience }) => {
  const darkSrc = experience.iconUrlDark || experience.iconUrl;

  return (
    <div className="group relative flex gap-x-5">
      <div className="relative">
        <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-card text-card-foreground ring-8 ring-background overflow-hidden">
          <picture>
            <source srcSet={darkSrc} media="(prefers-color-scheme: dark)" />
            <Image src={experience.iconUrl} alt={experience.title} width={30} height={30} className="object-cover" />
          </picture>
        </div>
        <div className="absolute -bottom-8 left-4 top-8 w-px bg-border group-last:hidden" />
      </div>
      <div className="grow pb-8 group-last:pb-0">
        <h3 className="text-sm font-medium text-muted-foreground">{experience.date}</h3>
        <p className="mt-2 font-semibold text-foreground">
          {experience.title} at {experience.company}
        </p>
        <p className="mt-2 text-muted-foreground">{experience.description}</p>
        {experience.responsibilities && experience.responsibilities.length > 0 && (
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
