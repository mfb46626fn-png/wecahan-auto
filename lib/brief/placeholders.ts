export type BriefPlaceholders = {
    fullName: string;
    workEmail: string;
    company: string;
    inquiryTypePlaceholder: string;
    message: string;
    consentLabel: string;
};

export const centerBriefPlaceholdersEn: BriefPlaceholders = {
    fullName: "Your full name",
    workEmail: "you@company.com",
    company: "Company name",
    inquiryTypePlaceholder: "Select a project type",
    message: "Tell us about your automation needs or operational bottlenecks.",
    consentLabel: "I agree to be contacted about this brief.",
} as const;

export const centerBriefPlaceholdersTr: BriefPlaceholders = {
    fullName: "Ad soyad",
    workEmail: "ad@firma.com",
    company: "Firma adı",
    inquiryTypePlaceholder: "Bir proje tipi seçin",
    message: "Ekibinizin işini neyin yavaşlattığını veya hangi süreçleri otomatikleştirmek istediğinizi anlatın.",
    consentLabel: "Bu brief ile ilgili benimle iletişime geçilmesini onaylıyorum.",
} as const;

export const centerBriefPlaceholdersBilingual = {
    en: centerBriefPlaceholdersEn,
    tr: centerBriefPlaceholdersTr,
} as const;

/** @deprecated Use centerBriefPlaceholdersBilingual */
export const centerBriefPlaceholders = centerBriefPlaceholdersEn;

export const trBriefPlaceholders: BriefPlaceholders = {
    fullName: "Ad soyad",
    workEmail: "ad@firma.com",
    company: "Firma adı",
    inquiryTypePlaceholder: "Bir proje tipi seçin",
    message: "Ekibinizin işini neyin yavaşlattığını veya hangi süreçleri otomatikleştirmek istediğinizi anlatın.",
    consentLabel: "Bu brief ile ilgili benimle iletişime geçilmesini onaylıyorum.",
} as const;

export const globalBriefPlaceholders: BriefPlaceholders = {
    fullName: "Your full name",
    workEmail: "you@company.com",
    company: "Company name",
    inquiryTypePlaceholder: "Select a project type",
    message: "Tell us what is slowing your team down or which workflows you want to automate.",
    consentLabel: "I agree to receive a response regarding this project brief.",
} as const;

export const briefPlaceholdersBySiteFamily = {
    center: centerBriefPlaceholders,
    tr: trBriefPlaceholders,
    global: globalBriefPlaceholders,
} as const;
