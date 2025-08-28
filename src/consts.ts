import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'kuvee',
  description:
    "Hi! I'm Kuvee. This is my personal blog where I share my thoughts, writeups, and research on cybersecurity. Most posts focus on CTF, especially pwn – my favorite field. Hope you find something useful here ^^",
  href: 'https://kuvee44.github.io',
  author: 'kuvee',
  locale: 'VietNam',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com/kuvee44', label: 'GitHub' },
  { href: 'https://twitter.com/kuvee44', label: 'Twitter' },
  { href: 'mailto:kuvee44@gmail.com', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
