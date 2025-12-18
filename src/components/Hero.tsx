import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShieldCheck, Zap, Lock, Search } from "lucide-react"

export function Hero() {
    return (
        <section id="home" className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-32">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full opacity-60 pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 right-0 -z-10 w-[800px] h-[600px] bg-blue-500/10 blur-[100px] rounded-full opacity-40 pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-10">
                    <div className="space-y-6 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000">

                        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                            <span className="block text-foreground">Is that website</span>
                            <span className="text-red-600">
                                Safe or Scam?
                            </span>
                        </h1>

                        <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl leading-relaxed">
                            Instantly detect fake websites, phishing attempts, and fraudulent domains.
                            Our advanced AI engine analyzes thousands of signals to keep your digital life secure.
                        </p>
                    </div>

                    <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-3 p-2 rounded-2xl bg-background/50 backdrop-blur-md border border-white/20 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="url"
                                placeholder="Paste website URL to analyze (e.g., amazon-promo.com)"
                                className="h-14 pl-12 text-lg border-transparent bg-transparent shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/70"
                            />
                        </div>
                        <Button size="lg" className="h-14 px-8 text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 cursor-pointer">
                            Analyze Now
                        </Button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/40 border border-white/10 backdrop-blur-sm">
                            <Lock className="h-4 w-4 text-primary" />
                            <span>Bank-Grade Security</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/40 border border-white/10 backdrop-blur-sm">
                            <Zap className="h-4 w-4 text-primary" />
                            <span>Real-Time Analysis</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/40 border border-white/10 backdrop-blur-sm">
                            <ShieldCheck className="h-4 w-4 text-primary" />
                            <span>99.9% Accuracy</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
