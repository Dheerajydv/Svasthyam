import type React from "react";

import { useState, useRef } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Upload, X } from "lucide-react";
import { ImageIcon } from "lucide-react";

interface ImageUploadProps {
    images?: any;
    onImageChange: (files: File[]) => void;
    value?: File[];
}

export function ImageUpload({ onImageChange, value = [] }: ImageUploadProps) {
    const [previews, setPreviews] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = (newFiles: File[]) => {
        const imageFiles = newFiles.filter((file) =>
            file.type.startsWith("image/")
        );
        const currentFiles = value || [];
        const updatedFiles = [...currentFiles, ...imageFiles];

        const newPreviews: string[] = [];
        imageFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                newPreviews.push(e.target?.result as string);
                if (newPreviews.length === imageFiles.length) {
                    setPreviews((prev) => [...prev, ...newPreviews]);
                }
            };
            reader.readAsDataURL(file);
        });

        onImageChange(updatedFiles);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0) {
            handleFileSelect(files);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const removeImage = (index: number) => {
        const updatedFiles = value.filter((_, i) => i !== index);
        const updatedPreviews = previews.filter((_, i) => i !== index);
        setPreviews(updatedPreviews);
        onImageChange(updatedFiles);
    };

    const clearAllImages = () => {
        setPreviews([]);
        onImageChange([]);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex gap-4">
                <Button
                    type="button"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    onClick={() => fileInputRef.current?.click()}
                >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Images
                </Button>
                {previews.length > 0 && (
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={clearAllImages}
                        className="text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                    >
                        <X className="w-4 h-4 mr-2" />
                        Clear All
                    </Button>
                )}
            </div>

            {previews.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {previews.map((preview, index) => (
                        <div key={index} className="relative group">
                            <img
                                src={preview || "/placeholder.svg"}
                                alt={`Preview ${index + 1}`}
                                className="w-full h-32 object-cover rounded-lg border-2 border-primary"
                            />
                            <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0"
                                onClick={() => removeImage(index)}
                            >
                                <X className="w-3 h-3" />
                            </Button>
                        </div>
                    ))}
                </div>
            )}

            <Card
                className="border-2 border-dashed border-primary p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current?.click()}
            >
                <div className="space-y-4">
                    <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground" />
                    <div>
                        <p className="text-primary font-medium">
                            Drag & Drop images here
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                            or click to browse files
                        </p>
                        {previews.length > 0 && (
                            <p className="text-xs text-muted-foreground mt-2">
                                {previews.length} image(s) selected
                            </p>
                        )}
                    </div>
                </div>
            </Card>

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => {
                    const files = Array.from(e.target.files || []);
                    if (files.length > 0) handleFileSelect(files);
                }}
            />
        </div>
    );
}
