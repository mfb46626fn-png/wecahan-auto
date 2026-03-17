export const globalContactContent = {
    seo: {
        title: "Contact & Workflow Brief | Share Your Context first",
        description: "Share your operational friction through a short workflow brief. Discovery calls are recommended but not mandatory for an initial review of your context.",
    },
    
    hero: {
        eyebrow: "Context-First First Step",
        title: "Share your workflow context first",
        description: "Discovery calls are not the only way to start. Sharing a brief outline of your operational friction is often a better first step to identify the sensible starting scope.",
        primaryCta: {
            label: "Send Workflow Brief",
            href: "#brief"
        },
        secondaryCta: {
            label: "Book Discovery Call Instead",
            href: "/book-a-call"
        },
        helperBullets: [
            "No discovery call mandatory",
            "Short context is enough",
            "No formal RFP needed"
        ]
    },

    contactPaths: {
        title: "Contact Paths",
        items: [
            {
                title: "Workflow Brief",
                bestUse: "Best for those who prefer to share written context and problem areas before a live discussion.",
                whyItWorks: "It allows us to review the specific logic of your friction before suggesting a scope direction.",
                cta: { label: "Start Brief", href: "#brief" }
            },
            {
                title: "Discovery Call",
                bestUse: "Best for those who have a clear friction point and prefer a short verbal discussion.",
                whyItWorks: "It provides an immediate live channel to check fit and discuss scoped service logic.",
                cta: { label: "Book a Call", href: "/book-a-call" }
            },
            {
                title: "Direct Email",
                bestUse: "Best for formal correspondence, detailed documents, or cross-firm inquiries.",
                whyItWorks: "It maintained a formal written trail for initial operational context exchanges.",
                cta: { label: "Send an Email", href: "mailto:hello@wecahan.com" }
            }
        ]
    },

    briefForm: {
        title: "Share Your Workflow Brief",
        description: "This is not a generic contact form. The information below helps us understand the logic and volume of your operational friction.",
        requiredFields: ["Full Name", "Firm Name", "Work Email", "Country", "Workflow Friction Description"],
        recommendedFields: ["Website", "Team Size", "Current Tools", "Affected Area", "Volume", "Preferred Next Step"],
        areaOptions: [
            "Client intake",
            "Onboarding",
            "Missing documents / follow-up",
            "Recurring reminders",
            "Internal task visibility",
            "Other"
        ],
        nextStepOptions: [
            { label: "I prefer to start with this written brief", value: "brief" },
            { label: "I am open to a discovery call after review", value: "call" },
            { label: "I'm not sure yet", value: "unsure" }
        ],
        mainQuestion: "What workflow is creating the most friction right now?",
        mainQuestionPlaceholder: "For example: onboarding is inconsistent, document chasing is taking too much team time, recurring reminders are manual, or internal ownership is unclear.",
        helperNotes: [
            "A short workflow outline is enough for an initial review.",
            "Not every workflow requires a call as the first step.",
            "Scope becomes clearer after context is reviewed."
        ],
        submitLabel: "Send Workflow Brief",
        successMessage: {
            title: "Workflow Context Received",
            description: "We've received your brief. After a short review, we will suggest the most sensible next step based on the logic of your friction."
        }
    },

    whatHappensNext: {
        title: "What happens after you submit",
        items: [
            {
                title: "Initial Review",
                description: "We evaluate the shared workflow context and the reported friction areas."
            },
            {
                title: "Fit Check",
                description: "We determine if a scoped service approach matches the complexity of your friction."
            },
            {
                title: "Suggested Next Step",
                description: "We suggest a discovery call, a deeper workflow review, or a short written follow-up."
            },
            {
                title: "Scoped Direction",
                description: "If there is a fit, we net out the most sensible starting direction for your operations."
            }
        ]
    },

    contactVsCall: {
        title: "Contact vs. Book a Call",
        note: "Both paths lead to a scoped review, but the starting speed varies based on your preference.",
        contactColumn: {
            title: "Workflow Brief is better if:",
            points: [
                "You prefer sharing written context first",
                "You are not call-ready yet",
                "You want to outline friction before talking",
                "You need to share multiple internal details"
            ]
        },
        callColumn: {
            title: "Book a Call is better if:",
            points: [
                "Your friction points are already clear",
                "You are ready for a short live discussion",
                "You prefer verbal fit and scope discussions",
                "You want an immediate time on the calendar"
            ]
        }
    },

    fitReminder: {
        betterFitIf: {
            title: "This path is a better fit if:",
            points: [
                "You experience recurring operational friction",
                "You are ready to share workflow context",
                "You are open to a structured service process",
                "You value written review before a call"
            ]
        },
        lessUsefulIf: {
            title: "This path is less useful if:",
            points: [
                "You are only looking for a software demo",
                "You expect an instant quote without context",
                "You want broad digital strategy consulting",
                "You need a full custom software replacement now"
            ]
        }
    },

    faq: {
        title: "Contact FAQ",
        items: [
            {
                question: "Do I need a long workflow document?",
                answer: "No. A short explanation of the workflow friction and where it creates operational drag is enough for an initial review."
            },
            {
                question: "Can I skip the call for now?",
                answer: "Yes. The workflow brief is designed for those who want to start with written context rather than a live meeting."
            },
            {
                question: "Will I get an instant quote?",
                answer: "No. Because our work is scoped based on your unique workflow logic, we need to review the context before identifying costs."
            },
            {
                question: "Is this only for accounting firms?",
                answer: "Accounting firms are our primary focus, but the same workflow brief path is open to any operation with recurring admin friction."
            },
            {
                question: "What happens after I submit the brief?",
                answer: "We review it within 24-48 hours and reach out with a suggested next step—usually a short follow-up or a call invite."
            }
        ]
    },

    secondaryCta: {
        title: "Prefer a live conversation instead?",
        description: "If your context is already clear and you're ready to discuss scope, a discovery call is the faster path.",
        primaryCta: {
            label: "Book a Discovery Call",
            href: "/book-a-call"
        },
        secondaryLinks: [
            { label: "View Pricing Model", href: "/pricing" },
            { label: "View Use Cases", href: "/use-cases" },
            { label: "Send an Email", href: "mailto:hello@wecahan.com" }
        ]
    }
};
