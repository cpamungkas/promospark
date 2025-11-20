import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { CheckmarkIcon, FeatureIllustration1, FeatureIllustration2, FeatureIllustration3, HeroIllustration, Logo } from '@/components/Illustrations';
import { ThemeToggle } from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';
const FADE_IN_ANIMATION = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};
const STAGGER_ANIMATION = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2 group">
          <Logo className="h-8 w-8 text-primary-orange transition-transform group-hover:rotate-12" />
          <span className="text-2xl font-display text-foreground font-bold">PromoSpark</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </nav>
        <Button className="hidden md:inline-flex transition-transform hover:-translate-y-0.5">Get Started</Button>
      </div>
    </div>
  </header>
);
const HeroSection = () => (
  <section className="pt-32 pb-16 md:pt-48 md:pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="initial"
        animate="animate"
        variants={STAGGER_ANIMATION}
        className="text-center"
      >
        <motion.h1 {...FADE_IN_ANIMATION} className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground leading-tight">
          Create promotions that <span className="text-primary-orange">sparkle</span>.
        </motion.h1>
        <motion.p {...FADE_IN_ANIMATION} className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          Effortlessly build stunning, illustrative web promotions with a playful, artistic flair that captures attention and drives results.
        </motion.p>
        <motion.div {...FADE_IN_ANIMATION} className="mt-10 flex justify-center gap-4">
          <Button size="lg" className="text-lg px-8 py-6 transition-transform hover:-translate-y-1 shadow-lg hover:shadow-xl">Start Creating Now</Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 transition-transform hover:-translate-y-1">Learn More</Button>
        </motion.div>
        <motion.div {...FADE_IN_ANIMATION} className="mt-16">
          <HeroIllustration className="w-full max-w-3xl mx-auto" />
        </motion.div>
      </motion.div>
    </div>
  </section>
);
const features = [
  {
    title: "Artistic Components",
    description: "Choose from a library of beautifully designed, hand-drawn components to build your page.",
    illustration: <FeatureIllustration1 className="w-24 h-24" />,
  },
  {
    title: "Easy Customization",
    description: "Quickly adapt colors, fonts, and layouts to match your brand's unique identity.",
    illustration: <FeatureIllustration2 className="w-24 h-24" />,
  },
  {
    title: "Playful Animations",
    description: "Engage your audience with subtle, delightful animations that bring your promotion to life.",
    illustration: <FeatureIllustration3 className="w-24 h-24" />,
  },
];
const FeaturesSection = () => (
  <section id="features" className="py-16 md:py-24 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={STAGGER_ANIMATION}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center"
      >
        <motion.h2 {...FADE_IN_ANIMATION} className="text-4xl md:text-5xl font-display text-foreground">Why PromoSpark?</motion.h2>
        <motion.p {...FADE_IN_ANIMATION} className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We merge design and technology to help you create promotions that are not just effective, but memorable.
        </motion.p>
      </motion.div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Card className="text-center h-full transition-transform hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="items-center">
                {feature.illustration}
                <CardTitle className="font-sans font-semibold text-xl mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
const pricingTiers = [
  {
    name: "Sparkler",
    price: "$19",
    period: "/month",
    description: "Perfect for individuals and small projects getting started.",
    features: ["1 Project", "Basic Components", "Community Support"],
    isFeatured: false,
  },
  {
    name: "Bonfire",
    price: "$49",
    period: "/month",
    description: "Ideal for growing businesses and professionals.",
    features: ["5 Projects", "All Components", "Email Support", "Custom Branding"],
    isFeatured: true,
  },
  {
    name: "Inferno",
    price: "$99",
    period: "/month",
    description: "For agencies and teams who need it all.",
    features: ["Unlimited Projects", "Premium Components", "Priority Support", "Team Collaboration"],
    isFeatured: false,
  },
];
const PricingSection = () => (
  <section id="pricing" className="py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={STAGGER_ANIMATION}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center"
      >
        <motion.h2 {...FADE_IN_ANIMATION} className="text-4xl md:text-5xl font-display text-foreground">Simple, Clear Pricing</motion.h2>
        <motion.p {...FADE_IN_ANIMATION} className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Choose the plan that's right for you. No hidden fees, ever.
        </motion.p>
      </motion.div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {pricingTiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Card className={cn("flex flex-col h-full", tier.isFeatured && "border-primary-orange ring-2 ring-primary-orange shadow-2xl scale-105")}>
              <CardHeader>
                <CardTitle className="font-sans font-bold text-2xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold tracking-tight">{tier.price}</span>
                  <span className="text-muted-foreground ml-1">{tier.period}</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckmarkIcon className="h-5 w-5 text-primary-orange" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={tier.isFeatured ? "default" : "outline"}>
                  Choose {tier.name}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
const CtaSection = () => (
  <section className="py-16 md:py-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="bg-dark-blue text-primary-foreground p-10 md:p-16 rounded-2xl text-center relative overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-orange/20 rounded-full" />
        <div className="absolute -bottom-16 -left-10 w-48 h-48 bg-accent-purple/20 rounded-full" />
        <h2 className="text-4xl md:text-5xl font-display relative">Ready to Ignite Your Promotions?</h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-primary-foreground/80 relative">
          Join hundreds of creators turning ideas into beautiful, engaging web pages. Start your free trial today.
        </p>
        <div className="mt-8 relative">
          <Button size="lg" className="bg-primary-orange hover:bg-primary-orange/90 text-dark-blue text-lg px-8 py-6 transition-transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Start Free Trial
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);
const Footer = () => (
  <footer className="py-12 bg-secondary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-muted-foreground">&copy; {new Date().getFullYear()} PromoSpark. All rights reserved.</p>
      <p className="text-sm text-muted-foreground/80 mt-2">Built with ❤️ at Cloudflare</p>
    </div>
  </footer>
);
export function HomePage() {
  return (
    <div className="bg-background text-foreground font-sans antialiased">
      <ThemeToggle className="fixed top-4 right-4 z-50" />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}