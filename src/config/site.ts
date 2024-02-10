import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "CUSTOM UI",
  author: "THEALIFHAKER1",
  description: "A custom UI that for myself and for the community to use.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://ae1.pro",
  },
  links: {
    github: "https://github.com/THEALIFHAKER1/CUSTOM-UI",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
