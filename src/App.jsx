import Content from "./components/Content";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { AdminContextProvider } from "./context/AdminContext";

function App({ children }) {
  return (
    <AdminContextProvider>
      <div className="flex min-h-screen">
        <div className="min-w-[80px]">
          <SideBar />
        </div>
        <div className="flex flex-col flex-1">
          <Header />
          <div className="flex-1">
            <Content>{children}</Content>
          </div>
        </div>
      </div>
    </AdminContextProvider>
  );
}

export default App;
