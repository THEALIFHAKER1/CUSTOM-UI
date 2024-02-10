import { Button } from "@/components/ui/button"
import CodeBlock from "@/components/custom/CodeBlock/CodeBlock"

import MainLayout from "../../layout"

export default function TemplatePage() {
  return (
    <MainLayout headingText="Template" subtext="template">
      template
      <CodeBlock
        location="template"
        code={`
        template
          `}
      />
    </MainLayout>
  )
}
