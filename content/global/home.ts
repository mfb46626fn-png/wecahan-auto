type CtaConfig = string | { label: string; href: string };

interface HeroContent {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta?: CtaConfig;
    trustText?: string;
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
    services: ServicesContent;
    workflow: WorkflowContent;
    briefForm: BriefFormContent;
    finalCta: FinalCtaContent;
}

export const globalHomeContent: GlobalHomeContent = {
    seo: {
        title: 'WeCaHan Auto | Autonomous Operational Systems',
        description: 'Engineering self-sustaining, scalable, and robust operational infrastructures for service businesses and operations teams.',
    },
    hero: {
        eyebrow: 'Operational Excellence',
        title: 'Make Your Systems Run Themselves',
        description: 'We transform complex manual workflows into frictionless, autonomous systems. Reclaim your team\'s time, eliminate human error, and build a foundation ready for scale.',
        primaryCta: 'Request a System Audit',
        secondaryCta: 'See How We Work',
        trustText: 'Built for clinics, offices, and operations-heavy teams.',
    },
    services: {
        eyebrow: 'Our Solutions',
        title: 'Structured Efficiency',
        description: 'We standardize the scattered processes that hold your business back and elevate them with modern automation.',
        items: [
            {
                title: 'Clinical Operations',
                description: 'Unify patient intake, scheduling, and financial reporting into a single, error-free automated flow.',
                label: 'Healthcare',
            },
            {
                title: 'Office Systems',
                description: 'Enable transparent document tracking, client communication, and task management for accounting and consulting firms.',
                label: 'Professional Services',
            },
            {
                title: 'Process Engineering',
                description: 'Systematically identify bottlenecks in your current operations and map out a custom, long-term automation blueprint.',
                label: 'Consulting',
            },
        ],
    },
    workflow: {
        eyebrow: 'The Transformation Journey',
        title: 'From Chaos to Clarity in 3 Steps',
        description: 'We ensure a frictionless transition without halting your current business or overwhelming your team.',
        items: [
            {
                step: '01',
                title: 'Audit & Mapping',
                description: 'We analyze your actual workflows to identify the greatest points of friction and define the automation potential.',
            },
            {
                step: '02',
                title: 'System Construction',
                description: 'We design and build your new operational infrastructure using sustainable, modern engineering principles.',
            },
            {
                step: '03',
                title: 'Handoff & Training',
                description: 'After your approval, we train your team and confidently hand over the fully autonomous system.',
            },
        ],
    },
    briefForm: {
        eyebrow: 'Get Started',
        title: 'Let\'s Define Your Needs',
        description: 'Tell us a bit about your current workload and your main operational bottleneck so we can start thinking about the right system for you.',
        submitLabel: 'Send Inquiry',
        successMessage: 'Your inquiry has been received. Our engineering team will review your needs and reach out shortly.',
        helperText: 'The data you share will only be used to evaluate your operational status.',
        privacyNote: 'We strictly adhere to data privacy standards. Your information is secure.',
    },
    finalCta: {
        title: 'Build the Operational Infrastructure of Tomorrow',
        description: 'End the chaos, minimize errors, and free your team to focus on what actually matters.',
        primaryCta: 'Start the Process',
        secondaryCta: 'Review Our Services',
        helperText: 'Our initial system consultation is completely free.',
    },
};
