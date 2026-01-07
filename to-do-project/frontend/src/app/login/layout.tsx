import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login Birwal",
    description: "Login Birwal",
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
