import {
	AArrowUp,
	Clipboard,
	CloudUpload,
	FolderPlus,
	FolderUp,
} from "lucide-react";
import React from "react";

export default function ContentFooter() {
	return (
		<section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-5 border">
			<div className="border border-dotted border-gray-700 p-5 flex items-center justify-center gap-x-2 rounded-2xl">
				<span className="bg-black text-white rounded-full p-1.5">
					<FolderPlus size={16} />
				</span>
				<span>Add Folder</span>
			</div>
			<div className="border border-dotted border-gray-700 p-5 flex items-center justify-center gap-x-2 rounded-2xl">
				<span className="bg-black text-white rounded-full p-1.5">
					<CloudUpload size={16} />
				</span>
				<span>Upload File</span>
			</div>
			<div className="border border-dotted border-gray-700 p-5 flex items-center justify-center gap-x-2 rounded-2xl">
				<span className="bg-black text-white rounded-full p-1.5">
					<FolderUp size={16} />
				</span>
				<span>Upload Folder</span>
			</div>
			<div className="border border-dotted border-gray-700 p-5 flex items-center justify-center gap-x-2 rounded-2xl">
				<span className="bg-black text-white rounded-full p-1.5">
					<AArrowUp size={16} />
				</span>
				<span>Add Text</span>
			</div>
			<div className="border border-dotted border-gray-700 p-5 flex items-center justify-center gap-x-2 rounded-2xl">
				<span className="bg-black text-white rounded-full p-1.5">
					<Clipboard size={16} />
				</span>
				<span>Paste</span>
			</div>
		</section>
	);
}
