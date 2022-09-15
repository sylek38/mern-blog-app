import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/login/Login";
import { Context, ContextProvider } from "./contexts/Context";
import { SearchContextProvider } from "./contexts/SearchContext";
import { ErrorView } from "./views/error/ErrorView";
import { Home } from "./views/Home";
import { LoginView } from "./views/login/LoginView";
import { NewBlogView } from "./views/newBlog/newBlogView";
import { RegisterView } from "./views/register/RegisterView";
import { SettingsView } from "./views/settings/SettingsView";
import { SinglePostView } from "./views/singlePost/SinglePostView";

function App() {
    const { user } = useContext(Context);

    return (
        <ContextProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="newBlog"
                    element={user ? <NewBlogView /> : <RegisterView />}
                />
                <Route path="post/:slug" element={<SinglePostView />} />
                <Route path="register" element={<RegisterView />} />
                <Route path="login" element={<LoginView />} />
                <Route
                    path="settings"
                    element={user ? <SettingsView /> : <RegisterView />}
                />

                <Route path="*" element={<ErrorView />} />
            </Routes>
        </ContextProvider>
    );
}

export default App;
