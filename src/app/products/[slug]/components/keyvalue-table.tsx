import type { SpecKeyValue } from "@/lib/specs/types";

type Props = { section: SpecKeyValue };

export default function KeyValueTable({ section }: Props) {
    return (
        <dl className="border-t border-line">
            {section.rows.map((r, idx) => (
                <div
                    key={idx}
                    className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-6 border-b border-line py-3.5"
                >
                    <dt className="eyebrow pt-0.5 text-muted-ink">
                        {r.label.replace(/\s*:\s*$/, "")}
                    </dt>
                    <dd className="text-sm font-medium text-ink">{r.value}</dd>
                </div>
            ))}
        </dl>
    );
}
