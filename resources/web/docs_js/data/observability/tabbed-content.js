export default {
  "apm": {
    title: "APM",
    icon: "apmApp",
    items: [
      {
        title: "Monitor your application performance",
        description: "Learn how to collect and visualize Application Performance Monitoring (APM) data with the Elastic Stack.",
        link: "ingest-traces.html",
        image: "ingest-traces"
      },
      {
        title: "Monitor your application logs",
        description: "Correlate your application logs and traces for increased visibility into blah blah",
        link: "application-logs.html",
        image: "application-logs"
      },
      {
        title: "Integrate with OpenTelemetry",
        description: "Reuse your existing OTel instrumentation to easily send observability data to the Elastic Stack.",
        link: "https://www.elastic.co/guide/en/apm/guide/current/open-telemetry.html",
        "book": "the APM guide",
        image: "open-telemetry"
      }
    ]
  },
  "infrastructure-monitoring": {
    title: "Infrastructure",
    icon: "metricsApp",
    items: [
      {
        title: "Get started",
        description: "Learn how to monitor logs and infrastructure metrics from systems and services across your organization",
        link: "ingest-logs-metrics-uptime.html",
        image: "ingest-logs-metrics-uptime"
      },
      {
        title: "Integrations",
        description: "Stream in and visualize logs, metrics, traces, content, and more from your apps, endpoints, infrastructure, cloud, network, workplace tools, and every other common source in your ecosystem.",
        link: "https://docs.elastic.co/integrations",
        "book": "Integration docs",
        image: "integrations"
      }
    ]
  },
  "real-user-monitoring": {
    title: "RUM",
    icon: "rumApp",
    items: [
      {
        title: "Monitor your users",
        description: "The Elastic APM Real User Monitoring (RUM) JavaScript Agent provides detailed performance metrics and error tracking of your web applications.",
        link: "https://www.elastic.co/guide/en/apm/agent/rum-js/current/intro.html",
        "book": "RUM docs",
        image: "user-experience"
      },
      {
        title: "Integrate with your favorite framework",
        description: "The RUM agent easily integrations with React, Angular, and Vue applications",
        link: "https://www.elastic.co/guide/en/apm/agent/rum-js/current/framework-integrations.html",
        "book": "RUM docs",
        image: "framework-integrations"
      },
      {
        title: "Configure the agent",
        description: "",
        link: "https://www.elastic.co/guide/en/apm/agent/rum-js/current/configuration.html",
        "book": "RUM docs"
      }
    ]
  },
  "log-monitoring": {
    title: "Logs", 
    icon: "logsApp",
    items: [
      {
        title: "Get started",
        description: "Learn how to monitor logs and metrics from systems and services across your organization",
        link: "ingest-logs-metrics-uptime.html",
        image: "ingest-logs-metrics-uptime"
      },
      {
        title: "Integrations",
        description: "Stream in and visualize logs, metrics, traces, content, and more from your apps, endpoints, infrastructure, cloud, network, workplace tools, and every other common source in your ecosystem.",
        link: "https://docs.elastic.co/integrations",
        "book": "Integration docs",
        image: "integrations"
      },
    ]
  },
  "synthetic-monitoring": {
    title: "Synthetics",
    icon: "logoUptime",
    items: [
      {
        title: "Title",
        description: "Description",
        link: "#"
      },
      {
        title: "Title",
        description: "Description",
        link: "#"
      },
      {
        title: "Title",
        description: "Description",
        link: "#"
      }
    ]
  },
  "universal-profiling": {
    title: "Universal profiling",
    icon: "",
    items: [
      {
        title: "Universal Profiling",
        description: "With Universal Profiling, you can inspect, filter, and compare your data to gain visibility and optimize performance.",
        link: "universal-profiling.html"
      },
      {
        title: "Get started",
        description: "Set up Universal Profiling in Elastic Cloud and install your host-agent",
        link: "profiling-get-started.html"
      },
    ]
  }
}