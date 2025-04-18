import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopAppBar from "@/components/top-appbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Teacher's Center",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-muted`}
			>
				<TopAppBar />

				<SidebarProvider>
					<AppSidebar />
					<main className="px-5 py-2 w-full">
						<SidebarTrigger title="Toggle Sidebar" />
						{children}
					</main>
				</SidebarProvider>
			</body>
		</html>
	);
}
