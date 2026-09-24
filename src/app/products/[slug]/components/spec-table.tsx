import type { RowBase, SpecTable as SpecTableType } from "@/lib/specs/types";
import { cn } from "@/lib/utils";

type Props<Row extends RowBase> = { section: SpecTableType<Row> };

const alignClass = (align?: "left" | "center" | "right") =>
    align === "right"
        ? "text-right"
        : align === "center"
          ? "text-center"
          : "text-left";

export default function SpecTable<Row extends RowBase>({
    section,
}: Props<Row>) {
    const { columns, rows } = section;

    return (
        <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <table
                className="w-full border-collapse text-sm"
                style={{ minWidth: Math.max(columns.length * 84, 480) }}
            >
                <thead>
                    <tr className="border-b border-line">
                        {columns.map((c) => (
                            <th
                                key={String(c.key)}
                                scope="col"
                                className={cn(
                                    "eyebrow whitespace-nowrap py-4 pr-6 font-normal text-muted-ink last:pr-0",
                                    alignClass(c.align),
                                    c.className
                                )}
                            >
                                {c.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, idx) => (
                        <tr
                            key={idx}
                            className="border-b border-line transition-colors hover:bg-paper"
                        >
                            {columns.map((c, ci) => {
                                const raw = row[c.key];
                                const content = c.format
                                    ? c.format(raw, row)
                                    : (raw ?? "");
                                const numeric = typeof raw === "number";
                                return (
                                    <td
                                        key={String(c.key)}
                                        className={cn(
                                            "py-3.5 pr-6 align-top last:pr-0",
                                            alignClass(c.align),
                                            ci === 0
                                                ? "whitespace-nowrap font-mono text-xs leading-5 text-muted-ink"
                                                : "text-ink",
                                            numeric &&
                                                "font-mono text-[13px] tabular-nums"
                                        )}
                                    >
                                        {content}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
