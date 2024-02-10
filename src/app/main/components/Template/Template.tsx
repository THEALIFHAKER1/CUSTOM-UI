import { Button } from "@/components/ui/button"
import CodeBlock from "@/components/custom/CodeBlock/CodeBlock"
import { HeadingText } from "@/components/custom/HeadingText/HeadingText"

export default function TemplatePage() {
  return (
    <div className="space-y-4">
      <HeadingText subtext="template">Template</HeadingText>
      template
      <CodeBlock
        location="template"
        code={`
        template
          `}
      />
    </div>
  )
}
