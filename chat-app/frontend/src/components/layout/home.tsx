"use client"

import { StyledEngineProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import HeaderComponent from "../Header-comp/header-comonent";
import { Provider } from "react-redux";
import { store } from "@/store";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <StyledEngineProvider injectFirst>
            <SnackbarProvider maxSnack={5} autoHideDuration={2000}>
                <Provider store={store}>
                    <HeaderComponent />
                    {children}
                </Provider>
            </SnackbarProvider>
        </StyledEngineProvider>
    );
}

export default HomeLayout;