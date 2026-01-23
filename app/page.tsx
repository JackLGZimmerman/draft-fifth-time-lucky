import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Sandbox from "../features/Sandbox";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      <div className="grid min-h-screen grid-rows-[auto_1fr] grid-cols-1 md:grid-cols-[300px_1fr]">
        <NavBar />

        <Sidebar />

        <Sandbox />
      </div>
    </div>
  );
}
