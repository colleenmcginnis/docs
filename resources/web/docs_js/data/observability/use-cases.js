export default [
  {
    id: "cloud-monitoring",
    title: "Cloud monitoring",
    description: "Cross-platform and multi-cloud visibility and analytics.",
    docs: [
      {
        linkText: "Monitor Amazon Web Services (AWS)",
        url: "monitor-aws-elastic-agent.html",
        description: "Learn how to deploy Elastic Agent and monitor your AWS infrastructure with Elastic Observability."
      },
      {
        linkText: "Monitor Microsoft Azure",
        url: "monitor-azure-elastic-agent.html",
        description: "Learn how to deploy Elastic Agent and monitor your Azure infrastructure with Elastic Observability."
      },
    ]
  },
  {
    id: "dev-ops",
    title: "DevOps",
    description: "Observe your entire software lifecycle — from development to production.",
    docs: [
      {
        linkText: "CI/CD",
        url: "ci-cd-observability.html",
        description: "Get better visibility into your CI/CD pipelines."
      },
      {
        linkText: "ECS logging",
        url: "https://www.elastic.co/guide/en/ecs-logging/overview/current/intro.html",
        description: "Leverage the Elastic Common Schema logging libraries to automatically link application traces to their corresponding logs."
      },
    ]
  },
  {
    id: "ai-ops",
    title: "AIOps",
    description: "Automate anomaly detection and accelerate root cause analysis.",
    docs: [
      {
        linkText: "Root cause analysis with logs",
        url: "https://www.elastic.co/blog/reduce-mttd-ml-machine-learning-observability",
        description: "Learn about Elastic’s artificial intelligence for IT operations and machine learning capabilities for root cause analysis."
      },
      {
        linkText: "APM Correlations",
        url: "https://www.elastic.co/blog/apm-correlations-elastic-observability-root-cause-transactions",
        description: "Automatically identify the probable causes of slow or failed transactions."
      },
    ]
  },
  {
    id: "user-experience",
    title: "User experience",
    description: "Measure, gauge, and improve your end users’ experience.",
    docs: [
      {
        linkText: "Scripting browser monitors",
        url: "https://www.elastic.co/guide/en/observability/current/synthetics-journeys.html",
        description: "Simulate critical user workflows on a regular interval to catch bugs before your users report them."
      },
      {
        linkText: "User experience",
        url: "user-experience.html",
        description: "Learn how to track Core Web Vitals and how to use them to quantify the real-world user experience.",
      },
    ]
  },
]