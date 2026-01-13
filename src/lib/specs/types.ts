// lib/specs/types.ts
import type { ReactNode } from "react";

export type Primitive = string | number | boolean | null | undefined;
export type RowBase = Record<string, Primitive | ReactNode>;

export type SpecColumn<Row extends RowBase> = {
    key: keyof Row;
    header: string;
    align?: "left" | "center" | "right";
    className?: string;
    format?: (value: Row[keyof Row], row: Row) => ReactNode;
};

export type SpecTable<Row extends RowBase> = {
    kind: "table";
    id: string;
    title: string;
    columns: Array<SpecColumn<Row>>;
    rows: Row[];
    note?: string;
};

export type SpecKeyValue = {
    kind: "kv";
    id: string;
    title: string;
    rows: Array<{ label: string; value: string }>;
    note?: string;
};

export type SpecSection = SpecTable<RowBase> | SpecKeyValue;
export type ProductSpecs = Record<string, SpecSection[]>;
