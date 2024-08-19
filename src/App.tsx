import BaseLayout from "./Layout";
import AppRoutes from "./router";

function App() {
  return (
    <div className="App">
      <BaseLayout>
        <AppRoutes />
      </BaseLayout>
    </div>
  );
}

export default App;
