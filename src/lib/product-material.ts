export interface MaterialRow {
    description: string;
    material: string;
    qty: string | number;
}

export const PRODUCT_MATERIALS: Record<string, MaterialRow[]> = {
    "gate-valve": [
        { description: "BODY", material: "ASTM A216 Gr. WCB/CF8/CF8M", qty: 1 },
        {
            description: "BONNET",
            material: "ASTM A216 Gr. WCB/CF8/CF8M",
            qty: 1,
        },
        {
            description: "WEDGE",
            material: "ASTM A216 Gr. WCB/CF8/CF8M",
            qty: 1,
        },
        {
            description: "SEAT RING",
            material: "AISI 410 (13% CR)/ SS 304/316",
            qty: 2,
        },
        {
            description: "STEM",
            material: "AISI 410 (13% CR)/SS304/316",
            qty: 1,
        },
        { description: "GLAND", material: "CARBON STEEL", qty: 1 },
        {
            description: "YOKE SLEEVE",
            material: "NI-RESIST-NODULAR CAST IRON",
            qty: 1,
        },
        {
            description: "BACK SEAT",
            material: "AISI 410 (13% CR)/SS304/316",
            qty: 1,
        },
        { description: "GASKET", material: "SPRAL WOUND METALIC", qty: 1 },
        {
            description: "GLAND PACKING",
            material: "METALIC WIRE REINFORCE GRAPHOIL ASBESTOS",
            qty: "Req.",
        },
        {
            description: "BONNET STUB & NUT",
            material: "ASTM A193 Gr. B7 / ASTMA 194 Gr. 2H",
            qty: "Req.",
        },
        {
            description: "EYE BOLT & NUT",
            material: "ASTM A193 Gr. B7 / ASTMA 194 Gr. 2H",
            qty: "2SET",
        },
        { description: "HAND WHEEL", material: "S G IRON", qty: 1 },
        { description: "HAND WHEEL NUT", material: "CARBON STEEL", qty: 1 },
    ],
};
