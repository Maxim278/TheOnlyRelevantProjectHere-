import {Routes, Route} from "react-router-dom";

import style from './App.module.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import MessagePage from "./Components/MessagePage";
import PostPageContainer from './Components/PostPageContainer'

function App() {
    return (
        <div className={style.appWrapper}>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path="/posts" element={<PostPageContainer/>}/>
                <Route path="/messages" element={<MessagePage/>}/>
            </Routes>
        </div>
    );
}

export default App;