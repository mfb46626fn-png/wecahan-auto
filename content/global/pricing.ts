type CtaConfig = string | { label: string; href: string };

interface SeoContent {
    title: string;
    description: string;
}

interface HeroContent {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
    helperBullets?: string[];
}

interface FeatureItem {
    title: string;
    description: string;
    points?: string[];
}

interface PricingLayer {
    title: string;
    description: string;
    note: string;
}

interface PricingBand {
    title: string;
    range: string;
    fit: string;
    scope: string[];
    logicNote: string;
}

interface ComparisonItem {
    title: string;
    scope: string[];
    alignment: string;
}

interface FaqItem {
    question: string;
    answer: string;
}

interface FinalCtaContent {
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
    secondaryLinks: { label: string; href: string }[];
    expectationNote: string;
}

export interface GlobalPricingContent {
    seo: SeoContent;
    hero: HeroContent;
    modelOverview: {
        title: string;
        description: string;
        layers: PricingLayer[];
    };
    analysisPricing: {
        title: string;
        range: string;
        description: string;
        includes: string[];
        excludes: string[];
        factors: string[];
        note: string;
    };
    setupPricing: {
        title: string;
        description: string;
        bands: PricingBand[];
    };
    maintenancePricing: {
        title: string;
        description: string;
        bands: PricingBand[];
        footerNote: string;
    };
    additionalDevelopment: {
        title: string;
        range: string;
        description: string;
        includes: string[];
        excludes: string[];
        logicNote: string;
    };
    priceFactors: {
        title: string;
        description: string;
        factors: FeatureItem[];
    };
    scopeComparisons: {
        title: string;
        description: string;
        examples: ComparisonItem[];
    };
    faq: {
        title: string;
        items: FaqItem[];
    };
    cta: FinalCtaContent;
}

export const globalPricingContent: GlobalPricingContent = {
    seo: {
        title: 'Structured Pricing for Workflow Automation | WeCaHan Auto',
        description: 'Transparent, scope-based pricing for accounting firm operational automation. We separate Review, Setup, and Maintenance for clarity and sustainability.',
    },
    hero: {
        eyebrow: 'Investment Model',
        title: 'Pricing follows workflow scope, not generic labels',
        description: 'Our model is built for structured B2B automation services. Investment is determined by workflow depth, implementation complexity, and ongoing maintenance intensity.',
        primaryCta: 'Book a Discovery Call',
        secondaryCta: 'Send Workflow Brief',
        helperBullets: ['No SaaS subscription gimmicks', 'Sustainable scope-based structure', 'Transparent implementation bands'],
    },
    modelOverview: {
        title: 'The Scoped Service Framework',
        description: 'Every engagement follows a structured 3-layer pricing model to ensure stability and delivery clarity.',
        layers: [
            {
                title: '01. Workflow Review',
                description: 'The initial mapping of operational friction and context.',
                note: 'Sets the foundation for accurate scope.',
            },
            {
                title: '02. Setup & Build',
                description: 'Phase-based implementation of your custom automation modules.',
                note: 'Variable based on logic depth and coordination.',
            },
            {
                title: '03. Ongoing Maintenance',
                description: 'Continuous technical oversight and process stability.',
                note: 'Fixed monthly tiers for sustained performance.',
            },
        ],
    },
    analysisPricing: {
        title: 'Workflow Review / Analysis',
        range: '$500 – $1,500',
        description: 'Before any build, we must map the recurring operational friction and identify the highest-impact automation areas.',
        includes: [
            'Current friction mapping',
            'Bottleneck & admin load analysis',
            'Recommended automation roadmap',
            'Defined implementation scope',
        ],
        excludes: [
            'Full module setup',
            'Ongoing support',
            'Unlimited custom dev',
        ],
        factors: [
            'Number of workflows reviewed',
            'Recurring process depth',
            'Internal handoff complexity',
        ],
        note: 'Some standard scenarios may require less review context, while complex operational layers sit at the higher end of the band.',
    },
    setupPricing: {
        title: 'Implementation Setup Bands',
        description: 'Setup investment is shaped by the number of workflow layers and the depth of internal coordination required.',
        bands: [
            {
                title: 'Light Setup',
                range: '$2,000 – $4,500',
                fit: 'Firms with a single core friction point seeking a targeted automation layer.',
                scope: [
                    'Single core workflow',
                    'Limited intake/reminder logic',
                    'Basic visibility dashboard',
                    'Foundational implementation',
                ],
                logicNote: 'Ideal for small teams starting with a specific high-drag process.',
            },
            {
                title: 'Standard Setup',
                range: '$4,500 – $8,000',
                fit: 'Firms requiring a multi-step operational coordination system across departments.',
                scope: [
                    'Multi-step onboarding flows',
                    'Recurring reminder sequences',
                    'Internal task routing',
                    'Standard reporting & oversight',
                ],
                logicNote: 'The most common path for firms centralizing multiple recurring operations.',
            },
            {
                title: 'Advanced Setup',
                range: '$8,000 – $18,000+',
                fit: 'Complex operational environments with high-volume recurring coordination needs.',
                scope: [
                    'Multiple workflow logic layers',
                    'Deep routing & automation rules',
                    'Enhanced visibility & coordination',
                    'Advanced audit & reporting structure',
                ],
                logicNote: 'High-depth implementations for firms with heavy internal administrative drag.',
            },
        ],
    },
    maintenancePricing: {
        title: 'Ongoing Maintenance Tiers',
        description: 'Ensuring your automated systems remain stable, optimized, and aligned with your operations.',
        bands: [
            {
                title: 'Basic Maintenance',
                range: '$500 – $1,000',
                fit: 'Lighter implementations with stable, moderate support expectations.',
                scope: [
                    'Core monitoring & uptime',
                    'Standard technical fixes',
                    'Basic quarterly optimization',
                ],
                logicNote: 'Focus on stability and basic continuity.',
            },
            {
                title: 'Standard Maintenance',
                range: '$1,000 – $2,000',
                fit: 'Regularly used implementations needing active optimization and support.',
                scope: [
                    'Active flow monitoring',
                    'Ongoing small enhancements',
                    'Standard support response',
                    'Monthly process review',
                ],
                logicNote: 'Continuous improvement for actively changing environments.',
            },
            {
                title: 'Extended Maintenance',
                range: '$2,000 – $4,500',
                fit: 'Large-scale implementations with high support and iteration intensity.',
                scope: [
                    'Priority support & response',
                    'Frequent small flow additions',
                    'Active process iteration',
                    'Detailed health & throughput oversight',
                ],
                logicNote: 'Full-depth support for complex operational engines.',
            },
        ],
        footerNote: 'Note: Significant new delivery modules or major scope expansions are priced as Additional Development.',
    },
    additionalDevelopment: {
        title: 'Additional Development Logic',
        range: '$500 – $5,000+',
        description: 'New build requirements outside the initial setup or standard maintenance scope.',
        includes: [
            'New workflow module creation',
            'New third-party integrations',
            'Additional visibility/logic layers',
            'Major internal process changes',
        ],
        excludes: [
            'Standard fixes covered by maintenance',
            'Original committed scope items',
            'Unlimited maintenance-free dev',
        ],
        logicNote: 'Pricing varies widely per module. Small logic additions are priced as mini-scopes, while major modules follow a setup-driven approach.',
    },
    priceFactors: {
        title: 'Key Factors Affecting Scope & Price',
        description: 'Pricing is structured around these core operational dimensions to ensure accuracy and fit.',
        factors: [
            {
                title: 'Workflow Depth',
                description: 'A simple reminder seqeuence vs. a multi-stage onboarding system requires different logic layers.',
            },
            {
                title: 'Routing Complexity',
                description: 'Automatic task assignment based on complex team hierarchies or conditions increases setup time.',
            },
            {
                title: 'Integration Points',
                description: 'The depth and number of external tools that need to communicate reliably within the workflow.',
            },
            {
                title: 'Visibility Requirements',
                description: 'Sophisticated dashboarding and audit trails for team-wide oversight require extra build depth.',
            },
            {
                title: 'Team Coordination Handoffs',
                description: 'Number of internal stakeholders and handoff steps mapped within the automation logic.',
            },
            {
                title: 'Maintenance Intensity',
                description: 'How frequently the underlying process logic or tool endpoints are expected to shift.',
            },
        ],
    },
    scopeComparisons: {
        title: 'Indicative Scope Comparisons',
        description: 'Visualizing how different operational needs align with our setup bands.',
        examples: [
            {
                title: 'Focused Intake/Reminder Scope',
                scope: ['1 Core Flow', '3-Step Reminder Logic', 'Email Alerts'],
                alignment: 'Light Setup Band',
            },
            {
                title: 'Standard Practice Coordination',
                scope: ['2 Multi-Step Flows', 'Task Routing', 'Visibility Dashboard', 'Standard Testing'],
                alignment: 'Standard Setup Band',
            },
            {
                title: 'Broad Operational Engine',
                scope: ['4+ Integrated Flows', 'Complex Routing Rules', 'Oversight Dashboards', 'Deep Testing'],
                alignment: 'Advanced Setup Band',
            },
        ],
    },
    faq: {
        title: 'Pricing FAQs',
        items: [
            {
                question: 'Why isn’t there one fixed price for everyone?',
                answer: 'Workflow complexity, internal handoff depth, and maintenance intensity vary meaningfully across firms. These bands ensure you only pay for the scope your team actually needs.',
            },
            {
                question: 'Is the Workflow Review separate?',
                answer: 'Yes. We must understand your recurring friction before committing to a final setup scope. This ensures the implementation actually resolves your problem.',
            },
            {
                question: 'Can we start with a smaller scope?',
                answer: 'Absolutely. Many accounting firms start with a Light Setup for their highest friction point (like onboarding) and expand later.',
            },
            {
                question: 'Is maintenance mandatory?',
                answer: 'Maintenance is highly recommended for stability. Operational tools and internal workflows evolve; our oversight ensures your systems don’t "break" due to external changes.',
            },
            {
                question: 'How are new modules handled later?',
                answer: 'Small updates fall under Standard Maintenance. Major new extensions are handled as Additional Development on a scoped basis.',
            },
            {
                question: 'When does the final quote become clear?',
                answer: 'Initial ranges are provided during the discovery call. Final fixed-scope pricing is confirmed after the Workflow Review / Analysis phase.',
            },
        ],
    },
    cta: {
        title: 'The next step is context, not guesswork',
        description: 'Pricing ranges create clarity, but final scope relies on your true operational context. The most sensible next step is to shared your friction areas.',
        primaryCta: 'Book a Discovery Call',
        secondaryCta: 'Send Workflow Brief',
        secondaryLinks: [
            { label: 'View Accounting Firms', href: '/accounting-firms' },
            { label: 'View Services', href: '/services' },
            { label: 'View Use Cases', href: '/use-cases' },
        ],
        expectationNote: 'Note: This is a scoped B2B service model. We do not provide self-serve software subscriptions.',
    },
};
