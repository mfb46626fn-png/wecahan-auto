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
}

interface FeatureItem {
    title: string;
    description: string;
}

interface StandardSection {
    title: string;
    items: FeatureItem[];
}

interface StepItem {
    title: string;
    description: string;
}

interface StepsSection {
    title: string;
    items: StepItem[];
}

interface ComparisonCard {
    title: string;
    label: string;
    适合: string[]; // Best for
}

interface CallVsBriefContent {
    title: string;
    call: {
        title: string;
        bestFor: string[];
    };
    brief: {
        title: string;
        bestFor: string[];
    };
}

interface SchedulingContent {
    title: string;
    description: string;
    qualificationNote: string;
    helperItems: FeatureItem[];
}

interface SecondaryCtaContent {
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryLinks: { label: string; href: string }[];
}

export interface GlobalBookACallContent {
    seo: SeoContent;
    hero: HeroContent;
    callPurpose: StandardSection;
    bestFit: StandardSection;
    notFit: StandardSection;
    callCoverage: StepsSection;
    afterCall: StepsSection;
    callVsBrief: CallVsBriefContent;
    scheduling: SchedulingContent;
    secondaryCta: SecondaryCtaContent;
}

export const globalBookACallContent: GlobalBookACallContent = {
    seo: {
        title: 'Book a Discovery Call | Workflow Content & Fit Assessment',
        description: 'Schedule a discovery call to discuss your recurring workflow frictions. We focus on understanding your context and evaluating service fit.',
    },
    hero: {
        eyebrow: 'Discovery Entry',
        title: 'Discovery starts with context, not generic demos',
        description: 'This call is designed to understand your current operational frictions, determine fit, and identify the most sensible starting scope for your firm. No force-feeding, no sales traps.',
        primaryCta: 'Continue to Scheduling',
        secondaryCta: { label: 'Send Workflow Brief Instead', href: '/contact' },
    },
    callPurpose: {
        title: 'What This Call Is For',
        items: [
            {
                title: 'Understand Workflow Context',
                description: 'We analyze your actual recurring admin bottlenecks, identify where "chase" cycles occur, and map the automation potential.',
            },
            {
                title: 'Assess Fit and Scope',
                description: 'We evaluate if our scoped service model matches your firm’s current operational volume and complexity.',
            },
            {
                title: 'Determine Next Steps',
                description: 'We identify whether a detailed workflow review, a project proposal, or a different direction is the most logical path.',
            },
            {
                title: 'Avoid Scope Expansion',
                description: 'By defining clear friction points early, we prevent unnecessary technical complexity and bloated project definitions.',
            },
        ],
    },
    bestFit: {
        title: 'Who This Call Is Best For',
        items: [
            {
                title: 'Operationally Stalled Firms',
                description: 'Accounting firms where recurring administrative work is slowing down client throughput and team morale.',
            },
            {
                title: 'Clarity Seekers',
                description: 'Managers and partners who need better visibility into task ownership and the status of ongoing workflows.',
            },
            {
                title: 'Growth-Ready Teams',
                description: 'Firms scaling their client list and realizing their current "ad-hoc" manual processes won\'t hold under pressure.',
            },
            {
                title: 'Process Owners',
                description: 'Operation leads or decision-makers ready to implement structured systems rather than just "buying software."',
            },
        ],
    },
    notFit: {
        title: 'Who This Call Is Not For',
        items: [
            {
                title: 'Instant Software Seekers',
                description: 'If you are looking for an "off-the-shelf" SaaS to sign up and solve everything in 5 minutes without process change.',
            },
            {
                title: 'Software Replacers',
                description: 'Firms looking to swap their entire practice management or tax software suite immediately.',
            },
            {
                title: 'Pure Advisory Requests',
                description: 'If you are seeking general accounting or tax delivery advice rather than operational automation implementation.',
            },
            {
                title: '"Just Browsing" Calls',
                description: 'Firms without a specific recurring operational friction who just want to see "what else is out there."',
            },
        ],
    },
    callCoverage: {
        title: 'What We Typically Cover',
        items: [
            {
                title: 'Current Workflow Context',
                description: 'A brief overview of your existing document intake, routing, and reminder cycles.',
            },
            {
                title: 'Friction Mapping',
                description: 'Pinpointing where the team spends the most manual hours and where visibility is lost.',
            },
            {
                title: 'Fit & Scope Direction',
                description: 'Discussing if your needs align with our setup packages and which level (Light, Standard, Advanced) fits.',
            },
            {
                title: 'Logical Next Step',
                description: 'Defining whether to proceed with a workflow brief, a formal review, or a scoped proposal.',
            },
        ],
    },
    afterCall: {
        title: 'What Happens After the Call',
        items: [
            {
                title: 'Internal Review',
                description: 'Our implementation team reviews the context shared to verify technical and operational feasibility.',
            },
            {
                title: 'Suggested Direction',
                description: 'You receive a summary of the discussed friction points and our recommended starting level.',
            },
            {
                title: 'Possible Next Step',
                description: 'Depending on complexity, we suggest either a detailed review or move straight to a scoped proposal.',
            },
            {
                title: 'No Forced Progression',
                description: 'Every call results in a clear status; we only proceed if both parties see a definite operational return.',
            },
        ],
    },
    callVsBrief: {
        title: 'Discovery Call vs. Workflow Brief',
        call: {
            title: 'Discovery Call',
            bestFor: [
                'Problem area is clearly identified',
                'Ready for a 15-minute context talk',
                'Prefer direct discussion on scope',
            ],
        },
        brief: {
            title: 'Workflow Brief',
            bestFor: [
                'Want to share context in writing first',
                'Not ready for a live meeting',
                'Deep data/logic needs to be shared',
            ],
        },
    },
    scheduling: {
        title: 'Select a time for your discovery call',
        description: 'Choose a slot that works for you. This is a focused 15-minute context review, not a long-winded sales presentation.',
        qualificationNote: 'Note: This call is strictly for workflow context and service fit evaluation. We do not provide software demos during discovery.',
        helperItems: [
            {
                title: 'Typical length',
                description: '15-20 minutes of focused context review.',
            },
            {
                title: 'Best attendee',
                description: 'The person who manages or owns the operational process.',
            },
            {
                title: 'What to prepare',
                description: 'No deck needed. Just a clear view of your main friction point.',
            },
        ],
    },
    secondaryCta: {
        title: 'Not ready for a call yet?',
        description: 'If you prefer to share your workflow context in writing first, you can send a brief. Our team will review it and get back to you with a suggested direction.',
        primaryCta: { label: 'Send Workflow Brief', href: '/contact' },
        secondaryLinks: [
            { label: 'View Pricing Model', href: '/pricing' },
            { label: 'View Use Cases', href: '/use-cases' },
        ],
    },
};
