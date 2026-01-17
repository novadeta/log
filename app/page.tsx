import fs from 'fs'
import path from 'path';
import matter from 'gray-matter'
import Link from 'next/link';

const CONTENT_DIR = path.join(process.cwd(), 'content/log')

export default function Home() {
  const files = fs.readdirSync(CONTENT_DIR)

  const posts = files.map(file => {
    const source = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8')
    const { data } = matter(source)
    return {
      slug: file.replace(/\.mdx$/, ''),
      title: data.title,
      date: data.date
    }
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return (
    <main>
      <h1 className="text-2xl font-semibold mb-2">Log</h1>
      <p className="text-zinc-400 mb-8">
        A personal learning log.
      </p>

      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.slug} className="flex items-center justify-between">
            <Link
              href={`/${post.slug}`}
              className="text-zinc-100 hover:text-white underline-offset-4 hover:underline"
            >
              {post.title}
            </Link>
            <span className="text-sm text-zinc-500">
              {post.date}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
