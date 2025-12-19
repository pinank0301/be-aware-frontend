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

    const getScoreColor = (score: number) => {
        if (score >= 80) {
            return {
                text: "text-green-600",
                bg: "bg-green-50/30 dark:bg-green-950/10",
                border: "border-green-200 dark:border-green-900/20",
                badge: "default" as const,
                icon: "text-green-600",
                alertBg: "bg-green-100 dark:bg-green-900/30",
                alertText: "text-green-700 dark:text-green-400",
                bar: "bg-green-500"
            };
        } else if (score >= 50) {
            return {
                text: "text-yellow-600",
                bg: "bg-yellow-50/30 dark:bg-yellow-950/10",
                border: "border-yellow-200 dark:border-yellow-900/20",
                badge: "secondary" as const,
                icon: "text-yellow-600",
                alertBg: "bg-yellow-100 dark:bg-yellow-900/30",
                alertText: "text-yellow-700 dark:text-yellow-400",
                bar: "bg-yellow-500"
            };
        } else {
            return {
                text: "text-red-600",
                bg: "bg-red-50/30 dark:bg-red-950/10",
                border: "border-red-200 dark:border-red-900/20",
                badge: "destructive" as const,
                icon: "text-red-600",
                alertBg: "bg-red-100 dark:bg-red-900/30",
                alertText: "text-red-700 dark:text-red-400",
                bar: "bg-red-500"
            };
        }
    };

    const colors = getScoreColor(data.trust_score);

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
                        <h1 className="text-4xl font-extrabold tracking-tight">{data.technical_details?.hostname}</h1>
                        <p className="text-muted-foreground mt-2 text-lg">Comprehensive Security Analysis</p>
                    </div>
                    <div className="flex items-center gap-6 bg-card p-4 rounded-2xl border shadow-sm">
                        <div className="text-right">
                            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Trust Score</div>
                            <div className={`text-5xl font-black ${colors.text}`}>{data.trust_score}</div>
                        </div>
                        <div className="h-12 w-px bg-border" />
                        <Badge variant={colors.badge} className="text-xl px-6 py-2 h-auto rounded-full uppercase">
                            {data.result}
                        </Badge>
                    </div>
                </div>

                {/* Summary Card */}
                <Card className={`${colors.border} ${colors.bg} overflow-hidden shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100`}>
                    <div className={`absolute top-0 left-0 w-1 h-full ${colors.bar}`} />
                    <CardHeader>
                        <CardTitle className={`flex items-center gap-2 ${colors.alertText} text-xl`}>
                            {data.trust_score >= 80 ? <ShieldCheck className="h-6 w-6" /> : <ShieldAlert className="h-6 w-6" />}
                            Key Findings
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <ul className="grid gap-3">
                            {data.key_factors?.map((factor: string, index: number) => (
                                <li key={index} className="flex items-start gap-3 text-lg text-foreground/90">
                                    <ShieldCheck className={`h-5 w-5 mt-1 flex-shrink-0 ${colors.icon}`} />
                                    <span>{factor}</span>
                                </li>
                            ))}
                        </ul>
                        {data.warnings && data.warnings.length > 0 && (
                            <div className={`bg-background/50 p-6 rounded-xl border ${colors.border}`}>
                                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">Detailed Insights</h4>
                                <ul className="grid gap-3">
                                    {data.warnings?.map((warning: string, index: number) => (
                                        <li key={index} className="flex items-start gap-3 text-base">
                                            <div className={`mt-1 p-1 rounded-full ${colors.alertBg} ${colors.icon}`}>
                                                <AlertTriangle className="h-4 w-4" />
                                            </div>
                                            <span>{warning}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Score Breakdown Section */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                    {Object.entries(data.score_breakdown).map(([key, value]: [string, any]) => (
                        <Card key={key} className="shadow-md hover:shadow-lg transition-shadow border-l-4 overflow-hidden"
                            style={{ borderLeftColor: value.score / value.max_score >= 0.8 ? '#22c55e' : (value.score / value.max_score >= 0.5 ? '#eab308' : '#ef4444') }}>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex justify-between">
                                    <span>{key.replace('_', ' ')}</span>
                                    <span className="text-foreground">{value.score}/{value.max_score}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm font-medium">{value.reason}</p>
                                {value.warnings && value.warnings.length > 0 && (
                                    <div className="mt-2 space-y-1">
                                        {value.warnings.map((w: string, i: number) => (
                                            <div key={i} className="text-xs text-red-500 flex items-start gap-1">
                                                <AlertTriangle className="h-3 w-3 mt-0.5" />
                                                <span>{w}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Details Grid */}
                <div className="grid gap-6 md:grid-cols-2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
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
                                    <span className="font-medium text-right max-w-[200px] truncate" title={data.technical_details?.whois?.registrar}>
                                        {data.technical_details?.whois?.registrar || "N/A"}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="text-muted-foreground">Created On</span>
                                    <span className="font-medium">{formatDate(data.technical_details?.whois?.creationDate)}</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="text-muted-foreground">Expires On</span>
                                    <span className="font-medium">{formatDate(data.technical_details?.whois?.expirationDate)}</span>
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
                                    <div className="flex flex-col">
                                        <span className="font-medium">SSL Certificate</span>
                                        <span className="text-xs text-muted-foreground">{data.technical_details?.ssl?.issuer?.O}</span>
                                    </div>
                                </div>
                                {data.technical_details?.ssl?.valid ? (
                                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 px-3 py-1">
                                        {data.technical_details?.ssl?.daysRemaining} days left
                                    </Badge>
                                ) : (
                                    <Badge variant="destructive" className="px-3 py-1">Invalid</Badge>
                                )}
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border">
                                <div className="flex items-center gap-3">
                                    <Server className="h-5 w-5 text-muted-foreground" />
                                    <div className="flex flex-col">
                                        <span className="font-medium">Hosting</span>
                                        <span className="text-xs text-muted-foreground">IP: {data.technical_details?.hosting?.ip}</span>
                                    </div>
                                </div>
                                <div className="text-right max-w-[150px]">
                                    <span className="text-xs text-muted-foreground break-words" title={data.technical_details?.hosting?.reverse}>
                                        {data.technical_details?.hosting?.reverse || "N/A"}
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Raw Data Section */}
                <Card className="shadow-md animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-primary" />
                            Raw WHOIS Data
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-muted/50 p-4 rounded-xl border font-mono text-xs md:text-sm overflow-x-auto max-h-[300px] overflow-y-auto whitespace-pre-wrap">
                            {data.technical_details?.whois?.raw || "No raw data available"}
                        </div>
                    </CardContent>
                </Card>

                {/* Brand Comparison & Screenshot Section */}
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 pb-12">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                            <Globe className="h-6 w-6 text-primary" />
                            Visual Analysis & Comparison
                        </h2>
                        {data.technical_details?.legitimate_website && (
                            <Badge variant="destructive" className="animate-pulse">
                                Potential Impersonation Detected
                            </Badge>
                        )}
                    </div>

                    <div className={`grid gap-6 ${data.technical_details?.legitimate_website ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                        {/* Analyzed Website (Potential Fake) */}
                        <Card className="shadow-md overflow-hidden flex flex-col h-full border-t-4 border-t-red-500">
                            <CardHeader className="bg-muted/30">
                                <CardTitle className="text-sm font-bold uppercase tracking-wider flex justify-between items-center">
                                    <span>Analyzed Website (Suspect Site)</span>
                                    <Badge variant="outline" className="text-[10px] h-5">Analyzed</Badge>
                                </CardTitle>
                                <p className="text-xs text-muted-foreground truncate" title={data.technical_details?.url}>
                                    {data.technical_details?.url}
                                </p>
                            </CardHeader>
                            <CardContent className="p-0 flex-grow bg-muted/10 min-h-[350px] flex items-center justify-center">
                                {(() => {
                                    const screenshotUrl = data.technical_details?.screenshot_url;
                                    const screenshotBase64 = data.technical_details?.screenshot;

                                    let src = screenshotUrl;
                                    if (!src && screenshotBase64) {
                                        src = screenshotBase64.startsWith('data:')
                                            ? screenshotBase64
                                            : `data:image/jpeg;base64,${screenshotBase64}`;
                                    }

                                    if (src) {
                                        return (
                                            <div className="w-full h-full p-2">
                                                <img
                                                    src={src}
                                                    alt="Analyzed Website Screenshot"
                                                    className="w-full h-full object-contain max-h-[500px] rounded-lg shadow-md"
                                                    loading="lazy"
                                                />
                                            </div>
                                        );
                                    }

                                    return (
                                        <div className="flex flex-col items-center justify-center p-12 text-muted-foreground italic text-center">
                                            <ShieldAlert className="h-10 w-10 mb-4 opacity-20" />
                                            <span>No image found for analyzed site</span>
                                        </div>
                                    );
                                })()}
                            </CardContent>
                        </Card>

                        {/* Legitimate Website (Original) */}
                        {data.technical_details?.legitimate_website && (
                            <Card className="shadow-md overflow-hidden flex flex-col h-full border-t-4 border-t-green-500">
                                <CardHeader className="bg-muted/30">
                                    <CardTitle className="text-sm font-bold uppercase tracking-wider flex justify-between items-center">
                                        <span>Original {data.technical_details.legitimate_website.brand} Website</span>
                                        <Badge variant="outline" className="text-[10px] h-5 bg-green-50 text-green-700 border-green-200">Official Brand</Badge>
                                    </CardTitle>
                                    <p className="text-xs text-muted-foreground truncate" title={data.technical_details.legitimate_website.url}>
                                        {data.technical_details.legitimate_website.url}
                                    </p>
                                </CardHeader>
                                <CardContent className="p-0 flex-grow bg-muted/10 min-h-[350px] flex items-center justify-center">
                                    {data.technical_details.legitimate_website.screenshot_url ? (
                                        <div className="w-full h-full p-2">
                                            <img
                                                src={data.technical_details.legitimate_website.screenshot_url}
                                                alt={`Official ${data.technical_details.legitimate_website.brand} Screenshot`}
                                                className="w-full h-full object-contain max-h-[500px] rounded-lg shadow-md"
                                                loading="lazy"
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center p-12 text-muted-foreground italic text-center">
                                            <ShieldCheck className="h-10 w-10 mb-4 opacity-20" />
                                            <span>No legitimate screenshot available for comparison</span>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
