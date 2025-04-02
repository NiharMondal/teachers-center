import React from "react";
import {
	SidebarFooter as Footer,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Settings, UserPen } from "lucide-react";

const footerItems = [
	{
		title: "Manage Profile",
		url: "#",
		icon: UserPen,
	},
	{
		title: "Settings",
		url: "#",
		icon: Settings,
	},
];
export default function SidebarFooter() {
	return (
		<Footer>
			<SidebarMenu className="pb-5">
				{footerItems.map((item) => (
					<SidebarMenuItem key={item.title}>
						<SidebarMenuButton asChild>
							<Link href={item.url}>
								<item.icon />
								<span>{item.title}</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</Footer>
	);
}
