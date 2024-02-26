export default function Component() {
  return (
    <div className="grid min-h-screen w-full grid-cols-[280px_1fr]">
      <div className="border-r bg-gray-100/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
                LOGO
          </div>
          <div className="flex-1 overflow-auto py-2">
           <div className={"px-6"}>
               SIDE BAR
           </div>
          </div>
          <div className="flex h-[60px] items-center border-t px-6">
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            NAVIGATION BAR
        </header>
        <main className="flex flex-1 flex-col bg-green-100/20 gap-4 p-4 md:gap-8 md:p-6">
            MAIN MENU
        </main>
      </div>
    </div>
  )
}