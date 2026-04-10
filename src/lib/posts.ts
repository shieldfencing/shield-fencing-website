import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  category: string
  readTime: string
  author?: string
}

export interface Post extends PostMeta {
  contentHtml: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'))

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title ?? '',
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      category: data.category ?? 'General',
      readTime: data.readTime ?? '5 min read',
      author: data.author ?? 'Shield Fencing',
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPost(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    category: data.category ?? 'General',
    readTime: data.readTime ?? '5 min read',
    author: data.author ?? 'Shield Fencing',
    contentHtml,
  }
}
