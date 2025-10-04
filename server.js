import express from "express";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import fs from "fs";

const app = express();
const PORT = 3000;
const PROPERTY_ID = "507152266";
const KEY_FILE = "./service-account.json";

const key = JSON.parse(fs.readFileSync(KEY_FILE, "utf8"));

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: key.client_email,
    private_key: key.private_key,
  },
});

app.get("/analytics", async (req, res) => {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
      metrics: [
        { name: "activeUsers" },
        { name: "totalUsers" },
        { name: "sessions" },
        { name: "engagementRate" },
      ],
    });

    let totals = response.totals[0]?.metricValues || [];
    let metricMap = {};
    response.metricHeaders.forEach((h, i) => {
      metricMap[h.name] = totals[i]?.value || "0";
    });

    let activeUsers = parseFloat(metricMap.activeUsers || metricMap.totalUsers || 0);
    let sessions = parseFloat(metricMap.sessions || 0);
    let engagementRate = parseFloat(metricMap.engagementRate || 0);
    let bounceRate = Math.round(100 - engagementRate);

    res.json({
      activeUsers: activeUsers,
      sessions: sessions,
      bounceRate: bounceRate + "%",
    });
  } catch (e) {
    res.json({
      activeUsers: 0,
      sessions: 0,
      bounceRate: "0%",
    });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
