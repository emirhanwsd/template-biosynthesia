import Link from "next/link";
import { ArrowRight, CheckCircle, Lightning, ShieldCheck, Rocket, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-xl tracking-tight">
            Nexus.
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <Link href="#faq" className="hover:text-foreground transition-colors">FAQ</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:underline hidden sm:block">Sign in</Link>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-6 px-4 py-1 text-sm rounded-full border-primary/20 bg-primary/5 text-primary">
            Nexus 2.0 is now available
          </Badge>
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mb-8 leading-tight">
            Build software faster with absolute precision.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            The ultimate tool for product teams to turn bold ideas into production-ready software in days, not months. Experience true velocity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="h-12 px-8 text-base">
              Start Building Free <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base">
              Book a Demo
            </Button>
          </div>
          
          {/* Mockup Placeholder */}
          <div className="mt-20 w-full max-w-5xl aspect-video rounded-xl border bg-muted/30 shadow-2xl overflow-hidden relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-background to-muted/20 z-0"/>
            <div className="z-10 flex flex-col items-center gap-4 text-muted-foreground/50">
               <Lightning className="w-16 h-16" />
               <p className="font-heading text-lg font-medium">Application Interface</p>
            </div>
          </div>
        </section>

        <Separator className="container mx-auto w-full max-w-5xl bg-border/50" />

        {/* Features Section */}
        <section id="features" className="container mx-auto px-6 py-24">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-4">Engineered for speed.</h2>
            <p className="text-muted-foreground max-w-2xl text-lg">Everything you need to ship faster, without compromising on quality or aesthetics.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border/50 shadow-none bg-background">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                  <Lightning className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">Lightning Fast</CardTitle>
                <CardDescription className="text-base mt-2">Optimized for maximum performance with instantaneous feedback loops.</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-border/50 shadow-none bg-background">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">Enterprise Ready</CardTitle>
                <CardDescription className="text-base mt-2">Bank-grade security and compliance built-in from day one.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 shadow-none bg-background">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">Unlimited Scale</CardTitle>
                <CardDescription className="text-base mt-2">Architecture that grows with you, from your first user to your millionth.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-muted/30 border-y border-border/50 py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-4">Simple, transparent pricing.</h2>
              <p className="text-muted-foreground max-w-2xl text-lg">Start for free, upgrade when you need to scale.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
              {/* Basic */}
              <Card className="border-border/50 shadow-none bg-background">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Hobby</CardTitle>
                  <CardDescription>Perfect for side projects.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold font-heading">$0</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Up to 3 projects</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Community support</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Basic analytics</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Get Started</Button>
                </CardFooter>
              </Card>

              {/* Pro */}
              <Card className="border-primary shadow-lg bg-background relative -top-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1">Most Popular</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Pro</CardTitle>
                  <CardDescription>For growing teams and startups.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold font-heading">$29</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Unlimited projects</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Priority support</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Advanced analytics</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Custom domains</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start 14-day trial</Button>
                </CardFooter>
              </Card>

              {/* Enterprise */}
              <Card className="border-border/50 shadow-none bg-background">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Enterprise</CardTitle>
                  <CardDescription>For large scale operations.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold font-heading">$99</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Everything in Pro</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Dedicated success manager</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> SSO / SAML</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="container mx-auto px-6 py-24">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl text-lg">Everything you need to know about the product and billing.</p>
          </div>

          <div className="max-w-3xl mx-auto text-left">
            <Accordion className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-medium text-lg">Can I cancel my subscription at any time?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Yes. You can cancel your subscription at any time from your account settings. You will retain access to the platform until the end of your current billing period.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-medium text-lg">Do you offer a free trial for the Pro plan?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  We offer a 14-day free trial on the Pro plan so you can test out all the advanced features before committing. No credit card is required to start the trial.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-medium text-lg">What kind of support is included?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Hobby tier includes access to our community forums and comprehensive documentation. Pro includes priority email support with a 24-hour SLA. Enterprise gets a dedicated Slack channel and account manager.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-24 border-t border-border/50">
          <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-3xl p-10 md:p-16 flex flex-col items-center text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready to transform your workflow?</h2>
            <p className="text-primary-foreground/80 max-w-2xl text-lg mb-10">
              Join thousands of teams shipping better products, faster.
            </p>
            <Button size="lg" variant="secondary" className="h-12 px-8 text-base text-primary">
              Get Started for Free
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-2">
              <Link href="/" className="font-heading font-bold text-2xl tracking-tight mb-4 inline-block">
                Nexus.
              </Link>
              <p className="text-muted-foreground text-sm max-w-xs mb-6">
                Building the future of software development with elegant, powerful tools.
              </p>
              <form className="flex gap-2 max-w-sm">
                <div className="grid w-full max-w-sm items-center gap-1.5 flex-1">
                  <Label htmlFor="email" className="sr-only">Email</Label>
                  <Input type="email" id="email" placeholder="Subscribe to newsletter" className="bg-muted/50" />
                </div>
                <Button type="button" variant="outline" size="icon">
                  <EnvelopeSimple className="w-4 h-4" />
                </Button>
              </form>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-bold font-heading mb-2">Product</h3>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Integrations</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Changelog</Link>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-bold font-heading mb-2">Company</h3>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold font-heading mb-2">Legal</h3>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Cookie Policy</Link>
            </div>
          </div>
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 Nexus Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-foreground text-sm">Twitter</Link>
              <Link href="#" className="hover:text-foreground text-sm">GitHub</Link>
              <Link href="#" className="hover:text-foreground text-sm">Discord</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
