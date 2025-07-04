'use client'

import { useMDXComponent } from 'next-contentlayer/hooks';

interface BlogPostContentProps {
  code: string;
}

export default function BlogPostContent({ code }: BlogPostContentProps) {
  const MDXContent = useMDXComponent(code);
  return <MDXContent />;
} 