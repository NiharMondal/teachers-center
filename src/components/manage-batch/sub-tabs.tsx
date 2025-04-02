import React from "react";

import {
	Search,
	Trash2,
	FilePenLine,
	ArrowUpDown,
	SlidersHorizontal,
	CirclePlus,
	CircleEllipsis,
} from "lucide-react";
import ContentHeading from "./content/content-heading";
import Content from "./content/content";

export default function SubTabs() {
	return (
		<div className="bg-white px-5 py-3 rounded-2xl space-y-4">
			<div className="flex items-center justify-between border-b ">
				<ul className="flex gap-x-5 items-center *:pb-2">
					<li className="border-b-4 border-gray-800">Content</li>
					<li>Course Details</li>
					<li>Revisions</li>
					<li className="flex items-center gap-x-1 ">
						<CirclePlus
							className="bg-black text-white rounded-full"
							size={18}
						/>
						<span className="font-light text-sm">
							Add main folder
						</span>
					</li>
				</ul>
				<ul className="flex gap-x-5 items-center text-base">
					<li className="border border-gray-700 rounded-4xl relative mr-10 -mt-2">
						<input
							type="text"
							className="outline-none h-full pl-8"
						/>
						<Search className="absolute left-2 top-1/2 -translate-y-1/2 scale-75" />
					</li>

					<CircleEllipsis size={16} />

					<FilePenLine size={16} />
					<Trash2 size={16} />
					<ArrowUpDown size={16} />
					<SlidersHorizontal size={16} />
				</ul>
			</div>
			<ContentHeading />
			<Content />
		</div>
	);
}
