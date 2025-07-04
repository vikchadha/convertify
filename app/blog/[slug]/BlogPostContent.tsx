import { MDXRemote } from 'next-mdx-remote/rsc';

interface BlogPostContentProps {
  code: string;
}

export default function BlogPostContent({ code }: BlogPostContentProps) {
  return <MDXRemote source={code} />;
} 