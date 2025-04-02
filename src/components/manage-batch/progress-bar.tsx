"use client";

import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export function ProgressBar() {
	const [progress, setProgress] = useState(13);

	useEffect(() => {
		const timer = setTimeout(() => setProgress(66), 500);
		return () => clearTimeout(timer);
	}, []);

	return <Progress value={progress} className="w-full mt-5" />;
}
