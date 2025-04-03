import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Trash, CircleEllipsis } from "lucide-react";
import SubTabs from "./sub-tabs";
import { Button } from "../ui/button";

export default function TabSection() {
	return (
		<div className="flex items-start justify-between pt-5 w-full">
			<Tabs defaultValue="materials" className="w-full">
				<div className="flex items-center justify-between overflow-x-scroll">
					<TabsList className="rounded-none  bg-muted *:text-blue-500 *:font-normal">
						<TabsTrigger value="students">Students</TabsTrigger>
						<TabsTrigger value="announcements">
							Announcements
						</TabsTrigger>
						<TabsTrigger value="materials" className="font-bold">
							Materials
						</TabsTrigger>
						<TabsTrigger value="homework">Homework</TabsTrigger>
						<TabsTrigger value="attendance">Attendance</TabsTrigger>
						<TabsTrigger value="discussion">Discussion</TabsTrigger>
						<Button variant={"ghost"}>
							<CircleEllipsis className="cursor-pointer text-black" />
						</Button>
					</TabsList>
					<div className="flex gap-x-4 items-center text-gray-400">
						<Trash className="cursor-pointer hover:text-red-400" />
						<Download className="cursor-pointer hover:text-blue-400" />
					</div>
				</div>

				<div className="border-b border-gray-700 w-full"></div>
				<div className="w-full">
					<TabsContent value="students">
						<div>students</div>
					</TabsContent>
					<TabsContent value="announcements">
						<div>announcements</div>
					</TabsContent>
					<TabsContent value="materials" className="min-w-full">
						<SubTabs />
					</TabsContent>
					<TabsContent value="homework">
						<div>homework</div>
					</TabsContent>
					<TabsContent value="attendance">
						<div>attendance</div>
					</TabsContent>
					<TabsContent value="discussion">
						<div>discussion</div>
					</TabsContent>
				</div>
			</Tabs>
		</div>
	);
}
