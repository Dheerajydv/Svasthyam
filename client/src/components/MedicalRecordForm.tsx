import type React from "react";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { ImageUpload } from "./ImageUpload";
import {
    Calendar,
    FileText,
    Hospital,
    Stethoscope,
    Activity,
    Loader2,
} from "lucide-react";

import {
    hospitalNames,
    reportTypes,
    doctorNames,
} from "../constants/constants";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function MedicalRecordForm() {
    const [formData, setFormData] = useState({
        hospitalName: "",
        reportType: "",
        issueDate: "",
        doctorName: "",
        disease: "",
        department: "",
        severity: "",
        additionalNote: "",
        reportImages: [] as File[],
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        setLoading(true);
        e.preventDefault();
        const fd = new FormData();

        // append text fields
        fd.append("hospitalName", formData.hospitalName);
        fd.append("reportType", formData.reportType);
        fd.append("issueDate", formData.issueDate);
        fd.append("doctorName", formData.doctorName);
        fd.append("disease", formData.disease);
        fd.append("department", formData.department);
        fd.append("severity", formData.severity);
        fd.append("additionalNote", formData.additionalNote);

        // append images (important!)
        formData.reportImages.forEach((file) => {
            fd.append("reportImages", file);
            // 👆 must match the field name your Multer expects
        });
        try {
            const response = await axios.post(
                "http://localhost:8000/api/add-report",
                fd,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            toast.success(response.data.message);
        } catch (error: any) {
            console.log(error);
            toast.error(error.response.data.error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="min-h-screen bg-background p-4">
            <div className="max-w-4xl flex-col justify-center items-center mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-primary mb-2">
                        Medical Record Form
                    </h1>
                    <p className="text-muted-foreground">
                        Please fill out all required information for your
                        medical record
                    </p>
                </div>

                {loading ? (
                    <Loader2 />
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Step 1: Medical Information */}
                        <Card className="border-2 border-primary">
                            <CardHeader className="bg-primary text-primary-foreground">
                                <CardTitle className="flex items-center gap-2 text-lg font-bold">
                                    <Stethoscope className="w-5 h-5" />
                                    STEP 1: MEDICAL INFORMATION
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <p className="text-muted-foreground mb-6">
                                    Provide detailed information about your
                                    medical diagnosis and treatment
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="hospitalName"
                                            className="text-primary font-semibold flex items-center gap-2"
                                        >
                                            <Hospital className="w-4 h-4" />
                                            HOSPITAL:
                                        </Label>
                                        <Select
                                            onValueChange={(value) =>
                                                handleInputChange(
                                                    "hospitalName",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="border-2 border-primary">
                                                <SelectValue placeholder="Select Hospital" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {hospitalNames.map(
                                                    (hospitalName: string) => (
                                                        <SelectItem
                                                            value={hospitalName}
                                                        >
                                                            {hospitalName}
                                                        </SelectItem>
                                                    )
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="reportType"
                                            className="text-primary font-semibold flex items-center gap-2"
                                        >
                                            <Activity className="w-4 h-4" />
                                            REPORT TYPE:
                                        </Label>
                                        <Select
                                            onValueChange={(value) =>
                                                handleInputChange(
                                                    "reportType",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="border-2 border-primary">
                                                <SelectValue placeholder="Select Diagnosis Type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {reportTypes.map(
                                                    (reportType) => (
                                                        <SelectItem
                                                            key={reportType}
                                                            value={reportType}
                                                        >
                                                            {reportType}
                                                        </SelectItem>
                                                    )
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="doctorName"
                                                className="text-primary font-semibold flex items-center gap-2"
                                            >
                                                <Activity className="w-4 h-4" />
                                                Doctor Name:
                                            </Label>
                                            <Select
                                                onValueChange={(value) =>
                                                    handleInputChange(
                                                        "doctorName",
                                                        value
                                                    )
                                                }
                                            >
                                                <SelectTrigger className="border-2 border-primary">
                                                    <SelectValue placeholder="Select Doctor Name" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {doctorNames.map(
                                                        (doctorName) => (
                                                            <SelectItem
                                                                value={
                                                                    doctorName
                                                                }
                                                                key={doctorName}
                                                            >
                                                                {doctorName}
                                                            </SelectItem>
                                                        )
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="department"
                                                className="text-primary font-semibold flex items-center gap-2"
                                            >
                                                <Activity className="w-4 h-4" />
                                                Department Name:
                                            </Label>
                                            <Select
                                                onValueChange={(value) =>
                                                    handleInputChange(
                                                        "department",
                                                        value
                                                    )
                                                }
                                            >
                                                <SelectTrigger className="border-2 border-primary">
                                                    <SelectValue placeholder="Select Department Name" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Cardiology">
                                                        Cardiology
                                                    </SelectItem>
                                                    <SelectItem value="Neurology">
                                                        Neurology
                                                    </SelectItem>
                                                    <SelectItem value="Gastroenterology">
                                                        Gastroenterology
                                                    </SelectItem>
                                                    <SelectItem value="Pulmonology">
                                                        Pulmonology
                                                    </SelectItem>
                                                    <SelectItem value="Rheumatology">
                                                        Rheumatology
                                                    </SelectItem>
                                                    <SelectItem value="Endocrinology">
                                                        Endocrinology
                                                    </SelectItem>
                                                    <SelectItem value="General Surgery">
                                                        General Surgery
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2 md:col-span-2">
                                        <Label
                                            htmlFor="severity"
                                            className="text-primary font-semibold"
                                        >
                                            Severity :
                                        </Label>
                                        <Input
                                            id="severity"
                                            type="number"
                                            max={10}
                                            min={1}
                                            placeholder="Enter severity on a scale from 1 to 10"
                                            value={formData.severity}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "severity",
                                                    e.target.value
                                                )
                                            }
                                            className="border-2 border-primary"
                                        />
                                    </div>

                                    <div className="space-y-2 md:col-span-2">
                                        <Label
                                            htmlFor="disease"
                                            className="text-primary font-semibold"
                                        >
                                            DISEASE/CONDITION:
                                        </Label>
                                        <Input
                                            id="disease"
                                            type="text"
                                            placeholder="Enter disease or medical condition"
                                            value={formData.disease}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "disease",
                                                    e.target.value
                                                )
                                            }
                                            className="border-2 border-primary"
                                        />
                                    </div>

                                    <div className="space-y-2 md:col-span-2">
                                        <Label
                                            htmlFor="additionalNote"
                                            className="text-primary font-semibold"
                                        >
                                            ADDITIONAL NOTES:
                                        </Label>
                                        <Textarea
                                            id="additionalNote"
                                            placeholder="Enter any additional notes or symptoms"
                                            value={formData.additionalNote}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "additionalNote",
                                                    e.target.value
                                                )
                                            }
                                            className="border-2 border-primary min-h-[100px]"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="issueDate"
                                            className="text-primary font-semibold flex items-center gap-2"
                                        >
                                            <Calendar className="w-4 h-4" />
                                            DATE:
                                        </Label>
                                        <Input
                                            id="issueDate"
                                            type="date"
                                            value={formData.issueDate}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "issueDate",
                                                    e.target.value
                                                )
                                            }
                                            className="border-2 border-primary"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Step 2: Image Upload */}
                        <Card className="border-2 border-primary">
                            <CardHeader className="bg-primary text-primary-foreground">
                                <CardTitle className="flex items-center gap-2 text-lg font-bold">
                                    <FileText className="w-5 h-5" />
                                    STEP 2: UPLOAD MEDICAL IMAGES
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <p className="text-muted-foreground mb-4">
                                    Upload multiple X-rays, test results, or
                                    other medical images related to your
                                    diagnosis
                                </p>
                                <ImageUpload
                                    value={formData.reportImages}
                                    onImageChange={(files) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            reportImages: files,
                                        }))
                                    }
                                />
                            </CardContent>
                        </Card>

                        {/* Submit Section */}
                        <Card className="border-2 border-primary">
                            <CardContent className="p-6">
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        type="submit"
                                        variant="default"
                                        className="bg-accent cursor-pointer hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3"
                                    >
                                        Submit Medical Record
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
                                        onClick={() => {
                                            setFormData({
                                                hospitalName: "",
                                                reportType: "",
                                                issueDate: "",
                                                doctorName: "",
                                                disease: "",
                                                department: "",
                                                severity: "",
                                                additionalNote: "",
                                                reportImages: [] as File[],
                                            });
                                        }}
                                    >
                                        Clear Form
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </form>
                )}
            </div>
            <Toaster position="bottom-right" />
        </div>
    );
}
