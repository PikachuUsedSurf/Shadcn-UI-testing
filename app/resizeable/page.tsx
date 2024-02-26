import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import { DrawerDialogDemo } from "@/components/ui/modals"
import {ScrollAreaHorizontal} from "@/components/ui/text-scroll"

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-screen min-w-screen rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex flex-col h-full bg-gray-100/40">
            <div className={"flex border-b h-14 bg-gray-100/40 items-center px-6"}>
              Logo
            </div>
          <span className="font-semibold items-center justify-center p-6">Sidebar</span>
        </div>
      </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
            <div className="flex flex-col h-full">
              <nav className={"flex border h-14 px-4 bg-gray-100/40 items-center"}>
                <DrawerDialogDemo/>
              </nav>
              <span className="font-semibold items-center justify-center p-6">Content</span>
              <ScrollAreaHorizontal/>
            </div>
        </ResizablePanel>
      <ResizableHandle withHandle  />
      <ResizablePanel defaultSize={80}>
        here too
      </ResizablePanel>
    </ResizablePanelGroup>
    )
}
