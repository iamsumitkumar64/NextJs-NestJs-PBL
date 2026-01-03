"use client";

import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Stack,
} from "@mui/material";
import Link from "next/link";
import { SignupInterface, SignUpSchema } from "./interface";
import { useForm, Controller } from "react-hook-form";
import { useAppDispatch } from "@/store/hooks";
import { addUser } from "@/store/slices/add-user";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignupForm() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupInterface>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: SignupInterface) => {
        if (!data) return;
        dispatch(addUser(data));
        router.replace('/login');
        enqueueSnackbar('User Created Success')
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
            >
                <Stack spacing={3} width="100%" component="form" onSubmit={handleSubmit(onSubmit)}>
                    <Typography variant="h4" align="center" fontWeight={600}>
                        Create Account
                    </Typography>

                    <Controller
                        name="name"
                        control={control}
                        // rules={{ required: "Name is required" }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Name"
                                error={!!errors.name}
                                helperText={errors.name?.message}
                                fullWidth
                            />
                        )}
                    />

                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            // required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email",
                            },
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                label="Email"
                                error={!!error}
                                helperText={error?.message ?? ""}
                                fullWidth
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
                            />
                        )}
                    />

                    <Button type="submit" variant="contained" size="large" fullWidth>
                        Sign Up
                    </Button>

                    <Typography align="center" variant="body2">
                        Already have an account?{" "}
                        <Link href="/login" style={{ textDecoration: "none" }}>
                            Login
                        </Link>
                    </Typography>
                </Stack>
            </Box>
        </Container>
    );
}