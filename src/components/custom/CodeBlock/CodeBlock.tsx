import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface CodeBlockProps {
  code: string
  location: string
}
export default function CodeBlock({ code, location }: CodeBlockProps) {
  return (
    <>
      <div>
        <h2 className="text-lg font-semibold">Components Code</h2>
        <p className="text-zinc-500 dark:text-zinc-400">{location}</p>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h2 className="text-lg font-semibold">Usage Code</h2>
          </AccordionTrigger>
          <AccordionContent>
            <pre className="rounded-lg bg-foreground text-background">
              <code>{code}</code>
            </pre>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}
