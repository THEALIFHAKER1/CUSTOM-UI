import { HeadingText } from "@/components/custom/HeadingText/HeadingText"

interface MainLayoutProps {
  children: React.ReactNode
  subtext?: string
  headingText?: string
}
export default function MainLayout({
  children,
  headingText,
  subtext,
}: MainLayoutProps) {
  return (
    <div vaul-drawer-wrapper="" className="space-y-4 p-4 ">
      {headingText && (
        <HeadingText subtext={subtext}>{headingText}</HeadingText>
      )}
      {children}
    </div>
  )
}
