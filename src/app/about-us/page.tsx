import MaxWidthWrapper from "@/components/max-width-wrapper";

const AboutUs = () => {
    return (
        <MaxWidthWrapper className="py-12 text-[#003B73]">
            <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
            <p className="text-base leading-7 text-justify">
                We, <strong>Orbis Valves Industries</strong>, have been ruling
                customers&apos; hearts by offering the best quality industrial
                valves. Our collection includes items like{" "}
                <strong>S Globe Valve</strong>, <strong>Butterfly Valve</strong>
                , <strong>Flange End Ball Valve</strong>,{" "}
                <strong>Gate Valve</strong>,
                <strong>Dual Plate Check Valve</strong>,{" "}
                <strong>Wafer Check Valve</strong>, and{" "}
                <strong>Pulp Valve</strong>.
            </p>
            <p className="text-base leading-7 mt-4 text-justify">
                These are available in a wide range of metals including{" "}
                <strong>Ductile Iron</strong>, <strong>Carbon Steel</strong>,
                and various <strong>Stainless Steels</strong> such as GG25,
                GGG40, GGG50, A105N, LF2, WCB, WC6, LCB, AISI 420, AISI 304L,
                AISI 316L, CF3M, CF8M, 250SMO, and Duplex.
            </p>
            <p className="text-base leading-7 mt-4 text-justify">
                We have always surpassed the expectations of our esteemed
                customers. Our Ahmedabad, Gujarat, India-based unit is
                consistently upgraded to enhance productivity and meet growing
                demands.
            </p>
            <p className="text-base leading-7 mt-4 text-justify">
                We are proud to have a wide and satisfied clientele, and we are
                committed to maintaining our standards and reputation by
                continuing to give our best in the years to come.
            </p>
        </MaxWidthWrapper>
    );
};

export default AboutUs;
