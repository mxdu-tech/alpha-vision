import type { ActivityItem } from "@/types";

type Props = {
  item: ActivityItem;
};
  
export default function ActivityCard({ item }: Props) {
    return (
        <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
        <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
            <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold">{item.traderName}</span>
                <span className="rounded-full border border-neutral-700 px-2 py-0.5 text-xs text-neutral-400">
                {item.action}
                </span>
                <span className="rounded-full border border-neutral-700 px-2 py-0.5 text-xs text-neutral-400">
                {item.side}
                </span>
            </div>
            <h3 className="mt-2 text-lg font-medium">{item.marketQuestion}</h3>
            </div>

            <div className="text-sm text-neutral-500">{item.timestamp}</div>
        </div>

        <div className="mb-3 flex flex-wrap gap-3 text-sm text-neutral-300">
            <span className="rounded-lg bg-neutral-800 px-3 py-1.5">
            Price: ${item.price.toFixed(2)}
            </span>
            <span className="rounded-lg bg-neutral-800 px-3 py-1.5">
            Amount: ${item.amount}
            </span>
        </div>

        <p className="text-sm leading-6 text-neutral-400">{item.summary}</p>
        </article>
    );
    }