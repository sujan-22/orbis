"use client";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import type { SpecKeyValue } from "@/lib/specs/types";

type Props = { section: SpecKeyValue };

export default function KeyValueTable({ section }: Props) {
    return (
        <Table className="mt-2">
            <TableBody>
                {section.rows.map((r, idx) => (
                    <TableRow
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                        <TableCell className="w-1/2 font-medium text-[#003B73]">
                            {r.label}
                        </TableCell>
                        <TableCell className="text-[#004AAD]">
                            {r.value}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
