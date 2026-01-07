"use client"

import { store } from "@/store";
import { StyledEngineProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <StyledEngineProvider injectFirst>
            <SnackbarProvider maxSnack={5} autoHideDuration={2000}>
                <Provider store={store}>
                    {children}
                </Provider>
            </SnackbarProvider>
        </StyledEngineProvider>
    );
}

export default HomeLayout;