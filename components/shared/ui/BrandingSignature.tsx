export const BrandingSignature: React.FC = () => {
    return (
        <div className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase select-none">
            <span className="text-neutral-400 font-medium whitespace-nowrap">A</span>
            <a 
                href="https://wecahan.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-900 font-black hover:opacity-70 transition-opacity whitespace-nowrap"
            >
                We CaHan
            </a>
            <span className="text-neutral-400 font-medium whitespace-nowrap">Company</span>
        </div>
    );
};
