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
    secondaryCta?: CtaConfig;
    trustLine?: string;
}

// Interfaces for requested brand-centric sections
interface ServiceCategory {
    title: string;
    description: string;
    examples: string[];
}

interface WhatWeAutomateContent {
    title: string;
    description: string;
    categories: ServiceCategory[];
}

interface ProcessStep {
    step: string;
    title: string;
    description: string;
}

interface HowWeWorkContent {
    title: string;
    description: string;
    steps: ProcessStep[];
}

interface WorkflowScenario {
    title: string;
    problem: string;
    logic: string;
    flow: string[];
}

interface ExampleWorkflowsContent {
    title: string;
    description: string;
    scenarios: WorkflowScenario[];
}

interface BenefitCard {
    title: string;
    description: string;
}

interface WhyStructureWorksContent {
    title: string;
    description: string;
    benefits: BenefitCard[];
}

interface UseCaseCard {
    context: string;
    problem: string;
    logic: string;
    expectedClarity: string;
}

interface SelectedUseCasesContent {
    title: string;
    description: string;
    useCases: UseCaseCard[];
}

interface ContactBriefContent {
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
    helperText: string;
}

// Legacy interfaces for existing block compatibility (app/page.tsx)
interface LegacyServiceItem {
    title: string;
    description: string;
    label?: string;
}

interface LegacyServicesContent {
    eyebrow: string;
    title: string;
    description: string;
    items: LegacyServiceItem[];
}

interface LegacyWorkflowItem {
    step: string;
    title: string;
    description: string;
}

interface LegacyWorkflowContent {
    eyebrow: string;
    title: string;
    description: string;
    items: LegacyWorkflowItem[];
}

interface LegacyBriefFormContent {
    eyebrow: string;
    title: string;
    description: string;
    submitLabel: string;
    successMessage: string;
    helperText: string;
    privacyNote?: string;
}

interface LegacyFinalCtaContent {
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta?: CtaConfig;
    helperText?: string;
}

export interface CenterHomeContent {
    // Current Block Interfaces (Required by app/page.tsx)
    seo: SeoContent;
    hero: HeroContent;
    services: LegacyServicesContent;
    workflow: LegacyWorkflowContent;
    briefForm: LegacyBriefFormContent;
    finalCta: LegacyFinalCtaContent;

    // Future-Proof Brand Sections (Requested for Center)
    whatWeAutomate: WhatWeAutomateContent;
    howWeWork: HowWeWorkContent;
    exampleWorkflows: ExampleWorkflowsContent;
    whyStructureWorks: WhyStructureWorksContent;
    selectedUseCases: SelectedUseCasesContent;
    contactBrief: ContactBriefContent;
}

export const centerHomeContent: CenterHomeContent = {
    seo: {
        title: 'WeCaHan Auto | Operational Automation Systems for Service Businesses',
        description: 'Practical automation for repetitive operational workflows. We help service businesses build clearer processes with less manual friction.',
    },
    hero: {
        eyebrow: 'Better Operational Flow',
        title: 'Operational automation systems for service businesses',
        description: 'Clearer workflows. Less manual friction. We design and build the automation layer that keeps your processes moving without constant repetitive effort.',
        primaryCta: 'Contact Us',
        secondaryCta: 'Brief Your Process',
        trustLine: 'Lead handling, communications, and internal operations.',
    },
    
    // Brand-Centric Section Implementation
    whatWeAutomate: {
        title: 'What We Automate',
        description: 'We focus on the operational friction points that slow down service-based teams every day.',
        categories: [
            {
                title: 'Lead Handling',
                description: 'Capture, route and organize inbound requests before they get lost in scattered channels.',
                examples: ['Form intake', 'Routing', 'Initial qualification', 'Team alerts'],
            },
            {
                title: 'Communication Flows',
                description: 'Automate the predictable touchpoints between your team and your clients or leads.',
                examples: ['Follow-up sequences', 'Reminders', 'Status updates', 'Onboarding triggers'],
            },
            {
                title: 'Internal Operations',
                description: 'Synchronize data and tasks between your tools so your team doesn\'t have to copy-paste.',
                examples: ['Document chasing', 'Task assignment', 'Tool syncing', 'Entry validation'],
            },
            {
                title: 'Reporting Workflows',
                description: 'Aggregate operational data into clear views without manual spreadsheet assembly.',
                examples: ['Daily logs', 'Performance snapshots', 'Process health checks'],
            },
            {
                title: 'Content-Assisted Processes',
                description: 'Leverage structured templates and triggers for recurring documentation needs.',
                examples: ['Brief generation', 'Proposal triggers', 'Operational SOP delivery'],
            },
        ],
    },
    howWeWork: {
        title: 'How We Work',
        description: 'A systematic 4-step approach to building sustainable operational automation.',
        steps: [
            {
                step: '01',
                title: 'Analysis',
                description: 'Brief review of your current workflow to identify repetitive manual friction and bottlenecks.',
            },
            {
                step: '02',
                title: 'Setup',
                description: 'Designing and building the automation logic, followed by testing and initial deployment.',
            },
            {
                step: '03',
                title: 'Maintenance',
                description: 'Proactive monitoring and small refinements to ensure the system remains reliable and current.',
            },
            {
                step: '04',
                title: 'Expansion',
                description: 'Scaling the system with new integration layers or more complex workflows as your team grows.',
            },
        ],
    },
    exampleWorkflows: {
        title: 'Example Workflow Scenarios',
        description: 'A practical look at how operational logic replaces manual management.',
        scenarios: [
            {
                title: 'Inbound Lead Routing',
                problem: 'Requests from multiple channels get lost or answered inconsistently.',
                logic: 'Unified intake and automated routing based on basic classification.',
                flow: [
                    'Intake (Form/Message)',
                    'Auto-Classification',
                    'Team Notification',
                    'Tracking Layer Entry',
                    'Response Readiness',
                ],
            },
            {
                title: 'Appointment & Reminder Chain',
                problem: 'Team spends hours manually confirming dates or chasing documents before a meeting.',
                logic: 'Context-aware triggers based on appointment status and document requirements.',
                flow: [
                    'Booking Trigger',
                    'Requirement Check',
                    'Automated Chase/Reminder',
                    'Status Dashboard Update',
                    'Pre-Meeting Briefing',
                ],
            },
            {
                title: 'Internal Operational Sync',
                problem: 'Information in the CRM doesn\'t match the project management tool or the finance log.',
                logic: 'Real-time data synchronization across operational software boundaries.',
                flow: [
                    'Event Trigger (Tool A)',
                    'Validation Filter',
                    'Data Transformation',
                    'Target Update (Tool B)',
                    'Sync Confirmation',
                ],
            },
        ],
    },
    whyStructureWorks: {
        title: 'Why This Structure Works',
        description: 'Operational automation is about outcome, not just technology.',
        benefits: [
            {
                title: 'Less scattered follow-up',
                description: 'Centralized intake ensures nothing is left to memory or buried in individual inboxes.',
            },
            {
                title: 'Better visibility',
                description: 'Dashboards and automated logs provide an instant view of process health and pending items.',
            },
            {
                title: 'Reduced repetitive work',
                description: 'By offloading copy-pasting and manual notification, teams focus on active decision-making.',
            },
            {
                title: 'Cleaner team coordination',
                description: 'Structured hand-offs and automated alerts ensure everyone knows their role in the flow.',
            },
        ],
    },
    selectedUseCases: {
        title: 'Selected Use-Case Examples',
        description: 'Applying operational logic to specific business contexts.',
        useCases: [
            {
                context: 'Clinic Inquiry Handling',
                problem: 'Scattered intake from WhatsApp and forms leading to inconsistent follow-up.',
                logic: 'Clean intake and routing layer to improve visibility before the appointment stage.',
                expectedClarity: 'Centralized patient lead dashboard and reduced response gaps.',
            },
            {
                context: 'Recurring Client Follow-up',
                problem: 'High-volume services struggling to keep clients updated on project milestones.',
                logic: 'Triggered reporting snippets based on operational task completion.',
                expectedClarity: 'Automated client transparency and fewer manual status emails.',
            },
        ],
    },
    contactBrief: {
        title: 'Let’s understand your process first',
        description: 'No need for a long document. A short outline of your current process is enough for an initial review. We check for fit before proposing next steps.',
        primaryCta: 'Contact Us',
        secondaryCta: 'Share a Brief',
        helperText: 'A short 5-minute brief is usually enough to start.',
    },

    // Legacy Mappings (Ensures app/page.tsx remains buildable and functional)
    services: {
        eyebrow: 'Better Flow',
        title: 'Operational Logic Categories',
        description: 'Focusing on the operational friction points that slow down service-based teams every day.',
        items: [
            {
                label: 'Intake & Routing',
                title: 'Lead Handling',
                description: 'Capturing and organizing inbound requests before they get lost.',
            },
            {
                label: 'Client Interplay',
                title: 'Communication Flows',
                description: 'Automating the predictable touchpoints between team and leads.',
            },
            {
                label: 'Cross-Tool Sync',
                title: 'Internal Operations',
                description: 'Synchronizing data and tasks between your professional tools.',
            },
        ],
    },
    workflow: {
        eyebrow: 'Our Method',
        title: 'Practical 4-Step Approach',
        description: 'We follow a systematic method to build sustainable operational automation.',
        items: [
            {
                step: '01',
                title: 'Analysis',
                description: 'Brief review of your current workflow and identification of bottlenecks.',
            },
            {
                step: '02',
                title: 'Setup',
                description: 'Designing and building the automation logic, followed by testing.',
            },
            {
                step: '03',
                title: 'Maintenance',
                description: 'Monitoring and refinements to ensure system reliability and flow.',
            },
        ],
    },
    briefForm: {
        eyebrow: 'Get Started',
        title: 'Tell us about your process',
        description: 'A short outline of your current manual workflow is enough for an initial review.',
        submitLabel: 'Send Brief',
        successMessage: 'Brief received. We will review it and get back to you shortly.',
        helperText: 'No long documents required. Just a few lines to start the conversation.',
        privacyNote: 'Your information is processed according to our security and privacy standards.',
    },
    finalCta: {
        title: 'Ready for a cleaner operational process?',
        description: 'Contact us to discuss your specific workflow needs and how we can automate them.',
        primaryCta: 'Contact Us',
        secondaryCta: 'Process Brief',
        helperText: 'Focused on clarity and coordination.',
    },
};
