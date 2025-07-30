import React from 'react';
import { content } from '@/lib/content';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-transparent text-muted-foreground text-center border-t border-border">
      <div className="container mx-auto">
        <p>{content.footer.text}</p>
      </div>
    </footer>
  );
};

export default Footer;
