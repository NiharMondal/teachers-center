import FilterSection from "@/components/manage-batch/filter-section";
import { ProgressBar } from "@/components/manage-batch/progress-bar";
import TabSection from "@/components/manage-batch/tab-section";

export default function Home() {
	return (
		<section>
			<FilterSection />
			<ProgressBar />
			<TabSection />
		</section>
	);
}
