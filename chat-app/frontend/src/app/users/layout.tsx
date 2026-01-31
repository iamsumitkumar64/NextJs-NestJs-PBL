import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Chat Page",
    description: "Conversation with Other",
};

export default function UserLayout({ children, }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div>
            <>{children}</>
        </div>
    )
}