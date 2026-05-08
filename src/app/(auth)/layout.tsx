export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-background to-emerald-50/30 dark:from-background dark:to-background">
      {/* Left Side */}
      <div className="hidden flex-1 flex-col justify-between border-r bg-emerald-50/40 p-10 dark:bg-emerald-950/10 lg:flex">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Sereniq
          </h1>
        </div>

        <div className="max-w-md">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight">
            A calmer space for reflection, clarity, and wellbeing.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Journal your thoughts, track emotional wellness,
            and reconnect with mindfulness through gentle
            digital experiences.
          </p>
        </div>

        <p className="text-sm text-muted-foreground">
          © 2026 Sereniq. All rights reserved.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-1 items-center justify-center p-6">
        {children}
      </div>
    </div>
  );
}