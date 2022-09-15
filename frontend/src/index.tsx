import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./contexts/Context";
import GlobalStyle from "./styles/global.style";
import { ErrorView } from "./views/error/ErrorView";
import { Home } from "./views/Home";
import { LoginView } from "./views/login/LoginView";
import { NewBlogView } from "./views/newBlog/newBlogView";
import { RegisterView } from "./views/register/RegisterView";
import { SettingsView } from "./views/settings/SettingsView";
import { SinglePostView } from "./views/singlePost/SinglePostView";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
