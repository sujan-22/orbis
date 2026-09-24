import MaxWidthWrapper from "./max-width-wrapper";
import SectionLabel from "./section-label";

interface PageHeaderProps {
    label: string;
    title: React.ReactNode;
    lead?: React.ReactNode;
    children?: React.ReactNode;
}

const PageHeader = ({ label, title, lead, children }: PageHeaderProps) => (
    <section className="relative overflow-hidden border-b border-line bg-paper">
        <div
            aria-hidden
            className="blueprint-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        />
        <MaxWidthWrapper className="relative pb-14 pt-14 lg:pb-20 lg:pt-24">
            <div className="animate-rise">
                <SectionLabel>{label}</SectionLabel>
            </div>
            <h1 className="display-lg mt-7 max-w-5xl animate-rise text-balance text-ink [animation-delay:80ms]">
                {title}
            </h1>
            {lead && (
                <p className="mt-7 max-w-2xl animate-rise text-lg leading-relaxed text-muted-ink [animation-delay:160ms]">
                    {lead}
                </p>
            )}
            {children}
        </MaxWidthWrapper>
    </section>
);

export default PageHeader;
