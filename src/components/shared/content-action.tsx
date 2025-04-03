import { Info, Eye } from "lucide-react";
import React from "react";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "../ui/select";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ContentAction() {
	return (
		<div className="flex items-center gap-x-3">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<Info size={16} />
					</TooltipTrigger>
					<TooltipContent className="max-w-[220px]">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Esse quidem itaque molestias distinctio culpa
							possimus deserunt! Cum alias laboriosam placeat.
						</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>

			<Select>
				<SelectTrigger
					className="w-full md:w-[140px] bg-white "
					size="sm"
				>
					<Eye />
					<SelectValue placeholder="Access to" className="text-sm" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="batch1">Batch 1</SelectItem>
					<SelectItem value="batch2">Batch 2</SelectItem>
					<SelectItem value="batch3">Batch 3</SelectItem>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger
					className="w-full md:w-[100px] bg-white "
					size="sm"
				>
					<SelectValue placeholder="Actions" className="text-sm" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="Edit">Edit</SelectItem>
					<SelectItem value="delete">Delete</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}
