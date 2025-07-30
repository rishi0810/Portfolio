"use client"
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { FaDownload, FaStar } from 'react-icons/fa';
import { content } from '@/lib/content';

const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const { resolvedTheme } = useTheme();

  const handleStarClick = () => {
    controls.start({
      rotate: [0, -15, 15, -15, 15, 0],
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  };

  return (
    <section className="bg-transparent relative">
      <div className="absolute inset-0 bg-transparent"></div>
      <div className="container mx-auto flex flex-col md:flex-row items-center py-20 md:py-32 max-w-7xl pl-20">
        <div className="md:w-1/2 text-left">
          <h1 className="text-6xl font-bold text-foreground">{content.heroSection.name}</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-xl">
            {content.heroSection.bio}
          </p>
          <div className="mt-8">
            <Button variant="ghost" asChild>
              <a href="/Resume.pdf" download="Resume.pdf" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <FaDownload className="mr-2" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="absolute -inset-0.5 rounded-full"
              style={{
                background: isHovered
                  ? `conic-gradient(from 180deg at 50% 50%, transparent 75%, ${resolvedTheme === 'dark' ? '#ffffff' : '#18181b'} 100%)`
                  : 'transparent',
              }}
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{
                duration: 4,
                ease: 'linear',
                repeat: isHovered ? Infinity : 0,
              }}
            />
            <Avatar className="relative size-72 bg-background">
              <AvatarImage src={content.heroSection.avatar} alt={content.heroSection.name} />
            </Avatar>
            <motion.div animate={controls} onClick={handleStarClick} className="cursor-pointer">
              <FaStar className="absolute top-0 right-0 w-8 h-8 text-foreground transform translate-x-1/4 -translate-y-1/4" />
              <FaStar className="absolute top-8 right-[-20px] w-6 h-6 text-foreground" />
              <FaStar className="absolute top-20 right-[-10px] w-4 h-4 text-foreground" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
