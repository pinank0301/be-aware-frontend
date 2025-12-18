import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShieldAlert, ShieldCheck, AlertTriangle, Globe, Server, ArrowLeft, FileText, Lock } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react"

export function Report() {
    const navigate = useNavigate()
    const location = useLocation()
    const data = location.state?.reportData

    useEffect(() => {
        if (!data) {
            navigate("/")
        }
    }, [data, navigate])

    if (!data) return null;

    const formatDate = (dateString: string) => {
        if (!dateString) return "N/A";
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-background font-sans antialiased p-4 md:p-8">
            <div className="max-w-5xl mx-auto space-y-8">

                {/* Navigation */}
                <Button
                    variant="ghost"
                    className="gap-2 hover:bg-transparent hover:text-primary -ml-4"
                    onClick={() => navigate("/")}
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Analysis
                </Button>

                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight">{data.details.hostname}</h1>
                        <p className="text-muted-foreground mt-2 text-lg">Comprehensive Security Analysis</p>
                    </div>
                    <div className="flex items-center gap-6 bg-card p-4 rounded-2xl border shadow-sm">
                        <div className="text-right">
                            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Trust Score</div>
                            <div className="text-5xl font-black text-red-600">{data.summary.score}</div>
                        </div>
                        <div className="h-12 w-px bg-border" />
                        <Badge variant="destructive" className="text-xl px-6 py-2 h-auto rounded-full">
                            {data.summary.label}
                        </Badge>
                    </div>
                </div>

                {/* Summary Card */}
                <Card className="border-red-200 bg-red-50/30 dark:bg-red-950/10 overflow-hidden shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                    <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400 text-xl">
                            <ShieldAlert className="h-6 w-6" />
                            Security Assessment
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="text-foreground/90 leading-relaxed text-lg">
                            {data.summary.reasoning}
                        </p>
                        <div className="bg-background/50 p-6 rounded-xl border border-red-100 dark:border-red-900/20">
                            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">Critical Issues Detected</h4>
                            <ul className="grid gap-3">
                                {data.summary.key_issues.map((issue: string, index: number) => (
                                    <li key={index} className="flex items-start gap-3 text-base">
                                        <div className="mt-1 p-1 rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                                            <AlertTriangle className="h-4 w-4" />
                                        </div>
                                        <span>{issue}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* Details Grid */}
                <div className="grid gap-6 md:grid-cols-2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                    {/* Domain Info */}
                    <Card className="shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Globe className="h-5 w-5 text-primary" />
                                Domain Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="text-muted-foreground">Registrar</span>
                                    <span className="font-medium text-right max-w-[200px] truncate" title={data.details.whois.registrar}>
                                        {data.details.whois.registrar || "N/A"}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="text-muted-foreground">Created On</span>
                                    <span className="font-medium">{formatDate(data.details.whois.creationDate)}</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="text-muted-foreground">Expires On</span>
                                    <span className="font-medium">{formatDate(data.details.whois.expirationDate)}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Technical Info */}
                    <Card className="shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Server className="h-5 w-5 text-primary" />
                                Technical Details
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border">
                                <div className="flex items-center gap-3">
                                    <Lock className="h-5 w-5 text-muted-foreground" />
                                    <span className="font-medium">SSL Certificate</span>
                                </div>
                                {data.details.ssl ? (
                                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 px-3 py-1">Valid</Badge>
                                ) : (
                                    <Badge variant="destructive" className="px-3 py-1">Missing</Badge>
                                )}
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border">
                                <div className="flex items-center gap-3">
                                    <Server className="h-5 w-5 text-muted-foreground" />
                                    <span className="font-medium">Hosting</span>
                                </div>
                                <div className="text-right">
                                    {typeof data.details.hosting === 'object' && data.details.hosting !== null ? (
                                        <div className="flex flex-col items-end">
                                            <span className="text-sm font-medium">{data.details.hosting.ip || "N/A"}</span>
                                            <span className="text-xs text-muted-foreground max-w-[200px] truncate" title={data.details.hosting.reverse}>
                                                {data.details.hosting.reverse || ""}
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="text-muted-foreground">{data.details.hosting || "Unknown"}</span>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Raw Data Section */}
                <Card className="shadow-md animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-primary" />
                            Raw WHOIS Data
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted/50 p-4 rounded-xl border font-mono text-xs md:text-sm overflow-x-auto max-h-[300px] overflow-y-auto whitespace-pre-wrap">
                            {data.details.whois.raw || "No raw data available"}
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}
