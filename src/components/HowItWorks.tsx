import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Server, ShieldAlert, CheckCircle } from "lucide-react"

export function HowItWorks() {
    const steps = [
        {
            icon: Search,
            title: "1. Enter URL",
            description: "Paste the website link you want to verify into our secure analyzer."
        },
        {
            icon: Server,
            title: "2. Domain Analysis",
            description: "We check domain age, registration details, and hosting reputation."
        },
        {
            icon: ShieldAlert,
            title: "3. Risk Detection",
            description: "Our AI scans for phishing patterns, brand impersonation, and known scams."
        },
        {
            icon: CheckCircle,
            title: "4. Get Trust Score",
            description: "Receive an instant trust score and detailed safety report."
        }
    ]

    return (
        <section id="how-it-works" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container px-4 md:px-6 relative">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                        Simple steps to verify any website's authenticity.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Connector Line (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border -z-10">
                                    <div className="h-full bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />
                                </div>
                            )}

                            <Card className="relative h-full border-none bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <CardHeader className="flex flex-col items-center justify-center pb-4 text-center">
                                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
                                        <step.icon className="h-8 w-8" />
                                    </div>
                                    <CardTitle className="text-xl">{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-muted-foreground">
                                        {step.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
