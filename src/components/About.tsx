export function About() {
    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12 space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Why Choose <span className="text-primary">BeAware</span>?
                    </h2>
                    <div className="max-w-3xl space-y-4 text-muted-foreground md:text-lg leading-relaxed">
                        <p>
                            The internet is filled with sophisticated scams designed to steal your personal information and money.
                            Traditional antivirus software often misses new phishing sites that pop up and vanish within hours.
                        </p>
                        <p>
                            BeAware uses advanced AI and real-time data to analyze website behavior, structure, and reputation instantly.
                            We empower you to browse with confidence, knowing that you have a powerful ally against online fraud.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full mt-12">
                <img
                    src="/banner.png"
                    alt="BeAware Community"
                    className="w-full h-auto object-cover"
                />
            </div>
        </section>
    )
}
