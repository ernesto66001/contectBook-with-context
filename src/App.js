import Navbar from "./components/navBar";
import MainRoutes from "./mainRoutes";
import ContactContextProvider from "./contactContext";


function App() {
  return (
    <div className="App">
        <ContactContextProvider>
            <Navbar/>
            <MainRoutes/>
            <hr style={{marginTop:'120px'}}/>
            <h5 style={{marginLeft:'41%',marginTop:'15px',fontSize:'26px'}}>Thanks for watching my homework</h5>
        </ContactContextProvider>
    </div>
  );
}

export default App;
