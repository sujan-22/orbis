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
    "globe-valve-flange-ends": [
        {
            description: "BODY",
            material: "ASTM A 216 Gr. WCB / CF8 / CF8M",
            qty: 1,
        },
        {
            description: "BONNET",
            material: "ASTM A 216 Gr. WCB / CF8 / CF8M",
            qty: 1,
        },
        {
            description: "SEAT RING",
            material: "AISI 410 (13% CR) SS 304 / 316",
            qty: 1,
        },
        {
            description: "DISC",
            material: "AISI 410 (13% CR) SS 304 / 316",
            qty: 1,
        },
        {
            description: "STEM",
            material: "AISI 410 (13% CR) SS 304 / 316",
            qty: 1,
        },
        {
            description: "STEM NUT",
            material: "AISI 410 (13% CR) SS 304 / 316",
            qty: 1,
        },
        {
            description: "BACK SEAT",
            material: "AISI 410 (13% CR) SS 304 / 316",
            qty: 1,
        },
        { description: "GLAND", material: "CARBON STEEL", qty: 1 },
        {
            description: "GLAND PACKING",
            material: "METALIC WIRE REINFORCED GRAPHOIL ASBESTOS",
            qty: "---",
        },
        { description: "YOKE SLEEVE", material: "SG IRON", qty: 1 },
        {
            description: "BONNET GASKET",
            material: "ASBESTOS FILTER S.S. 304 SPRIAL WOUNDED / CAF",
            qty: 1,
        },
        {
            description: "BONNET STUD & NUT",
            material: "ASTM A 193 Gr. B7 ASTM A 194 Gr. 2H",
            qty: "---",
        },
        {
            description: "EYE BOLT & NUT",
            material: "ASTM A 193 Gr. B7 ASTM A 194 Gr. 2H",
            qty: "2 SET",
        },
        { description: "HAND WHEEL", material: "SG IRON", qty: 1 },
        { description: "HAND WHEEL NUT", material: "CARBON STEEL", qty: 1 },
    ],
    "2pc-ball-valve": [
        { description: "BODY", material: "C.S. / Cf8 / CF8M", qty: 1 },
        {
            description: "BODY CONNECTOR",
            material: "C.S. / Cf8 / CF8M",
            qty: 1,
        },
        { description: "BALL", material: "S.S. 202 / 304 / 3016", qty: 1 },
        { description: "STEM", material: "S.S. 202 / 304 / 316", qty: 1 },
        {
            description: "GLAND NUT",
            material: "S.S. 202 / 304 / 316 / M.S.",
            qty: 1,
        },
        {
            description: "GLAND BUSH",
            material: "S.S. 202 / 304 / 316 / M.S.",
            qty: 1,
        },
        {
            description: "LOCK NUT",
            material: "S.S. 202 / 304 / 316 / M.S.",
            qty: 1,
        },
        { description: "SEAT RING", material: "PTFE", qty: 2 },
        { description: "SEAT SEAL", material: "PTFE", qty: 2 },
        { description: "BODY SEALENT RING", material: "PTFE", qty: 1 },
        {
            description: "LEVER",
            material: "M.S. / S.S. 304 / S.S. 316",
            qty: 1,
        },
        {
            description: "STOPPER PIN",
            material: "M.S. / S.S. 304 / S.S. 316",
            qty: 1,
        },
        { description: "STUD & NUT", material: "M.S. / S.S.", qty: "----" },
    ],
    "dual-plate-check-valve": [
        {
            description: "BODY",
            material: "C.I. - IS:210 GR. FG 200 / ASTM A 216 GR. WCB",
            qty: 1,
        },
        { description: "DISC", material: "A 351 GR. CF8", qty: 2 },
        { description: "HINGE PIN", material: "AISI 304 / AISI 316", qty: 1 },
        { description: "PLUG", material: "AISI 304 / AISI 316", qty: 2 },
        { description: "STOP PIN", material: "AISI 304 / AISI 316", qty: 1 },
        { description: "SPRING", material: "AISI 304 / AISI 316", qty: 2 },
        { description: "BEARING", material: "AISI 304 / AISI 316", qty: 1 },
        { description: "SEAT", material: "NBR, EPDM, VITION", qty: 1 },
    ],
    "wafer-type-check-valve": [
        {
            description: "BODY",
            material: "C.I. / M.S. / Cf8 / CF8M / Cf3 / CF3M",
            qty: 1,
        },
        {
            description: "DISC",
            material: "C.I. / M.S. / Cf8 / CF8M / Cf3 / CF3M",
            qty: 1,
        },
        {
            description: "'O' RING",
            material: "NITRILE, EPDM, VITION, SILICON, PTEE",
            qty: 1,
        },
        { description: "HINGE PIN", material: "AISI 304, 316, M.S.", qty: 1 },
        { description: "LIFTING HOOK", material: "M.S. / S.S.", qty: 1 },
    ],
    "lever-operated-butterfly-valve": [
        {
            description: "BODY",
            material: "CAST IRON. CAST STEEL / SS 304 - 316",
            qty: 1,
        },
        {
            description: "DISC",
            material: "CI/SG IRON / CAST STEEL / SS 304 - 316",
            qty: 1,
        },
        { description: "SPINDLE", material: "SS 410 / 304 / 316", qty: 1 },
        {
            description: "BODY LINING",
            material: "NITRILE / EPDM / SILICON / VITON / HYPALON",
            qty: "-",
        },
        { description: '"O" RING', material: "NITRILE / EPDM", qty: 1 },
        { description: "PIN", material: "SS 304 / 316", qty: 1 },
        { description: "LEVER", material: "MS FABRICATED", qty: 1 },
    ],
    "gear-operated-butterfly-valve": [
        {
            description: "BODY",
            material: "CAST IRON. CAST STEEL / SS 304-316",
            qty: 1,
        },
        {
            description: "DISC",
            material: "CI / SG.IRON / CAST STEEL / SS 304-316",
            qty: 1,
        },
        { description: "SPINDLE", material: "SS 410 / 304 / 316", qty: 1 },
        {
            description: "BODY LINING",
            material: "NITRILE / EPDM / SILICON / VITON / HYPALON",
            qty: "--",
        },
        { description: '"O" RING', material: "NITRILE / EPDM", qty: 1 },
        { description: "PIN", material: "SS 304 / 316", qty: 1 },
        { description: "GEAR BOX", material: "CAST IRON", qty: 1 },
        { description: "HAND WHEEL", material: "MS FABRICATED", qty: 1 },
    ],
    "knife-edge-gate-valve": [
        { description: "BODY", material: "WCB / CF8 / CF8M", qty: 1 },
        { description: "GATE", material: "SS 410 / SS 304 / SS 316", qty: 1 },
        { description: "SEAT", material: "METAL TO METAL, EPDM, PTFE", qty: 1 },
        { description: "GLAND PACKING", material: "PTFE / GRAPHITE", qty: 1 },
        { description: "GLAND", material: "CI / WCB / Cf8 / CF8M", qty: 1 },
        { description: "STEM", material: "SS 410 / SS 304", qty: 1 },
        { description: "YOKE SLEEV", material: "GUN METAL", qty: 1 },
        { description: "STEAM NUT", material: "SG IRON", qty: 1 },
        { description: "HAND WHEEL", material: "SG IRON", qty: 1 },
        { description: "NUT & BOLTS", material: "CS / MS", qty: 4 },
    ],
};
