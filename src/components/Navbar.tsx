import { Button } from "@/components/ui/button"

export function Navbar() {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <img src="/logo.png" alt="BeAware Logo" className="h-10 w-auto" />
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="transition-colors hover:text-primary/80 text-foreground/80">
                        Home
                    </a>
                    <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')} className="transition-colors hover:text-primary/80 text-foreground/80">
                        How It Works
                    </a>
                    <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="transition-colors hover:text-primary/80 text-foreground/80">
                        Features
                    </a>
                    <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="transition-colors hover:text-primary/80 text-foreground/80">
                        About
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <Button
                        onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                        className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 cursor-pointer"
                    >
                        Check Now
                    </Button>
                </div>
            </div>
        </nav>
    )
}
