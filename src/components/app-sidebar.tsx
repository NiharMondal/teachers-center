"use client";
import {
	ChartSpline,
	ChevronRight,
	Clock,
	Inbox,
	Landmark,
	LayoutDashboard,
} from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { Fragment } from "react";
import SidebarFooter from "./sidebar-footer";

// Menu items.
const items = [
	{
		title: "Dashboard",
		url: "#",
		icon: LayoutDashboard,
	},
	{
		title: "Manage Batch",
		icon: Inbox,
		isActive: true,
		children: [
			{
				title: "All Batches",
				url: "/",
			},
			{
				title: "Resources",
				url: "#",
			},
		],
	},
	{
		title: "My Earnings",
		url: "#",
		icon: Landmark,
	},
	{
		title: "Timetable",
		url: "#",
		icon: Clock,
	},
	{
		title: "Analytics",
		url: "#",
		icon: ChartSpline,
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Teach</SidebarGroupLabel>
					<SidebarGroupContent className="mt-10">
						<SidebarMenu>
							{items.map((item, index) => {
								return (
									<Fragment key={index}>
										{item.title && item.url ? (
											<SidebarMenuItem key={item.title}>
												<SidebarMenuButton asChild>
													<Link href={item.url}>
														<item.icon />
														<span>
															{item.title}
														</span>
													</Link>
												</SidebarMenuButton>
											</SidebarMenuItem>
										) : (
											<Collapsible
												key={item.title}
												asChild
												defaultOpen={item.isActive}
												className="group/collapsible cursor-pointer"
											>
												<SidebarMenuItem>
													<CollapsibleTrigger asChild>
														<SidebarMenuButton
															tooltip={
																item?.title
															}
														>
															{item.icon && (
																<item.icon />
															)}

															{item.title}
															{item.children && (
																<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
															)}
														</SidebarMenuButton>
													</CollapsibleTrigger>
													<CollapsibleContent>
														<SidebarMenuSub>
															{item?.children?.map(
																(subItem) => (
																	<SidebarMenuSubItem
																		key={
																			subItem.title
																		}
																	>
																		<SidebarMenuSubButton
																			className={`${
																				subItem.url ===
																				"/"
																					? "bg-blue-100"
																					: "bg-none"
																			}`}
																			asChild
																		>
																			<Link
																				href={
																					subItem.url
																				}
																			>
																				<span>
																					{
																						subItem.title
																					}
																				</span>
																			</Link>
																		</SidebarMenuSubButton>
																	</SidebarMenuSubItem>
																)
															)}
														</SidebarMenuSub>
													</CollapsibleContent>
												</SidebarMenuItem>
											</Collapsible>
										)}
									</Fragment>
								);
							})}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter />
		</Sidebar>
	);
}
