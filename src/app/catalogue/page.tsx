import MaxWidthWrapper from "@/components/max-width-wrapper";
import ContactForm from "./components";

const Catalogue = () => {
    return (
        <MaxWidthWrapper className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#003B73]">
                Catalogue Inquiry
            </h2>
            <ContactForm />
        </MaxWidthWrapper>
    );
};

export default Catalogue;
