export function fetchApps() {
  return Promise.resolve([
    { id: "golang", name: "supertokens-golang" },
    { id: "java", name: "supertokens-java" },
    { id: "python", name: "supertokens-python" },
  ]);
}

export function fetchAppGraph(appId: string) {
  const nodes = [
    { id: "1", position: { x: 50, y: 80 }, data: { label: "API", status: "Healthy", value: 65 } },
    { id: "2", position: { x: 300, y: 200 }, data: { label: "Postgres", status: "Degraded", value: 40 } },
    { id: "3", position: { x: 550, y: 80 }, data: { label: "Redis", status: "Down", value: 90 } },
  ];

  const edges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
  ];

  return new Promise((resolve) =>
    setTimeout(() => resolve({ nodes, edges }), 600)
  );
}
