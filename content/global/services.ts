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
    bridgeCta: CtaConfig;
}

interface FeatureItem {
    title: string;
    description: string;
    points?: string[];
}

interface StandardSection {
    title: string;
    description: string;
    items: FeatureItem[];
}

interface PrimaryFocusContent {
    title: string;
    description: string;
    highlight: string;
    cta: CtaConfig;
}

interface BridgeContent {
    title: string;
    items: FeatureItem[];
    cta: CtaConfig;
}

interface PricingBridgeContent {
    title: string;
    description: string;
    logicBlocks: FeatureItem[];
    cta: CtaConfig;
}

interface FitCheckContent {
    title: string;
    goodFit: string[];
    notFit: string[];
}

interface FinalCtaContent {
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
    secondaryLinks: { label: string; href: string }[];
    trustNote: string;
}

export interface GlobalServicesContent {
    seo: SeoContent;
    hero: HeroContent;
    pageMeaning: StandardSection;
    coreCategories: StandardSection;
    primaryFocus: PrimaryFocusContent;
    extendedServices: StandardSection;
    deliveryModel: StandardSection;
    useCaseBridge: BridgeContent;
    pricingBridge: PricingBridgeContent;
    fit: FitCheckContent;
    cta: FinalCtaContent;
}

export const globalServicesContent: GlobalServicesContent = {
    seo: {
        title: 'Workflow-Driven Automation Services | WeCaHan Auto',
        description: 'Structured operational automation services. We focus on accounting firm workflows while providing controlled breadth into similar recurring operational friction areas.',
    },
    hero: {
        eyebrow: 'Service Map',
        title: 'Workflow-driven operational automation services',
        description: 'Our primary focus is building structured systems for accounting firms. We also apply the same implementation discipline to selected operational workflows with similar administrative friction.',
        primaryCta: 'Book a Discovery Call',
        secondaryCta: 'Send Workflow Brief',
        bridgeCta: { label: 'View Accounting Firms', href: '/accounting-firms' },
    },
    pageMeaning: {
        title: 'Maintaining Focal Depth while Providing Breadth',
        description: 'This services overview defines the controlled boundaries of our operational automation delivery.',
        items: [
            {
                title: 'Primary focus remains clear',
                description: 'Accounting firms are our core vertical. Messaging, logic, and use-cases stay optimized for this sector.',
            },
            {
                title: 'Services stay workflow-driven',
                description: 'We do not sell generic tool implementations. We sell the resolution of recurring administrative friction.',
            },
            {
                title: 'Scope remains defined',
                description: 'Every engagement follows a structured delivery model to prevent "broad agency" creep and ensure stability.',
            },
        ],
    },
    coreCategories: {
        title: 'Core Service Categories',
        description: 'Our implementation capacity is organized around specific types of operational workflow gaps.',
        items: [
            {
                title: 'Intake & Onboarding Workflows',
                description: 'Standardizing how new entities or demands enter your firm and trigger initial coordination steps.',
                points: ['Structured intake gateways', 'Follow-up branching', 'Internal handoff automation'],
            },
            {
                title: 'Reminder & Follow-Up Systems',
                description: 'Automating the recurring cycle of "chasing" information or documentation without manual team intervention.',
                points: ['Multi-channel sequences', 'Response tracking', 'Auto-closure logic'],
            },
            {
                title: 'Document & Information Collection',
                description: 'Building the logic layers that identify missing assets and manage their retrieval and routing.',
                points: ['Asset verification flows', 'Centralized collection logs', 'Team escalation alerts'],
            },
            {
                title: 'Task Routing & Internal Visibility',
                description: 'Ensuring every recurring workflow stage is assigned, visible, and tracked in real-time.',
                points: ['Automatic task generation', 'Ownership tracking', 'Due-date monitoring'],
            },
            {
                title: 'Operational Reporting Layers',
                description: 'Gaining visibility into the health and throughput of your automated operational systems.',
                points: ['Bottleneck identification', 'Process stability audits', 'Oversight dashboards'],
            },
        ],
    },
    primaryFocus: {
        title: 'Accounting Firms as the Primary Focus',
        highlight: 'The strongest fit for our operational automation systems.',
        description: 'Most of our implementation logic, pre-built modules, and use-case data are centered on the accounting sector. While we provide breadth, the accounting firm remains our flagship service area.',
        cta: { label: 'Explore Accounting Solutions', href: '/accounting-firms' },
    },
    extendedServices: {
        title: 'Extended Operational Services',
        description: 'We apply our workflow discipline to selected areas beyond the accounting sector that share similar frictions.',
        items: [
            {
                title: 'Recurring Admin Workflow Systems',
                description: 'For teams where heavy recurring coordination (reminders, follow-ups) is stalling billable throughput.',
            },
            {
                title: 'Internal Operational Coordination',
                description: 'Resolving responsibility gaps and handoff friction in complex team-led administrative processes.',
            },
            {
                title: 'Information Tracking Layers',
                description: 'Building clear visibility and status logs for fragmented information collection cycles.',
            },
        ],
    },
    deliveryModel: {
        title: 'Our Delivery Model Across Services',
        description: 'Breadth expands, but discipline remains constant. Every engagement follows our core implementation process.',
        items: [
            {
                title: '01. Workflow Review',
                description: 'We start by mapping the actual recurring operational friction and context of your team.',
            },
            {
                title: '02. Scoped Setup',
                description: 'We implement the defined workflow layers in a structured, phased implementation cycle.',
            },
            {
                title: '03. Maintenance',
                description: 'Ongoing technical oversight to ensure your automated systems remain stable and current.',
            },
            {
                title: '04. Expansion',
                description: 'Logical scaling of automated modules as your firm’s operational needs and volume grow.',
            },
        ],
    },
    useCaseBridge: {
        title: 'Services in Practice',
        items: [
            {
                title: 'Onboarding Workflow Example',
                description: 'A look at a structured intake process from client lead to work-ready status.',
            },
            {
                title: 'Recurring Reminder Flow',
                description: 'How automated sequences handle document chasing cycles without team weight.',
            },
            {
                title: 'Internal Visibility Example',
                description: 'Mapping task ownership and progress tracking across a multi-member team.',
            },
        ],
        cta: { label: 'View All Use Cases', href: '/use-cases' },
    },
    pricingBridge: {
        title: 'Pricing & Scope Logic',
        description: 'Service categories do not have a flat-rate price. Investment is shaped by implementation depth and complexity.',
        logicBlocks: [
            {
                title: 'Review & Analysis',
                description: 'One-time initial mapping of workflow context and friction points.',
            },
            {
                title: 'Implementation Setup',
                description: 'The phased build and testing of the scoped operational modules.',
            },
            {
                title: 'Ongoing Maintenance',
                description: 'Fixed tiers for post-setup support and process stability oversight.',
            },
        ],
        cta: { label: 'View Pricing Model', href: '/pricing' },
    },
    fit: {
        title: 'Is This Service a Fit?',
        goodFit: [
            'Firms with clear recurring administrative friction',
            'Teams open to structured, scoped implementation',
            'Managers seeking better operational visibility',
            'Teams burdened by manual "document chasing" cycles',
        ],
        notFit: [
            'Seeking full Practice Management software replacement',
            'Looking for generic "AI Consulting" without implementation',
            'Teams unwilling to adapt internal operational steps',
            'Firms looking for "all-in-one" instant software results',
        ],
    },
    cta: {
        title: 'Identify your operational friction before picking a category',
        description: 'The label is less important than the context. A discovery call or a workflow brief is the most sensible way to map the true service fit for your firm.',
        primaryCta: 'Book a Discovery Call',
        secondaryCta: 'Send Workflow Brief',
        secondaryLinks: [
            { label: 'View Accounting Firms', href: '/accounting-firms' },
            { label: 'View Use Cases', href: '/use-cases' },
        ],
        trustNote: 'Note: This is a scoped service process. Final implementation depth depends on your specific workflow context.',
    },
};
