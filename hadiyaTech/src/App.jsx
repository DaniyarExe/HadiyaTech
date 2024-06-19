import Header from "./components/pagesComponent/Header/Header";
import AppRoutes from "./components/Routes/AppRoutes";
const App = () => {
  return (
    <div>
      <Header/>
      <AppRoutes />
      <Header />
    </div>
  );
}

export default App;
