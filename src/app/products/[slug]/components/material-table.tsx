"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { MaterialRow } from "@/lib/product-material";

interface Props {
    rows: MaterialRow[];
}

export const ProductMaterialTable: React.FC<Props> = ({ rows }) => (
    <Table className="mt-1">
        <TableHeader>
            <TableRow className="bg-[#0078A6]/20">
                <TableHead className="w-12">#</TableHead>
                <TableHead>DESCRIPTION</TableHead>
                <TableHead>MATERIAL</TableHead>
                <TableHead className="text-right">QTY.</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {rows.map((row, idx) => (
                <TableRow
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell className="text-[#003B73]">
                        {row.description}
                    </TableCell>
                    <TableCell className="text-[#004AAD]">
                        {row.material}
                    </TableCell>
                    <TableCell className="text-right">{row.qty}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export default ProductMaterialTable;
