---
title: "The Digital Panopticon: Urban Operations in Surveilled Cities"
date: 2025-12-11
description: "The state watches everyone. The question is whether you can build infrastructure it does not know exists."
author: "LFM"
tags: ["OSINT", "Urban Operations", "Surveillance", "Counter-Surveillance", "Tradecraft", "Reticulum", "Privacy"]
---

<figure class="hero-image">
  <img src="/images/articles/digital-panopticon/hero.png" alt="Surveillance cameras mounted on a pole overlooking highway traffic">
</figure>

Jeremy Bentham designed the Panopticon in 1791. A circular prison where a single watchman in a central tower could observe every inmate without them knowing whether they were being watched at any given moment. The genius was not the architecture. The genius was the psychology. Prisoners who assumed constant observation would regulate their own behavior. The watchman did not need to actually watch everyone. He only needed them to believe he could.

Bentham never built his prison. But the principle outlived him by two centuries.

In Light Fighter Manifesto Volume IV, the editor described the modern version: "a clear and escalating arms race between the tactics of dissent and the technologies of state surveillance." On one side, protest movements that have grown significantly more tech-savvy since 2020. End-to-end encrypted messaging. Commercial drones for aerial awareness. On the other side, a state that has responded with "a massive investment in a pervasive surveillance apparatus."

The apparatus is real. So are its blind spots.

Understanding both is where urban operations begin.

---

## The Ground Layer

Atlanta holds a distinction that its tourism board does not advertise: it is the most surveilled city in the United States. For every thousand residents, there are 124 cameras watching. More than New York. More than Los Angeles. More than Chicago.

The number is not an accident.

Operation Shield, run by the Atlanta Police Department's Video Integration Center, pulls feeds from an estimated 60,000 cameras across the metro area. Gas stations and parking garages. University security offices and suburban HOAs. Ring doorbells and traffic lights. Private cameras volunteered into a public network.

![Atlanta Surveillance Statistics](/images/articles/surveillance-stats.svg)

But here is what Operation Shield's architects would prefer you not consider: the network is riddled with holes. Open records requests have mapped only 1,878 camera locations out of 60,000. Budget shortfalls have left a significant percentage dark at any given moment. Lenses pointed at nothing. Recording nothing. Connected to servers that nobody monitors.

The panopticon has cataracts. Bentham's watchman is asleep at his post more often than anyone admits.

![Operation Shield Network Diagram](/images/articles/operation-shield-network.svg)

---

## The Flock Problem

Forget the fixed cameras for a moment. The faster-growing threat sits on poles at neighborhood entrances, highway off-ramps, and parking lot exits.

As of 2025, Flock Safety operates in over 5,000 communities across 49 U.S. states, performing over 20 billion vehicle scans per month. That is one Flock camera for every 4,000 American citizens, and the network is expanding rapidly. The company earned $300 million in sales in 2024, leasing access to its AI-powered tracking system rather than selling hardware outright.

Your vehicle photographed in Atlanta can be queried by a sheriff's deputy in rural Texas.

The editor described this layer in Volume IV: "On the ground, we have the Automated License Plate Reader (ALPR) networks in nearly every metropolitan area. These systems create a searchable, time-stamped log of a vehicle's movements, and by extension, those of its owner."

{{< lpr-reference >}}

The network effect is the real threat. As more departments join, getting your own Flock system becomes more valuable because you gain access to everyone else's data. The incentive structure guarantees expansion.

In October 2025, Flock announced a partnership with Amazon's Ring, allowing law enforcement using Flock's platform to request footage directly from Ring doorbell owners. The same month, 404 Media reported that Flock was developing a product called "Nova" that would supplement license plate data with information from data breaches, public records, and commercially available data to track specific individuals without a warrant.

Data retention defaults to 30 days. But once flagged in an investigation, that data can be preserved indefinitely. The cameras do not capture faces. They capture something more useful: patterns. Where you go. When you go there. How often. What route you take.

Over time, the system learns your routine better than you know it yourself.

The courts are beginning to push back. In June 2024, a Norfolk, Virginia judge ruled that collecting location data from the city's 172 Flock ALPRs constitutes a search under the Fourth Amendment and cannot be used as evidence without a warrant. The Institute for Justice filed a federal lawsuit against Norfolk PD in October 2024, asserting that Flock surveillance violates constitutional protections.

A grassroots project called DeFlock has begun mapping these cameras. As of late 2025, volunteers have logged over 5,600 Flock camera locations worldwide. The project's creator received a cease-and-desist letter from Flock Safety. The EFF told them to pound sand.

The map is still growing.

{{< resource-callout title="INTERACTIVE MAP" url="https://deflock.me/map" icon="map" >}}
Crowdsourced Flock camera locations. See what is watching your neighborhood, your commute, your patterns. Contribute sightings to the database.
{{< /resource-callout >}}

{{< resource-callout title="SURVEILLANCE DATABASE" url="https://atlasofsurveillance.org" icon="database" >}}
EFF's Atlas of Surveillance documents police surveillance technologies across the United States. Search by city, county, or technology type.
{{< /resource-callout >}}

---

## The Air Layer

The ground cameras are obvious. The aerial surveillance is not.

The editor documented it: "In the air, we have an array of FBI and DEA-operated Cessna aircraft. These planes, equipped with high-resolution video and signals intelligence gear, can circle for hours over protest sites, providing a persistent, high-powered surveillance platform."

The FBI operates more than 120 surveillance aircraft registered to shell corporations with post office boxes in Bristow, Virginia. Most are single-engine Cessna 182T Skylanes, fitted with exhaust mufflers to reduce engine noise, flying at approximately 5,000 feet. The cameras resolve individual faces on the ground. Many aircraft also carry cell-site simulators capable of forcing every phone in range to connect and identify itself.

In one documented case, federal prosecutors admitted the FBI used its Cessna fleet to surveil a subject for 429 continuous hours over 24 days without ever obtaining a warrant. The subject had no idea he was being watched from above.

The FBI maintains that its fleet is "not equipped, designed or used for bulk collection activities or mass surveillance." The AP reported that the FBI "occasionally" uses IMSI-catchers on the aircraft. The word "occasionally" is doing a lot of work in that sentence.

Beyond the FBI's Cessnas, wide-area motion imagery systems represent the next evolution. Originally developed for battlefields in Iraq and Afghanistan under the program name "Gorgon Stare," these systems use multiple advanced sensors to detect and track every vehicle and individual moving within an entire city-sized area simultaneously.

Baltimore tested such a system. Persistent Surveillance Systems flew camera-equipped aircraft over the entire city at least 40 hours per week, creating a slow frame-rate video record that allowed police to retroactively track anyone's movements from any place or time. The Fourth Circuit Court of Appeals ruled the program unconstitutional in an 8-7 decision, finding that "persistent surveillance of outdoor movements invades people's reasonable expectation of privacy." Baltimore terminated the contract.

Other cities are watching the legal landscape before deploying similar systems. The technology exists. The precedent is contested. Expect this fight to continue.

---

## The RF Layer

The editor described the third layer: "In the RF spectrum, court records have confirmed the widespread use of IMSI-catchers, or 'Stingrays,' by both federal and local law enforcement. By mimicking a cell tower, these devices can force every phone in a given area to connect, logging its unique identifier without the user ever knowing."

The global IMSI-catcher market reached $190 million in 2024 and is projected to hit $360 million by 2033. The growth is driven by demand from police departments, intelligence agencies, and national security operations.

The Baltimore Police Department used Stingrays 4,300 times between 2007 and 2015. A dozen federal agencies deploy them, including the FBI, NSA, DEA, ICE, and all branches of the military. At least 25% of law enforcement agencies have used "tower dump" data collection, and at least 25 police departments have purchased Stingray equipment outright.

Your phone betrays you constantly. It announces its presence to every cell tower within range. It logs your location even when you think it is off. The baseband processor, the chip that handles cellular communication, operates below the level of the operating system. You cannot control it. You cannot audit it. You can only trust that it is not being used against you.

That trust is misplaced.

IMSI-catchers also disrupt emergency calls. A device forcing phones to connect to a fake tower can prevent 911 calls from reaching real infrastructure. The surveillance tool becomes a public safety hazard.

Some states now require warrants for Stingray use. Virginia, Washington, California, Minnesota, and Utah have passed such laws. The Cell-Site Simulator Warrant Act of 2021 attempted to establish a federal framework requiring probable cause before deployment. Enforcement remains inconsistent.

The only reliable defense is not carrying a phone at all, or carrying one that cannot connect to cellular networks.

---

## The Fusion Problem

The editor connected the layers: "This data is often fed into fusion centers where powerful analytical software, like that famously developed by Palantir, can connect it with an individual's social media posts, property records, and other digital footprints."

There are 79 federally designated fusion centers nationwide. DHS grant money has helped them purchase predictive policing systems from Palantir and social media surveillance software from Dataminr. The fusion center model, initially conceived for counterterrorism coordination, has become a clearinghouse for domestic intelligence collection.

Palantir's Gotham platform enables analysts to connect vast, disparate datasets, build intelligence profiles, and search for individuals based on characteristics as granular as a tattoo or immigration status. It transforms static records into a fluid web of intelligence. Department of motor vehicles files. Police reports. Subpoenaed social media data including location history and private messages. All searchable. All connected.

The Trump administration expanded Palantir's federal footprint significantly in 2025. The Department of Defense awarded the company a $795 million contract that could grow to $1.3 billion for data fusion and AI programs across the military. Palantir's Foundry software now runs at DHS, HHS, FDA, CDC, and NIH. The company has received more than $113 million in federal spending since January 2025 alone.

In June 2025, Senator Ron Wyden and Representative Alexandria Ocasio-Cortez demanded answers about reports that Palantir was helping the IRS build a government-wide searchable "mega-database" connecting tax data with other federal records. Such a database would likely violate the Privacy Act and tax privacy laws. The inquiry is ongoing.

The editor's assessment was blunt: "The state, with its vast resources, has built a near-perfect system for monitoring public gatherings. It has mastered the art of monitoring mass movements, identifying participants, and prosecuting them. In doing so, it has achieved an overwhelming asymmetry of information."

---

## The Defensive Posture

The man who stepped off the MARTA train at Five Points at 2:47 p.m. on a Tuesday had studied what people in Atlanta actually wear. Khakis. Faded polo. New Balance sneakers. Laptop bag over one shoulder.

Within ninety seconds of exiting the turnstile, his face had been captured by fourteen different cameras.

He did not wear 5.11 tactical pants. He did not wear Salomon trail runners. He did not carry a pack bristling with MOLLE webbing and carabiners. He did not, in other words, look like the kind of person who reads articles about tactical operations in surveilled cities.

He looked like a man going to work.

Public transit exists, from an operational perspective, as a kind of anonymizing bath. MARTA stations at Five Points and Lindbergh Center process thousands of faces per hour. You are not a person in that flow. You are a data point, indistinguishable from the mass of other data points moving through the turnstiles.

Move with the crowd, not against it. Dress like the crowd dresses. Carry what the crowd carries. Walk at the speed the crowd walks.

The surveillance system is optimized to detect anomalies.

Do not be one.

---

## The Geometry of Loopholes

Stop looking at buildings as solid structures. Start seeing them as Swiss cheese.

Shooting through glass is not viable. Deflection is unpredictable, and the signature creates immediate compromise. Focus on apertures that already exist.

Weep holes appear in brick facades every two to three feet. Small drainage openings, three-eighths to half an inch wide. Ventilation slats cover HVAC systems on commercial buildings, their angled fins creating narrow but usable sight lines. Gaps appear in cinder block construction wherever builders cut corners.

Drainage culverts run beneath roadways, their openings varying from four inches to more than a foot in diameter.

These features exist at varying heights. They are not perceived as threats. They were put there by city contractors who never imagined their work would be analyzed this way.

The space between parked cars forms temporary lanes of fire. The shadowed area beneath a truck chassis offers a low-angle position that is nearly impossible to spot from any distance. A hole cut in the opaque panel of a commercial van transforms it into a mobile hide.

The city is already falling apart. Use what it provides.

---

## Recoding Space

An observation post is not about finding the perfect position from a video game. It is about recoding space. Taking something that already exists in the urban environment and making it serve a purpose it was never designed for.

Without changing its appearance.

The construction tarp covering a renovation project. The commercial advertising banner hanging on a fence. The discarded furniture piled in the corner of an abandoned lot.

These things are invisible because they belong. Nobody questions what belongs.

Materials brought in from outside draw attention. Materials already present draw none.

A broken section of wall in an abandoned factory is not damage. It is a loophole created by time and neglect. A firing position that looks exactly like what surrounded it before you arrived.

A rusted panel on an industrial silo. A gap in corrugated metal fencing.

The city is full of voids. The operator's task is to see them.

---

## The Offensive Posture

The editor's key insight in Volume IV: "The current tactics of dissent are primarily defensive. In my opinion, a purely defensive posture is always a losing strategy in the long run."

Defense means accepting the state's information advantage and trying to hide from it. Offense means building infrastructure the state does not control and may not even know exists.

"The state's power comes from its control over the digital and physical infrastructure that our modern life depends on," the editor wrote. "In that case, the only rational response is to create your own infrastructure: a small, disciplined cell that operates as a self-contained, technologically sovereign entity."

This is not about evading surveillance. It is about making surveillance irrelevant.

---

## Building Sovereign Infrastructure

The editor proposed a solution: "To counter the state's ability to monitor the internet and the radio-frequency spectrum, the cell must get off the grid entirely. We are talking about building a private, end-to-end encrypted network using a framework like the open-source Reticulum Network Stack."

Reticulum is transport-agnostic. It can simultaneously use any communication method available. DMR radios. LoRa. HF. Packet radio. WiFi. Ethernet. The network does not care how the bits move. It only cares that they arrive encrypted and authenticated.

The protocol uses no source addresses. No packet transmitted includes information about the address, place, machine, or person it originated from. There is no central control over the address space. Anyone can allocate as many addresses as they need, when they need them. The network self-configures.

Reticulum powers several operational applications. Nomad Network provides off-grid encrypted mesh communication. Sideband offers a graphical messaging interface for Linux, Android, and macOS. LXMF handles distributed, delay-tolerant messaging designed for asynchronous communication, including paper messages via QR codes that remain encrypted until the intended recipient decodes them.

The protocol handles everything from 150 bits per second over HF radio to 40 megabits per second over modern links. At the 38th Chaos Communication Congress in December 2024, Reticulum had its own assembly where participants demonstrated the network stack across LoRa, packet radio, and other mediums.

The state monitors the internet because the internet is centralized. It monitors cellular networks because cellular networks require infrastructure the state can access. A mesh network built on Reticulum uses none of that. The nodes are whatever hardware you bring. The routes are whatever paths the RF environment provides.

"Next, we would have to solve the financial problem," the editor continued. "To avoid forensic accounting, which can trace traditional bank accounts and even public-ledger cryptocurrencies like Bitcoin, you would have to shift to an anonymous funding mechanism. A privacy-by-design currency like Monero (XMR), with its protocol-level Ring Signatures and Stealth Addresses, is really the only viable option we have for now."

Bitcoin is transparent. Every transaction is visible on the blockchain. Monero is not. The sender, receiver, and amount are cryptographically hidden by default. There is no opt-in privacy. There is only privacy.

Chainalysis claims it can "provide usable leads in approximately 65% of cases involving Monero." A September 2024 leak revealed details of their tracking methods. TRM Labs concluded that while some older transactions may be partially traceable, Monero remains one of the most secure privacy-preserving cryptocurrencies available. Issues like the 10 Block Decoy Bug get fixed quickly once discovered, and the protocol continues advancing.

Monero accounted for 42% of cryptocurrency activity on dark web markets in 2024. The exchanges are delisting it under regulatory pressure. Binance dropped XMR in February 2024. The regulatory hostility is itself evidence that the privacy features work as intended.

Communications the state cannot intercept. Finances the state cannot trace. The asymmetry begins to shift.

---

## The Framework

The editor outlined a tactical structure adapted from military doctrine:

"Charlie Element (Command & Control/ISR): Using the secure C4ISR network, they monitor ISR feeds and direct the other elements."

"Alpha Element (Suppression): This team is the instrument of control... their role is to generate an overwhelming volume of fire. This pins down law enforcement, prevents them from maneuvering, and creates an overwhelming effect."

"Bravo Element (Interdiction): This team is the scalpel. Their suppressed long guns focus on destroying key infrastructure—cameras, comms antennas, electrical transformers—or using barrier blind ammunition to disable vehicles and defeat cover."

The Support-By-Fire Triangle is not new doctrine. It is conventional military tactics applied to an unconventional problem. What makes it relevant is the C4ISR layer underneath: the sovereign communications network that allows coordination without exposure.

"While the state watches everyone, the cell watches its target," the editor wrote. "While the state processes terabytes of data to find a threat, the cell operates on a network the state may not even know exists."

---

## Reading the Nervous System

Before movement comes mapping. Every operation depends on understanding both the physical terrain and the digital infrastructure laid over it.

Flat maps lie. They conceal elevation changes, natural depressions, building-induced blind spots that only become visible in three dimensions.

Google Earth Pro provides free access to 3D terrain data and historical imagery. OpenStreetMap offers building footprints and infrastructure data contributed by thousands of volunteers who mapped features that official sources never recorded. The National Pipeline Mapping System reveals where utility tunnels run beneath the streets.

Every city has rhythms. Learning them is reconnaissance.

A major event at Mercedes-Benz Stadium does not simply create traffic. It creates predictable chaos. Concentrations of police resources. Diversions of public attention. Masses of pedestrians that can serve as cover or obstacle depending on how you use them.

Foot traffic analytics platforms publish data openly. Event calendars reveal when those masses will form and where they will flow.

Flightradar24 tracks aircraft in real time, including law enforcement helicopters and those FBI Cessnas circling overhead. The shell company registrations are known. The tail numbers are documented. You can watch the watchers. Broadcastify provides access to public safety radio traffic. Scanner feeds that reveal where police are responding and where they are not.

Social media surfaces the rest. Traffic accidents. Protests. Police activity.

The city narrates itself constantly, to anyone willing to listen.

---

## The Dirty Secret

Here is what the city's surveillance advocates would prefer remained unspoken.

A significant percentage of the cameras do not work.

Budget shortfalls. Maintenance backlogs. Integration failures between legacy systems and newer installations. Exposed wiring and dead feeds and servers that have not been rebooted in months.

The areas with the least public investment tend to have the most unreliable coverage. The panopticon is a paper tiger in certain neighborhoods. Not everywhere. Not reliably.

But somewhere, at any given moment, the system is blind.

Knowing where requires patient mapping and observation. Knowing when requires accepting that certainty is impossible and acting anyway.

---

## Bentham's Ghost

Jeremy Bentham wanted inmates to assume they were always being watched. The psychology of assumed surveillance would do the work that actual surveillance could not.

The modern panopticon operates on the same principle. The state cannot actually watch everyone all the time. It does not have the personnel, the budget, or the technical capability. But if you believe it can, you regulate your own behavior. You stay home. You stay quiet. You stay compliant.

The editor's conclusion in Volume IV: "The only rational response to this asymmetry is not to challenge it head-on, but to render it irrelevant. This represents a fundamental inversion of modern protest. It's a shift from a war of attrition and public presence to a war of surgical strikes."

The table is stacked against you. Sixty thousand cameras in Atlanta alone. Over 100,000 Flock LPRs performing 20 billion scans per month nationwide. FBI aircraft overhead. Stingrays in the RF spectrum. Fusion centers running Palantir software to correlate it all into searchable intelligence profiles.

But the system is imperfect. It has blind spots and maintenance failures and legal vulnerabilities that courts are beginning to exploit. More importantly, it watches infrastructure it controls. Build infrastructure it does not control, and the watching becomes irrelevant.

Bentham never built his prison. The modern state built something close. But the watchman is not all-seeing. He only needs you to believe he is.

Stop believing.

---

### Sources

- Atlanta Police Foundation: Operation Shield Program
- 11Alive News Investigation: Growing surveillance program tests balance between privacy and policing in Atlanta
- Flock Safety Wikipedia: Company statistics and expansion data
- Malwarebytes: "What the Flock is happening with license plate readers" (November 2025)
- TechCrunch: "Amazon's Ring to partner with Flock" (October 2025)
- 404 Media: Flock Nova product development reporting
- Institute for Justice: Norfolk ALPR Fourth Amendment lawsuit (October 2024)
- ACLU: FBI surveillance aircraft fleet documentation
- BuzzFeed News: "Spies in the Skies" FBI aircraft investigation
- Criminal Legal News: FBI 24-day warrantless surveillance case
- ACLU: Baltimore aerial surveillance program ruling (Fourth Circuit)
- Center for Democracy and Technology: Persistent Surveillance Systems legal analysis
- Wikipedia: Stingray phone tracker statistics
- EFF: Cell-Site Simulators documentation
- The Conversation: "When the government can see everything: How Palantir is mapping the nation's data"
- Senate Finance Committee: Wyden-AOC Palantir IRS database inquiry (June 2025)
- Rutherford Institute: Palantir federal contract expansion analysis
- TRM Labs: "The Rise of Monero: Traceability, Challenges, and Research Review"
- Chainalysis: Monero tracking capabilities (September 2024 leak)
- Reticulum Network: Official documentation and 38C3 Congress assembly
- EFF: "Anti-Surveillance Mapmaker Refuses Flock Safety's Cease and Desist Demand"
- Light Fighter Manifesto Volume IV: "Unrest: Command, Control, and Suppression in Modern Times" (editor, 2024)

### Tools

- [Light Fighter Guide](/apps/field-guide/) - Communications and SIGINT sections for RF awareness
- [DeFlock](https://deflock.me/) - Crowdsourced Flock camera location map
- [Stop Flock App](https://www.stopflock.com/app/) - Mobile app for documenting LPR cameras
- [Atlas of Surveillance](https://atlasofsurveillance.org/) - EFF surveillance tracking database
- [Google Earth Pro](https://www.google.com/earth/versions/#earth-pro) - 3D terrain and historical imagery
- [OpenStreetMap](https://www.openstreetmap.org/) - Community-built infrastructure maps
- [Flightradar24](https://www.flightradar24.com/) - Real-time aircraft tracking
- [Broadcastify](https://www.broadcastify.com/) - Public safety radio feeds
- [Reticulum Network Stack](https://reticulum.network/) - Transport-agnostic encrypted mesh networking
- [Monero (XMR)](https://www.getmonero.org/) - Privacy-preserving cryptocurrency

### Video

- [Light Fighter Manifesto: DeFlock Walkthrough](https://www.youtube.com/watch?v=BfzA2Qaqbe4) - How to use DeFlock to map LPR cameras in your area
