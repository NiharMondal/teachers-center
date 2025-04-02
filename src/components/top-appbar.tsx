import { BellRing, UserCheck } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function TopAppBar() {
	return (
		<header className="p-5 flex items-center justify-between shadow h-20 z-[9999]">
			<div>
				<span>Teacher&apos;s Center</span>
			</div>
			<div className="flex items-center justify-center gap-x-5">
				<div className="flex gap-x-6">
					<UserCheck />
					<BellRing />
				</div>
				<div className="border-l px-2 flex gap-x-2 items-center">
					<Avatar>
						<AvatarImage
							src="https://github.com/shadcn.png"
							alt="@shadcn"
						/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div className="leading-tight">
						<h4 className="font-semibold">John Dow</h4>
						<p className="font-light">Physics | Level 3</p>
					</div>
				</div>
			</div>
		</header>
	);
}
