import { Checkbox } from "@/components/ui/checkbox";
import { Folder } from "lucide-react";
import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import ContentAction from "@/components/shared/content-action";
import FileInformation from "@/components/shared/file-information";

export default function Content() {
	return (
		<div className="px-10 py-2 w-full">
			<div className="grid grid-cols-1 md:grid-cols-12 gap-2 border p-2">
				<div className="flex items-start justify-between h-[200px] relative col-span-10 border-r pr-2">
					<div className=" flex items-start gap-x-3 ">
						<div className="flex items-center gap-x-3">
							<Checkbox className=" border border-black" />
							<Folder size={40} />
						</div>

						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger>Chapter 1.1</AccordionTrigger>
								<AccordionContent>Video 1</AccordionContent>
								<AccordionContent>Video 2</AccordionContent>
								<AccordionContent>Video 3</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
					<div>
						<ContentAction />
						<div className="absolute bottom-0 right-2">
							<p>
								<span className="font-medium text-xs mr-1">
									Visible to:
								</span>
								<small>
									<i>
										Batch 1, Batch 2, Batch 3, For both
										online and physical students
									</i>
								</small>
							</p>
						</div>
					</div>
				</div>
				<FileInformation />
			</div>
			<div className="border px-2 py-5 flex justify-between">
				<div className=" flex items-start gap-x-3 ">
					<div className="flex items-center gap-x-3">
						<Checkbox className=" border border-black" />
						<Folder size={40} />
					</div>

					<p>Chapter 2 Revision Notes.pdf</p>
				</div>
				<ContentAction />
			</div>
		</div>
	);
}
