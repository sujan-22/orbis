"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import type { RowBase, SpecTable as SpecTableType } from "@/lib/specs/types";

type Props<Row extends RowBase> = { section: SpecTableType<Row> };

export default function SpecTable<Row extends RowBase>({
    section,
}: Props<Row>) {
    const { columns, rows } = section;

    return (
        <Table className="mt-2">
            <TableHeader>
                <TableRow className="bg-[#0078A6]/20">
                    {columns.map((c) => (
                        <TableHead key={String(c.key)} className={c.className}>
                            {c.header}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>

            <TableBody>
                {rows.map((row, idx) => (
                    <TableRow
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                        {columns.map((c) => {
                            const raw = row[c.key];
                            const content = c.format
                                ? c.format(raw, row)
                                : (raw ?? "");
                            const align =
                                c.align === "right"
                                    ? "text-right"
                                    : c.align === "center"
                                      ? "text-center"
                                      : "text-left";

                            return (
                                <TableCell
                                    key={String(c.key)}
                                    className={align}
                                >
                                    {content}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
