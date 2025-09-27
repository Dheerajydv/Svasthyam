import axios from "axios";
import { useEffect, useState } from "react";

import { Loader2 } from "lucide-react";
import Report from "./Report";
import toast, { Toaster } from "react-hot-toast";

export interface ICardData {
    __v: 0;
    _id: string;
    additionalNote: string;
    createdAt: string;
    department: string;
    disease: string;
    doctorName: string;
    hospitalName: string;
    issueDate: string;
    reportImages: [string];
    reportType: string;
    severity: number;
    updatedAt: string;
}

export default function AllReports() {
    const [cardData, setCardData] = useState<ICardData[] | null>([]);
    const [loading, setLoading] = useState(false);
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    const getAllReports = async () => {
        setLoading(true);
        try {
            const reponse = await axios.get(
                "http://localhost:8000/api/get-report",
                {
                    withCredentials: true,
                }
            );
            // console.log(reponse);
            setCardData(reponse.data.data);
        } catch (error: any) {
            console.log(error);
            toast.error(error.response.data.error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllReports();
    }, [refreshTrigger]);

    return (
        <div className="min-h-screen bg-background">
            {loading ? (
                <>
                    <Loader2 />
                </>
            ) : (
                <>
                    {cardData?.map((card: any) => (
                        <Report
                            key={card._id}
                            card={card}
                            setRefreshTrigger={setRefreshTrigger}
                        />
                    ))}
                </>
            )}
            <Toaster position="bottom-right" />
        </div>
    );
}
