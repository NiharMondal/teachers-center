import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

export default function FilterSection() {
	return (
		<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
			<div className="flex items-center gap-x-5 divide-x-2 divide-amber-500">
				<Select>
					<SelectTrigger className="w-full md:w-[180px] bg-white">
						<SelectValue placeholder="Select Course" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="chemistry">
							Course for Chemistry
						</SelectItem>
						<SelectItem value="math">Course for Math</SelectItem>
						<SelectItem value="english">
							Course for English
						</SelectItem>
					</SelectContent>
				</Select>

				<Select>
					<SelectTrigger className="w-full md:w-[180px] bg-white ">
						<SelectValue placeholder="Select Batch" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All Batches</SelectItem>
						<SelectItem value="level1">Level 1</SelectItem>
						<SelectItem value="level2">Level 2</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="flex items-center justify-between gap-x-5">
				<Button>Take Class</Button>
				<div className="flex items-center">
					<Avatar>
						<AvatarImage
							src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?semt=ais_hybrid"
							alt="student1"
						/>
						<AvatarFallback>ST</AvatarFallback>
					</Avatar>
					<Avatar className="-ml-3">
						<AvatarImage
							src="https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg"
							alt="student2"
						/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<Avatar className="-ml-3">
						<AvatarImage
							src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg"
							alt="student2"
						/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<span className="bg-gray-100/40 shadow pr-3 rounded-r-full">
						Add TA
					</span>
				</div>
			</div>
		</div>
	);
}
