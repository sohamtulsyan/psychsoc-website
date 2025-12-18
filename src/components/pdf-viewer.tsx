"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, ChevronsLeft, ChevronsRight } from "lucide-react"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PDFViewerProps {
    src: string | File
}

export default function PDFViewer({ src }: PDFViewerProps) {
    const [numPages, setNumPages] = useState<number>(0)
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [scale, setScale] = useState<number>(1.0)
    const [pageInput, setPageInput] = useState<string>("1")

    const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
        setNumPages(numPages)
    }, [])

    const goToPrevPage = useCallback(() => {
        setPageNumber((prev) => {
            const newPage = Math.max(prev - 1, 1)
            setPageInput(String(newPage))
            return newPage
        })
    }, [])

    const goToNextPage = useCallback(() => {
        setPageNumber((prev) => {
            const newPage = Math.min(prev + 1, numPages)
            setPageInput(String(newPage))
            return newPage
        })
    }, [numPages])

    const goToFirstPage = useCallback(() => {
        setPageNumber(1)
        setPageInput("1")
    }, [])

    const goToLastPage = useCallback(() => {
        setPageNumber(numPages)
        setPageInput(String(numPages))
    }, [numPages])

    const handlePageInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPageInput(e.target.value)
    }, [])

    const handlePageInputSubmit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault()
            const page = Number.parseInt(pageInput, 10)
            if (!isNaN(page) && page >= 1 && page <= numPages) {
                setPageNumber(page)
            } else {
                setPageInput(String(pageNumber))
            }
        },
        [pageInput, numPages, pageNumber],
    )

    const zoomIn = useCallback(() => {
        setScale((prev) => Math.min(prev + 0.25, 3.0))
    }, [])

    const zoomOut = useCallback(() => {
        setScale((prev) => Math.max(prev - 0.25, 0.5))
    }, [])

    return (
        <div className="flex flex-col gap-4 w-full">
            {/* Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-2 glass-card rounded-xl">
                {/* Navigation Controls */}
                <div className="flex items-center gap-1 md:gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={goToFirstPage}
                        disabled={pageNumber <= 1}
                        className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ChevronsLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={goToPrevPage}
                        disabled={pageNumber <= 1}
                        className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>

                    <form onSubmit={handlePageInputSubmit} className="flex items-center gap-2">
                        <Input
                            type="text"
                            value={pageInput}
                            onChange={handlePageInputChange}
                            className="h-8 w-12 text-center bg-background/50 border-white/10"
                        />
                        <span className="text-xs text-muted-foreground whitespace-nowrap">/ {numPages}</span>
                    </form>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={goToNextPage}
                        disabled={pageNumber >= numPages}
                        className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={goToLastPage}
                        disabled={pageNumber >= numPages}
                        className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ChevronsRight className="h-4 w-4" />
                    </Button>
                </div>

                {/* Zoom Controls */}
                <div className="flex items-center gap-1 md:gap-2">
                    <Button variant="ghost" size="icon" onClick={zoomOut} disabled={scale <= 0.5} className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors">
                        <ZoomOut className="h-4 w-4" />
                    </Button>
                    <span className="min-w-[3rem] text-center text-xs text-muted-foreground">{Math.round(scale * 100)}%</span>
                    <Button variant="ghost" size="icon" onClick={zoomIn} disabled={scale >= 3.0} className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors">
                        <ZoomIn className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* PDF Display */}
            <div className="w-full glass-card rounded-xl overflow-hidden min-h-[400px] flex items-center justify-center bg-black/20">
                <div className="flex justify-center w-full max-w-full overflow-auto p-4 custom-scrollbar">
                    <Document
                        file={src}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={
                            <div className="flex flex-col items-center justify-center p-24 gap-4">
                                <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                                <p className="text-sm text-muted-foreground animate-pulse">Loading Review...</p>
                            </div>
                        }
                    >
                        <Page
                            pageNumber={pageNumber}
                            scale={scale}
                            loading={
                                <div className="flex items-center justify-center p-24">
                                    <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                                </div>
                            }
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            className="shadow-2xl max-w-full"
                        />
                    </Document>
                </div>
            </div>
        </div>
    )
}
