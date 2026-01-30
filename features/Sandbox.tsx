function Sandbox() {
  return (
    <main className="p-4 h-full">
      <div className="h-320 w-500 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 draft-sandbox">
        <div className="flex h-full flex-col *:bg-zinc-100 *:rounded-xl gap-4">
          <div className="h-44 w-full p-4 flex *:rounded-lg gap-4">
            <div className="flex flex-1 bg-zinc-300 blue-ban"></div>
            <div className="flex flex-2 bg-zinc-300"></div>
            <div className="flex flex-1 bg-zinc-300 red-ban"></div>
          </div>
          <div className="flex bg-zinc-200 h-20 w-full"></div>
          <div className="flex h-full gap-4 p-4 *:bg-zinc-200">
            <div className="flex flex-1 flex-col rounded-l-xl *:flex-1 *:bg-zinc-400 p-4 *:rounded-lg gap-4 blue-picks">
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="flex h-full w-full flex-3 items-stretch justify-between">
              <div className="w-16 bg-zinc-500 riot-roles" />
              <div className="flex-1 flex flex-col">
                <div className="flex bg-zinc-600 h-2/3 champion-options"></div>
                <div className="flex bg-zinc-700 h-16 lock-in"></div>
              </div>
              <div className="w-16 bg-zinc-500 custom-roles" />
            </div>
            <div className="flex flex-1 flex-col rounded-r-xl *:flex-1 *:bg-zinc-400 p-4 *:rounded-lg gap-4 red-picks">
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Sandbox;
