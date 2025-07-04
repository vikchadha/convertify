'use client'

import { useMDXComponent } from 'next-contentlayer/hooks';

interface BlogPostContentProps {
  code: string;
}

export default function BlogPostContent({ code }: BlogPostContentProps) {
  return <div dangerouslySetInnerHTML={{ __html: code }} />;
} 