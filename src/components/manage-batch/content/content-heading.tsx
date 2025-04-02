import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CircleArrowLeft } from "lucide-react";

import ContentAction from "@/components/shared/content-action";

export default function ContentHeading() {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center">
				<CircleArrowLeft className="text-white bg-black rounded-full mr-5" />

				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Chapter 1</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator className="mt-1" />
						<BreadcrumbItem>
							<BreadcrumbLink href="/components">
								Chapter 1.1
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator className="mt-1" />
						<BreadcrumbItem>
							<BreadcrumbPage>
								Welcome to orientation class
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			<ContentAction />
		</div>
	);
}
