import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { content } from '@/lib/content';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-foreground">{content.contactSection.title}</h2>
        <p className="text-lg text-muted-foreground mt-4">
          {content.contactSection.subtitle}
        </p>
        <div className="flex flex-col items-center space-y-4 mb-8">
          <Button variant="link" asChild>
            <a href={content.contactSection.email} className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>rishi.1003raj@gmail.com</span>
            </a>
          </Button>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="h-5 w-5" />
            <span>{content.contactSection.phone}</span>
          </div>
        </div>
        <div className="flex justify-center space-x-6">
          <Button variant="ghost" size="icon" asChild>
            <a href={content.header.socialLinks.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-8 w-8" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={content.header.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-8 w-8" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
