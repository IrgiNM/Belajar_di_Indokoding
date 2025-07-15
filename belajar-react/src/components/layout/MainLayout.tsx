import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex items-center justify-center p-10">
        <Outlet />
      </main>
    </div>
  );
}
