import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { content } from '@/lib/content';

const Header: React.FC = () => {
  return (
    <header className="sticky top-2 z-50 max-w-3/5 mx-auto rounded-full bg-background/80 backdrop-blur-sm border">
      <div className="container mx-auto flex items-center justify-between p-2">
  <Image src={content.header.logo} alt="Logo" className="h-10 w-auto -my-2 rounded-full" width={40} height={40} />
        <nav className="hidden md:flex items-center space-x-2">
          {content.header.navLinks.map((link) => (
            <Button variant="link" asChild key={link.href}>
              <Link href={link.href}>{link.text}</Link>
            </Button>
          ))}
          <Button variant="ghost" size="icon" asChild>
            <a href={content.header.socialLinks.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={content.header.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-5 w-5" />
            </a>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
