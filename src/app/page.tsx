import { activityFeed, traderProfiles } from "@/data/mock";
import TraderCard from "@/components/TraderCard";
import ActivityCard from "@/components/ActivityCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <header className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-400">
            AlphaVision
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Polymarket Smart Money Feed
          </h1>
          <p className="mt-3 max-w-2xl text-neutral-400">
            Track selected traders, inspect recent activity, and turn raw
            market actions into readable signals.
          </p>
        </header>

        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Tracked Traders</h2>
            <span className="text-sm text-neutral-500">
              {traderProfiles.length} profiles
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {traderProfiles.map((trader) => (
            <TraderCard key={trader.id} trader={trader} />
          ))}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Recent Activity</h2>
            <span className="text-sm text-neutral-500">
              {activityFeed.length} events
            </span>
          </div>

          <div className="space-y-4">
          {activityFeed.map((item) => (
            <ActivityCard key={item.id} item={item} />
          ))}
          </div>
        </section>
      </div>
    </main>
  );
}