export interface TermsSection {
    title: string;
    body: string;
    items?: string[];
}

export interface GlobalTermsContent {
    seo: {
        title: string;
        description: string;
    };
    hero: {
        eyebrow: string;
        title: string;
        description: string;
    };
    lastUpdated: string;
    summary: string;
    sections: TermsSection[];
    contactNote: string;
}

export const globalTermsContent: GlobalTermsContent = {
    seo: {
        title: "Terms of Service | WeCaHan Auto",
        description: "The general terms that apply to site use, workflow inquiries, scoped services, and related communication with professional transparency.",
    },

    hero: {
        eyebrow: "Legal Framework",
        title: "Terms of Service",
        description: "This page outlines the general terms that apply to site use, inquiries, workflow discussions, and scoped service engagement.",
    },

    lastUpdated: "Last updated: March 17, 2026",

    summary: "By using this site or initiating a workflow brief, you agree to these general terms. Formal service agreements and specific project scopes are handled through separate, detailed engagement contracts.",

    sections: [
        {
            title: "Use of This Site",
            body: "This site is provided for informational and inquiry-oriented purposes. You agree to use the site only for lawful purposes. Prohibited uses include:",
            items: [
                "Providing false or misleading information in workflow briefs or contact forms.",
                "Interfering with the site's technical operations or security layers.",
                "Using the site for any unauthorized commercial or marketing solicitation.",
            ],
        },
        {
            title: "No Automatic Service Agreement",
            body: "Initiating communication through a contact form, workflow brief, email, or discovery call does not create a binding service agreement. A formal partnership is only established after a separate scope-of-work and service contract are mutually agreed upon and signed.",
        },
        {
            title: "Scoped Services",
            body: "All automation services provided by WeCaHan Auto are defined by a specific scope, proposal, and timeline. The logic, implementation depth, and maintenance tiers for each project are net out during the discovery and scoping phases.",
        },
        {
            title: "Client Responsibilities",
            body: "To ensure successful delivery of our operational automation services, clients are expected to provide:",
            items: [
                "Accurate and representative workflow context and operational data.",
                "Timely communication and feedback during the review and implementation phases.",
                "Necessary access to relevant internal tools or materials when required for scoped work.",
            ],
        },
        {
            title: "Fees and Payment Context",
            body: "Generic pricing information on the site is for informational purposes only. Actual project fees are determined by the complexity of the agreed scope. Detailed payment terms, schedules, and deliverables are specified in each individual service agreement.",
        },
        {
            title: "Intellectual Property",
            body: "The content, design, and branding materials on this site are the property of WeCaHan Auto and are protected by applicable intellectual property laws. Ownership of delivered operational modules or automation products depends on the terms defined in the separate service agreement.",
        },
        {
            title: "No Guarantees",
            body: "While we apply a rigorous, logic-driven implementation discipline to all our services, we do not make universal promises of specific business outcomes or profit increases. Our goal is to resolve defined operational friction through structured automation logic.",
        },
        {
            title: "Third-Party Tools and Services",
            body: "Our workflows and automated systems may involve the use of third-party software or tools. In such cases, the terms and privacy policies of those third-party providers may also apply to your operational systems.",
        },
        {
            title: "Limitation of Liability",
            body: "To the maximum extent permitted by applicable law, WeCaHan Auto's liability in connection with site use or initial inquiries is limited. We focus on providing professional, reasonable efforts to ensure process stability and meaningful operational results.",
        },
        {
            title: "Changes to These Terms",
            body: "We may update these terms as our services and site architecture evolve. Significant changes will be noted in the 'Last updated' date at the top of this page.",
        },
    ],

    contactNote: "For questions regarding these terms or for specific details about our scoped service engagement, please reach out through the primary contact channels listed on the site.",
};
