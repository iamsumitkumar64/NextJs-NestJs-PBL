import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conversations Page",
    description: "Conversation with Other",
};

export default function ChatLayout({ children, }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div>
            <>{children}</>
        </div>
    )
}