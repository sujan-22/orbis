const SectionHeading = ({ title }: { title: string }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003B73] relative inline-block">
            {title}
            <span className="block h-1 w-20 bg-[#5DE0E6] mt-2 mx-auto rounded-full"></span>
        </h2>
    </div>
);

export default SectionHeading;
