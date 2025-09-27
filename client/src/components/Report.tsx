import axios from "axios";
import { Button } from "./ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { Toaster, toast } from "react-hot-toast";
import { Badge } from "./ui/badge";
import { BadgeCheckIcon } from "lucide-react";

export interface IReportProps {
    card: any;
    setRefreshTrigger: any;
}

const Report = ({ card, setRefreshTrigger }: IReportProps) => {
    const date = new Date(card.issueDate);
    const handleDelete = async () => {
        try {
            const response = await axios.delete(
                `http://localhost:8000/api/delete-report/${card._id}`,
                {
                    withCredentials: true,
                }
            );
            console.log(response);
            toast.success(response.data.message);
        } catch (error: any) {
            console.log(error);
            toast.error(error.response.data.error.message);
        } finally {
            setRefreshTrigger((prev: number) => prev + 1);
        }
    };

    return (
        <Card
            key={card._id}
            className="w-full p-2 max-w-3xl mx-auto shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
            <CardHeader>
                <CardTitle className="text-4xl uppercase">
                    {card.reportType}
                </CardTitle>
                <CardAction>
                    <p>{date.toLocaleDateString()}</p>
                </CardAction>
            </CardHeader>
            <Badge
                variant="default"
                className="bg-blue-500 text-white dark:bg-blue-600"
            >
                <BadgeCheckIcon />
                Verified by {card.doctorName}
            </Badge>

            <CardContent>
                <div className="flex gap-1">
                    {card.reportImages.map((img: any) => (
                        <a key={img} href={img} target="main">
                            <img
                                className="w-full h-[500px] object-cover rounded-2xl"
                                src={img}
                            />
                        </a>
                    ))}
                </div>
                <p>
                    <span className="font-bold">Hospital Name: </span>
                    {card.hospitalName}
                </p>
                <p>
                    <span className="font-bold">ReportType: </span>{" "}
                    {card.reportType}
                </p>
                <p>
                    <span className="font-bold">Disease: </span>
                    {card.disease}
                </p>
                <p>
                    <span className="font-bold">Department: </span>{" "}
                    {card.department}
                </p>
                <p>
                    <span className="font-bold">Severity: </span>{" "}
                    {card.severity}
                </p>
                <p>
                    <span className="font-bold">Additional Notes: </span>
                    {card.additionalNote}
                </p>
            </CardContent>
            <CardFooter>
                <p>
                    <span className="font-bold">Doctor Name:</span>
                    {card.doctorName}
                </p>
            </CardFooter>
            <Button
                variant="destructive"
                className="m-2"
                onClick={handleDelete}
            >
                Delete Report
            </Button>
            <Toaster position="bottom-right" />
        </Card>
    );
};
export default Report;
