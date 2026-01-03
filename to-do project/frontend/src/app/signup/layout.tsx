import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SignUp Birwal",
    description: "SignUp Birwal",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
        </div>
    );
}
