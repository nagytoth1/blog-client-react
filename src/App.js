//app.js: render the routes, tell them to focus on these two pages CreatePost and MainPage
//amikor nem akarsz egy parent divet, akkor <></>
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
const App = () => (
    <>
    <div className="navbar">
        <div className="links">
            <a href="/">MainPage</a>
            <a href="/createpost">CreatePage</a>
        </div>
    </div>
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/createpost" element={<CreatePost/>}/>
            <Route path="/post/:postId" element={<Post/>}/>
        </Routes>
    </BrowserRouter>
    </>
);

export default App;
