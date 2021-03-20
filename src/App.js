import './App.css';
import {Header} from "./Components/Header";
import {Footer} from "./Components/Footer";
import {Shop} from "./Components/Shop";
import {Checkout} from "./Components/Checkout";
import {ModalWindow} from "./Components/ModalWindow";
import {ContextProvider} from "./Context";


function App() {
    return (
        <div className={"general"}>
            <Header/>
            <ContextProvider>
                <Shop/>
            </ContextProvider>
            <Footer/>
        </div>


    );
}

export default App;
