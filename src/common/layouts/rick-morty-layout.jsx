import { Outlet } from "react-router";
import { Navbar } from "../components/navbar/navbar";

export function RickMortyLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
