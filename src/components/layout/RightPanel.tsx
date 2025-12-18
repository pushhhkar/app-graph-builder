import { useUIStore } from "../../store/uiStore";
import { useAppGraph } from "../../hooks/useAppGraph";

export function RightPanel() {
  const selectedAppId = useUIStore((s) => s.selectedAppId);
  const selectedNodeId = useUIStore((s) => s.selectedNodeId);

  const { data } = useAppGraph(selectedAppId);

  // Panel layout wrapper
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <aside className="w-72 border-l bg-white p-4 space-y-4">
      <h3 className="font-medium text-sm mb-2">Node Inspector</h3>
      {children}
    </aside>
  );

  if (!selectedAppId) {
    return (
      <Wrapper>
        <div className="text-gray-500 text-sm">Select an app first</div>
      </Wrapper>
    );
  }

  if (!selectedNodeId) {
    return (
      <Wrapper>
        <div className="text-gray-500 text-sm">Select a node to inspect</div>
      </Wrapper>
    );
  }

  const node = data?.nodes.find((n: any) => n.id === selectedNodeId);

  if (!node) {
    return (
      <Wrapper>
        <div className="text-gray-500 text-sm">Node not found</div>
      </Wrapper>
    );
  }

  const badgeColor =
    node.data.status === "Healthy"
      ? "bg-green-100 text-green-700"
      : node.data.status === "Degraded"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <Wrapper>
      <div className="text-xs text-gray-500">
        ID: <span className="font-mono">{node.id}</span>
      </div>

      <div className="font-semibold text-sm">{node.data.label}</div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">Status:</span>
        <div className={`px-2 py-0.5 rounded text-xs font-medium ${badgeColor}`}>
          {node.data.status}
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span>Value</span>
          <span>{node.data.value}</span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={node.data.value}
          className="w-full"
          readOnly
        />
      </div>
    </Wrapper>
  );
}



