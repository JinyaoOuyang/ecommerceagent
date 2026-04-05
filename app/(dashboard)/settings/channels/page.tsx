// TODO: Implement channel management page for connecting sales channels

export default function ChannelsSettingsPage() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold">Channel Settings</h1>
        <p className="text-foreground/60 mt-1">
          Connect and manage your sales channels (Amazon, Shopify, Walmart, etc.).
        </p>
      </div>

      <div className="rounded-lg border border-black/[.08] dark:border-white/[.145] p-6 flex flex-col gap-4">
        <p className="text-sm text-foreground/50">
          TODO: Channel connection list with add/remove/toggle functionality
        </p>
      </div>
    </div>
  );
}
