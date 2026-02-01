"use client"

import { StyledEngineProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import HeaderComponent from "../Header-comp/header-comonent";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <StyledEngineProvider injectFirst>
            <SnackbarProvider maxSnack={5} autoHideDuration={2000}>
                <HeaderComponent />
                {children}
            </SnackbarProvider>
        </StyledEngineProvider>
    );
}

export default HomeLayout;