export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { startBackgroundCronScheduler } = await import("./lib/serverScheduler");
    startBackgroundCronScheduler();
  }
}
