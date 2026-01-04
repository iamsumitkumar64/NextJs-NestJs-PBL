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
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { currentUser } from "@/store/slices/current-user";
import { RootState } from "@/store";
import { enqueueSnackbar } from "notistack";
import Cookies from "js-cookie";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const dispatch = useAppDispatch()
    const router = useRouter();
    const users = useAppSelector((state: RootState) => state.userReducer)
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
    const onSubmit = (data: LoginInterface) => {
        const is_user_exists = users.find((user) => ((user.email == data.email) && (user.password == data.password)));
        if (is_user_exists) {
            dispatch(currentUser(data))
            enqueueSnackbar('Login Success')
            Cookies.set("credentials", JSON.stringify(data));
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
