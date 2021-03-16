import './App.css';
import {Header} from "./Components/Header";
import {Footer} from "./Components/Footer";
import {Shop} from "./Components/Shop";


function App() {
    return (
        <div className={"general"}>
            <Header/>
            <Shop/>
            <Footer/>
        </div>


    );
}

export default App;
