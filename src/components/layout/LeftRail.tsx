import { useApps } from "../../hooks/useApps";
import { useUIStore } from "../../store/uiStore";

export function LeftRail() {
  const { data: apps } = useApps();
  const selectedAppId = useUIStore((s) => s.selectedAppId);
  const setSelectedAppId = useUIStore((s) => s.setSelectedAppId);

  return (
    <aside className="w-64 border-r bg-white p-4 space-y-4">
      <h3 className="font-medium text-sm">Applications</h3>

      <div className="flex flex-col gap-2">
        {apps?.map((app) => (
          <button
            key={app.id}
            onClick={() => setSelectedAppId(app.id)}
            className={`px-3 py-1 rounded border text-sm ${
              selectedAppId === app.id
                ? "bg-black text-white"
                : "bg-gray-100"
            }`}
          >
            {app.name}
          </button>
        ))}
      </div>
    </aside>
  );
}
