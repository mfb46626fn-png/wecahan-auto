import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { SectionEyebrow } from '../../../shared/typography/SectionEyebrow';
import { SectionTitle } from '../../../shared/typography/SectionTitle';
import { SectionDescription } from '../../../shared/typography/SectionDescription';
import { MessageSquare, ClipboardList, Zap, ArrowRight, ShieldCheck, HelpCircle, Inbox } from 'lucide-react';
import type { ContactContent } from '../../../../content/center/contact';

/**
 * 1. CenterContactHeroBlock
 */
interface CenterContactHeroBlockProps {
    content: ContactContent['hero'];
    className?: string;
}

export function CenterContactHeroBlock({ content, className }: CenterContactHeroBlockProps) {
    const { title, description, trustPoint } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="relative py-12 md:py-24">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-slate-100/50 rounded-full blur-[80px] md:blur-[100px] -z-10 pointer-events-none" />
                
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <SectionEyebrow className="mb-4 md:mb-6 !text-slate-400 font-bold tracking-[0.2em] uppercase">
                        {content.eyebrow}
                    </SectionEyebrow>
                    
                    <SectionTitle size="lg" className="mb-6 md:mb-8 leading-[1.1] !text-slate-900 font-black tracking-tight text-3xl md:text-5xl lg:text-6xl">
                        {title}
                    </SectionTitle>
                    
                    <SectionDescription maxWidth="lg" className="mb-12 !text-slate-500 font-medium leading-relaxed">
                        {description}
                    </SectionDescription>

                    <div className="flex items-center gap-3">
                        <ShieldCheck className="h-4 w-4 text-emerald-500" />
                        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                            {trustPoint}
                        </p>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 2. CenterContactWhatToShareBlock
 */
interface CenterContactWhatToShareBlockProps {
    content: ContactContent['contextGuidance'];
    className?: string;
}

export function CenterContactWhatToShareBlock({ content, className }: CenterContactWhatToShareBlockProps) {
    const { title, description, topics } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-24">
                <SectionHeader
                    title={title}
                    description={description}
                    align="center"
                    maxWidth="lg"
                    className="mb-10 md:mb-16"
                />
                
                <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
                    {topics.map((topic, index) => (
                        <CardBase 
                            key={index}
                            size="lg"
                            className="flex flex-col h-full border-slate-100 hover:border-slate-200 transition-all duration-300 bg-white shadow-sm"
                        >
                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-400">
                                <HelpCircle className="h-5 w-5" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-4">{topic.label}</h3>
                            <div className="mt-auto p-4 rounded-2xl bg-slate-50 border border-slate-100 italic">
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    {topic.example}
                                </p>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 3. CenterContactNextStepsBlock
 */
interface CenterContactNextStepsBlockProps {
    content: ContactContent['briefingFlow'];
    className?: string;
}

export function CenterContactNextStepsBlock({ content, className }: CenterContactNextStepsBlockProps) {
    const { title, description, steps } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-24 bg-slate-50/50 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100">
                <SectionHeader
                    title={title}
                    description={description}
                    align="center"
                    maxWidth="lg"
                    className="mb-10 md:mb-16"
                />
                
                <div className="grid gap-8 md:gap-x-12 lg:grid-cols-3 max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col gap-6 relative group">
                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-black text-white shadow-lg">
                                    {index + 1}
                                </div>
                                <div className="h-px flex-grow bg-slate-200 group-last:hidden hidden lg:block" />
                            </div>
                            
                            <div>
                                <h3 className="mb-3 text-lg font-bold text-slate-900 tracking-tight">
                                    {step.title}
                                </h3>
                                <BodyText className="text-slate-500 text-sm leading-relaxed font-medium">
                                    {step.description}
                                </BodyText>
                            </div>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 4. CenterContactExpectationNoteBlock
 */
interface CenterContactExpectationNoteBlockProps {
    content: ContactContent['settingExpectations'];
    className?: string;
}

export function CenterContactExpectationNoteBlock({ content, className }: CenterContactExpectationNoteBlockProps) {
    const { title, notes } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-24 px-4 md:px-0">
                <div className="max-w-4xl mx-auto bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Zap className="h-32 w-32" />
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-black mb-12 tracking-tight">
                        {title}
                    </h2>
                    
                    <div className="grid gap-8 sm:grid-cols-2">
                        {notes.map((note, index) => (
                            <div key={index} className="space-y-4">
                                <div className="h-1 w-12 bg-indigo-500 rounded-full" />
                                <h3 className="text-lg font-bold text-white">{note.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {note.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 5. CenterContactBriefFormBlock
 */
interface CenterContactBriefFormBlockProps {
    content: ContactContent['form'];
    className?: string;
    children?: React.ReactNode;
}

export function CenterContactBriefFormBlock({ content, className, children }: CenterContactBriefFormBlockProps) {
    const { title, description } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-24 px-4 md:px-0">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 mb-6">
                            <Inbox className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight">
                            {title}
                        </h2>
                        <SectionDescription maxWidth="lg" className="mx-auto text-center">
                            {description}
                        </SectionDescription>
                    </div>

                    <div className="bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 relative">
                        {/* Slot for the actual form component */}
                        {children || (
                            <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-slate-100 rounded-3xl text-slate-300">
                                <p className="text-sm font-medium">Form area placeholder</p>
                            </div>
                        )}
                        
                        <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-center gap-3">
                            <ShieldCheck className="h-3.5 w-3.5 text-slate-300" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                                {content.privacyNote}
                            </span>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 6. CenterContactReassuranceBlock
 */
interface CenterContactReassuranceBlockProps {
    content: ContactContent['closingNote'];
    className?: string;
}

export function CenterContactReassuranceBlock({ content, className }: CenterContactReassuranceBlockProps) {
    const { title, description } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="pb-32">
                <div className="flex flex-col items-center text-center">
                    <div className="h-px w-24 bg-slate-200 mb-12" />
                    <h3 className="text-xl font-bold text-slate-600 mb-4 italic tracking-tight">
                        {title}
                    </h3>
                    <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                        {description}
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
