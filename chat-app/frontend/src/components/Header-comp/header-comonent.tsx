import { Button } from "@mui/material";
import Link from "next/link";

export default function HeaderComponent() {
    return (
        <>
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
        </>
    );
}