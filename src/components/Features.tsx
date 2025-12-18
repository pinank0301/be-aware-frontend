import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Shield, Lock, AlertTriangle, Eye, Activity } from "lucide-react"

export function Features() {
    const features = [
        {
            icon: Globe,
            title: "Domain Similarity",
            description: "Detects look-alike domains used for typo-squatting and phishing attacks."
        },
        {
            icon: Shield,
            title: "Brand Impersonation",
            description: "Identifies websites attempting to mimic legitimate brands and organizations."
        },
        {
            icon: Lock,
            title: "SSL & Security Analysis",
            description: "Verifies SSL certificates and encryption standards to ensure connection safety."
        },
        {
            icon: AlertTriangle,
            title: "Scam Database Check",
            description: "Cross-references URLs against global databases of known malicious sites."
        },
        {
            icon: Eye,
            title: "Visual Inspection",
            description: "AI analyzes page layout and visual elements to spot fake login pages."
        },
        {
            icon: Activity,
            title: "Real-time Monitoring",
            description: "Continuous scanning of new threats to keep our detection engine up to date."
        }
    ]

    return (
        <section id="features" className="py-24 md:py-32 relative">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        Comprehensive Protection
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                        Advanced features designed to keep you safe from evolving online threats.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <Card key={index} className="group relative overflow-hidden border-white/10 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/20">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <CardHeader>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
