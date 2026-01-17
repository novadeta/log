import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

const CONTENT_DIR = path.join(process.cwd(), 'content/log')

export async function generateStaticParams() {
  const files = fs.readdirSync(CONTENT_DIR)

  return files.map(file => ({
    slug: file.replace(/\.mdx$/, '')
  }))
}

async function getPost(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const source = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(source)

  return { content, data }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const  {slug} = await params
  const post = await getPost(slug)

  if (!post) notFound()

  return (
    <article className="prose prose-invert max-w-none">
        <h1>{post.data.title}</h1>
        <p className="text-sm text-zinc-400">
        <time
          dateTime={post.data.date.toISOString()}
          className="text-sm text-zinc-400"
        >
          {post.data.date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </time>
        </p>
        <MDXRemote source={post.content} />
    </article>
  )
}
