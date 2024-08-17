import { Card, CardContent, CardHeader } from "@/Components/ui/card";

const Report = () => {
    return (
        <div>
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
                <CardContent>Chat Will Display Here</CardContent>
            </Card>
        </div>
    );
};

export default Report;
