import type { ActivityItem, SignalStatus } from "@/types";

export function getSignalStatus(item: ActivityItem): SignalStatus {
  const { price, action } = item;

  if (action === "SELL" && price > 0.6) {
    return "LATE";
  }

  if (price < 0.45) return "EARLY";
  if (price <= 0.7) return "MID";

  return "LATE";
}