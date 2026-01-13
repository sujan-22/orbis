import type { ProductSpecs } from "@/lib/specs/types";

type MaterialSpecRow = {
    no: string;
    description: string;
    material: string;
    qty: string | number;
};

type PrimaryServiceRow = {
    class: number;
    workingPres: string;
    temp: string;
    hydBody: string;
    hydSeat: string;
};

type SizeRow = {
    inch: string;
    mm: number;
    a: number;
    b: number;
    c: number;
    d: number;
    m: number;
    n: number;
    pcd: number;
    w: number;
};

type DualPlateMaterialRow = {
    no: string;
    partName: string;
    material: string;
    qty: string | number;
};

type DualPlateSizeRow = {
    inch: string;
    mm: number;
    a: number; // ØA
    b: number; // ØB
    d: number; // ØD
};

type DualPlatePrimaryRow = {
    class: number;
    workingPressure: string;
    temp: string;
    hydBody: string;
    hydSeat: string;
};

type WaferMaterialRow = {
    no: string;
    description: string;
    material: string;
    qty: string | number;
};

type WaferPrimaryRow = {
    class: string;
    workingPressure: string;
    temp: string;
    hydBody: string;
    hydSeat: string;
};

type WaferSizeRow = {
    inch: string;
    mm: number;
    a: number; // ØA
    b: number; // B
    c: number; // ØC
};

type ButterflyLeverMaterialRow = {
    no: string;
    description: string;
    material: string;
    qty: string | number;
};

type SeatTempRow = {
    seatType: string;
    min: string;
    max: string;
};

type ButterflyLeverSizeRow = {
    inch: string;
    mm: number;
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    g: number;
    topFlange: string;
};

type ButterflyPressureRow = {
    pressureRating: string;
    shellKgCm2: number;
    shellPsig: number;
    seatKgCm2: number;
    seatPsig: number;
};

type KnifeEdgeMaterialRow = {
    no: string;
    description: string;
    material: string;
    qty: string | number;
};

type KnifeEdgePrimaryRow = {
    class: number;
    workingPressure: string;
    temp: string;
    hydBody: string;
    hydSeat: string;
};

type KnifeEdgeSizeRow = {
    inch: string;
    mm: number;
    a: number;
    c: number; // ØC
    d: number; // ØD
    m: number; // ØM
    n: number;
    pcd: number; // P.C.D.
    w: number; // ØW
    hOpen: number;
    hClosed: number;
};

type DiskCheckMaterialRow = {
    no: string;
    partName: string;
    material: string;
    qty: string | number;
};

type DiskCheckPrimaryRow = {
    class: string;
    pressureRating: string;
    temp: string;
};

type DiskCheckSizeRow = {
    inch: string;
    mm: number;
    a: number; // ØA
    b: number; // ØB
    c: number; // ØC
    d: number; // ØD
    t: number; // T
    l: number; // L
};

export const PRODUCT_SPECS: ProductSpecs = {
    "gate-valve": [
        {
            kind: "table",
            id: "materials",
            title: "Material Specifications",
            columns: [
                { key: "no", header: "NO", className: "w-16" },
                { key: "description", header: "DESCRIPTION" },
                { key: "material", header: "MATERIAL" },
                { key: "qty", header: "QTY.", align: "left" },
            ],
            rows: [
                {
                    no: "01.",
                    description: "BODY",
                    material: "ASTM A216 Gr. WCB/CF8/CF8M",
                    qty: 1,
                },
                {
                    no: "02.",
                    description: "BONNET",
                    material: "ASTM A216 Gr. WCB/CF8/CF8M",
                    qty: 1,
                },
                {
                    no: "03.",
                    description: "WEDGE",
                    material: "ASTM A216 Gr. WCB/CF8/CF8M",
                    qty: 1,
                },
                {
                    no: "04.",
                    description: "SEAT RING",
                    material: "AISI 410 (13% CR) / SS 304 / 316",
                    qty: 2,
                },
                {
                    no: "05.",
                    description: "STEM",
                    material: "AISI 410 (13% CR) / SS 304 / 316",
                    qty: 1,
                },
                {
                    no: "06.",
                    description: "GLAND",
                    material: "CARBON STEEL",
                    qty: 1,
                },
                {
                    no: "07.",
                    description: "YOKE SLEEVE",
                    material: "NI - RESIST - NODULAR CAST IRON",
                    qty: 1,
                },
                {
                    no: "08.",
                    description: "BACK SEAT",
                    material: "AISI 410 (13% CR) / SS 304 / 316",
                    qty: 1,
                },
                {
                    no: "09.",
                    description: "GASKET",
                    material: "SPRAL WOUND METALIC",
                    qty: 1,
                },
                {
                    no: "10.",
                    description: "GLAND PACKING",
                    material: "METALIC WIRE REINFORCE",
                    qty: "—",
                },
                {
                    no: "",
                    description: "",
                    material: "GRAPHOIL ASBESTOS",
                    qty: "Req.",
                },
                {
                    no: "11.",
                    description: "BONNET STUB & NUT",
                    material: "ASTM A 193 Gr. B7 / ASTM A 194 Gr. 2H",
                    qty: "Req.",
                },
                {
                    no: "12.",
                    description: "EYE BOLT & NUT",
                    material: "ASTM A 193 Gr. B7 / ASTM A 194 Gr. 2H",
                    qty: "2SET",
                },
                {
                    no: "13.",
                    description: "HAND WHEEL",
                    material: "S G IRON",
                    qty: 1,
                },
                {
                    no: "14.",
                    description: "HAND WHEEL NUT",
                    material: "CARBON STEEL",
                    qty: 1,
                },
            ] satisfies MaterialSpecRow[],
        },

        {
            kind: "kv",
            id: "technical-data",
            title: "Technical Data",
            rows: [
                {
                    label: "DESIGN & MANUFACTURING STD.",
                    value: "BS-1414 / AP / 600",
                },
                { label: "TESTING & INSPECTION STD.", value: "AP I 598" },
                {
                    label: "END CONNECTIONS :",
                    value: "FLANGED AS PER ANSI B-16.5",
                },
                { label: "SEAL WALL THICKNESS", value: "ANSI B 16.34" },
                { label: "FACE TO FACE :", value: "AS PER ANSI / B 16.10" },
            ],
        },

        {
            kind: "table",
            id: "primary-service-rating",
            title: "Primary Service Rating & Test Pressure",
            columns: [
                { key: "class", header: "CLASS" },
                { key: "workingPres", header: "WORKING PRES." },
                { key: "temp", header: "TEMP." },
                { key: "hydBody", header: "HYD. TEST PRESS. (BODY)" },
                { key: "hydSeat", header: "HYD. TEST PRESS. (SEAT)" },
            ],
            rows: [
                {
                    class: 150,
                    workingPres: "150 PSIG",
                    temp: "500°F",
                    hydBody: "425 PSIG",
                    hydSeat: "300 PSIG",
                },
                {
                    class: 300,
                    workingPres: "300 PSIG",
                    temp: "800°F",
                    hydBody: "1100 PSIG",
                    hydSeat: "800 PSIG",
                },
            ] satisfies PrimaryServiceRow[],
            note: "AIR TEST - SEAT - 80 PSIG + 10 PSIG",
        },

        {
            kind: "table",
            id: "size-class-150",
            title: "Size Class 150",
            columns: [
                { key: "inch", header: "IN." },
                { key: "mm", header: "M.M.", align: "left" },
                { key: "a", header: "A", align: "left" },
                { key: "b", header: "B", align: "left" },
                { key: "c", header: "ØC", align: "left" },
                { key: "d", header: "ØD", align: "left" },
                { key: "m", header: "ØM", align: "left" },
                { key: "n", header: "N", align: "left" },
                { key: "pcd", header: "P.C.D.", align: "left" },
                { key: "w", header: "ØW", align: "left" },
            ],
            rows: [
                {
                    inch: '1"',
                    mm: 25,
                    a: 127.0,
                    b: 11.0,
                    c: 51,
                    d: 108.0,
                    m: 16,
                    n: 4,
                    pcd: 79.2,
                    w: 100,
                },
                {
                    inch: '1.1/2"',
                    mm: 40,
                    a: 165.1,
                    b: 14.2,
                    c: 73,
                    d: 127.0,
                    m: 16,
                    n: 4,
                    pcd: 98.5,
                    w: 135,
                },
                {
                    inch: '2"',
                    mm: 50,
                    a: 177.8,
                    b: 15.7,
                    c: 92,
                    d: 152.0,
                    m: 19,
                    n: 4,
                    pcd: 120.6,
                    w: 200,
                },
                {
                    inch: '2.1/2"',
                    mm: 65,
                    a: 190.5,
                    b: 17.5,
                    c: 105,
                    d: 178.0,
                    m: 19,
                    n: 4,
                    pcd: 139.7,
                    w: 250,
                },
                {
                    inch: '3"',
                    mm: 80,
                    a: 203.2,
                    b: 19.0,
                    c: 127,
                    d: 190.5,
                    m: 19,
                    n: 4,
                    pcd: 152.4,
                    w: 250,
                },
                {
                    inch: '4"',
                    mm: 100,
                    a: 228.6,
                    b: 24.0,
                    c: 157,
                    d: 229.0,
                    m: 19,
                    n: 8,
                    pcd: 190.5,
                    w: 300,
                },
                {
                    inch: '5"',
                    mm: 125,
                    a: 254.0,
                    b: 24.0,
                    c: 186,
                    d: 254.0,
                    m: 22,
                    n: 8,
                    pcd: 215.9,
                    w: 350,
                },
                {
                    inch: '6"',
                    mm: 150,
                    a: 266.7,
                    b: 25.0,
                    c: 216,
                    d: 279.0,
                    m: 22,
                    n: 8,
                    pcd: 241.3,
                    w: 350,
                },
                {
                    inch: '8"',
                    mm: 200,
                    a: 292.1,
                    b: 28.5,
                    c: 270,
                    d: 343.0,
                    m: 22,
                    n: 8,
                    pcd: 298.4,
                    w: 400,
                },
                {
                    inch: '10"',
                    mm: 250,
                    a: 330.2,
                    b: 30.0,
                    c: 324,
                    d: 406.0,
                    m: 25,
                    n: 12,
                    pcd: 362.0,
                    w: 450,
                },
                {
                    inch: '12"',
                    mm: 300,
                    a: 335.6,
                    b: 32.0,
                    c: 381,
                    d: 483.0,
                    m: 25,
                    n: 12,
                    pcd: 431.8,
                    w: 500,
                },
                {
                    inch: '14"',
                    mm: 350,
                    a: 381.0,
                    b: 35.0,
                    c: 413,
                    d: 534.0,
                    m: 28,
                    n: 12,
                    pcd: 476.2,
                    w: 508,
                },
                {
                    inch: '16"',
                    mm: 400,
                    a: 406.4,
                    b: 36.5,
                    c: 470,
                    d: 597.0,
                    m: 28,
                    n: 16,
                    pcd: 539.0,
                    w: 508,
                },
            ] satisfies SizeRow[],
        },

        {
            kind: "table",
            id: "size-class-300",
            title: "Size Class 300",
            columns: [
                { key: "inch", header: "IN." },
                { key: "mm", header: "M.M.", align: "left" },
                { key: "a", header: "A", align: "left" },
                { key: "b", header: "B", align: "left" },
                { key: "c", header: "ØC", align: "left" },
                { key: "d", header: "ØD", align: "left" },
                { key: "m", header: "ØM", align: "left" },
                { key: "n", header: "N", align: "left" },
                { key: "pcd", header: "P.C.D.", align: "left" },
                { key: "w", header: "ØW", align: "left" },
            ],
            rows: [
                {
                    inch: '1.1/2"',
                    mm: 40,
                    a: 190.5,
                    b: 20.5,
                    c: 73,
                    d: 155.4,
                    m: 22,
                    n: 4,
                    pcd: 114.3,
                    w: 152,
                },
                {
                    inch: '2"',
                    mm: 50,
                    a: 215.9,
                    b: 22.0,
                    c: 92,
                    d: 166.0,
                    m: 19,
                    n: 8,
                    pcd: 127.0,
                    w: 203,
                },
                {
                    inch: '2.1/2"',
                    mm: 65,
                    a: 241.3,
                    b: 25.0,
                    c: 105,
                    d: 190.5,
                    m: 22,
                    n: 8,
                    pcd: 149.3,
                    w: 203,
                },
                {
                    inch: '3"',
                    mm: 80,
                    a: 282.5,
                    b: 28.5,
                    c: 127,
                    d: 209.5,
                    m: 22,
                    n: 8,
                    pcd: 168.1,
                    w: 254,
                },
                {
                    inch: '4"',
                    mm: 100,
                    a: 304.8,
                    b: 32.0,
                    c: 157,
                    d: 254.0,
                    m: 22,
                    n: 8,
                    pcd: 200.1,
                    w: 305,
                },
                {
                    inch: '5"',
                    mm: 125,
                    a: 381.0,
                    b: 35.0,
                    c: 186,
                    d: 279.4,
                    m: 22,
                    n: 8,
                    pcd: 234.9,
                    w: 356,
                },
                {
                    inch: '6"',
                    mm: 150,
                    a: 403.2,
                    b: 36.5,
                    c: 216,
                    d: 317.5,
                    m: 22,
                    n: 12,
                    pcd: 269.7,
                    w: 356,
                },
                {
                    inch: '8"',
                    mm: 200,
                    a: 419.1,
                    b: 41.0,
                    c: 270,
                    d: 381.0,
                    m: 25,
                    n: 12,
                    pcd: 330.2,
                    w: 407,
                },
                {
                    inch: '10"',
                    mm: 250,
                    a: 457.2,
                    b: 48.0,
                    c: 324,
                    d: 444.5,
                    m: 29,
                    n: 16,
                    pcd: 387.3,
                    w: 457,
                },
                {
                    inch: '12"',
                    mm: 300,
                    a: 501.6,
                    b: 51.0,
                    c: 381,
                    d: 520.7,
                    m: 32,
                    n: 16,
                    pcd: 450.8,
                    w: 508,
                },
                {
                    inch: '14"',
                    mm: 350,
                    a: 762.0,
                    b: 54.0,
                    c: 413,
                    d: 584.2,
                    m: 32,
                    n: 20,
                    pcd: 514.3,
                    w: 508,
                },
                {
                    inch: '16"',
                    mm: 400,
                    a: 838.2,
                    b: 57.0,
                    c: 470,
                    d: 647.7,
                    m: 35,
                    n: 20,
                    pcd: 571.5,
                    w: 508,
                },
            ] satisfies SizeRow[],
        },
    ],
    "globe-valve-flange-ends": [
        {
            kind: "table",
            id: "materials",
            title: "Material Specifications",
            columns: [
                { key: "no", header: "NO", className: "w-16" },
                { key: "description", header: "DESCRIPTION" },
                { key: "material", header: "MATERIAL" },
                { key: "qty", header: "QTY.", align: "left" },
            ],
            rows: [
                {
                    no: "01",
                    description: "BODY",
                    material: "ASTM A216 Gr. WCB / CF8 / CF8M",
                    qty: 1,
                },
                {
                    no: "02",
                    description: "BONNET",
                    material: "ASTM A216 Gr. WCB / CF8 / CF8M",
                    qty: 1,
                },
                {
                    no: "03",
                    description: "SEAT RING",
                    material: "AISI 410 (13% CR) SS 304 / 316",
                    qty: 1,
                },
                {
                    no: "04",
                    description: "DISC",
                    material: "AISI 410 (13% CR) SS 304 / 316",
                    qty: 1,
                },
                {
                    no: "05",
                    description: "STEM",
                    material: "AISI 410 (13% CR) SS 304 / 316",
                    qty: 1,
                },
                {
                    no: "06",
                    description: "STEM NUT",
                    material: "AISI 410 (13% CR) SS 304 / 316",
                    qty: 1,
                },
                {
                    no: "07",
                    description: "BACK SEAT",
                    material: "AISI 410 (13% CR) SS 304 / 316",
                    qty: 1,
                },
                {
                    no: "08",
                    description: "GLAND",
                    material: "CARBON STEEL",
                    qty: 1,
                },

                // GLAND PACKING shown as 2 material lines
                {
                    no: "09",
                    description: "GLAND PACKING",
                    material: "METALIC WIRE REINFORCED",
                    qty: "----",
                },
                {
                    no: "",
                    description: "",
                    material: "GRAPHOIL ASBESTOS",
                    qty: "",
                },

                {
                    no: "10",
                    description: "YOKE SLEEVE",
                    material: "SG IRON",
                    qty: 1,
                },

                // BONNET GASKET shown as 2 material lines
                {
                    no: "11",
                    description: "BONNET GASKET",
                    material: "ASBESTOS FILTER S.S. 304",
                    qty: 1,
                },
                {
                    no: "",
                    description: "",
                    material: "SPRIAL WOUNDED / CAF",
                    qty: "",
                },

                // BONNET STUD & NUT shown as 2 material lines
                {
                    no: "12",
                    description: "BONNET STUD & NUT",
                    material: "ASTM A 193 Gr. B7",
                    qty: "----",
                },
                {
                    no: "",
                    description: "",
                    material: "ASTM A 194 Gr. 2H",
                    qty: "",
                },

                // EYE BOLT & NUT shown as 2 material lines
                {
                    no: "13",
                    description: "EYE BOLT & NUT",
                    material: "ASTM A 193 Gr. B7",
                    qty: "2 SET",
                },
                {
                    no: "",
                    description: "",
                    material: "ASTM A 194 Gr. 2H",
                    qty: "",
                },

                {
                    no: "14",
                    description: "HAND WHEEL",
                    material: "SG IRON",
                    qty: 1,
                },
                {
                    no: "15",
                    description: "HAND WHEEL NUT",
                    material: "CARBON STEEL",
                    qty: 1,
                },
            ] satisfies MaterialSpecRow[],
        },

        {
            kind: "kv",
            id: "technical-data",
            title: "Technical Data",
            rows: [
                { label: "DESIGN & MANUFACTURING STD.", value: "BS 1873" },
                {
                    label: "TESTING & INSPECTION STD.",
                    value: "API 598 / BS 5146",
                },
                {
                    label: "END CONNECTIONS :",
                    value: "FLANGED AS PER ANSI B-16.5",
                },
                { label: "SHELL WALL THICKNESS", value: "ANSI B 16.34" },
                { label: "FACE TO FACE :", value: "AS PER ANSI / B 16.10" },
            ],
        },

        {
            kind: "table",
            id: "primary-service-rating",
            title: "Primary Service Rating & Test Pressure",
            columns: [
                { key: "class", header: "CLASS" },
                { key: "workingPres", header: "WORKING PRES." },
                { key: "temp", header: "TEMP." },
                { key: "hydBody", header: "HYD. TEST PRESS. (BODY)" },
                { key: "hydSeat", header: "HYD. TEST PRESS. (SEAT)" },
            ],
            rows: [
                {
                    class: 150,
                    workingPres: "150 PSIG",
                    temp: "500°F",
                    hydBody: "425 PSIG",
                    hydSeat: "300 PSIG",
                },
                {
                    class: 300,
                    workingPres: "300 PSIG",
                    temp: "800°F",
                    hydBody: "1100 PSIG",
                    hydSeat: "800 PSIG",
                },
            ] satisfies PrimaryServiceRow[],
        },

        {
            kind: "table",
            id: "size-class-150",
            title: "Size Class 150",
            columns: [
                { key: "inch", header: "IN." },
                { key: "mm", header: "M.M.", align: "left" },
                { key: "a", header: "A", align: "left" },
                { key: "b", header: "B", align: "left" },
                { key: "c", header: "ØC", align: "left" },
                { key: "d", header: "ØD", align: "left" },
                { key: "m", header: "ØM", align: "left" },
                { key: "n", header: "N", align: "left" },
                { key: "pcd", header: "P.C.D.", align: "left" },
                { key: "w", header: "ØW", align: "left" },
            ],
            rows: [
                {
                    inch: '1"',
                    mm: 25,
                    a: 127,
                    b: 11.0,
                    c: 51,
                    d: 108.0,
                    m: 16,
                    n: 4,
                    pcd: 79.2,
                    w: 100,
                },
                {
                    inch: '1.1/2"',
                    mm: 40,
                    a: 165,
                    b: 14.2,
                    c: 73,
                    d: 127.0,
                    m: 16,
                    n: 4,
                    pcd: 98.5,
                    w: 135,
                },
                {
                    inch: '2"',
                    mm: 50,
                    a: 203,
                    b: 15.7,
                    c: 92,
                    d: 152.0,
                    m: 19,
                    n: 4,
                    pcd: 120.6,
                    w: 200,
                },
                {
                    inch: '2.1/2"',
                    mm: 65,
                    a: 216,
                    b: 17.5,
                    c: 105,
                    d: 178.0,
                    m: 19,
                    n: 4,
                    pcd: 139.7,
                    w: 250,
                },
                {
                    inch: '3"',
                    mm: 80,
                    a: 241,
                    b: 19.0,
                    c: 127,
                    d: 190.5,
                    m: 19,
                    n: 4,
                    pcd: 152.4,
                    w: 250,
                },
                {
                    inch: '4"',
                    mm: 100,
                    a: 292,
                    b: 24.0,
                    c: 157,
                    d: 229.0,
                    m: 19,
                    n: 8,
                    pcd: 190.5,
                    w: 300,
                },
                {
                    inch: '5"',
                    mm: 125,
                    a: 356,
                    b: 24.0,
                    c: 186,
                    d: 254.0,
                    m: 22,
                    n: 8,
                    pcd: 215.9,
                    w: 350,
                },
                {
                    inch: '6"',
                    mm: 150,
                    a: 406,
                    b: 25.0,
                    c: 216,
                    d: 279.0,
                    m: 22,
                    n: 8,
                    pcd: 241.3,
                    w: 350,
                },
                {
                    inch: '8"',
                    mm: 200,
                    a: 495,
                    b: 28.5,
                    c: 270,
                    d: 343.0,
                    m: 22,
                    n: 8,
                    pcd: 298.4,
                    w: 400,
                },
                {
                    inch: '10"',
                    mm: 250,
                    a: 622,
                    b: 30.0,
                    c: 324,
                    d: 406.0,
                    m: 25,
                    n: 12,
                    pcd: 362.0,
                    w: 450,
                },
                {
                    inch: '12"',
                    mm: 300,
                    a: 698,
                    b: 32.0,
                    c: 381,
                    d: 483.0,
                    m: 25,
                    n: 12,
                    pcd: 431.8,
                    w: 500,
                },
            ] satisfies SizeRow[],
        },

        {
            kind: "table",
            id: "size-class-300",
            title: "Size Class 300",
            columns: [
                { key: "inch", header: "IN." },
                { key: "mm", header: "M.M.", align: "left" },
                { key: "a", header: "A", align: "left" },
                { key: "b", header: "B", align: "left" },
                { key: "c", header: "ØC", align: "left" },
                { key: "d", header: "ØD", align: "left" },
                { key: "m", header: "ØM", align: "left" },
                { key: "n", header: "N", align: "left" },
                { key: "pcd", header: "P.C.D.", align: "left" },
                { key: "w", header: "ØW", align: "left" },
            ],
            rows: [
                {
                    inch: '1"',
                    mm: 25,
                    a: 203.0,
                    b: 17.5,
                    c: 51,
                    d: 124.0,
                    m: 19,
                    n: 4,
                    pcd: 89.0,
                    w: 135,
                },
                {
                    inch: '1.1/2"',
                    mm: 40,
                    a: 229.0,
                    b: 20.5,
                    c: 73,
                    d: 155.5,
                    m: 22,
                    n: 4,
                    pcd: 114.3,
                    w: 200,
                },
                {
                    inch: '2"',
                    mm: 50,
                    a: 267.0,
                    b: 22.0,
                    c: 92,
                    d: 165.0,
                    m: 19,
                    n: 8,
                    pcd: 127.0,
                    w: 200,
                },
                {
                    inch: '2.1/2"',
                    mm: 65,
                    a: 292.0,
                    b: 25.0,
                    c: 105,
                    d: 190.5,
                    m: 22,
                    n: 8,
                    pcd: 149.3,
                    w: 200,
                },
                {
                    inch: '3"',
                    mm: 80,
                    a: 317.5,
                    b: 28.5,
                    c: 127,
                    d: 209.5,
                    m: 22,
                    n: 8,
                    pcd: 168.0,
                    w: 300,
                },
                {
                    inch: '4"',
                    mm: 100,
                    a: 356.0,
                    b: 32.0,
                    c: 157,
                    d: 254.0,
                    m: 22,
                    n: 8,
                    pcd: 200.0,
                    w: 350,
                },
                {
                    inch: '5"',
                    mm: 125,
                    a: 400.0,
                    b: 35.0,
                    c: 186,
                    d: 279.4,
                    m: 22,
                    n: 8,
                    pcd: 235.0,
                    w: 350,
                },
                {
                    inch: '6"',
                    mm: 150,
                    a: 444.5,
                    b: 36.5,
                    c: 216,
                    d: 317.5,
                    m: 22,
                    n: 12,
                    pcd: 269.7,
                    w: 400,
                },
                {
                    inch: '8"',
                    mm: 200,
                    a: 559.0,
                    b: 41.0,
                    c: 270,
                    d: 381.0,
                    m: 25,
                    n: 12,
                    pcd: 330.2,
                    w: 550,
                },
                {
                    inch: '10"',
                    mm: 250,
                    a: 622.0,
                    b: 47.5,
                    c: 324,
                    d: 444.5,
                    m: 28,
                    n: 16,
                    pcd: 387.4,
                    w: 600,
                },
                {
                    inch: '12"',
                    mm: 300,
                    a: 711.0,
                    b: 51.0,
                    c: 381,
                    d: 521.0,
                    m: 32,
                    n: 16,
                    pcd: 450.8,
                    w: 600,
                },
            ] satisfies SizeRow[],
        },
    ],
    "2pc-ball-valve": [
        {
            kind: "table",
            id: "materials",
            title: "Material Specifications",
            columns: [
                { key: "no", header: "NO", className: "w-16" },
                { key: "description", header: "DESCRIPTION" },
                { key: "material", header: "MATERIAL" },
                { key: "qty", header: "QTY.", align: "left" },
            ],
            rows: [
                {
                    no: "01",
                    description: "BODY",
                    material: "C.S. / Cf8 / CF8M",
                    qty: 1,
                },
                {
                    no: "02",
                    description: "BODY CONNECTOR",
                    material: "C.S. / Cf8 / CF8M",
                    qty: 1,
                },
                {
                    no: "03",
                    description: "BALL",
                    material: "S.S. 202 / 304 / 3016",
                    qty: 1,
                },
                {
                    no: "04",
                    description: "STEM",
                    material: "S.S. 202 / 304 / 316",
                    qty: 1,
                },
                {
                    no: "05",
                    description: "GLAND NUT",
                    material: "S.S. 202 / 304 / 316 / M.S.",
                    qty: 1,
                },
                {
                    no: "06",
                    description: "GLAND BUSH",
                    material: "S.S. 202 / 304 / 316 / M.S.",
                    qty: 1,
                },
                {
                    no: "07",
                    description: "LOCK NUT",
                    material: "S.S. 202 / 304 / 316 / M.S.",
                    qty: 1,
                },
                {
                    no: "08",
                    description: "SEAT RING",
                    material: "PTFE",
                    qty: 2,
                },
                {
                    no: "09",
                    description: "SEAT SEAL",
                    material: "PTFE",
                    qty: 2,
                },
                {
                    no: "10",
                    description: "BODY SEALENT RING",
                    material: "PTFE",
                    qty: 1,
                },
                {
                    no: "11",
                    description: "LEVER",
                    material: "M.S. / S.S. 304 / S.S. 316",
                    qty: 1,
                },
                {
                    no: "12",
                    description: "STOPPER PIN",
                    material: "M.S. / S.S. 304 / S.S. 316",
                    qty: 1,
                },
                {
                    no: "13",
                    description: "STUD & NUT",
                    material: "M.S. / S.S.",
                    qty: "----",
                },
            ] satisfies MaterialSpecRow[],
        },

        {
            kind: "kv",
            id: "technical-data",
            title: "Technical Data",
            rows: [
                {
                    label: "DESIGN & MANUFACTURING STD.",
                    value: "BS 5351 / API 6 D",
                },
                {
                    label: "TESTING & INSPECTION STD.",
                    value: "API 598 / BS 5146",
                },
                {
                    label: "END CONNECTIONS :",
                    value: "FLANGED AS PER ANSI B 16.5",
                },
                { label: "SOCKET WELD ENDS", value: "" },
                { label: "FACE TO FACE :", value: "AS PER ANSI B 16.10" },
            ],
        },

        {
            kind: "table",
            id: "primary-service-rating",
            title: "Primary Service Rating & Test Pressure",
            columns: [
                { key: "class", header: "CLASS" },
                { key: "workingPres", header: "WORKING PRES." },
                { key: "temp", header: "TEMP." },
                { key: "hydBody", header: "HYD. TEST PRESS. (BODY)" },
                { key: "hydSeat", header: "HYD. TEST PRESS. (SEAT)" },
            ],
            rows: [
                {
                    class: 150,
                    workingPres: "150 PSIG",
                    temp: "180°F",
                    hydBody: "425 PSIG",
                    hydSeat: "300 PSIG",
                },
                {
                    class: 300,
                    workingPres: "300 PSIG",
                    temp: "200°F",
                    hydBody: "1100 PSIG",
                    hydSeat: "800 PSIG",
                },
            ] satisfies PrimaryServiceRow[],
        },

        {
            kind: "table",
            id: "size-class-150",
            title: "Size Class 150",
            columns: [
                { key: "inch", header: "IN." },
                { key: "mm", header: "M.M.", align: "left" },
                { key: "a", header: "A", align: "left" },
                { key: "b", header: "B", align: "left" },
                { key: "c", header: "ØC", align: "left" },
                { key: "d", header: "ØD", align: "left" },
                { key: "m", header: "ØM", align: "left" },
                { key: "n", header: "N", align: "left" },
                { key: "pcd", header: "P.C.D.", align: "left" },
            ],
            rows: [
                {
                    inch: '1/2"',
                    mm: 15,
                    a: 108,
                    b: 10.0,
                    c: 35,
                    d: 89.0,
                    m: 16,
                    n: 4,
                    pcd: 60.4,
                },
                {
                    inch: '3/4"',
                    mm: 20,
                    a: 118,
                    b: 10.5,
                    c: 43,
                    d: 98.0,
                    m: 16,
                    n: 4,
                    pcd: 69.8,
                },
                {
                    inch: '1"',
                    mm: 25,
                    a: 127,
                    b: 11.0,
                    c: 51,
                    d: 108.0,
                    m: 16,
                    n: 4,
                    pcd: 79.2,
                },
                {
                    inch: '1.1/4"',
                    mm: 32,
                    a: 140,
                    b: 12.7,
                    c: 64,
                    d: 117.0,
                    m: 16,
                    n: 4,
                    pcd: 88.9,
                },
                {
                    inch: '1.1/2"',
                    mm: 40,
                    a: 165,
                    b: 14.2,
                    c: 73,
                    d: 127.0,
                    m: 16,
                    n: 4,
                    pcd: 98.5,
                },
                {
                    inch: '2"',
                    mm: 50,
                    a: 178,
                    b: 15.7,
                    c: 92,
                    d: 152.0,
                    m: 19,
                    n: 4,
                    pcd: 120.6,
                },
                {
                    inch: '2.1/2"',
                    mm: 65,
                    a: 191,
                    b: 17.5,
                    c: 105,
                    d: 178.0,
                    m: 19,
                    n: 4,
                    pcd: 139.7,
                },
                {
                    inch: '3"',
                    mm: 80,
                    a: 203,
                    b: 19.0,
                    c: 127,
                    d: 190.5,
                    m: 19,
                    n: 4,
                    pcd: 152.4,
                },
                {
                    inch: '4"',
                    mm: 100,
                    a: 229,
                    b: 24.0,
                    c: 157,
                    d: 229.0,
                    m: 19,
                    n: 8,
                    pcd: 190.5,
                },
                {
                    inch: '5"',
                    mm: 125,
                    a: 254,
                    b: 24.0,
                    c: 186,
                    d: 254.0,
                    m: 22,
                    n: 8,
                    pcd: 215.9,
                },
                {
                    inch: '6"',
                    mm: 150,
                    a: 267,
                    b: 25.0,
                    c: 216,
                    d: 279.0,
                    m: 22,
                    n: 8,
                    pcd: 241.3,
                },
                {
                    inch: '8"',
                    mm: 200,
                    a: 292,
                    b: 28.5,
                    c: 270,
                    d: 343.0,
                    m: 22,
                    n: 8,
                    pcd: 298.4,
                },
                {
                    inch: '10"',
                    mm: 250,
                    a: 330,
                    b: 30.0,
                    c: 324,
                    d: 406.0,
                    m: 25,
                    n: 12,
                    pcd: 362.0,
                },
            ] satisfies Partial<SizeRow>[],
        },

        {
            kind: "table",
            id: "size-class-300",
            title: "Size Class 300",
            columns: [
                { key: "inch", header: "IN." },
                { key: "mm", header: "M.M.", align: "left" },
                { key: "a", header: "A", align: "left" },
                { key: "b", header: "B", align: "left" },
                { key: "c", header: "ØC", align: "left" },
                { key: "d", header: "D", align: "left" },
                { key: "m", header: "ØM", align: "left" },
                { key: "n", header: "N", align: "left" },
                { key: "pcd", header: "P.C.D.", align: "left" },
            ],
            rows: [
                {
                    inch: '1"',
                    mm: 25,
                    a: 165.0,
                    b: 17.5,
                    c: 51,
                    d: 124.0,
                    m: 19,
                    n: 4,
                    pcd: 88.9,
                },
                {
                    inch: '1.1/2"',
                    mm: 40,
                    a: 190.5,
                    b: 20.5,
                    c: 73,
                    d: 155.5,
                    m: 22,
                    n: 4,
                    pcd: 114.3,
                },
                {
                    inch: '2"',
                    mm: 50,
                    a: 216.0,
                    b: 22.0,
                    c: 92,
                    d: 165.0,
                    m: 19,
                    n: 8,
                    pcd: 127.0,
                },
                {
                    inch: '2.1/2"',
                    mm: 65,
                    a: 241.0,
                    b: 25.0,
                    c: 105,
                    d: 190.5,
                    m: 22,
                    n: 8,
                    pcd: 149.3,
                },
                {
                    inch: '3"',
                    mm: 80,
                    a: 282.5,
                    b: 28.5,
                    c: 127,
                    d: 209.5,
                    m: 22,
                    n: 8,
                    pcd: 168.0,
                },
                {
                    inch: '4"',
                    mm: 100,
                    a: 305.0,
                    b: 32.0,
                    c: 157,
                    d: 254.0,
                    m: 22,
                    n: 8,
                    pcd: 200.0,
                },
                {
                    inch: '5"',
                    mm: 125,
                    a: 381.0,
                    b: 35.0,
                    c: 186,
                    d: 279.4,
                    m: 22,
                    n: 8,
                    pcd: 235.0,
                },
                {
                    inch: '6"',
                    mm: 150,
                    a: 403.0,
                    b: 36.5,
                    c: 216,
                    d: 317.5,
                    m: 22,
                    n: 12,
                    pcd: 269.7,
                },
                {
                    inch: '8"',
                    mm: 200,
                    a: 419.0,
                    b: 41.0,
                    c: 270,
                    d: 381.0,
                    m: 25,
                    n: 12,
                    pcd: 330.2,
                },
                {
                    inch: '10"',
                    mm: 250,
                    a: 457.0,
                    b: 47.5,
                    c: 324,
                    d: 444.5,
                    m: 28,
                    n: 16,
                    pcd: 387.4,
                },
            ] satisfies Partial<SizeRow>[],
        },
    ],
    "dual-plate-check-valve": [
        {
            kind: "table",
            id: "materials",
            title: "Material Specifications",
            columns: [
                { key: "no", header: "NO", className: "w-16" },
                { key: "partName", header: "PART NAME" },
                { key: "material", header: "MATERIAL" },
                { key: "qty", header: "QTY.", align: "left" },
            ],
            rows: [
                {
                    no: "01",
                    partName: "BODY",
                    material: "C.I. - IS:210 GR. FG 200 /",
                    qty: 1,
                },
                {
                    no: "",
                    partName: "",
                    material: "ASTM A 216 GR. WCB",
                    qty: "",
                },
                {
                    no: "02",
                    partName: "DISC",
                    material: "A 351 GR. CF8",
                    qty: 2,
                },
                {
                    no: "03",
                    partName: "HINGE PIN",
                    material: "AISI 304 / AISI 316",
                    qty: 1,
                },
                {
                    no: "04",
                    partName: "PLUG",
                    material: "AISI 304 / AISI 316",
                    qty: 2,
                },
                {
                    no: "05",
                    partName: "STOP PIN",
                    material: "AISI 304 / AISI 316",
                    qty: 1,
                },
                {
                    no: "06",
                    partName: "SPRING",
                    material: "AISI 304 / AISI 316",
                    qty: 2,
                },
                {
                    no: "07",
                    partName: "BEARING",
                    material: "AISI 304 / AISI 316",
                    qty: 1,
                },
                {
                    no: "08",
                    partName: "SEAT",
                    material: "NBR, EPDM, VITION",
                    qty: 1,
                },
            ] satisfies DualPlateMaterialRow[],
        },

        {
            kind: "kv",
            id: "technical-data",
            title: "Technical Data",
            rows: [
                { label: "DESIGN & MANUFACTURING STD.", value: "API 594" },
                { label: "TESTING & INSPECTION STD.", value: "API 598" },
                {
                    label: "END CONNECTIONS",
                    value: "WAFER TYPE SUIT TO ANSI B 16.5 (150#)",
                },
                { label: "FACE TO FACE", value: "API 594" },
            ],
        },

        {
            kind: "table",
            id: "size-dimension",
            title: "Size Dimension",
            columns: [
                { key: "inch", header: "IN" },
                { key: "mm", header: "MM", align: "left" },
                { key: "a", header: "ØA", align: "left" },
                { key: "b", header: "ØB", align: "left" },
                { key: "d", header: "ØD", align: "left" },
            ],
            rows: [
                { inch: '2"', mm: 50, a: 50, b: 60, d: 105 },
                { inch: '2.1/2"', mm: 65, a: 65, b: 75, d: 124 },
                { inch: '3"', mm: 80, a: 76, b: 90, d: 134 },
                { inch: '4"', mm: 100, a: 100, b: 115, d: 172 },
                { inch: '5"', mm: 125, a: 125, b: 135, d: 196 },
                { inch: '6"', mm: 150, a: 150, b: 165, d: 220 },
                { inch: '8"', mm: 200, a: 200, b: 220, d: 276 },
                { inch: '10"', mm: 250, a: 250, b: 265, d: 338 },
                { inch: '12"', mm: 300, a: 300, b: 320, d: 407 },
                { inch: '14"', mm: 350, a: 350, b: 350, d: 448 },
                { inch: '16"', mm: 400, a: 400, b: 400, d: 514 },
                { inch: '18"', mm: 450, a: 450, b: 450, d: 549 },
                { inch: '20"', mm: 500, a: 500, b: 500, d: 603 },
                { inch: '24"', mm: 600, a: 600, b: 600, d: 718 },
            ] satisfies DualPlateSizeRow[],
        },

        {
            kind: "table",
            id: "primary-service-rating",
            title: "Primary Service Rating & Test Pressure",
            columns: [
                { key: "class", header: "CLASS" },
                { key: "workingPressure", header: "WORKING PRESSURE" },
                { key: "temp", header: "TEMP." },
                { key: "hydBody", header: "HYD. TEST PRESSURE (BODY)" },
                { key: "hydSeat", header: "HYD. TEST PRESSURE (SEAT)" },
            ],
            rows: [
                {
                    class: 150,
                    workingPressure: "20°F TO 180°F",
                    temp: "",
                    hydBody: "21 PSIG",
                    hydSeat: "11 PSIG",
                },
            ] satisfies DualPlatePrimaryRow[],
        },
    ],
    "wafer-type-check-valve": [
        {
            kind: "table",
            id: "materials",
            title: "Material Specifications",
            columns: [
                { key: "no", header: "NO", className: "w-16" },
                { key: "description", header: "DESCRIPTION" },
                { key: "material", header: "MATERIAL" },
                { key: "qty", header: "QTY.", align: "left" },
            ],
            rows: [
                {
                    no: "01",
                    description: "BODY",
                    material: "C.I. / M.S. / Cf8 / CF8M / Cf3 / CF3M",
                    qty: 1,
                },
                {
                    no: "02",
                    description: "DISC",
                    material: "C.I. / M.S. / Cf8 / CF8M / Cf3 / CF3M",
                    qty: 1,
                },
                {
                    no: "03",
                    description: "'O' RING",
                    material: "NITRILE, EPDM, VTION,",
                    qty: 1,
                },
                { no: "", description: "", material: "SILICON, PTEE", qty: "" },
                {
                    no: "04",
                    description: "HINGE PIN",
                    material: "AISI 304, 316, M.S.",
                    qty: 1,
                },
                {
                    no: "05",
                    description: "LIFTING HOOK",
                    material: "M.S. / S.S.",
                    qty: 1,
                },
            ] satisfies WaferMaterialRow[],
        },

        {
            kind: "kv",
            id: "technical-data",
            title: "Technical Data",
            rows: [
                {
                    label: "DESIGN & MANUFACTURING STD.",
                    value: "API 6D / ANSI B 16.34",
                },
                { label: "TESTING & INSPECTION STD.", value: "API 598" },
                { label: "PRESSURE CLASS", value: "150#" },
            ],
        },

        {
            kind: "table",
            id: "primary-service-rating",
            title: "Primary Service Rating & Test Pressure",
            columns: [
                { key: "class", header: "CLASS" },
                { key: "workingPressure", header: "WORKING PRESSURE" },
                { key: "temp", header: "TEMP." },
                { key: "hydBody", header: "HYD. TEST PRESSURE (BODY)" },
                { key: "hydSeat", header: "HYD. TEST PRESSURE (SEAT)" },
            ],
            rows: [
                {
                    class: "150 #",
                    workingPressure: "20°F TO 180°F",
                    temp: "",
                    hydBody: "225 PSIG",
                    hydSeat: "150 PSIG",
                },
            ] satisfies WaferPrimaryRow[],
        },

        {
            kind: "table",
            id: "size-dimension",
            title: "Size Dimension",
            columns: [
                { key: "inch", header: "IN" },
                { key: "mm", header: "MM", align: "left" },
                { key: "a", header: "ØA", align: "left" },
                { key: "b", header: "B", align: "left" },
                { key: "c", header: "ØC", align: "left" },
            ],
            rows: [
                { inch: '1"', mm: 25, a: 14, b: 16, c: 64 },
                { inch: '1.1/2"', mm: 40, a: 22, b: 19, c: 86 },
                { inch: '2"', mm: 50, a: 30, b: 19, c: 104 },
                { inch: '2.1/2"', mm: 65, a: 40, b: 19, c: 123 },
                { inch: '3"', mm: 80, a: 52, b: 19, c: 136 },
                { inch: '4"', mm: 100, a: 71, b: 19, c: 174 },
                { inch: '5"', mm: 125, a: 93, b: 19, c: 196 },
                { inch: '6"', mm: 150, a: 114, b: 19, c: 221 },
                { inch: '8"', mm: 200, a: 157, b: 28, c: 278 },
                { inch: '10"', mm: 250, a: 195, b: 28, c: 339 },
                { inch: '12"', mm: 300, a: 230, b: 38, c: 409 },
                { inch: '14"', mm: 350, a: 270, b: 44, c: 449 },
                { inch: '16"', mm: 400, a: 310, b: 50, c: 512 },
                { inch: '18"', mm: 450, a: 360, b: 60, c: 545 },
                { inch: '20"', mm: 500, a: 406, b: 63, c: 605 },
                { inch: '24"', mm: 600, a: 490, b: 70, c: 714 },
            ] satisfies WaferSizeRow[],
        },
    ],
    "lever-operated-butterfly-valve": [
        {
            kind: "table",
            id: "materials",
            title: "Material Specifications",
            columns: [
                { key: "no", header: "NO", className: "w-16" },
                { key: "description", header: "DESCRIPTION" },
                { key: "material", header: "MATERIAL" },
                { key: "qty", header: "QTY.", align: "left" },
            ],
            rows: [
                {
                    no: "01",
                    description: "BODY",
                    material: "CAST IRON. CAST STEEL / SS 304 - 316",
                    qty: 1,
                },
                {
                    no: "02",
                    description: "DISC",
                    material: "CI / SG IRON / CAST STEEL / SS 304 - 316",
                    qty: 1,
                },
                {
                    no: "03",
                    description: "SPINDLE",
                    material: "SS 410 / 304 / 316",
                    qty: 1,
                },
                {
                    no: "04",
                    description: "BODY LINING",
                    material: "NITRILE / EPDM / SILICON / VITON / HYPALON",
                    qty: "-",
                },
                {
                    no: "05",
                    description: '"O" RING',
                    material: "NITRILE / EPDM",
                    qty: 1,
                },
                {
                    no: "06",
                    description: "PIN",
                    material: "SS 304 / 316",
                    qty: 1,
                },
                {
                    no: "07",
                    description: "LEVER",
                    material: "MS FABRICATED",
                    qty: 1,
                },
            ] satisfies ButterflyLeverMaterialRow[],
        },

        {
            kind: "table",
            id: "seat-type-temp-range",
            title: "Seat Type Temperature Range",
            columns: [
                { key: "seatType", header: "SEAT TYPE" },
                { key: "min", header: "MINIMUM" },
                { key: "max", header: "MAXIMUM" },
            ],
            rows: [
                {
                    seatType: "NITRILE",
                    min: "-13° F (-25° C)",
                    max: "212° F (100° C)",
                },
                {
                    seatType: "EPDM",
                    min: "-13° F (-25° C)",
                    max: "250° F (120° C)",
                },
                {
                    seatType: "SILICON",
                    min: "-58° F (-50° C)",
                    max: "356° F (180° C)",
                },
                {
                    seatType: "VITON",
                    min: "-23° F (-5° C)",
                    max: "392° F (200° C)",
                },
                {
                    seatType: "HYPALON",
                    min: "-4° F (-20° C)",
                    max: "250° F (120° C)",
                },
            ] satisfies SeatTempRow[],
        },

        {
            kind: "kv",
            id: "technical-data",
            title: "Technical Data",
            rows: [
                {
                    label: "DESIGN & MANUFACTURING STD.",
                    value: "BS 5155 / API 609 / EN 593 / IS 13095",
                },
                {
                    label: "FACE TO FACE DIMENSION",
                    value: "BS 5155 / ISO 5792 / API 609",
                },
                { label: "TOP FLANGE DRILLING", value: "ISO 5211" },
                {
                    label: "INSPECTION & TESTING",
                    value: "BS 6755 PART -1 / API 598 / EN 1266-1",
                },
                {
                    label: "FLANGE STANDARD CONFORMITY",
                    value: "ANSI 150 / ANSI 125 / BS 10 TAB D & E",
                },
                { label: "", value: "IS 6392 NP 0.6 / 1.0 / 1.6" },
            ],
        },

        {
            kind: "table",
            id: "size",
            title: "Size",
            columns: [
                { key: "inch", header: "IN." },
                { key: "mm", header: "M.M.", align: "left" },
                { key: "a", header: "A", align: "left" },
                { key: "b", header: "B", align: "left" },
                { key: "c", header: "C", align: "left" },
                { key: "d", header: "D", align: "left" },
                { key: "e", header: "E", align: "left" },
                { key: "f", header: "F", align: "left" },
                { key: "g", header: "G", align: "left" },
                {
                    key: "topFlange",
                    header: "TOP FLANGE MOUTING (I.S.O. 5211)",
                    align: "left",
                },
            ],
            rows: [
                {
                    inch: '1.1/2"',
                    mm: 40,
                    a: 36,
                    b: 92,
                    c: 52,
                    d: 40,
                    e: 65,
                    f: 180,
                    g: 15,
                    topFlange: "F 05",
                },
                {
                    inch: '2"',
                    mm: 50,
                    a: 43,
                    b: 103,
                    c: 70,
                    d: 50,
                    e: 65,
                    f: 180,
                    g: 15,
                    topFlange: "F 05",
                },
                {
                    inch: '2.1/2"',
                    mm: 65,
                    a: 46,
                    b: 110,
                    c: 76,
                    d: 63,
                    e: 65,
                    f: 180,
                    g: 15,
                    topFlange: "F 05",
                },
                {
                    inch: '3"',
                    mm: 80,
                    a: 46,
                    b: 118,
                    c: 85,
                    d: 76,
                    e: 65,
                    f: 215,
                    g: 15,
                    topFlange: "F 05",
                },
                {
                    inch: '4"',
                    mm: 100,
                    a: 52,
                    b: 148,
                    c: 102,
                    d: 100,
                    e: 65,
                    f: 215,
                    g: 15,
                    topFlange: "F 05",
                },
                {
                    inch: '5"',
                    mm: 125,
                    a: 56,
                    b: 164,
                    c: 115,
                    d: 125,
                    e: 65,
                    f: 215,
                    g: 15,
                    topFlange: "F 05",
                },
                {
                    inch: '6"',
                    mm: 150,
                    a: 56,
                    b: 176,
                    c: 130,
                    d: 150,
                    e: 65,
                    f: 265,
                    g: 15,
                    topFlange: "F 05",
                },
                {
                    inch: '8"',
                    mm: 200,
                    a: 60,
                    b: 230,
                    c: 156,
                    d: 200,
                    e: 75,
                    f: 325,
                    g: 15,
                    topFlange: "F 07",
                },
            ] satisfies ButterflyLeverSizeRow[],
        },

        {
            kind: "table",
            id: "pressure-rating-tests",
            title: "Pressure Rating",
            columns: [
                { key: "pressureRating", header: "PRESSURE RATING" },
                {
                    key: "shellKgCm2",
                    header: "SHELL TEST (KG / CM2)",
                    align: "left",
                },
                {
                    key: "shellPsig",
                    header: "SHELL TEST (PSIG)",
                    align: "left",
                },
                {
                    key: "seatKgCm2",
                    header: "SEAT TEST (KG / CM2)",
                    align: "left",
                },
                {
                    key: "seatPsig",
                    header: "SEAT TEST (PSIG)",
                    align: "left",
                },
            ],
            rows: [
                {
                    pressureRating: "PN 16",
                    shellKgCm2: 22,
                    shellPsig: 310,
                    seatKgCm2: 16,
                    seatPsig: 225,
                },
                {
                    pressureRating: "PN 10",
                    shellKgCm2: 15,
                    shellPsig: 210,
                    seatKgCm2: 10,
                    seatPsig: 140,
                },
            ] satisfies ButterflyPressureRow[],
        },
    ],
    "gear-operated-butterfly-valve": [
        {
            kind: "table",
            id: "materials",
            title: "Material Specifications",
            columns: [
                { key: "no", header: "NO", className: "w-16" },
                { key: "description", header: "DESCRIPTION" },
                { key: "material", header: "MATERIAL" },
                { key: "qty", header: "QTY.", align: "left" },
            ],
            rows: [
                {
                    no: "01",
                    description: "BODY",
                    material: "CAST IRON. CAST STEEL / SS 304 - 316",
                    qty: 1,
                },
                {
                    no: "02",
                    description: "DISC",
                    material: "CI / SG IRON / CAST STEEL / SS 304 - 316",
                    qty: 1,
                },
                {
                    no: "03",
                    description: "SPINDLE",
                    material: "SS 410 / 304 / 316",
                    qty: 1,
                },
                {
                    no: "04",
                    description: "BODY LINING",
                    material: "NITRILE / EPDM / SILICON / VITON / HYPALON",
                    qty: "-",
                },
                {
                    no: "05",
                    description: '"O" RING',
                    material: "NITRILE / EPDM",
                    qty: 1,
                },
                {
                    no: "06",
                    description: "PIN",
                    material: "SS 304 / 316",
                    qty: 1,
                },
                {
                    no: "07",
                    description: "GEAR BOX",
                    material: "CAST IRON",
                    qty: 1,
                },
                {
                    no: "08",
                    description: "LEVER",
                    material: "MS FABRICATED",
                    qty: 1,
                },
            ] satisfies ButterflyLeverMaterialRow[],
        },

        {
            kind: "table",
            id: "seat-type-temp-range",
            title: "Seat Type Temperature Range",
            columns: [
                { key: "seatType", header: "SEAT TYPE" },
                { key: "min", header: "MINIMUM" },
                { key: "max", header: "MAXIMUM" },
            ],
            rows: [
                {
                    seatType: "NITRILE",
                    min: "-13° F (-25° C)",
                    max: "212° F (100° C)",
                },
                {
                    seatType: "EPDM",
                    min: "-13° F (-25° C)",
                    max: "250° F (120° C)",
                },
                {
                    seatType: "SILICON",
                    min: "-58° F (-50° C)",
                    max: "356° F (180° C)",
                },
                {
                    seatType: "VITON",
                    min: "-23° F (-5° C)",
                    max: "392° F (200° C)",
                },
                {
                    seatType: "HYPALON",
                    min: "-4° F (-20° C)",
                    max: "250° F (120° C)",
                },
            ] satisfies SeatTempRow[],
        },

        {
            kind: "kv",
            id: "technical-data",
            title: "Technical Data",
            rows: [
                {
                    label: "DESIGN & MANUFACTURING STD.",
                    value: "BS 5155 / API 609 / EN 593 / IS 13095",
                },
                {
                    label: "FACE TO FACE DIMENSION",
                    value: "BS 5155 / ISO 5792 / API 609",
                },
                { label: "TOP FLANGE DRILLING", value: "ISO 5211" },
                {
                    label: "INSPECTION & TESTING",
                    value: "BS 6755 PART -1 / API 598 / EN 1266-1",
                },
                {
                    label: "FLANGE STANDARD CONFORMITY",
                    value: "ANSI 150 / ANSI 125 / BS 10 TAB D & E",
                },
                { label: "", value: "IS 6392 NP 0.6 / 1.0 / 1.6" },
            ],
        },

        {
            kind: "table",
            id: "size",
            title: "Size",
            columns: [
                { key: "inch", header: "IN." },
                { key: "mm", header: "M.M.", align: "left" },
                { key: "a", header: "A", align: "left" },
                { key: "b", header: "B", align: "left" },
                { key: "c", header: "C", align: "left" },
                { key: "d", header: "D", align: "left" },
                { key: "e", header: "E", align: "left" },
                { key: "f", header: "F", align: "left" },
                { key: "g", header: "G", align: "left" },
                {
                    key: "topFlange",
                    header: "TOP FLANGE MOUTING (I.S.O. 5211)",
                    align: "left",
                },
            ],
            rows: [
                {
                    inch: '8"',
                    mm: 200,
                    a: 60,
                    b: 230,
                    c: 156,
                    d: 200,
                    e: 285,
                    f: 300,
                    g: 15,
                    topFlange: "F 10",
                },
                {
                    inch: '10"',
                    mm: 250,
                    a: 68,
                    b: 266,
                    c: 196,
                    d: 250,
                    e: 285,
                    f: 350,
                    g: 18,
                    topFlange: "F 10",
                },
                {
                    inch: '12"',
                    mm: 300,
                    a: 78,
                    b: 300,
                    c: 230,
                    d: 298,
                    e: 285,
                    f: 350,
                    g: 18,
                    topFlange: "F 12",
                },
                {
                    inch: '14"',
                    mm: 350,
                    a: 92,
                    b: 320,
                    c: 272,
                    d: 348,
                    e: 300,
                    f: 350,
                    g: 22,
                    topFlange: "F 12",
                },
                {
                    inch: '16"',
                    mm: 400,
                    a: 102,
                    b: 385,
                    c: 302,
                    d: 394,
                    e: 305,
                    f: 500,
                    g: 22,
                    topFlange: "F 14",
                },
                {
                    inch: '18"',
                    mm: 450,
                    a: 114,
                    b: 405,
                    c: 325,
                    d: 433,
                    e: 305,
                    f: 500,
                    g: 22,
                    topFlange: "F 14",
                },
            ] satisfies ButterflyLeverSizeRow[],
        },

        {
            kind: "table",
            id: "pressure-rating-tests",
            title: "Pressure Rating",
            columns: [
                { key: "pressureRating", header: "PRESSURE RATING" },
                {
                    key: "shellKgCm2",
                    header: "SHELL TEST (KG / CM2)",
                    align: "left",
                },
                {
                    key: "shellPsig",
                    header: "SHELL TEST (PSIG)",
                    align: "left",
                },
                {
                    key: "seatKgCm2",
                    header: "SEAT TEST (KG / CM2)",
                    align: "left",
                },
                {
                    key: "seatPsig",
                    header: "SEAT TEST (PSIG)",
                    align: "left",
                },
            ],
            rows: [
                {
                    pressureRating: "PN 16",
                    shellKgCm2: 22,
                    shellPsig: 310,
                    seatKgCm2: 16,
                    seatPsig: 225,
                },
                {
                    pressureRating: "PN 10",
                    shellKgCm2: 15,
                    shellPsig: 210,
                    seatKgCm2: 10,
                    seatPsig: 140,
                },
            ] satisfies ButterflyPressureRow[],
        },
    ],
    "knife-edge-gate-valve": [
        {
            kind: "table",
            id: "materials",
            title: "Material Specifications",
            columns: [
                { key: "no", header: "NO", className: "w-16" },
                { key: "description", header: "DESCRIPTION" },
                { key: "material", header: "MATERIAL" },
                { key: "qty", header: "QTY.", align: "left" },
            ],
            rows: [
                {
                    no: "01",
                    description: "BODY",
                    material: "WCB / CF 8 / CF8M",
                    qty: 1,
                },
                {
                    no: "02",
                    description: "GATE",
                    material: "SS 410 / SS 304 / SS 316",
                    qty: 1,
                },
                {
                    no: "03",
                    description: "SEAT",
                    material: "METAL TO METAL,",
                    qty: 1,
                },
                { no: "", description: "", material: "EPDM, PTFE", qty: "" },
                {
                    no: "04",
                    description: "GLAND PACKING",
                    material: "PTFE / GRAPHITE",
                    qty: 1,
                },
                {
                    no: "05",
                    description: "GLAND",
                    material: "CI / WCB / Cf8 / CF8M",
                    qty: 1,
                },
                {
                    no: "06",
                    description: "STEM",
                    material: "SS 410 / SS 304",
                    qty: 1,
                },
                {
                    no: "07",
                    description: "YOKE SLEEV",
                    material: "GUN METAL",
                    qty: 1,
                },
                {
                    no: "08",
                    description: "STEAM NUT",
                    material: "SG IRON",
                    qty: 1,
                },
                {
                    no: "09",
                    description: "HAND WHEEL",
                    material: "SG IRON",
                    qty: 1,
                },
                {
                    no: "10",
                    description: "NUT & BOLTS",
                    material: "CS / MS",
                    qty: 4,
                },
            ] satisfies KnifeEdgeMaterialRow[],
        },

        {
            kind: "kv",
            id: "technical-data",
            title: "Technical Data",
            rows: [
                { label: "DESIGN & MANUFACTURING STD.", value: "MSS - SP 81" },
                { label: "FACE TO FACE :", value: "" },
                { label: "END CONNECTIONS :", value: "" },
                { label: "TESTING STD. :", value: "MSS - SP 81" },
            ],
        },

        {
            kind: "table",
            id: "primary-service-rating",
            title: "Primary Service Rating & Test Pressure",
            columns: [
                { key: "class", header: "CLASS" },
                { key: "workingPressure", header: "WORKING PRESSURE" },
                { key: "temp", header: "TEMP." },
                { key: "hydBody", header: "HYD. TEST PRESSURE (BODY)" },
                { key: "hydSeat", header: "HYD. TEST PRESSURE (SEAT)" },
            ],
            rows: [
                {
                    class: 150,
                    workingPressure: "150 PSIG (21 Kg/Cm²)",
                    temp: "200° F",
                    hydBody: "425 PSIG",
                    hydSeat: "40 PSIG",
                },
            ] satisfies KnifeEdgePrimaryRow[],
        },

        {
            kind: "table",
            id: "size-class-150",
            title: "Size Class 150",
            columns: [
                { key: "inch", header: "IN." },
                { key: "mm", header: "M.M.", align: "left" },
                { key: "a", header: "A", align: "left" },
                { key: "c", header: "ØC", align: "left" },
                { key: "d", header: "ØD", align: "left" },
                { key: "m", header: "ØM", align: "left" },
                { key: "n", header: "N", align: "left" },
                { key: "pcd", header: "P.C.D.", align: "left" },
                { key: "w", header: "ØW", align: "left" },
                { key: "hOpen", header: "H.OPEN", align: "left" },
                { key: "hClosed", header: "H-CLOSED", align: "left" },
            ],
            rows: [
                {
                    inch: '2"',
                    mm: 40,
                    a: 47.6,
                    c: 152,
                    d: 92,
                    m: 16,
                    n: 4,
                    pcd: 120,
                    w: 203,
                    hOpen: 406.4,
                    hClosed: 346,
                },
                {
                    inch: '3"',
                    mm: 80,
                    a: 50.8,
                    c: 184,
                    d: 152,
                    m: 16,
                    n: 4,
                    pcd: 152,
                    w: 203,
                    hOpen: 501,
                    hClosed: 406.4,
                },
                {
                    inch: '4"',
                    mm: 100,
                    a: 50.8,
                    c: 228.6,
                    d: 156,
                    m: 16,
                    n: 8,
                    pcd: 190.5,
                    w: 203,
                    hOpen: 549,
                    hClosed: 450,
                },
                {
                    inch: '6"',
                    mm: 150,
                    a: 57.15,
                    c: 279,
                    d: 216,
                    m: 19,
                    n: 8,
                    pcd: 241.3,
                    w: 305,
                    hOpen: 705,
                    hClosed: 549,
                },
                {
                    inch: '8"',
                    mm: 200,
                    a: 69.85,
                    c: 343,
                    d: 270,
                    m: 19,
                    n: 8,
                    pcd: 298.5,
                    w: 305,
                    hOpen: 882,
                    hClosed: 680,
                },
                {
                    inch: '10"',
                    mm: 250,
                    a: 69.85,
                    c: 406,
                    d: 324,
                    m: 22,
                    n: 12,
                    pcd: 362,
                    w: 381,
                    hOpen: 1085,
                    hClosed: 816,
                },
                {
                    inch: '12"',
                    mm: 300,
                    a: 76.2,
                    c: 482,
                    d: 381,
                    m: 22,
                    n: 12,
                    pcd: 432,
                    w: 381,
                    hOpen: 1235,
                    hClosed: 924,
                },
                {
                    inch: '14"',
                    mm: 350,
                    a: 76.2,
                    c: 533,
                    d: 413,
                    m: 25,
                    n: 12,
                    pcd: 476,
                    w: 381,
                    hOpen: 1403,
                    hClosed: 1066.8,
                },
                {
                    inch: '16"',
                    mm: 400,
                    a: 89,
                    c: 597,
                    d: 470,
                    m: 25,
                    n: 16,
                    pcd: 540,
                    w: 508,
                    hOpen: 1603,
                    hClosed: 1187,
                },
                {
                    inch: '18"',
                    mm: 457,
                    a: 89,
                    c: 635,
                    d: 533,
                    m: 28.5,
                    n: 16,
                    pcd: 578,
                    w: 508,
                    hOpen: 1790,
                    hClosed: 1330,
                },
                {
                    inch: '20"',
                    mm: 508,
                    a: 114,
                    c: 698.5,
                    d: 584,
                    m: 28.5,
                    n: 20,
                    pcd: 635,
                    w: 508,
                    hOpen: 2457,
                    hClosed: 1936,
                },
                {
                    inch: '24"',
                    mm: 610,
                    a: 114,
                    c: 813,
                    d: 693,
                    m: 31.75,
                    n: 20,
                    pcd: 750,
                    w: 508,
                    hOpen: 2949,
                    hClosed: 2317,
                },
            ] satisfies KnifeEdgeSizeRow[],
        },
    ],
    "disk-type-check-valve": [
        {
            kind: "table",
            id: "materials",
            title: "Material Specifications",
            columns: [
                { key: "no", header: "NO", className: "w-16" },
                { key: "partName", header: "PART NAME" },
                { key: "material", header: "MATERIAL" },
                { key: "qty", header: "QTY.", align: "left" },
            ],
            rows: [
                {
                    no: "01",
                    partName: "BODY",
                    material: "ASTM A 351 Gr. Cf8 / CF8M",
                    qty: 1,
                },
                {
                    no: "02",
                    partName: "DISC",
                    material: "AISI 304 OR AISI 316",
                    qty: 1,
                },
                {
                    no: "03",
                    partName: "SPRING",
                    material: "AISI 304 OR AISI 316",
                    qty: 1,
                },
                {
                    no: "04",
                    partName: "COVER PLATE",
                    material: "AISI 304 OR AISI 316",
                    qty: 1,
                },
                {
                    no: "05",
                    partName: "DISC SEAT",
                    material: "METAL TO METAL",
                    qty: 1,
                },
            ] satisfies DiskCheckMaterialRow[],
        },

        {
            kind: "kv",
            id: "technical-data",
            title: "Technical Data",
            rows: [
                { label: "DESIGN & MANUFACTURING STD.", value: "BS 7438" },
                { label: "TESTING & INSPECTION STD.", value: "" },
                { label: "RATING", value: "PN 40" },
            ],
        },

        {
            kind: "table",
            id: "primary-service-rating",
            title: "Primary Service Rating & Test Pressure",
            columns: [
                { key: "class", header: "CLASS" },
                { key: "pressureRating", header: "PRESSURE RATING" },
                { key: "temp", header: "TEMP." },
            ],
            rows: [
                { class: "", pressureRating: "PN 40", temp: "300°C" },
            ] satisfies DiskCheckPrimaryRow[],
            note: "AIR TEST - SEAT 80 PSIG + 10 PSIG",
        },

        {
            kind: "table",
            id: "size-dimension",
            title: "Size Dimension",
            columns: [
                { key: "inch", header: "IN." },
                { key: "mm", header: "M.M.", align: "left" },
                { key: "a", header: "ØA", align: "left" },
                { key: "b", header: "ØB", align: "left" },
                { key: "c", header: "ØC", align: "left" },
                { key: "d", header: "ØD", align: "left" },
                { key: "t", header: "T", align: "left" },
                { key: "l", header: "L", align: "left" },
            ],
            rows: [
                {
                    inch: '1/2"',
                    mm: 15,
                    a: 43,
                    b: 29,
                    c: 15,
                    d: 38,
                    t: 16,
                    l: 60,
                },
                {
                    inch: '3/4"',
                    mm: 20,
                    a: 53,
                    b: 36,
                    c: 20,
                    d: 45,
                    t: 19,
                    l: 70,
                },
                {
                    inch: '1"',
                    mm: 25,
                    a: 63,
                    b: 44,
                    c: 25,
                    d: 56,
                    t: 22,
                    l: 80,
                },
                {
                    inch: '1.1/4"',
                    mm: 73,
                    a: 55,
                    b: 32,
                    c: 65,
                    d: 28,
                    t: 90,
                    l: 46,
                },
                {
                    inch: '1.1/2"',
                    mm: 40,
                    a: 83,
                    b: 66,
                    c: 40,
                    d: 74,
                    t: 31,
                    l: 98,
                },
                {
                    inch: '2"',
                    mm: 50,
                    a: 93,
                    b: 77,
                    c: 50,
                    d: 85,
                    t: 40,
                    l: 112,
                },
                {
                    inch: '2.1/2"',
                    mm: 65,
                    a: 114,
                    b: 98,
                    c: 65,
                    d: 107,
                    t: 46,
                    l: 141,
                },
                {
                    inch: '3"',
                    mm: 80,
                    a: 132,
                    b: 111,
                    c: 80,
                    d: 122,
                    t: 50,
                    l: 151,
                },
                {
                    inch: '4"',
                    mm: 100,
                    a: 153,
                    b: 130,
                    c: 100,
                    d: 142,
                    t: 60,
                    l: 181,
                },
                {
                    inch: '5"',
                    mm: 125,
                    a: 185,
                    b: 161,
                    c: 125,
                    d: 170,
                    t: 90,
                    l: 215,
                },
                {
                    inch: '6"',
                    mm: 150,
                    a: 212,
                    b: 190,
                    c: 150,
                    d: 202,
                    t: 105,
                    l: 255,
                },
                {
                    inch: '8"',
                    mm: 200,
                    a: 277,
                    b: 250,
                    c: 200,
                    d: 261,
                    t: 140,
                    l: 320,
                },
            ] satisfies DiskCheckSizeRow[],
        },
    ],
};
