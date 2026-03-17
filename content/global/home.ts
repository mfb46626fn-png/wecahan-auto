type CtaConfig = string | { label: string; href: string };

interface HeroContent {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta?: CtaConfig;
    helperText?: string;
}

interface ServiceItem {
    title: string;
    description: string;
    label?: string;
}

interface ServicesContent {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceItem[];
}

interface WorkflowItem {
    step: string;
    title: string;
    description: string;
}

interface WorkflowContent {
    eyebrow: string;
    title: string;
    description: string;
    items: WorkflowItem[];
}

interface BriefFormContent {
    eyebrow: string;
    title: string;
    description: string;
    submitLabel: string;
    successMessage: string;
    helperText: string;
    privacyNote?: string;
}

interface FinalCtaContent {
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta?: CtaConfig;
    helperText?: string;
}

interface SeoContent {
    title: string;
    description: string;
}

export interface GlobalHomeContent {
    seo: SeoContent;
    hero: HeroContent;
    frictions: ServicesContent;
    services: ServicesContent;
    benefits: ServicesContent;
    workflow: WorkflowContent;
    proofTeaser: ServicesContent;
    pricingPreview: ServicesContent;
    briefForm: BriefFormContent;
    finalCta: FinalCtaContent;
}

export const globalHomeContent: GlobalHomeContent = {
    seo: {
        title: 'Operational Automation for Accounting Firms | WeCaHan Auto',
        description: 'Reduce admin drag and standardize recurring workflows. We build structured onboarding, document chase, and task visibility systems for accounting firms.',
    },
    hero: {
        eyebrow: 'Operational Automation',
        title: 'Operational automation for accounting firms',
        description: 'Reduce admin drag and standardize recurring workflows. We build structured systems for client onboarding, document chasing, and task visibility so your team can focus on execution.',
        primaryCta: 'Book a Discovery Call',
        secondaryCta: 'Send Workflow Brief',
        helperText: 'This is a scoped service process, not a self-serve software signup.',
    },
    frictions: {
        eyebrow: 'Core Frictions',
        title: 'Common Bottlenecks in Accounting Operations',
        description: 'Scaling an accounting firm reveals hidden inefficiencies that drain your team\'s bandwidth and slow down client throughput.',
        items: [
            {
                title: 'Onboarding Delays',
                description: 'Inconsistent intake processes and manual setup steps slowing down client start dates and revenue.',
            },
            {
                title: 'Document Chasing',
                description: 'Constant manual follow-ups for missing information, records, and client approvals that stall workflows.',
            },
            {
                title: 'Low Visibility',
                description: 'Lack of a clear internal status for recurring task ownership, leading to accidental slippage or double-work.',
            },
        ],
    },
    services: {
        eyebrow: 'Our Value Pillars',
        title: 'Scoped Automation Solutions',
        description: 'We don\'t just "automate"; we design operational clarity through focused implementation of systems that actually fit your firm.',
        items: [
            {
                title: 'Client Intake & Onboarding',
                description: 'Unify how you collect data, verify documents, and initiate new client projects into a single, predictable flow.',
                label: 'Onboarding',
            },
            {
                title: 'Document Chase & Reminders',
                description: 'Systematize the repetitive "follow-up" cycle for monthly VAT, payroll, or annual compliance filings.',
                label: 'Filing Workflows',
            },
            {
                title: 'Task Routing & Visibility',
                description: 'Enable real-time tracking of task ownership and status, ensuring nothing falls through the cracks during peak seasons.',
                label: 'Internal Ops',
            },
        ],
    },
    benefits: {
        eyebrow: 'Why This Model?',
        title: 'Designed for Sustainable Growth',
        description: 'We help accounting firms move from ad-hoc manual effort to structured operational systems.',
        items: [
            {
                title: 'Reduced Admin Drag',
                description: 'Free up senior staff and accountants from the weight of low-value manual admin and coordination.',
            },
            {
                title: 'Improved Consistency',
                description: 'Ensure every client receives the same level of service excellence through standardized onboarding paths.',
            },
            {
                title: 'Operational Clarity',
                description: 'Gain absolute visibility into your firm\'s throughput and bottlenecks without manual reporting.',
            },
        ],
    },
    workflow: {
        eyebrow: 'The Journey',
        title: 'Structured Four-Phase Implementation',
        description: 'Our defined engagement model ensures you get a custom-engineered system with the speed of a scoped project.',
        items: [
            {
                step: '01',
                title: 'Workflow Review',
                description: 'We analyze your actual bottlenecks, identify manual "chase" cycles, and map out the automation potential.',
            },
            {
                step: '02',
                title: 'Scope & Setup',
                description: 'We design and build your new operational infrastructure layers using sustainable, modern engineering principles.',
            },
            {
                step: '03',
                title: 'Maintenance',
                description: 'After handoff, we monitor system health and perform minor adjustments to ensure long-term operational stability.',
            },
            {
                step: '04',
                title: 'Expansion',
                description: 'As your firm scales, we systematically add new workflow layers or deeper integrations to support higher volume.',
            },
        ],
    },
    proofTeaser: {
        eyebrow: 'Proof of Concept',
        title: 'Workflow Thinking in Action',
        description: 'Examples of how we solve specific accounting operational frictions through structured systems.',
        items: [
            {
                title: 'Tax Season Onboarding',
                description: 'Handling the high-volume intake surge with automated triage and document gathering.',
            },
            {
                title: 'Compliance Follow-ups',
                description: 'Eliminating manual chasing for monthly payroll data and VAT records through automated sequences.',
            },
        ],
    },
    pricingPreview: {
        eyebrow: 'Investment Model',
        title: 'Transparent Service Logic',
        description: 'Our pricing is clear and scoped. Setup is separated from ongoing maintenance to ensure ownership stays sharp.',
        items: [
            {
                title: 'Diagnostic & Review',
                description: 'Fixed-fee initial audit to define the technical requirements and operational blueprint.',
            },
            {
                title: 'Implementation & Setup',
                description: 'Project-based pricing to build the primary workflow layers and system integrations.',
            },
            {
                title: 'Ongoing Maintenance',
                description: 'Subscription-based support for technical monitoring, minor iterations, and platform stability.',
            },
        ],
    },
    briefForm: {
        eyebrow: 'Get Started',
        title: 'Brief Your Workflow Needs',
        description: 'Tell us a bit about your current operational bottlenecks so we can suggest the most sensible next step for your firm.',
        submitLabel: 'Send Workflow Brief',
        successMessage: 'Your brief has been received. Our team will review your workflow context and reach out shortly.',
        helperText: 'Your data is used solely to evaluate your firm\'s operational state for our discovery process.',
        privacyNote: 'We strictly adhere to B2B data privacy standards. Your workflow details are secure.',
    },
    finalCta: {
        title: 'Ready to Reduce Your Admin Drag?',
        description: 'Stop the document chasing and reclaim your team\'s time. Let\'s build the operational system your accounting firm deserves.',
        primaryCta: 'Book a Discovery Call',
        secondaryCta: 'Send Workflow Brief',
        helperText: 'Final scope and pricing depend on workflow depth and implementation needs.',
    },
};
