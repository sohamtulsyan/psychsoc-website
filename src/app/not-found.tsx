import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="max-w-2xl w-full text-center space-y-8">
                {/* 404 Number */}
                <div className="relative">
                    <h1 className="font-century text-[12rem] md:text-[16rem] font-bold leading-none">
                        <span className="bg-gradient-to-br from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                            404
                        </span>
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 md:w-48 md:h-48 bg-primary/5 rounded-full blur-3xl" />
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-4 glass-card p-8 rounded-2xl border-white/5">
                    <h2 className="font-century text-primary text-3xl md:text-4xl font-bold">
                        Page Not Found
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
                        Oops! The page you're looking for seems to have wandered off into the depths of the mind.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 group"
                        >
                            <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                            Back to Home
                        </Button>
                    </Link>

                    <Link href="/about">
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 group"
                        >
                            <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                            Explore Our Society
                        </Button>
                    </Link>
                </div>

                {/* Helpful Links */}
                <div className="pt-8">
                    <p className="text-sm text-muted-foreground mb-4 uppercase tracking-widest font-bold">
                        Quick Links
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                        <Link
                            href="/about"
                            className="text-white/70 hover:text-primary transition-colors duration-200 hover:underline underline-offset-4"
                        >
                            About Us
                        </Link>
                        <span className="text-white/20">•</span>
                        <Link
                            href="/newsletter"
                            className="text-white/70 hover:text-primary transition-colors duration-200 hover:underline underline-offset-4"
                        >
                            Newsletter
                        </Link>
                        <span className="text-white/20">•</span>
                        <Link
                            href="/review"
                            className="text-white/70 hover:text-primary transition-colors duration-200 hover:underline underline-offset-4"
                        >
                            Review
                        </Link>
                        <span className="text-white/20">•</span>
                        <Link
                            href="/events"
                            className="text-white/70 hover:text-primary transition-colors duration-200 hover:underline underline-offset-4"
                        >
                            Events
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
