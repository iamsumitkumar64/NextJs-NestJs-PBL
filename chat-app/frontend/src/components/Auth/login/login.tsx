"use client";

import { useForm, Controller } from "react-hook-form";
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Stack,
} from "@mui/material";
import Link from "next/link";
import { LoginInterface, LoginSchema } from "./interface";
import { enqueueSnackbar } from "notistack";
import Cookies from "js-cookie";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ApiService } from "@/services/Api";
 
export default function LoginForm() {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInterface>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: LoginInterface) => {
        const response = await ApiService(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, 'POST', undefined, JSON.stringify({
            email: data.email,
            password: data.password
        }),);
        if (response?.data?.access_token) {
            enqueueSnackbar('Login Success')
            localStorage.setItem("token", response.data.access_token)
            Cookies.set("credentials", JSON.stringify(response.data.access_token));
            router.replace('/');
        }
        else {
            enqueueSnackbar('User not exists')
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                // component="form"
                sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
            >
                <Stack spacing={3} width="100%" component="form" onSubmit={handleSubmit(onSubmit)}>
                    <Typography variant="h4" fontWeight={600} align="center">
                        Login
                    </Typography>

                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            // required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email format",
                            },
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Email"
                                type="email"
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                fullWidth
                                sx={{
                                    input: { color: "#fff" },
                                    label: { color: "#fff" },
                                    "& label.Mui-focused": { color: "#fff" },
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": { borderColor: "#fff" },
                                        "&:hover fieldset": { borderColor: "#fff" },
                                        "&.Mui-focused fieldset": { borderColor: "#fff" },
                                    },
                                }}
                            />
                        )}
                    />

                    <Controller
                        name="password"
                        control={control}
                        // rules={{ required: "Password is required" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Password"
                                type="password"
                                error={!!errors.password}
                                helperText={errors.password?.message}
                                fullWidth
                                sx={{
                                    input: { color: "#fff" },
                                    label: { color: "#fff" },
                                    "& label.Mui-focused": { color: "#fff" },
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": { borderColor: "#fff" },
                                        "&:hover fieldset": { borderColor: "#fff" },
                                        "&.Mui-focused fieldset": { borderColor: "#fff" },
                                    },
                                }}
                            />
                        )}
                    />

                    <Button type="submit" variant="contained" size="large" fullWidth>
                        Sign In
                    </Button>

                    <Typography align="center" variant="body2">
                        Join Us?{" "}
                        <Link href="/signup" style={{ textDecoration: "none" }}>
                            Sign up
                        </Link>
                    </Typography>
                </Stack>
            </Box>
        </Container>
    );
}
