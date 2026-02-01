"use client"

import { Button } from "@mui/material";
import Link from "next/link";
import './header-comp.css'

export default function HeaderComponent() {
    return (
        <span className="header">
            <Button color="secondary">
                <Link href={"/"}>
                    Home Page
                </Link>
            </Button>
            <Button color="secondary">
                <Link href={"/users"}>
                    User List Page
                </Link>
            </Button>
            <Button color="secondary">
                <Link href={"/chat"}>
                    Chat List Page
                </Link>
            </Button>
        </span>
    );
}