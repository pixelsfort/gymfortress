import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/Components/ui/chart";

export const description = "A bar chart";

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
};

const MemberReport = () => {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-wrap items-center gap-2">
                    <div className="flex-1">
                        <div className="text-default-900 whitespace-nowrap text-xl font-semibold">
                            Reports Snapshot
                        </div>
                        <span className="text-default-600 text-xs">
                            Demographic properties of your customer
                        </span>
                    </div>
                    <div className="flex-none">View All</div>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar
                            dataKey="desktop"
                            fill="var(--color-desktop)"
                            radius={8}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default MemberReport;
