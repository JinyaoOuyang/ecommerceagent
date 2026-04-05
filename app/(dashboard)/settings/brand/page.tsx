// TODO: Implement brand settings page for editing brand profile

export default function BrandSettingsPage() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold">Brand Settings</h1>
        <p className="text-foreground/60 mt-1">
          Update your brand profile, voice, and target audience.
        </p>
      </div>

      <div className="rounded-lg border border-black/[.08] dark:border-white/[.145] p-6 flex flex-col gap-4">
        <p className="text-sm text-foreground/50">
          TODO: Brand profile edit form — name, voice, audience, category, USPs, competitors
        </p>
      </div>
    </div>
  );
}
