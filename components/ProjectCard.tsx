"use client";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { content } from "@/lib/content";

type Project = (typeof content.projectsSection.projects)[0];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-card rounded-2xl overflow-hidden hover:border hover:border-zinc-300/70 hover:shadow-lg transition-all duration-300 ease-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 sm:p-6 flex justify-center items-center space-x-3">
        <Image
          src={project.logoUrl}
          alt={`${project.name} logo`}
          className="rounded-full flex items-center justify-center"
          width={34}
          height={34}
        />
        <h3 className="text-xl sm:text-2xl font-bold font-mono text-foreground">
          {project.name}
        </h3>
      </div>
      <div className="px-4 sm:px-6 pb-4">
        <p className="text-sm sm:text-md text-muted-foreground font-sans">
          {project.oneLiner}
        </p>
      </div>
      <div className="relative overflow-hidden">
        <Image
          src={project.desktopImageUrl}
          alt={`${project.name} desktop view`}
          className="w-full"
          width={900}
          height={600}
        />
        <Image
          src={project.mobileImageUrl}
          alt={`${project.name} mobile view`}
          className="absolute bottom-0 right-4 sm:right-8 md:right-12 lg:right-20 w-1/4 sm:w-1/3"
          width={200}
          height={400}
        />
      </div>
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-accent/80 backdrop-blur-sm p-4"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: isHovered ? 0 : "100%", opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {project.techStack.map((tech) => {
              const skill = content.skillsSection.skills.find(s => s.name === tech);
              if (skill) {
                return (
                  <Image
                    key={skill.name}
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="h-6"
                    width={96}
                    height={24}
                  />
                );
              }
              return null;
            })}
          </div>
          <div className="flex space-x-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-accent-foreground hover:text-foreground text-sm"
            >
              <FaGithub className="mr-1.5 size-5" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-accent-foreground hover:text-foreground text-sm"
            >
              <FaExternalLinkAlt className="mr-1.5 size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
