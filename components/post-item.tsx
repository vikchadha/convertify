import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'

export default function PostItem({ ...props }) {
  return (
    <article className="h-full flex flex-col space-y-5" data-aos="fade-up">
      {props.metadata.image &&
        <Link className="block group overflow-hidden" href={`/blog/${props.slug}`}>
          <Image className="w-full aspect-16/9 md:aspect-27/17 object-cover group-hover:scale-105 transition duration-700 ease-out" src={props.metadata.image} width={540} height={340} alt={props.metadata.title} />
        </Link>
      }
      <div className="grow flex flex-col">
        <header>
          <h3 className="h4 font-playfair-display mb-3">
            <Link className="text-slate-800 hover:underline hover:decoration-blue-100" href={`/blog/${props.slug}`}>{props.metadata.title}</Link>
          </h3>
        </header>
        <p className="text-lg text-slate-500 grow">{props.metadata.summary}</p>
        <footer className="flex items-center mt-4">
          {props.metadata.authorImg && (
            <a href="#0">
              <Image className="rounded-full shrink-0 mr-3" src={props.metadata.authorImg} width={32} height={32} alt={props.metadata.author || 'Author'} />
            </a>
          )}
          <div>
            {props.metadata.author && (
              <>
                <a className="font-medium text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out" href="#0">{props.metadata.author}</a>
                <span className="text-slate-300"> · </span>
              </>
            )}
            <span className="text-slate-500"><PostDate dateString={props.metadata.publishedAt} /></span>
          </div>
        </footer>
      </div>
    </article>
  )
}
