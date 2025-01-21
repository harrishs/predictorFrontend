"use client";

import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { SentimentData } from "@/types/sentiment";

interface ChartProps {
	data: SentimentData[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
	return (
		<ResponsiveContainer width="100%" height={400}>
			<LineChart
				data={data}
				margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="datetime" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="value" stroke="#8884d8" />
			</LineChart>
		</ResponsiveContainer>
	);
};

export default Chart;
