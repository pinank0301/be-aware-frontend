

export function Footer() {
    return (
        <footer className="border-t bg-muted/30">
            <div className="container px-4 md:px-6 py-12">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 font-bold text-xl">
                            <img src="/logo.png" alt="BeAware Logo" className="h-6 w-auto" />
                            <span>BeAware</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Protecting your digital journey with advanced AI-powered website verification.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary">Features</a></li>
                            <li><a href="#" className="hover:text-primary">Pricing</a></li>
                            <li><a href="#" className="hover:text-primary">API Access</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary">Blog</a></li>
                            <li><a href="#" className="hover:text-primary">Safety Guide</a></li>
                            <li><a href="#" className="hover:text-primary">Report a Scam</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} BeAware. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
