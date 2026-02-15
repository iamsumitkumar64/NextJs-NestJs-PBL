"use client"

import { io } from "socket.io-client";
const access_token = typeof window !== 'undefined'
    ? localStorage.getItem('token')
    : null;

export const socket = io(
    process.env.NEXT_PUBLIC_BACKEND_URL
    , {
        autoConnect: true,
        withCredentials: true,
        auth: { "token": access_token },
    }
);