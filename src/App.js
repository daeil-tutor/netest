import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function App() {
  return _jsx("div", {
    className: "flex items-center justify-center min-h-screen bg-gray-50",
    children: _jsxs("div", {
      className: "text-center",
      children: [
        _jsx("h1", {
          className: "text-4xl font-bold text-gray-900 mb-4",
          children: "Netest",
        }),
        _jsx("p", {
          className: "text-lg text-gray-600",
          children: "React 19 + Vite 6 + TypeScript 5",
        }),
      ],
    }),
  });
}
export default App;
