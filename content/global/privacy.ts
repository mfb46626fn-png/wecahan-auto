export interface PrivacySection {
    title: string;
    body: string;
    items?: string[];
}

export interface GlobalPrivacyContent {
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
    sections: PrivacySection[];
    contactNote: string;
}

export const globalPrivacyContent: GlobalPrivacyContent = {
    seo: {
        title: "Privacy Policy | WeCaHan Auto",
        description: "How WeCaHan Auto handles workflow briefs, contact submissions, and communication data with professional transparency.",
    },

    hero: {
        eyebrow: "Trust & Transparency",
        title: "Privacy Policy",
        description: "This page explains what information we collect, why we collect it, and how it is handled in the context of our operational automation services.",
    },

    lastUpdated: "Last updated: March 17, 2026",

    summary: "At WeCaHan Auto, we treat operational context with professional seriousness. We collect information you choose to share to review inquiries, evaluate workflow logic, and respond to service requests.",

    sections: [
        {
            title: "Information We Collect",
            body: "We collect information that you voluntarily provide when you submit a workflow brief, book a discovery call, or send an email inquiry. This typically includes:",
            items: [
                "Identification: Name and business contact details.",
                "Firm Context: Company or firm name, website, and country.",
                "Workflow Logic: Detailed descriptions of recurring friction or operational processes.",
                "Communication: The content of your messages and meeting preferences.",
            ],
        },
        {
            title: "How We Use Information",
            body: "The information we collect is used primarily to assess the fit for our scoped automation services and to provide response logic for your operational challenges. Specific uses include:",
            items: [
                "Reviewing and analyzing submitted workflow briefs.",
                "Preparing for and conducting discovery calls.",
                "Suggesting sensible starting scopes for operational automation.",
                "Maintaining professional communication records.",
            ],
        },
        {
            title: "How Information Is Shared",
            body: "We do not sell, rent, or trade your personal or business data. Information is only shared in the following limited circumstances:",
            items: [
                "With trusted service providers who assist in our operations (e.g., email or scheduling tools) under strict confidentiality.",
                "If required by law or to protect the safety and rights of WeCaHan Auto and its users.",
            ],
        },
        {
            title: "Data Retention",
            body: "We retain provided information only as long as necessary to fulfill the purposes of communication, service review, internal records, and compliance with business or legal obligations. If an inquiry does not proceed, we periodically clear inactive context data.",
        },
        {
            title: "Your Choices",
            body: "You have control over the information you share with us. You may contact us at any time to request access to your data, ask for corrections, or request deletion where appropriate. You can also opt-out of further communication at any stage.",
        },
        {
            title: "Security",
            body: "We implement reasonable administrative and technical safeguards to protect your information from unauthorized access. While we strive for high security, no method of transmission over the internet is absolutely secure, and we cannot provide an absolute guarantee of total protection.",
        },
        {
            title: "International Use",
            body: "As WeCaHan Auto operates globally, information submitted through our site may be handled or stored in different jurisdictions depending on the operational tools used. We ensure that such handling remains consistent with the principles of this policy.",
        },
        {
            title: "Policy Updates",
            body: "We may update this Privacy Policy from time to time to reflect changes in our service operations or legal requirements. Significant updates will be reflected in the 'Last updated' date at the top of this page.",
        },
    ],

    contactNote: "For privacy-related questions or specific data requests, you may reach out through the primary contact channels listed on our site.",
};
