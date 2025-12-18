# 🧩 App Graph Builder — Assignment Project

This project is a small React + Vite application that allows a user to:

- Select an application type (Golang / Java / Python)
- Automatically load a mock service graph from an API
- View graph nodes rendered in a ReactFlow canvas
- Inspect node details in a right-side panel
- Handle selections using global state (Zustand)
- Fetch data using React Query

---

## 🚀 Tech Stack

| Feature | Library |
|--------|---------|
UI Framework | **React + TypeScript**
Bundler | **Vite**
State Management | **Zustand**
Data Fetching | **@tanstack/react-query**
Graph Rendering | **@xyflow/react (ReactFlow v12)**
Styling | **TailwindCSS**

---

## 📂 Project Structure

src/
├─ api/
│ └─ mockApi.ts # Fake backend API for apps + graph
├─ hooks/
│ ├─ useApps.ts # React Query hook for application list
│ └─ useAppGraph.ts # React Query hook for node/edge graph
├─ store/
│ └─ uiStore.ts # Zustand global UI state
├─ components/
│ ├─ layout/
│ │ ├─ TopBar.tsx
│ │ ├─ LeftRail.tsx
│ │ └─ RightPanel.tsx
│ └─ canvas/
│ └─ CanvasArea.tsx
├─ App.tsx # UI layout (3-column)
└─ main.tsx # App entry (React Query + Providers)

yaml
Copy code

---

## 🛠 Features Implemented

### ✔ Application Selection
- App list fetched from mock API
- Zustand stores selected app
- Active button highlighted

### ✔ Graph Loading State
When user selects an app:

Loading graph...

csharp
Copy code

Then graph data is fetched.

### ✔ Graph State
Nodes & edges stored using:

```ts
useNodesState()
useEdgesState()
✔ Node Inspector (Right Panel)
Displays:

Node ID

Label

Status Badge (Healthy / Degraded / Down)

Value slider (read-only)

✔ Mock API Simulation
Fake delay added to simulate backend:

ts
Copy code
setTimeout(() => resolve({ nodes, edges }), 600)
▶️ Running the Project
bash
Copy code
npm install
npm run dev
Local development runs at:

dts
Copy code
http://localhost:5173
🎯 Stretch Goals (Optional Enhancements)
These can be added later:

Editable slider to update node values

Dynamic status coloring

CPU / Memory tab per node

Draggable node repositioning

Persisting graph updates

📦 What This Assignment Demonstrates
State management across components

Query-based asynchronous fetch

UI composition using flexbox layouts

TypeScript component design

Clean folder organization

Readable front-end architecture

🏁 Conclusion
This project satisfies the assignment by showing:

✓ App selection
✓ Graph fetching
✓ UI layout with 3 panels
✓ Node inspector
✓ Proper use of Zustand + React Query
