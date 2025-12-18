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

                <div className="relative w-full flex justify-center">
                    <div className="w-full max-w-5xl overflow-hidden rounded-xl shadow-2xl bg-white">
                        {/* Using w-full and h-auto to ensure the image fits the screen width and maintains aspect ratio without cropping */}
                        <img
                            src="/banner.png"
                            alt="BeAware Community"
                            className="w-full h-auto block"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
