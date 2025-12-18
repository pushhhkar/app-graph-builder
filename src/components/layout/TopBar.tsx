export function TopBar() {
  return (
    <header className="h-12 px-4 flex items-center justify-between border-b bg-white">
      <div className="font-semibold text-sm">App Graph Builder</div>

      <div className="flex gap-2 text-sm">
        <button className="px-2 py-1 border rounded">Fit</button>
        <button className="px-2 py-1 border rounded">Settings</button>
      </div>
    </header>
  );
}