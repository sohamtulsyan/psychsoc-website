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
        <div className="flex flex-col md:flex-row gap-6 w-full items-start">
            {/* Sidebar Controls */}
            <div className="w-full md:w-20 lg:w-24 shrink-0 md:sticky md:top-24 space-y-4">
                <div className="glass-card p-3 rounded-2xl flex md:flex-col items-center justify-between md:justify-center gap-4 md:gap-6 border-white/5">
                    {/* Navigation Section */}
                    <div className="flex md:flex-col items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={goToPrevPage}
                            disabled={pageNumber <= 1}
                            className="h-9 w-9 text-muted-foreground hover:text-primary transition-colors bg-white/5 hover:bg-white/10 rounded-xl"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>

                        <div className="flex flex-col items-center gap-1">
                            <form onSubmit={handlePageInputSubmit} className="flex flex-col items-center">
                                <Input
                                    type="text"
                                    value={pageInput}
                                    onChange={handlePageInputChange}
                                    className="h-8 w-10 text-center bg-transparent border-none text-sm text-primary font-bold p-0 focus-visible:ring-0 active:ring-0"
                                />
                                <div className="h-[1px] w-6 bg-white/10" />
                                <span className="text-[10px] text-muted-foreground font-medium mt-1 uppercase tracking-tighter">{numPages}</span>
                            </form>
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={goToNextPage}
                            disabled={pageNumber >= numPages}
                            className="h-9 w-9 text-muted-foreground hover:text-primary transition-colors bg-white/5 hover:bg-white/10 rounded-xl"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>

                    <div className="hidden md:block w-8 h-[1px] bg-white/5" />

                    {/* Zoom Section */}
                    <div className="flex md:flex-col items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={zoomIn}
                            disabled={scale >= 3.0}
                            className="h-9 w-9 text-muted-foreground hover:text-primary transition-colors bg-white/5 hover:bg-white/10 rounded-xl"
                        >
                            <ZoomIn className="h-5 w-5" />
                        </Button>

                        <span className="text-[10px] font-bold text-muted-foreground tabular-nums">{Math.round(scale * 100)}%</span>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={zoomOut}
                            disabled={scale <= 0.5}
                            className="h-9 w-9 text-muted-foreground hover:text-primary transition-colors bg-white/5 hover:bg-white/10 rounded-xl"
                        >
                            <ZoomOut className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Page Jump Shortcuts (Desktop only) */}
                    <div className="hidden md:flex flex-col items-center gap-2 mt-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={goToFirstPage}
                            disabled={pageNumber <= 1}
                            className="h-7 w-7 text-muted-foreground/50 hover:text-primary transition-colors"
                        >
                            <ChevronsLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={goToLastPage}
                            disabled={pageNumber >= numPages}
                            className="h-7 w-7 text-muted-foreground/50 hover:text-primary transition-colors"
                        >
                            <ChevronsRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 w-full glass-card rounded-2xl overflow-hidden min-h-[500px] flex items-start justify-center bg-black/40 border-white/5 shadow-2xl relative">
                <div className="w-full overflow-auto custom-scrollbar flex justify-center p-4 md:p-8">
                    <Document
                        file={src}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={
                            <div className="flex flex-col items-center justify-center p-32 gap-6">
                                <div className="relative">
                                    <div className="h-12 w-12 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
                                    <div className="absolute inset-x-0 top-full mt-4 flex justify-center">
                                        <div className="h-1 w-24 bg-primary/10 rounded-full overflow-hidden">
                                            <div className="h-full w-1/2 bg-primary animate-[translate_1.5s_infinite_ease-in-out]" />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs font-bold text-muted-foreground/60 uppercase tracking-[0.2em]">Loading Publication</p>
                            </div>
                        }
                        error={
                            <div className="flex flex-col items-center justify-center p-24 text-center">
                                <p className="text-destructive font-medium mb-2 text-sm">Failed to load publication</p>
                                <Button variant="outline" size="sm" onClick={() => window.location.reload()} className="text-xs">Retry</Button>
                            </div>
                        }
                    >
                        <Page
                            pageNumber={pageNumber}
                            scale={scale}
                            loading={
                                <div className="flex items-center justify-center p-32">
                                    <div className="h-12 w-12 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
                                </div>
                            }
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            className="max-w-full shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]"
                        />
                    </Document>
                </div>
            </div>
        </div>
    )
}
