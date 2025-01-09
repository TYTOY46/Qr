import { Routes, Route} from "react-router-dom";
import {QrCG} from "./Qr";
import { Nav } from "./Nav";
import { Genera } from "./Genera";


const Lay = () => {
    return (
        <div>
            <Nav />            
            <Routes>
                <Route path="/" element={<h1>Home</h1>}/> 
                <Route path="/generate" element={<QrCG/>}/>
                <Route path="/scan" element={<Genera />}/> 
            </Routes>

        </div>
    )
};

export {Lay};



