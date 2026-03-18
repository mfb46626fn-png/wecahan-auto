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
    helperText?: string;
}

interface FeatureItem {
    title: string;
    description: string;
    icon?: string;
}

interface StandardSection {
    eyebrow?: string;
    title: string;
    description: string;
    items: FeatureItem[];
}

interface FlagshipPackageContent {
    title: string;
    description: string;
    scope: string[];
    suitableFor: string[];
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
}

interface SolutionModule {
    title: string;
    description: string;
    points: string[];
}

interface SolutionModulesContent {
    title: string;
    description: string;
    items: SolutionModule[];
}

interface LevelItem {
    title: string;
    description: string;
    suitableFor: string;
    included: string[];
}

interface SetupLevelsContent {
    title: string;
    description: string;
    items: LevelItem[];
}

interface MaintenanceLevel {
    title: string;
    description: string;
    included: string[];
    notIncluded: string[];
    bestFor: string;
}

interface MaintenanceLevelsContent {
    title: string;
    description: string;
    items: MaintenanceLevel[];
}

interface ScopeContent {
    title: string;
    description: string;
    included: string[];
    notIncluded: string[];
}

interface ExampleWorkflow {
    title: string;
    description: string;
    steps: string[];
}

interface ExampleWorkflowsContent {
    title: string;
    description: string;
    items: ExampleWorkflow[];
}

interface PricingLogicContent {
    title: string;
    description: string;
    factors: string[];
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
}

interface FitCheckContent {
    title: string;
    description: string;
    goodFit: string[];
    notGoodFit: string[];
}

interface FinalCtaContent {
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
    helperText: string;
}

export interface GlobalAccountingFirmsContent {
    seo: SeoContent;
    hero: HeroContent;
    frictions: StandardSection;
    improvements: StandardSection;
    flagshipPackage: FlagshipPackageContent;
    solutionModules: SolutionModulesContent;
    setupLevels: SetupLevelsContent;
    maintenanceLevels: MaintenanceLevelsContent;
    includedExcluded: ScopeContent;
    exampleWorkflow: ExampleWorkflowsContent;
    pricingLogic: PricingLogicContent;
    fit: FitCheckContent;
    cta: FinalCtaContent;
}

export const globalAccountingFirmsContent: GlobalAccountingFirmsContent = {
    seo: {
        title: 'Operational Automation for Accounting Firms | WeCaHan Auto',
        description: 'Scale your accounting firm by automating client onboarding, document chasing, and recurring workflows. Structured systems for operational clarity.',
    },
    hero: {
        eyebrow: 'Accounting Sector',
        title: 'Leaner operational workflows for accounting firms',
        description: 'Reduce admin drag by automating client intake and recurring document follow-ups. We build the structured systems that allow your team to focus on high-value execution.',
        primaryCta: { label: 'Book a Discovery Call', href: '/book-a-call' },
        secondaryCta: { label: 'Send Workflow Brief', href: '/contact' },
        helperText: 'Scoped service implementation, not a self-serve software.',
    },
    frictions: {
        eyebrow: 'Operational Realities',
        title: 'Common Frictions in Accounting Firm Operations',
        description: 'As firms grow, manual coordination and ad-hoc task management often lead to invisible admin bottlenecks.',
        items: [
            {
                title: 'Inconsistent Onboarding',
                description: 'Client orientation and data collection steps following different paths, causing setup delays.',
            },
            {
                title: 'Manual Document Chasing',
                description: 'Constant manual follow-ups for missing records, records, and approvals that stall downstream work.',
            },
            {
                title: 'Fragmented Reminders',
                description: 'Monthly VAT or payroll reminders handled individually via personal emails or calls.',
            },
            {
                title: 'Poor Status Visibility',
                description: 'Missing clear oversight of which team member owns which stage of a recurring workflow.',
            },
            {
                title: 'Admin Redundancy',
                description: 'Repeating the same baseline administrative tasks across different clients without standardization.',
            },
            {
                title: 'Control Loss at Scale',
                description: 'Increasing difficulty in maintaining service consistency as the client list and team grow.',
            },
        ],
    },
    improvements: {
        eyebrow: 'The Outcome',
        title: 'What We Help Improve',
        description: 'We help you transition from ad-hoc manual effort to a more predictable operational system.',
        items: [
            {
                title: 'Structured Client Intake',
                description: 'A unified gateway for data and document collection that triggers initial setup steps.',
            },
            {
                title: 'Automated Follow-ups',
                description: 'Systematic sequences that handle the "chase" for missing records without team intervention.',
            },
            {
                title: 'Clear Task Ownership',
                description: 'Real-time visibility into workflow progress and ownership for everyone in the firm.',
            },
            {
                title: 'Standardized Workflows',
                description: 'Consistency in service delivery through repeatable, automated process layers.',
            },
            {
                title: 'Reduced Manual Load',
                description: 'Reclaim billable hours by removing the weight of routine coordination and admin drag.',
            },
        ],
    },
    flagshipPackage: {
        title: 'Accounting Client Intake & Workflow Automation Package',
        description: 'Our core solution designed to resolve the most common operational bottlenecks in modern accounting firms.',
        scope: [
            'Automated Client Intake Portals',
            'Recurring Document Chase Sequences',
            'Task Routing & Status Visibility',
            'Internal Handoff Automation',
            'Basic Operational Reporting Layer',
        ],
        suitableFor: [
            'Firms scaling their client intake',
            'Teams spending excessive time on manual follow-ups',
            'Managers needing better task visibility',
            'Firms looking to standardize repetitive workflows',
        ],
        primaryCta: { label: 'Book a Discovery Call', href: '/book-a-call' },
        secondaryCta: { label: 'Send Workflow Brief', href: '/contact' },
    },
    solutionModules: {
        title: 'Integrated Operational Modules',
        description: 'Each module addresses a specific friction point, working together as a complete firm-wide system.',
        items: [
            {
                title: 'Client Intake & Onboarding',
                description: 'Standardize how new clients are integrated into your firm.',
                points: [
                    'Dynamic intake forms',
                    'Initial document verification',
                    'Internal team notifications',
                    'Service setup automation',
                ],
            },
            {
                title: 'Document Chase & Reminders',
                description: 'Automate the follow-up cycle for recurring compliance needs.',
                points: [
                    'Missing document triggers',
                    'Multi-channel reminder paths',
                    'Response tracking & auto-closure',
                    'Escalation alerts for team',
                ],
            },
            {
                title: 'Task Routing & Visibility',
                description: 'Ensure every task is visible and assigned correctly.',
                points: [
                    'Automatic task generation',
                    'Ownership tracking',
                    'Due-date monitoring',
                    'Status visibility dashboards',
                ],
            },
            {
                title: 'Basic Reporting & Metrics',
                description: 'Gain insight into your firm’s operational health.',
                points: [
                    'Workflow throughput metrics',
                    'Bottleneck identification',
                    'Team capacity overview',
                    'Process stability audits',
                ],
            },
        ],
    },
    setupLevels: {
        title: 'Implementation Depths',
        description: 'We tailor the setup to your current operational volume and team size.',
        items: [
            {
                title: 'Light Setup',
                description: 'Quick implementation for a single core operational bottleneck.',
                suitableFor: 'Small firms starting their automation journey or focused on one specific friction.',
                included: [
                    'Single core workflow setup',
                    'Basic intake or reminder structure',
                    'Limited visibility layer',
                    'Technical health monitoring',
                ],
            },
            {
                title: 'Standard Setup',
                description: 'Balanced coverage for the entire client lifecycle and team coordination.',
                suitableFor: 'Growing firms with multiple recurring workflows and visibility needs.',
                included: [
                    'Multi-step intake & onboarding',
                    'Advanced document chase logic',
                    'Standard task routing layer',
                    'Core reporting visibility',
                ],
            },
            {
                title: 'Advanced Setup',
                description: 'Comprehensive transformation for high-volume, multi-department firms.',
                suitableFor: 'Firms with complex routing needs and a high focus on operational standardization.',
                included: [
                    'Full lifecycle automation',
                    'Deep routing & escalation logic',
                    'Advanced reporting & oversight',
                    'System-wide expansion layer',
                ],
            },
        ],
    },
    maintenanceLevels: {
        title: 'System Sustainability',
        description: 'Post-setup support to ensure your operational systems remain stable and efficient.',
        items: [
            {
                title: 'Basic Maintenance',
                description: 'Technical monitoring and critical health checks.',
                included: [
                    'Core monitoring & uptime',
                    'Bug fixes & stability',
                    'Monthly health review',
                ],
                notIncluded: ['New workflow additions', 'Major modifications'],
                bestFor: 'Firms with stable processes needing technical oversight.',
            },
            {
                title: 'Standard Maintenance',
                description: 'Active monitoring with minor ongoing iterations.',
                included: [
                    'Active process monitoring',
                    'Minor flow adjustments',
                    'Performance optimization',
                    'Technical support response',
                ],
                notIncluded: ['Large module development'],
                bestFor: 'Growing firms with evolving workflow needs.',
            },
            {
                title: 'Extended Maintenance',
                description: 'Proactive management and minor expansion support.',
                included: [
                    'Proactive bottleneck alerts',
                    'Minor workflow additions',
                    'Priority support access',
                    'Optimization consulting',
                ],
                notIncluded: ['Entirely new standalone projects'],
                bestFor: 'Firms placing automation at the core of their operations.',
            },
        ],
    },
    includedExcluded: {
        title: 'Scope Boundaries',
        description: 'We believe in clear scope management to ensure project success and trust.',
        included: [
            'Workflow review & structural design',
            'Technical implementation & testing',
            'Documented delivery of scoped flows',
            'Technical maintenance (per level)',
            'Standardized operational handoff',
        ],
        notIncluded: [
            'Practice management software replacement',
            'Accounting or tax delivery advice',
            'Legal or compliance consulting',
            'Unlimited new module development',
            'Unlimited custom revisions',
            'Manual data entry services',
        ],
    },
    exampleWorkflow: {
        title: 'Workflow in Action',
        description: 'A look at how our systems handle the day-to-day operations of an accounting firm.',
        items: [
            {
                title: 'Client Onboarding Flow',
                description: 'From initial lead to ready-to-work status.',
                steps: [
                    'New client triggers the dynamic intake gateway.',
                    'System requests specific data and documents.',
                    'Automatic verification of received information.',
                    'Internal task generation for the assigned manager.',
                    'Status visible to team for immediate commencement.',
                ],
            },
            {
                title: 'Recurring Document Chase',
                description: 'Handling the recurring compliance follow-up cycle.',
                steps: [
                    'System identifies missing monthly records.',
                    'Automated reminder sequence initiates.',
                    'Response triggers intake and task routing.',
                    'Missing documents flagged for team follow-up.',
                    'Full tracking of compliance readiness per client.',
                ],
            },
        ],
    },
    pricingLogic: {
        title: 'Investment Logic',
        description: 'Our pricing is based on the depth of the workflows, implementation scale, and ongoing support levels.',
        factors: [
            'Number of automated core workflows',
            'Complexity of routing and logic',
            'Client volume and data depth',
            'User count and team structure',
            'Selected maintenance intensity',
        ],
        primaryCta: { label: 'View PRICING Model', href: '/pricing' },
        secondaryCta: { label: 'Send Workflow Brief', href: '/contact' },
    },
    fit: {
        title: 'Is This a Fit for Your Firm?',
        description: 'We specialize in operational structure, which works best for specific firm profiles.',
        goodFit: [
            'High volume of recurring administrative tasks',
            'Firms looking to standardize client onboarding',
            'Managers seeking better operational visibility',
            'Teams over-encumbered by manual "chasing"',
        ],
        notGoodFit: [
            'Seeking a full ERP/Accountancy software swap',
            'Looking for tax/compliance delivery advice',
            'Firms unwilling to adapt internal processes',
            'Pure consulting without implementation needs',
        ],
    },
    cta: {
        title: 'Let’s identify your operational bottlenecks',
        description: 'Every firm is different. A short discovery call or a workflow brief is the most sensible way to start your automation journey.',
        primaryCta: { label: 'Book a Discovery Call', href: '/book-a-call' },
        secondaryCta: { label: 'Send Workflow Brief', href: '/contact' },
        helperText: 'Final scope and levels are defined after our review process.',
    },
};
