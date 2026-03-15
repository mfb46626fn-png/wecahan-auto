export type InquiryOption = {
    value: string;
    label: string;
};

export const centerInquiryOptions = [
    { value: "automation-audit", label: "Automation Audit" },
    { value: "lead-flow-setup", label: "Lead Flow Setup" },
    { value: "internal-ops-automation", label: "Internal Ops Automation" },
    { value: "custom-workflow-build", label: "Custom Workflow Build" },
] as const;

export const trInquiryOptions = [
    { value: "klinik-lead-takibi", label: "Klinik Lead Takibi" },
    { value: "klinik-randevu-otomasyonu", label: "Klinik Randevu / Geri Dönüş Otomasyonu" },
    { value: "klinik-whatsapp-akis", label: "Klinik WhatsApp / Form Akışı" },
    { value: "muhasebe-evrak-akis", label: "Muhasebe Müşteri Alım / Evrak Akışı" },
    { value: "ic-operasyon-otomasyonu", label: "İç Operasyon Otomasyonu" },
    { value: "ozel-workflow-kurulumu", label: "Özel Workflow Kurulumu" },
] as const;

export const globalInquiryOptions = [
    { value: "accounting-intake-automation", label: "Accounting Firm Intake Automation" },
    { value: "accounting-follow-up-workflow", label: "Accounting Firm Follow-up Workflow" },
    { value: "service-business-lead-flow", label: "Service Business Lead Flow" },
    { value: "internal-ops-automation", label: "Internal Ops Automation" },
    { value: "custom-workflow-build", label: "Custom Workflow Build" },
] as const;

export const briefInquiryOptionsBySiteFamily = {
    center: centerInquiryOptions,
    tr: trInquiryOptions,
    global: globalInquiryOptions,
} as const;

/** @deprecated Use family specific options or briefInquiryOptionsBySiteFamily */
export const INQUIRY_OPTIONS = centerInquiryOptions;
