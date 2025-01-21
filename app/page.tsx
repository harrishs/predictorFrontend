import { SentimentData } from "../types/sentiment";

async function getSentimentData(): Promise<SentimentData[]> {
	const res = await fetch(
		"http://127.0.0.1:8000/api/stored_sentiment/?slug=bitcoin&metric=social_volume_total&from=2024-01-01&to=2024-01-07",
		{ cache: "no-store" } // Ensures fresh data on every request
	);

	if (!res.ok) {
		throw new Error("Failed to fetch sentiment data");
	}

	return res.json();
}

export default async function Home() {
	const sentimentData = await getSentimentData();

	return (
		<div className="min-h-screen p-10 bg-gray-100">
			<h1 className="text-3xl font-bold text-center text-gray-800">
				Cryptocurrency Sentiment Data
			</h1>
			{sentimentData.length === 0 ? (
				<p className="text-center text-gray-600">No Data Found</p>
			) : (
				<ul className="mt-5 space-y-3">
					{sentimentData.map((entry, index) => (
						<li
							key={index}
							className="p-4 bg-white rounded-lg shadow-md hover:bg-gray-50"
						>
							<span className="font-semibold">Date:</span> {entry.datetime} |{" "}
							<span className="font-semibold">Value:</span> {entry.value}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
