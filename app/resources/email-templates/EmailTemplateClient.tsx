'use client';

import { Copy } from 'lucide-react';
import { useState } from 'react';

interface CopyButtonProps {
  text: string;
  className?: string;
  label?: string;
}

export function CopyButton({ text, className = "", label = "Copy Template" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      className={className}
      onClick={handleCopy}
    >
      <Copy className="w-4 h-4" />
      {label} {copied && '✓'}
    </button>
  );
}

export function CopyAllButton({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // In a real implementation, this would copy all templates
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      className={className}
      onClick={handleCopy}
    >
      <Copy className="w-5 h-5" />
      Copy All Templates {copied && '✓'}
    </button>
  );
}