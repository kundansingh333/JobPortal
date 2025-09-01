import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

// Ensure to call this before requiring any other modules!
Sentry.init({
  dsn: "https://afe1c91f4aa8aa1a4eaf7ffc84247e29@o4509920758464512.ingest.us.sentry.io/4509920762396672",
  integrations: [
    // Add our Profiling integration
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration(),
  ],

  
  // tracesSampleRate: 1.0,

  
});
Sentry.profiler.startProfiler();
