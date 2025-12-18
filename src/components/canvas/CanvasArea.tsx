import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import { useEffect } from "react";
import { useUIStore } from "../../store/uiStore";
import { useAppGraph } from "../../hooks/useAppGraph";

export function CanvasArea() {
  const selectedAppId = useUIStore((s) => s.selectedAppId);
  const setSelectedNodeId = useUIStore((s) => s.setSelectedNodeId);

  const { data, isLoading } = useAppGraph(selectedAppId);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    if (data) {
      setNodes(data.nodes);
      setEdges(data.edges);
    }
  }, [data, setNodes, setEdges]);

  if (!selectedAppId) {
    return (
      <div className="flex-1 flex items-center justify-center text-sm text-gray-500">
        Select an app to view graph
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center text-sm">
        Loading graph...
      </div>
    );
  }

  console.log("nodes:", nodes);
  console.log("edges:", edges);

  return (
    <main className="flex-1">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={(_, node) => setSelectedNodeId(node.id)}
        fitView
        defaultNodeOptions={{
          style: {
            border: "2px solid black",
            background: "white",
            padding: 12,
          },
        }}
      >
        <Background variant="dots" gap={16} size={1} />
      </ReactFlow>
    </main>
  );
}








