import { Button } from "@/components/ui/button"
import CodeBlock from "@/components/custom/CodeBlock/CodeBlock"
import {
  DialogDrawer,
  DialogDrawerBody,
  DialogDrawerClose,
  DialogDrawerContent,
  DialogDrawerDescription,
  DialogDrawerFooter,
  DialogDrawerHeader,
  DialogDrawerTitle,
  DialogDrawerTrigger,
} from "@/components/custom/DialogDrawer/DialogDrawer"
import { HeadingText } from "@/components/custom/HeadingText/HeadingText"

export default function DialogDrawerPage() {
  return (
    <div className="space-y-4">
      <HeadingText subtext="Responsive Dialog[Desktop] and Drawer[Mobile]">
        DialogDrawer
      </HeadingText>
      <DialogDrawer>
        <DialogDrawerTrigger asChild>
          <Button>Open modal</Button>
        </DialogDrawerTrigger>
        <DialogDrawerContent>
          <DialogDrawerHeader>
            <DialogDrawerTitle>DialogDrawer</DialogDrawerTitle>
            <DialogDrawerDescription>
              A responsive modal component for shadcn/ui.
            </DialogDrawerDescription>
          </DialogDrawerHeader>
          <DialogDrawerBody>
            This component is built using shadcn/ui&apos;s dialog and drawer
            component, which is built on top of Vaul.
          </DialogDrawerBody>
          <DialogDrawerFooter>
            <DialogDrawerClose asChild>
              <button>Close</button>
            </DialogDrawerClose>
          </DialogDrawerFooter>
        </DialogDrawerContent>
      </DialogDrawer>
      <CodeBlock
        location="@/components/custom/DialogDrawer/DialogDrawer"
        code={`
    <DialogDrawer>
      <DialogDrawerTrigger asChild>
        <Button>Open modal</Button>
      </DialogDrawerTrigger>
      <DialogDrawerContent>
        <DialogDrawerHeader>
          <DialogDrawerTitle>DialogDrawer</DialogDrawerTitle>
          <DialogDrawerDescription>
            A responsive modal component for shadcn/ui.
          </DialogDrawerDescription>
        </DialogDrawerHeader>
        <DialogDrawerBody>
          This component is built using shadcn/ui&apos;s dialog and
          drawer component, which is built on top of Vaul.
        </DialogDrawerBody>
        <DialogDrawerFooter>
          <DialogDrawerClose asChild>
            <button>Close</button>
          </DialogDrawerClose>
        </DialogDrawerFooter>
      </DialogDrawerContent>
    </DialogDrawer>
          `}
      />
    </div>
  )
}
