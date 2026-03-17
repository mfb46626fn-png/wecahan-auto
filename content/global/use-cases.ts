export interface UseCaseItem {
    title: string;
    context: string;
    friction: string;
    workflow: string[];
    outcome: string[];
    bestFit: string[];
    cta: {
        label: string;
        href: string;
    };
}

export const globalUseCasesContent = {
    seo: {
        title: "Workflow Use Cases | Operational Examples for Accounting Firms",
        description: "Structured workflow examples to solve recurring operational friction. See how we architect onboarding, document follow-ups, and internal routing flows.",
    },
    
    hero: {
        eyebrow: "Proof through Structure",
        title: "Workflow examples for recurring operational friction",
        description: "These are not static templates. They are structured examples of how real operational friction can be translated into a cleaner, architected workflow layer.",
        primaryCta: {
            label: "Send Workflow Brief",
            href: "/book-a-call#brief"
        },
        secondaryCta: {
            label: "Book Discovery Call",
            href: "/book-a-call"
        },
        helperBullets: [
            "Structured Proof",
            "Workflow Thinking Depth",
            "Honest Credibility"
        ]
    },

    whyUseCasesMatter: {
        title: "Why we focus on workflow examples",
        description: "Service categories can stay abstract. Use cases show how real operational friction is translated into a cleaner structure.",
        items: [
            {
                title: "Concrete Scope",
                description: "They move the conversation from 'what we do' to 'how it actually works' for your specific recurring problems."
            },
            {
                title: "Workflow Thinking",
                description: "They reveal the logic behind the solution, showing how we handle gaps, reminders, and handoffs."
            },
            {
                title: "Context Mapping",
                description: "They help you identify your own friction points by seeing similar patterns in a structured format."
            }
        ]
    },

    categoryNavigation: {
        title: "Explore Scenarios",
        categories: [
            { id: "accounting", label: "Accounting Firm Use Cases" },
            { id: "adjacent", label: "Adjacent Operational Use Cases" }
        ]
    },

    accountingFirmUseCases: {
        title: "Accounting Firm Use Cases",
        intro: "Dedicated workflow structures for accounting and advisory firms managing high-volume client operations.",
        items: [
            {
                title: "Client Intake & Onboarding Flow",
                context: "New client intake involves scattered data collection and internal routing with multiple handoffs.",
                friction: "When onboarding is non-standard, every new client represents a high coordination tax on the team.",
                workflow: [
                    "New client context trigger",
                    "Structured intake collection",
                    "Automatic missing details follow-up",
                    "Internal task routing",
                    "Ownership & status visibility"
                ],
                outcome: [
                    "Consistent onboarding discipline",
                    "Reduced manual handoff errors",
                    "Clear next-step visibility"
                ],
                bestFit: [
                    "Expanding firms with high intake volume",
                    "Teams with inconsistent onboarding steps",
                    "Firms moving away from email-based tracking"
                ],
                cta: { label: "Send Brief for Intake", href: "/book-a-call#brief" }
            },
            {
                title: "Missing Documents Follow-Up Flow",
                context: "Team members spend significant hours chasing clients for required documents and missing data.",
                friction: "Manual chasing consumes senior bandwidth and leads to processing delays due to low visibility.",
                workflow: [
                    "Document requirement identification",
                    "Scheduled reminder sequence",
                    "Response vs. missing gap detection",
                    "Internal team escalation",
                    "Tracking layer for oversight"
                ],
                outcome: [
                    "Systematic follow-up frequency",
                    "Reduced manual chasing bandwidth",
                    "Zero-gap visibility for managers"
                ],
                bestFit: [
                    "Document-heavy advisory workflows",
                    "Teams struggling with client responsiveness",
                    "Audit or tax preparers with strict deadlines"
                ],
                cta: { label: "Send Brief for Document Chasing", href: "/book-a-call#brief" }
            },
            {
                title: "Recurring Reminder & Status Flow",
                context: "Regular monthly or quarterly requests are handled manually by remembering when to send emails.",
                friction: "Relying on individual memory for recurring tasks creates risk as the client base scales.",
                workflow: [
                    "Recurring requirement trigger",
                    "First automated request",
                    "Automatic follow-up logic",
                    "Client response verification",
                    "Firm-wide status visibility"
                ],
                outcome: [
                    "Guaranteed communication consistency",
                    "Lower mental load for staff",
                    "Standardized status reporting"
                ],
                bestFit: [
                    "Monthly bookkeeping firms",
                    "Sales tax or payroll reporting teams",
                    "Recurring compliance managers"
                ],
                cta: { label: "View Pricing Model", href: "/pricing" }
            },
            {
                title: "Internal Task Routing & Visibility Flow",
                context: "Work stays stuck in silos because it's not clear who owns the next technical step.",
                friction: "Coordination costs explode as teams grow without clear ownership and handoff signals.",
                workflow: [
                    "Workflow event detection",
                    "Automatic task prioritization",
                    "Smart ownership assignment",
                    "Real-time status updates",
                    "Oversight & bottleneck view"
                ],
                outcome: [
                    "Absolute ownership clarity",
                    "Faster handoff speed",
                    "Data-driven operational oversight"
                ],
                bestFit: [
                    "Firms with 5+ team members",
                    "Multi-department advisory firms",
                    "Teams needing better capacity planning"
                ],
                cta: { label: "Book a Discovery Call", href: "/book-a-call" }
            }
        ]
    },

    adjacentUseCases: {
        title: "Adjacent Operational Use Cases",
        intro: "Applying the same workflow logic to similar recurring friction patterns in other operational contexts.",
        items: [
            {
                title: "Recurring Intake Coordination",
                context: "Managing intake across various channels with inconsistent follow-up logic.",
                friction: "Scattered data leads to inconsistent qualification and slow response times.",
                workflow: [
                    "Inbound request capture",
                    "Unified intake structure",
                    "Qualification logic layer",
                    "Internal team routing",
                    "Handoff visibility"
                ],
                outcome: [
                    "Cleaner intake standardization",
                    "Better response speed",
                    "Less scattered effort"
                ],
                bestFit: [
                    "Service businesses with high lead volume",
                    "Teams handling structured requests",
                    "Operations needing better intake control"
                ],
                cta: { label: "Explore Services", href: "/services" }
            },
            {
                title: "Internal Status Tracking Layer",
                context: "Core software doesn't provide the level of status granularity needed for daily operations.",
                friction: "Constant internal updates are needed just to know the state of a workflow.",
                workflow: [
                    "Operational stage signal",
                    "Automatic status update",
                    "Ownership layer sync",
                    "Executive oversight view",
                    "Next-step automation"
                ],
                outcome: [
                    "Near-zero update meetings",
                    "Absolute current-state clarity",
                    "Less reliance on staff memory"
                ],
                bestFit: [
                    "Project-based service teams",
                    "Operations with defined stages",
                    "Managers seeking more visibility"
                ],
                cta: { label: "Send Brief", href: "/book-a-call#brief" }
            }
        ]
    },

    whatTheseShow: {
        title: "What these use cases actually show",
        items: [
            {
                title: "Logic, not Product",
                description: "These are examples of how we think. They show how we translate a mess into a predictable sequence."
            },
            {
                title: "Scope follows Context",
                description: "The blocks used in these examples change based on your actual team structure and tools."
            },
            {
                title: "Small starts work",
                description: "You don't have to automate everything. You can start with the single most annoying friction point."
            },
            {
                title: "Structure is the service",
                description: "Our value is not 'connecting apps', but architecting the discipline you see in these flows."
            }
        ]
    },

    fitAdaptation: {
        goodFit: {
            title: "These scenarios fit you if:",
            points: [
                "You have recurring operational friction",
                "Onboarding, reminders, or visibility is a known issue",
                "You want a defined scope starting point",
                "You are open to a structured service process"
            ]
        },
        adaptationNote: {
            title: "These are not rigid templates because:",
            points: [
                "Your team structure is unique",
                "Your existing software stack varies",
                "Your handoff habits need specific mapping",
                "Your workflow priorities shift based on timing"
            ]
        }
    },

    cta: {
        title: "If one of these frictions sounds familiar, let's map your context",
        description: "The next step is not a generic quote, but a clearer understanding of your unique workflow friction.",
        primaryCta: {
            label: "Send Workflow Brief",
            href: "/book-a-call#brief"
        },
        secondaryCta: {
            label: "Book Discovery Call",
            href: "/book-a-call"
        },
        helperNotes: [
            "This is a scoped service process.",
            "Not every friction area needs the same depth.",
            "Context comes before scope."
        ]
    }
};
