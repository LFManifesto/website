---
title: "Network Recon Simulator"
date: 2025-12-03
description: "Practice analyzing WiGLE and Shodan data. Identify wireless vulnerabilities and exposed services across realistic scenarios."
icon: "network"
tags: ["OSINT", "networks", "WiFi"]
app_url: "/apps/Network_Sim/"
weight: 40
---

Each scenario presents you with wireless survey data from WiGLE and internet scan results from Shodan. Your job is to analyze both datasets and identify the vulnerabilities.

<div class="tool-app">
  <a href="/apps/Network_Sim/" class="tool-launch-btn" target="_blank">Open Simulator</a>
</div>

The WiGLE tab shows discovered wireless networks with SSIDs, MAC addresses, encryption types, and hardware vendors. Look for open networks, naming patterns that reveal internal structure, and vendor information that might indicate default credentials.

The Shodan tab shows internet-facing devices with IPs, open ports, and service banners. Old software versions, cleartext protocols like Telnet and FTP, and exposed IoT devices are common findings.

After reviewing both datasets, complete the vulnerability checklist. Identify whether there's an open WiFi network, whether any devices run vulnerable services, whether sensitive IoT is exposed, and what the most promising attack vector would be.

Scenarios include corporate headquarters, stadiums, warehouses, and financial campuses.
