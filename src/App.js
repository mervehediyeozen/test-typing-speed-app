import Main from './pages/main';
import Signin from './pages/signin';
import { Route , Routes } from 'react-router-dom';
import User from './pages/user';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NewAccount from './pages/newAccount';
import { createAccount } from './redux/testSlice';
import Champions from './pages/champions';
import Article1 from './pages/articles/article1';
import Article2 from './pages/articles/article2';
function App() {
    const dispatch = useDispatch();
  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      dispatch(createAccount(parsedUser)); // Otomatik login
    }
  }, []);
  return (
    <>
     {/*Pages */} 
     <Routes> 
       <Route path="/" element={<Main />} />
       <Route path="/signin" element={<Signin />} />
       <Route path="/user" element={<User />} />
       <Route path="/createnew" element={<NewAccount />} />
       <Route path="/champions" element={<Champions />} />
       <Route path="/article1" element={<Article1 />} />
       <Route path="/article2" element={<Article2 />} />
     </Routes>
    </>
  );
}

export default App;
