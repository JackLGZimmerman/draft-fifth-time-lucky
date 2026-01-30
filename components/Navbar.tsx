function NavBar() {
  return (
    <header className="col-span-full h-14 px-8 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60">
      <div className="flex h-full w-full items-center px-4 *:px-4">
        <div className="shrink-0">Logo</div>

        <nav className="flex flex-1 items-center *:px-4">
          <div className="menu-items">Draft Logs</div>
        </nav>

        <div className="flex rounded-xl border border-zinc-200 py-1 px-3 w-160">
          <div className="flex"></div>
          <div className="flex text-zinc-400">Search drafts, API and profiles</div>
        </div>
        <div className="flex shrink-0 items-center *:px-4">
          <div className="authentication">Login</div>
          <div className="authentication">Sign up</div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
