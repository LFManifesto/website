/**
 * Light Fighter Medic - Pharmacology
 * Drug Reference, K9 Dosages, Shock Classification, Vitals
 * Based on Ranger Medic Handbook 2019 & CoTCCC Guidelines
 */

(function() {
  'use strict';

  const CONTENT = {
    public: {
      title: 'Public Access',
      subtitle: 'OTC medications, pharmacy essentials, and natural alternatives',
      color: '#10b981',
      sections: [
        {
          id: 'public-otc',
          title: 'OTC Medications',
          content: `
            <div class="alert alert-info">
              <strong>Over-the-counter medications</strong> are available without prescription. These are your first line of defense for common ailments.
            </div>
            <div class="card">
              <div class="card-title">Pain & Fever</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Drug</th><th>Adult Dose</th><th>Best For</th><th>Cautions</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Acetaminophen (Tylenol)</strong></td><td>500-1000mg q6h<br>Max: 3000mg/day</td><td>Pain, fever, safe with most conditions</td><td>Liver damage if exceeded. No alcohol.</td></tr>
                    <tr><td><strong>Ibuprofen (Advil, Motrin)</strong></td><td>200-400mg q4-6h<br>Max: 1200mg/day</td><td>Pain, inflammation, fever, menstrual cramps</td><td>Take with food. Not if kidney issues, stomach ulcers, or bleeding.</td></tr>
                    <tr><td><strong>Naproxen (Aleve)</strong></td><td>220mg q8-12h<br>Max: 660mg/day</td><td>Long-lasting pain relief, arthritis</td><td>Longer acting, same warnings as ibuprofen.</td></tr>
                    <tr><td><strong>Aspirin</strong></td><td>325-650mg q4h<br>Max: 4000mg/day</td><td>Pain, inflammation, heart protection</td><td>Can cause bleeding. Not for children (Reye's syndrome).</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Allergy & Cold</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Drug</th><th>Adult Dose</th><th>Best For</th><th>Notes</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Diphenhydramine (Benadryl)</strong></td><td>25-50mg q4-6h</td><td>Allergies, hives, sleep aid, itching</td><td>Causes drowsiness. Good for severe allergies.</td></tr>
                    <tr><td><strong>Cetirizine (Zyrtec)</strong></td><td>10mg once daily</td><td>Seasonal allergies, hives</td><td>Less drowsy than Benadryl. 24-hour relief.</td></tr>
                    <tr><td><strong>Loratadine (Claritin)</strong></td><td>10mg once daily</td><td>Seasonal allergies</td><td>Non-drowsy. 24-hour relief.</td></tr>
                    <tr><td><strong>Pseudoephedrine (Sudafed)</strong></td><td>30-60mg q4-6h</td><td>Nasal/sinus congestion</td><td>Behind pharmacy counter. Raises BP. Don't use if heart issues.</td></tr>
                    <tr><td><strong>Phenylephrine (Sudafed PE)</strong></td><td>10mg q4h</td><td>Nasal congestion</td><td>OTC version. Less effective than pseudoephedrine.</td></tr>
                    <tr><td><strong>Guaifenesin (Mucinex)</strong></td><td>200-400mg q4h</td><td>Chest congestion, mucus</td><td>Drink lots of water. Loosens phlegm.</td></tr>
                    <tr><td><strong>Dextromethorphan (DM)</strong></td><td>10-20mg q4h</td><td>Cough suppressant</td><td>For dry cough only. Don't use if productive cough.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Digestive</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Drug</th><th>Adult Dose</th><th>Best For</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Loperamide (Imodium)</strong></td><td>4mg initial, then 2mg after each loose stool<br>Max: 16mg/day</td><td>Diarrhea</td></tr>
                    <tr><td><strong>Bismuth subsalicylate (Pepto-Bismol)</strong></td><td>524mg q30min PRN<br>Max: 8 doses/day</td><td>Diarrhea, nausea, upset stomach</td></tr>
                    <tr><td><strong>Famotidine (Pepcid)</strong></td><td>10-20mg q12h</td><td>Heartburn, acid reflux</td></tr>
                    <tr><td><strong>Omeprazole (Prilosec)</strong></td><td>20mg once daily</td><td>Frequent heartburn (14-day course)</td></tr>
                    <tr><td><strong>Calcium carbonate (Tums)</strong></td><td>500-1000mg PRN</td><td>Immediate heartburn relief</td></tr>
                    <tr><td><strong>Docusate (Colace)</strong></td><td>100mg daily</td><td>Stool softener for constipation</td></tr>
                    <tr><td><strong>Bisacodyl (Dulcolax)</strong></td><td>5-15mg at bedtime</td><td>Constipation (stimulant laxative)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Topical</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Product</th><th>Use</th><th>Application</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Triple Antibiotic (Neosporin)</strong></td><td>Minor cuts, scrapes, burns</td><td>Thin layer 1-3x daily</td></tr>
                    <tr><td><strong>Bacitracin</strong></td><td>Minor wounds (less allergenic)</td><td>Thin layer 1-3x daily</td></tr>
                    <tr><td><strong>Hydrocortisone 1%</strong></td><td>Itching, rashes, insect bites, eczema</td><td>Thin layer 2-4x daily, max 7 days</td></tr>
                    <tr><td><strong>Clotrimazole (Lotrimin)</strong></td><td>Athlete's foot, jock itch, ringworm</td><td>2x daily for 2-4 weeks</td></tr>
                    <tr><td><strong>Miconazole (Monistat)</strong></td><td>Yeast infections (vaginal/skin)</td><td>Per package directions</td></tr>
                    <tr><td><strong>Lidocaine 4%</strong></td><td>Topical pain relief, sunburn</td><td>Apply to affected area PRN</td></tr>
                    <tr><td><strong>Benzocaine (Orajel)</strong></td><td>Mouth/tooth pain</td><td>Apply to affected area q2h PRN</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          `
        },
        {
          id: 'public-pharmacy',
          title: 'Pharmacy Requests',
          content: `
            <div class="alert alert-warning">
              <strong>Austere Situation:</strong> If medical infrastructure is compromised, you may need to request medications directly from pharmacies. Know what to ask for.
            </div>
            <div class="card">
              <div class="card-title">Essential Antibiotics to Request</div>
              <p><strong>For pharmacist consultation or emergency dispensing:</strong></p>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Drug</th><th>Typical Dose</th><th>Covers</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Amoxicillin</strong></td><td>500mg 3x daily x 7-10 days</td><td>Respiratory, ear, dental, skin infections</td></tr>
                    <tr><td><strong>Amoxicillin-Clavulanate (Augmentin)</strong></td><td>875mg 2x daily x 7-10 days</td><td>Broader coverage including bites</td></tr>
                    <tr><td><strong>Azithromycin (Z-Pack)</strong></td><td>500mg day 1, 250mg days 2-5</td><td>Respiratory, STIs, skin</td></tr>
                    <tr><td><strong>Ciprofloxacin</strong></td><td>500mg 2x daily x 7-14 days</td><td>UTI, GI, respiratory</td></tr>
                    <tr><td><strong>Doxycycline</strong></td><td>100mg 2x daily x 7-14 days</td><td>Respiratory, tick-borne, STIs, malaria prevention</td></tr>
                    <tr><td><strong>Metronidazole (Flagyl)</strong></td><td>500mg 3x daily x 7-10 days</td><td>GI infections, anaerobic bacteria, parasites</td></tr>
                    <tr><td><strong>Trimethoprim-Sulfa (Bactrim)</strong></td><td>1 DS tablet 2x daily x 3-14 days</td><td>UTI, skin infections (MRSA coverage)</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="alert alert-critical" style="margin-top: 1rem;">
                <strong>Antibiotic Allergies:</strong> If allergic to penicillin (amoxicillin), request azithromycin or doxycycline as alternatives. Tell the pharmacist.
              </div>
            </div>
            <div class="card">
              <div class="card-title">Critical Medications</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Drug</th><th>Purpose</th><th>Notes</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Epinephrine Auto-Injector</strong></td><td>Severe allergic reaction</td><td>EpiPen or generic. Life-saving.</td></tr>
                    <tr><td><strong>Albuterol Inhaler</strong></td><td>Asthma, breathing difficulty</td><td>Rescue inhaler for bronchospasm</td></tr>
                    <tr><td><strong>Prednisone</strong></td><td>Severe allergic reaction, asthma</td><td>40-60mg x 5-7 days for allergic reactions</td></tr>
                    <tr><td><strong>Ondansetron (Zofran)</strong></td><td>Severe nausea/vomiting</td><td>4-8mg q8h, dissolving tablets available</td></tr>
                    <tr><td><strong>Naloxone (Narcan)</strong></td><td>Opioid overdose reversal</td><td>Often available without Rx in pharmacies</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Pain Management</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Drug</th><th>Dose</th><th>Notes</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Tramadol</strong></td><td>50-100mg q4-6h</td><td>Moderate pain, less restricted than other opioids</td></tr>
                    <tr><td><strong>Cyclobenzaprine (Flexeril)</strong></td><td>5-10mg 3x daily</td><td>Muscle relaxant for spasms</td></tr>
                    <tr><td><strong>Gabapentin</strong></td><td>300mg 3x daily (titrate up)</td><td>Nerve pain, some availability issues</td></tr>
                    <tr><td><strong>Lidocaine Patches</strong></td><td>1-3 patches daily (12h on/12h off)</td><td>Localized pain relief</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">How to Talk to Pharmacists</div>
              <ol>
                <li>Be honest about your situation</li>
                <li>Describe symptoms clearly</li>
                <li>Mention any allergies</li>
                <li>Ask about interactions with current meds</li>
                <li>Request generic versions (cheaper)</li>
                <li>Ask about emergency supply policies</li>
              </ol>
              <p><strong>Many states allow pharmacists to prescribe or provide emergency supplies of essential medications.</strong></p>
            </div>
          `
        },
        {
          id: 'public-natural',
          title: 'Natural Remedies',
          content: `
            <div class="alert alert-info">
              <strong>When modern medicine is unavailable,</strong> these evidence-based natural remedies can help. Not a replacement for professional care when available.
            </div>
            <div class="card">
              <div class="card-title">Wound Care</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Remedy</th><th>Use</th><th>How</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Raw Honey</strong></td><td>Wound healing, burns, infection prevention</td><td>Apply directly to wound, cover with bandage. Change daily.</td></tr>
                    <tr><td><strong>Aloe Vera</strong></td><td>Burns, sunburn, skin irritation</td><td>Apply gel from plant directly to skin.</td></tr>
                    <tr><td><strong>Plantain Leaf</strong></td><td>Insect stings, minor cuts, drawing out infection</td><td>Crush fresh leaf into poultice, apply to wound.</td></tr>
                    <tr><td><strong>Yarrow</strong></td><td>Stop bleeding, wound healing</td><td>Crush leaves, apply to wound. Traditional "soldier's woundwort."</td></tr>
                    <tr><td><strong>Tea Tree Oil</strong></td><td>Antiseptic, antifungal</td><td>Dilute (5 drops per tbsp carrier oil). Do not ingest.</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="alert alert-warning" style="margin-top: 1rem;">
                <strong>Honey:</strong> Use raw, unpasteurized honey. Medical-grade Manuka honey is best. Regular store honey is less effective.
              </div>
            </div>
            <div class="card">
              <div class="card-title">Pain & Inflammation</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Remedy</th><th>Use</th><th>How</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Willow Bark</strong></td><td>Pain, fever (contains salicin - natural aspirin)</td><td>Tea: 1-2 tsp dried bark in hot water, steep 15 min. 3x daily.</td></tr>
                    <tr><td><strong>Turmeric</strong></td><td>Inflammation, joint pain</td><td>1/2 tsp powder in warm water or food. Add black pepper for absorption.</td></tr>
                    <tr><td><strong>Ginger</strong></td><td>Nausea, inflammation, digestion</td><td>Fresh tea, chew raw, or candied. 1-2g daily.</td></tr>
                    <tr><td><strong>Peppermint</strong></td><td>Headache, muscle pain, digestion</td><td>Tea, or apply diluted oil to temples/muscles.</td></tr>
                    <tr><td><strong>Clove</strong></td><td>Tooth pain (contains eugenol)</td><td>Apply clove oil to tooth/gum, or chew whole clove.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Infection Fighting</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Remedy</th><th>Use</th><th>How</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Garlic</strong></td><td>Antibacterial, antiviral, antifungal</td><td>Crush and let sit 10 min (activates allicin). Eat raw or in food. 2-3 cloves daily.</td></tr>
                    <tr><td><strong>Oregano Oil</strong></td><td>Powerful antimicrobial</td><td>2-4 drops in water, 3x daily. Very strong - dilute.</td></tr>
                    <tr><td><strong>Echinacea</strong></td><td>Immune support, cold/flu</td><td>Tea or tincture at first sign of illness. Take for 7-10 days max.</td></tr>
                    <tr><td><strong>Elderberry</strong></td><td>Viral infections, flu</td><td>Syrup: 1 tbsp 4x daily during illness. Do not eat raw berries.</td></tr>
                    <tr><td><strong>Goldenseal</strong></td><td>Mucous membrane infections</td><td>Tea or capsules. Short-term use only (1-2 weeks).</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Digestive</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Remedy</th><th>Use</th><th>How</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Ginger</strong></td><td>Nausea, vomiting, motion sickness</td><td>Tea, candied, or chew fresh. Safe during pregnancy.</td></tr>
                    <tr><td><strong>Peppermint</strong></td><td>IBS, bloating, gas</td><td>Tea after meals. Enteric-coated capsules for IBS.</td></tr>
                    <tr><td><strong>Chamomile</strong></td><td>Stomach upset, cramping, sleep</td><td>Tea: 1-2 bags in hot water, steep 5 min.</td></tr>
                    <tr><td><strong>Activated Charcoal</strong></td><td>Poisoning, gas, diarrhea</td><td>500-1000mg for GI issues. For poisoning: 50-100g with water.</td></tr>
                    <tr><td><strong>Apple Cider Vinegar</strong></td><td>Heartburn, digestion</td><td>1-2 tbsp in water before meals.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="alert alert-critical">
              <strong>Activated Charcoal for Poisoning:</strong> Give within 1 hour of ingestion. Does NOT work for: alcohol, heavy metals, lithium, acids, petroleum products. Call Poison Control first: 1-800-222-1222
            </div>
          `
        },
        {
          id: 'public-foraging',
          title: 'Field Medicine',
          content: `
            <div class="alert alert-warning">
              <strong>Only use plants you can positively identify.</strong> Misidentification can be fatal. When in doubt, do not use.
            </div>
            <div class="card">
              <div class="card-title">Common Medicinal Plants (North America)</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Plant</th><th>Identification</th><th>Medicinal Use</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Plantain (Plantago)</strong></td><td>Oval leaves with parallel veins, grows in lawns/paths</td><td>Poultice for stings, bites, wounds. Chew and apply.</td></tr>
                    <tr><td><strong>Yarrow</strong></td><td>Feathery leaves, flat white flower clusters</td><td>Stop bleeding, wound healing. Crush leaves, apply.</td></tr>
                    <tr><td><strong>Mullein</strong></td><td>Large fuzzy leaves, tall flower spike</td><td>Respiratory issues. Tea from leaves. Oil for ear infections.</td></tr>
                    <tr><td><strong>Pine Needles</strong></td><td>5-needle clusters (White Pine) safest</td><td>High in Vitamin C. Tea for colds, scurvy prevention.</td></tr>
                    <tr><td><strong>Willow Bark</strong></td><td>Long narrow leaves, grows near water</td><td>Pain relief (natural aspirin). Tea from inner bark.</td></tr>
                    <tr><td><strong>Dandelion</strong></td><td>Yellow flower, jagged leaves, milky sap</td><td>Diuretic, liver support. Entire plant edible.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Improvised Medical Supplies</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Need</th><th>Improvised Solution</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Antiseptic wash</strong></td><td>Salt water (1 tsp per cup), diluted alcohol, or clean urine (sterile) as last resort</td></tr>
                    <tr><td><strong>Wound dressing</strong></td><td>Clean cloth, moss (sphagnum is antibacterial), inner bark</td></tr>
                    <tr><td><strong>Splint material</strong></td><td>Sticks, bark, rolled newspaper, cardboard</td></tr>
                    <tr><td><strong>Suture/closure</strong></td><td>Duct tape, superglue (cyanoacrylate), butterfly from tape</td></tr>
                    <tr><td><strong>Tourniquet</strong></td><td>Belt, torn cloth (2"+ wide), stick for windlass</td></tr>
                    <tr><td><strong>Oral rehydration</strong></td><td>6 tsp sugar + 1/2 tsp salt per liter water</td></tr>
                    <tr><td><strong>Water purification</strong></td><td>Boil 1 min (3 min above 6500ft), 2 drops bleach/liter wait 30 min</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Oral Rehydration Solution (ORS)</div>
              <div class="drug-dose">
                <strong>Recipe:</strong> 1 liter clean water + 6 level teaspoons sugar + 1/2 level teaspoon salt
              </div>
              <p><strong>Use for:</strong> Diarrhea, vomiting, heat illness, blood loss recovery</p>
              <p><strong>Drink:</strong> Small sips frequently. Adult: 200-400ml after each loose stool.</p>
            </div>
            <div class="card">
              <div class="card-title">Pine Needle Tea (Vitamin C)</div>
              <ol>
                <li>Collect fresh green needles from White Pine, Spruce, or Fir</li>
                <li>Avoid: Yew, Norfolk Island Pine, Ponderosa Pine (toxic)</li>
                <li>Chop needles finely</li>
                <li>Steep 1-3 tablespoons in hot water for 10-15 minutes</li>
                <li>Strain and drink</li>
              </ol>
              <p><strong>Contains:</strong> 4-5x more Vitamin C than oranges by weight</p>
            </div>
            <div class="alert alert-critical">
              <strong>TOXIC LOOKALIKES:</strong> Yew (red berries), Water Hemlock (looks like parsnip), and many others are deadly. Never consume a plant unless you are 100% certain of identification.
            </div>
          `
        },
        {
          id: 'public-stockpile',
          title: 'Medicine Stockpile',
          content: `
            <div class="alert alert-info">
              <strong>Build your medical supplies before you need them.</strong> A well-stocked medicine cabinet can handle most emergencies.
            </div>
            <div class="card">
              <div class="card-title">Tier 1: Basic Home Kit (Everyone)</div>
              <ul>
                <li>Acetaminophen (Tylenol) - 500mg tablets</li>
                <li>Ibuprofen (Advil) - 200mg tablets</li>
                <li>Diphenhydramine (Benadryl) - 25mg capsules</li>
                <li>Loperamide (Imodium) - 2mg tablets</li>
                <li>Antacids (Tums or Pepcid)</li>
                <li>Triple antibiotic ointment</li>
                <li>Hydrocortisone cream 1%</li>
                <li>Bandages, gauze, medical tape</li>
                <li>Thermometer</li>
                <li>Tweezers, scissors</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Tier 2: Extended Kit (Prepared Households)</div>
              <p><strong>Add to Tier 1:</strong></p>
              <ul>
                <li>Pseudoephedrine (Sudafed) - decongestant</li>
                <li>Guaifenesin (Mucinex) - expectorant</li>
                <li>Cetirizine or Loratadine - non-drowsy antihistamine</li>
                <li>Omeprazole (Prilosec) - acid reducer</li>
                <li>Docusate (Colace) - stool softener</li>
                <li>Bismuth subsalicylate (Pepto-Bismol)</li>
                <li>Clotrimazole cream - antifungal</li>
                <li>Saline nasal spray</li>
                <li>Eye drops (artificial tears)</li>
                <li>Oral rehydration salts</li>
                <li>SAM splint or rolled magazines</li>
                <li>Israeli bandage or pressure dressing</li>
                <li>Tourniquet (CAT or SOFTT-W)</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Tier 3: Austere/Remote Kit</div>
              <p><strong>Add to Tiers 1 & 2 (consult physician for Rx items):</strong></p>
              <ul>
                <li>Antibiotics: Amoxicillin, Azithromycin, Ciprofloxacin, Metronidazole</li>
                <li>Epinephrine auto-injector</li>
                <li>Prednisone tablets</li>
                <li>Ondansetron (Zofran) dissolving tablets</li>
                <li>Naloxone (Narcan)</li>
                <li>Suture kit or skin stapler</li>
                <li>Lidocaine for injection</li>
                <li>Chest seals</li>
                <li>Hemostatic gauze (QuikClot, Celox)</li>
                <li>NPA airway</li>
                <li>Pulse oximeter</li>
                <li>Blood pressure cuff</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Storage Tips</div>
              <ul>
                <li>Store in cool, dry, dark place</li>
                <li>Check expiration dates annually</li>
                <li>Most medications remain effective 1-2 years past expiration</li>
                <li>Keep inventory list with dates</li>
                <li>Rotate stock (use oldest first, replace)</li>
                <li>Vacuum seal for long-term storage</li>
                <li>Include dosage charts and instructions</li>
              </ul>
            </div>
            <div class="alert alert-warning">
              <strong>Expiration Reality:</strong> Studies show most medications retain 90%+ potency for years past expiration. Exceptions: liquid antibiotics, insulin, nitroglycerin, EpiPens (replace when expired).
            </div>
          `
        },
        {
          id: 'public-pediatric',
          title: 'Pediatric Dosing',
          content: `
            <div class="alert alert-critical">
              <strong>Children are not small adults.</strong> Dosing is based on weight. When in doubt, call poison control: 1-800-222-1222
            </div>
            <div class="card">
              <div class="card-title">Acetaminophen (Tylenol)</div>
              <div class="drug-dose">
                10-15 mg/kg every 4-6 hours<br>
                Maximum: 75 mg/kg/day (not to exceed 4000mg)
              </div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Weight</th><th>Age (approx)</th><th>Dose</th></tr></thead>
                  <tbody>
                    <tr><td>6-11 lbs</td><td>0-3 months</td><td>40mg (1.25ml infant drops)</td></tr>
                    <tr><td>12-17 lbs</td><td>4-11 months</td><td>80mg (2.5ml infant drops)</td></tr>
                    <tr><td>18-23 lbs</td><td>1-2 years</td><td>120mg</td></tr>
                    <tr><td>24-35 lbs</td><td>2-3 years</td><td>160mg</td></tr>
                    <tr><td>36-47 lbs</td><td>4-5 years</td><td>240mg</td></tr>
                    <tr><td>48-59 lbs</td><td>6-8 years</td><td>320mg</td></tr>
                    <tr><td>60-71 lbs</td><td>9-10 years</td><td>400mg</td></tr>
                    <tr><td>72-95 lbs</td><td>11 years</td><td>480mg</td></tr>
                    <tr><td>96+ lbs</td><td>12+ years</td><td>640-1000mg (adult dose)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Ibuprofen (Advil, Motrin)</div>
              <div class="drug-dose">
                5-10 mg/kg every 6-8 hours<br>
                Maximum: 40 mg/kg/day (not to exceed 1200mg)
              </div>
              <p style="color: var(--danger);"><strong>Not for infants under 6 months</strong></p>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Weight</th><th>Age (approx)</th><th>Dose</th></tr></thead>
                  <tbody>
                    <tr><td>12-17 lbs</td><td>6-11 months</td><td>50mg (1.25ml)</td></tr>
                    <tr><td>18-23 lbs</td><td>12-23 months</td><td>75mg</td></tr>
                    <tr><td>24-35 lbs</td><td>2-3 years</td><td>100mg</td></tr>
                    <tr><td>36-47 lbs</td><td>4-5 years</td><td>150mg</td></tr>
                    <tr><td>48-59 lbs</td><td>6-8 years</td><td>200mg</td></tr>
                    <tr><td>60-71 lbs</td><td>9-10 years</td><td>250mg</td></tr>
                    <tr><td>72-95 lbs</td><td>11 years</td><td>300mg</td></tr>
                    <tr><td>96+ lbs</td><td>12+ years</td><td>200-400mg (adult dose)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Diphenhydramine (Benadryl)</div>
              <div class="drug-dose">
                1-1.25 mg/kg every 6 hours<br>
                Maximum: 300mg/day
              </div>
              <p style="color: var(--danger);"><strong>Not recommended for children under 2</strong></p>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Weight</th><th>Age (approx)</th><th>Dose</th></tr></thead>
                  <tbody>
                    <tr><td>20-24 lbs</td><td>2-3 years</td><td>6.25mg (consult doctor)</td></tr>
                    <tr><td>25-37 lbs</td><td>4-5 years</td><td>6.25mg</td></tr>
                    <tr><td>38-49 lbs</td><td>6-8 years</td><td>12.5mg</td></tr>
                    <tr><td>50-99 lbs</td><td>9-11 years</td><td>12.5-25mg</td></tr>
                    <tr><td>100+ lbs</td><td>12+ years</td><td>25-50mg (adult dose)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">When to Seek Emergency Care (Children)</div>
              <ul>
                <li>Fever >100.4°F in infant under 3 months</li>
                <li>Fever >104°F at any age</li>
                <li>Difficulty breathing or blue lips</li>
                <li>Won't stop crying, inconsolable</li>
                <li>Seizure</li>
                <li>Rash that doesn't blanch (press and release - stays red)</li>
                <li>Not urinating (dry diaper >8 hours)</li>
                <li>Severe vomiting/diarrhea with signs of dehydration</li>
                <li>Lethargy, difficult to wake</li>
                <li>Bulging soft spot (infants)</li>
              </ul>
            </div>
          `
        }
      ]
    },
    drugs: {
      title: 'Drug Reference',
      subtitle: 'Ranger Medic pharmacology quick reference',
      color: '#3b82f6',
      sections: [
        {
          id: 'drugs-quick',
          title: 'Quick Reference',
          content: `
            <div class="alert alert-info">
              <strong>ALWAYS determine if patient has allergies before administration.</strong><br>
              For opioids: have Naloxone ready. For benzodiazepines: have Flumazenil ready.
            </div>
            <div class="card">
              <div class="card-title">Pain Management</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Drug</th><th>Dose</th><th>Route</th><th>Indication</th></tr></thead>
                  <tbody>
                    <tr><td>Acetaminophen</td><td>650mg x2 q8h</td><td>PO</td><td>Mild-mod pain</td></tr>
                    <tr><td>Meloxicam</td><td>15mg daily</td><td>PO</td><td>Mild-mod pain</td></tr>
                    <tr><td>OTFC (Fentanyl)</td><td>800mcg</td><td>Transmucosal</td><td>Mod-severe, NOT shock</td></tr>
                    <tr><td>Ketamine</td><td>50mg / 20mg</td><td>IM,IN / IV,IO</td><td>Mod-severe, IN shock</td></tr>
                    <tr><td>Morphine</td><td>5mg</td><td>IV/IO</td><td>Alternative to OTFC</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Antibiotics</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Drug</th><th>Dose</th><th>Route</th><th>Use If</th></tr></thead>
                  <tbody>
                    <tr><td>Moxifloxacin</td><td>400mg daily</td><td>PO</td><td>Can take PO</td></tr>
                    <tr><td>Ertapenem</td><td>1g daily</td><td>IV/IM</td><td>Unable to take PO</td></tr>
                    <tr><td>Cefazolin</td><td>1-2g q8h</td><td>IV/IM</td><td>Open fractures, pre-surgical</td></tr>
                    <tr><td>Ceftriaxone</td><td>1-2g q12-24h</td><td>IV/IM</td><td>Meningitis, severe infections</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Critical Medications</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Drug</th><th>Dose</th><th>Route</th><th>Indication</th></tr></thead>
                  <tbody>
                    <tr><td>TXA</td><td>1-2g flush</td><td>IV/IO</td><td>Hemorrhage (<3hr)</td></tr>
                    <tr><td>Epinephrine</td><td>0.3-0.5mg</td><td>IM</td><td>Anaphylaxis</td></tr>
                    <tr><td>Epinephrine</td><td>1mg q3-5min</td><td>IV/IO</td><td>Cardiac arrest (ACLS)</td></tr>
                    <tr><td>Naloxone</td><td>0.4-2mg</td><td>IV/IM</td><td>Opioid reversal</td></tr>
                    <tr><td>Atropine</td><td>1-6mg q3-5min</td><td>IV/IM</td><td>Nerve agent/organophosphate</td></tr>
                    <tr><td>Atropine</td><td>0.5mg q3-5min</td><td>IV/IM</td><td>Bradycardia (max 3mg)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Other Medications</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Drug</th><th>Dose</th><th>Route</th><th>Indication</th></tr></thead>
                  <tbody>
                    <tr><td>Ondansetron</td><td>4mg q8h</td><td>ODT/IV/IM</td><td>Nausea/vomiting</td></tr>
                    <tr><td>Diphenhydramine</td><td>25-50mg q4-6h</td><td>IV/IM/PO</td><td>Allergic reaction</td></tr>
                    <tr><td>Dexamethasone</td><td>4mg qid</td><td>PO/IV/IM</td><td>AMS, HACE, inflammation</td></tr>
                    <tr><td>Acetazolamide</td><td>125mg BID</td><td>PO</td><td>Altitude illness prevention</td></tr>
                    <tr><td>Albuterol</td><td>2 puffs q4-6h</td><td>MDI/Neb</td><td>Bronchospasm</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          `
        },
        {
          id: 'drugs-pain',
          title: 'Pain Protocol',
          content: `
            <div class="decision-box">
              <div class="decision-question">What is the pain level and casualty status?</div>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Mild to Moderate Pain (Still Able to Fight)</div>
              <div class="drug-class">Combat Wound Medication Pack (CWMP)</div>
              <div class="drug-dose">
                Acetaminophen 650mg bilayer - 2 tablets PO q8h (max 4g/day)<br>
                Meloxicam 15mg PO daily
              </div>
              <p><strong>Mission Impact:</strong> None to minimal</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Moderate to Severe Pain - NOT in Shock</div>
              <div class="drug-class">Oral Transmucosal Fentanyl Citrate (OTFC)</div>
              <div class="drug-dose">
                800mcg transmucosal (max 1600mcg/day)<br>
                Add second 800mcg in 15 min if needed
              </div>
              <ul>
                <li>Place lozenge between cheek and gum</li>
                <li>Do NOT chew</li>
                <li>Tape to finger or attach to uniform with safety pin</li>
                <li>Have <strong>Naloxone ready</strong></li>
              </ul>
              <div class="alert alert-warning" style="margin-top: 1rem;">
                <strong>Disarm casualty.</strong> Secure weapons and communications.
              </div>
              <p><strong>Onset:</strong> 15 min | <strong>Peak:</strong> 20-40 min | <strong>Duration:</strong> 2-3 hours</p>
              <p style="color: var(--danger);"><strong>K9 Dosage:</strong> DO NOT GIVE to K9s</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Moderate to Severe Pain - IN Shock/Respiratory Distress</div>
              <div class="drug-class">Ketamine (Ketalar)</div>
              <div class="drug-dose">
                50mg IM or IN - repeat q30min PRN<br>
                <strong>OR</strong><br>
                20mg slow IV or IO - repeat q20min PRN
              </div>
              <p><strong>Endpoint:</strong> Control of pain OR development of nystagmus</p>
              <p><strong>Max dose:</strong> 4g/day</p>
              <div class="alert alert-warning" style="margin-top: 1rem;">
                <ul style="margin: 0;">
                  <li>Be prepared to suction (increases secretions)</li>
                  <li>Be prepared for ventilatory support</li>
                  <li><strong>Contraindication:</strong> Severe TBI (may worsen)</li>
                </ul>
              </div>
              <p><strong>K9 Dosage:</strong> 75-150mg (2-5mg/kg) IM. Onset 2-5 min. Consider Midazolam adjunct.</p>
            </div>
            <div class="card">
              <div class="card-title">Ondansetron (Zofran) - Anti-nausea</div>
              <div class="drug-dose">4mg ODT/IV/IO/IM q8h PRN</div>
              <p>Consider for nausea/vomiting with pain medications.</p>
            </div>
          `
        },
        {
          id: 'drugs-antibiotics',
          title: 'Antibiotics',
          content: `
            <div class="alert alert-info">
              Early administration of antibiotics is recommended for <strong>ALL open combat wounds</strong>.<br>
              If allergic to one class, use alternate: Cephalosporins/Penicillins, Tetracyclines, Quinolones, Macrolides.
            </div>
            <div class="card drug-card">
              <div class="drug-name">Moxifloxacin (Avelox)</div>
              <div class="drug-class">Fluoroquinolone antibiotic</div>
              <div class="drug-dose">400mg PO daily</div>
              <p><strong>Use if:</strong> Casualty can take oral medications</p>
              <p><strong>Part of:</strong> Combat Wound Medication Pack</p>
              <p><strong>Mission Impact:</strong> GROUNDING for flight personnel</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Ertapenem (Invanz)</div>
              <div class="drug-class">Carbapenem antibiotic (beta-lactam)</div>
              <div class="drug-dose">1g IV/IM q24h</div>
              <p><strong>Use if:</strong> Unable to take oral medications</p>
              <h4 style="margin-top: 1rem;">Reconstitution:</h4>
              <ul>
                <li><strong>IV:</strong> 10ml Normal Saline</li>
                <li><strong>IM:</strong> 3.2ml 1% Lidocaine (without epinephrine)</li>
              </ul>
              <p><strong>Mission Impact:</strong> GROUNDING for flight personnel</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Cefazolin (Ancef)</div>
              <div class="drug-class">1st generation cephalosporin</div>
              <div class="drug-dose">1-2g IV/IM q8h (max 12g/day)</div>
              <p><strong>Use for:</strong> Open bone fractures, joint disruptions, pre-surgical prophylaxis</p>
              <p><strong>K9 Dosage:</strong> 0.5-1g (25mg/kg) IV daily, give over 5 min</p>
              <p><strong>Mission Impact:</strong> GROUNDING for flight personnel</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Ceftriaxone (Rocephin)</div>
              <div class="drug-class">3rd generation cephalosporin</div>
              <div class="drug-dose">
                Moderate-severe infections: 1-2g IV/IM q12-24h (max 4g/day)<br>
                Meningitis: 2g IV/IM q12h<br>
                Gonorrhea: 250mg IM x1
              </div>
              <p><strong>IM Administration:</strong> Dilute in 1% lidocaine</p>
              <p><strong>K9 Dosage:</strong> 1g IV/IM daily</p>
              <p><strong>Mission Impact:</strong> GROUNDING for flight personnel</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Azithromycin (Zithromax)</div>
              <div class="drug-class">Macrolide antibiotic</div>
              <div class="drug-dose">
                Pneumonia: 500mg PO day 1, then 250mg daily x4 days<br>
                STI (gonococcal): 1g PO x1 with ceftriaxone
              </div>
              <p><strong>Note:</strong> Food decreases absorption by 50%</p>
              <p><strong>Mission Impact:</strong> GROUNDING for flight personnel</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Doxycycline</div>
              <div class="drug-class">Tetracycline antibiotic</div>
              <div class="drug-dose">
                Antimalarial: 100mg PO daily (start 1-2 days prior, continue 4 weeks after)<br>
                Antimicrobial: 100mg PO q12h day 1, then 100mg daily<br>
                Travelers' diarrhea: 100mg PO daily during risk period
              </div>
              <p><strong>Note:</strong> Antacids (Pepto, Mylanta) significantly decrease absorption</p>
              <p style="color: var(--danger);"><strong>Contraindication:</strong> Pregnancy (tooth discoloration)</p>
            </div>
          `
        },
        {
          id: 'drugs-emergency',
          title: 'Emergency Drugs',
          content: `
            <div class="card drug-card">
              <div class="drug-name">Epinephrine (including Epi-Pen)</div>
              <div class="drug-class">Alpha/beta-adrenergic agonist, catecholamine</div>
              <div class="drug-dose">
                <strong>Anaphylaxis:</strong> 0.3-0.5mg IM q10-15min (1:1000 = 1mg/1ml)<br>
                <strong>Cardiac Arrest (ACLS):</strong> 1mg IV/IO q3-5min
              </div>
              <p><strong>Onset:</strong> Rapid | <strong>Duration:</strong> 1-2 minutes</p>
              <p><strong>Mission Impact:</strong> GROUNDING for flight personnel</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Atropine Sulfate</div>
              <div class="drug-class">Anticholinergic, parasympatholytic</div>
              <div class="drug-dose">
                <strong>Organophosphate/Nerve Agent:</strong> 1-6mg IV/IM q3-5min PRN x 2-12hrs<br>
                <strong>Bradycardia:</strong> 0.5mg IV/IM q3-5min (max 3mg)
              </div>
              <p><strong>Action:</strong> Blocks acetylcholine, increases heart rate, dries secretions</p>
              <p><strong>Contraindications:</strong> Glaucoma, GI obstruction, tachycardia, myocardial ischemia</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Naloxone (Narcan)</div>
              <div class="drug-class">Opioid antagonist</div>
              <div class="drug-dose">
                0.4-2mg IV/IM<br>
                Repeat q2-3min PRN<br>
                Max: 10mg
              </div>
              <p><strong>Indication:</strong> Opioid overdose reversal (respiratory depression, sedation, hypotension)</p>
              <p><strong>Note:</strong> Titrate to effect - maintain pain control</p>
              <p><strong>K9 Dosage:</strong> 1mg (0.02-0.04mg/kg) IV/IM</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Tranexamic Acid (TXA)</div>
              <div class="drug-class">Antifibrinolytic agent</div>
              <div class="drug-dose">
                1-2g IV/IO flush ASAP<br>
                DO NOT administer >3 hours post injury<br>
                Second dose: 1g after first blood unit (if initial was 1g)
              </div>
              <p><strong>Criteria:</strong> Hemorrhagic shock, major amputations, penetrating torso, severe bleeding, pelvic fracture</p>
              <p style="color: var(--danger);"><strong>Contraindications:</strong> Subarachnoid hemorrhage, active intravascular clotting</p>
              <p><strong>Note:</strong> Do NOT mix with blood products or Hextend</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Dextrose 50% (D50)</div>
              <div class="drug-class">Caloric, monosaccharide</div>
              <div class="drug-dose">
                0.5-1g/kg (1-2ml/kg) up to 25g (50ml) of 50% solution IV<br>
                If tolerating PO: provide glucose tabs
              </div>
              <p><strong>Indication:</strong> Hypoglycemic episode</p>
              <p style="color: var(--danger);"><strong>Contraindications:</strong> Hyperglycemia, cranial/spinal hemorrhage</p>
            </div>
          `
        },
        {
          id: 'drugs-sedation',
          title: 'Sedation & Anxiolytics',
          content: `
            <div class="card drug-card">
              <div class="drug-name">Diazepam (Valium)</div>
              <div class="drug-class">Benzodiazepine, anticonvulsant, anxiolytic - CONTROLLED IV</div>
              <div class="drug-dose">
                5-10mg slow IV push, repeat in 3-4h<br>
                2-10mg PO tid-qid
              </div>
              <p><strong>Indications:</strong> Anxiety, seizures, muscle spasm, status epilepticus, acute alcohol withdrawal</p>
              <p style="color: var(--danger);"><strong>Contraindications:</strong> Shock, coma, alcohol intoxication, narrow-angle glaucoma</p>
              <p><strong>Mission Impact:</strong> GROUNDING - causes drowsiness</p>
              <p><strong>K9 Dosage:</strong> Seizures: 15-30mg (0.5-1mg/kg) IV or 30-60mg (1-2mg/kg) rectally q4h. Sedation with opioid: 7.5mg (0.25mg/kg) IV/IM q4h.</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Diphenhydramine (Benadryl)</div>
              <div class="drug-class">H1 blocker, antihistamine</div>
              <div class="drug-dose">25-50mg IV/IM/PO q4-6h</div>
              <p><strong>Onset:</strong> IV immediate, IM 30 min, PO 15-60 min</p>
              <p><strong>Duration:</strong> 6-8 hours</p>
              <p><strong>Indications:</strong> Allergic conditions, motion sickness, Parkinsonism, sedation, cough suppression</p>
              <p><strong>Mission Impact:</strong> GROUNDING - sedative effects</p>
              <p><strong>K9 Dosage:</strong> 50mg IM/SQ/PO (impacts sense of smell)</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Cyclobenzaprine (Flexeril)</div>
              <div class="drug-class">Central-acting skeletal muscle relaxant</div>
              <div class="drug-dose">5-10mg PO tid PRN muscle spasm (max 60mg/day)<br>Do not use longer than 2-3 weeks</div>
              <p><strong>Indications:</strong> Short-term relief of muscle spasm</p>
              <p style="color: var(--danger);"><strong>Contraindications:</strong> MI recovery phase, cardiac arrhythmias, heart block, CHF</p>
              <p><strong>Mission Impact:</strong> GROUNDING - causes drowsiness</p>
              <p style="color: var(--danger);"><strong>K9 Dosage:</strong> DO NOT GIVE</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Eszopiclone (Lunesta)</div>
              <div class="drug-class">Sedative-Hypnotic - CONTROLLED IV</div>
              <div class="drug-dose">2-3mg immediately at bedtime</div>
              <p><strong>Indications:</strong> Insomnia</p>
              <p><strong>Mission Impact:</strong> GROUNDING - higher risk for heat injury</p>
            </div>
          `
        },
        {
          id: 'drugs-altitude',
          title: 'Altitude & Environment',
          content: `
            <div class="card drug-card">
              <div class="drug-name">Acetazolamide (Diamox)</div>
              <div class="drug-class">Carbonic anhydrase inhibitor, diuretic</div>
              <div class="drug-dose">
                <strong>Prevention:</strong> 125mg PO BID (start 1-2 days prior to ascent)<br>
                <strong>Treatment:</strong> 250mg PO BID until symptoms resolve
              </div>
              <p><strong>Indications:</strong> Acute high-altitude sickness (AMS) prevention/treatment, seizures</p>
              <p><strong>Note:</strong> With HACE, dexamethasone is primary treatment; acetazolamide is adjunctive</p>
              <p><strong>Mission Impact:</strong> GROUNDING for flight personnel</p>
              <p><strong>K9 Dosage:</strong> 250mg q12h beginning 24h prior to ascent OR 500mg q24h</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Dexamethasone (Decadron)</div>
              <div class="drug-class">Glucocorticoid steroid</div>
              <div class="drug-dose">
                <strong>AMS:</strong> 4mg PO qid<br>
                <strong>HACE:</strong> 8mg initial, then 4mg PO qid until symptoms resolve<br>
                <strong>General:</strong> 0.25-4mg PO bid-qid
              </div>
              <p><strong>Onset:</strong> Hours | <strong>Peak:</strong> 8-12 hours | <strong>Duration:</strong> 72 hours</p>
              <p><strong>Indications:</strong> Cerebral edema, inflammatory conditions, allergic states</p>
              <p><strong>Mission Impact:</strong> GROUNDING for flight personnel</p>
              <p><strong>K9 Dosage:</strong> 3-4mg (0.5mg/kg) IV/IM</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Malarone (Atovaquone-Proguanil)</div>
              <div class="drug-class">Antimalarial</div>
              <div class="drug-dose">
                <strong>Prophylaxis:</strong> 250mg/100mg PO daily (start 1-2 days prior, continue 7 days after)<br>
                <strong>Treatment:</strong> 1000mg/400mg PO daily x 3 days
              </div>
              <p><strong>Indication:</strong> P. falciparum malaria prevention and treatment</p>
              <p><strong>Side Effects:</strong> Headache, abdominal pain, N/V/D, possible seizures/psychotic events</p>
              <p><strong>Mission Impact:</strong> None</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Albuterol (Proventil)</div>
              <div class="drug-class">Beta-adrenergic agonist, bronchodilator</div>
              <div class="drug-dose">
                MDI: 2 puffs q4-6h PRN<br>
                Nebulizer: 0.5ml of 0.5% solution (2.5mg) in 5ml NS tid-qid
              </div>
              <p><strong>Indications:</strong> Exercise-induced bronchospasm, acute asthma, bronchitis, reversible airway disease</p>
              <p><strong>Mission Impact:</strong> GROUNDING for flight personnel</p>
            </div>
          `
        },
        {
          id: 'drugs-gi',
          title: 'GI & Other',
          content: `
            <div class="card drug-card">
              <div class="drug-name">Cimetidine (Tagamet)</div>
              <div class="drug-class">H2-receptor antagonist</div>
              <div class="drug-dose">300mg PO qid OR 800mg at bedtime OR 400mg BID x 8 weeks</div>
              <p><strong>Indications:</strong> Duodenal/gastric ulcer, GERD, chronic urticaria, acetaminophen toxicity</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Docusate (Colace)</div>
              <div class="drug-class">Stool softener</div>
              <div class="drug-dose">50-500mg/day PO divided qd-qid</div>
              <p><strong>Indications:</strong> Constipation with hard/dry stools, prophylaxis with narcotic use</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Bisacodyl (Dulcolax)</div>
              <div class="drug-class">Stimulant laxative</div>
              <div class="drug-dose">5-15mg PO (works within 6-10 hours)</div>
              <p><strong>Note:</strong> Swallow tablets whole with water/juice. Do NOT crush/chew. Do NOT take with dairy or antacids.</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Benzonatate (Tessalon Perles)</div>
              <div class="drug-class">Nonnarcotic antitussive</div>
              <div class="drug-dose">100-200mg PO 3x daily PRN (max single: 200mg, max daily: 600mg)</div>
              <p><strong>Indication:</strong> Relief of cough</p>
              <p><strong>Mission Impact:</strong> None</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Cetirizine (Zyrtec)</div>
              <div class="drug-class">H1-receptor antagonist, non-sedating antihistamine</div>
              <div class="drug-dose">5-10mg PO daily</div>
              <p><strong>Indications:</strong> Seasonal/perennial allergic rhinitis, chronic urticaria</p>
              <p><strong>Note:</strong> Do not combine with OTC antihistamines</p>
              <p><strong>Mission Impact:</strong> GROUNDING for flight personnel</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Bupivacaine (Marcaine)</div>
              <div class="drug-class">Local anesthetic</div>
              <div class="drug-dose">0.25% infiltrated locally (max 400mg/day)<br>Aspirate before every injection</div>
              <p><strong>Onset:</strong> Fast | <strong>Peak:</strong> 30-45 min | <strong>Duration:</strong> 2-8 hours</p>
              <p><strong>Note:</strong> Epinephrine reduces absorption rate and peak concentration</p>
              <p style="color: var(--danger);"><strong>Contraindication:</strong> Do NOT use as IV regional anesthesia (can cause cardiac arrest)</p>
              <p><strong>Mission Impact:</strong> GROUNDING for flight personnel</p>
            </div>
          `
        }
      ]
    },

    k9: {
      title: 'K9 Dosages',
      subtitle: 'Military Working Dog pharmacology reference',
      color: '#f59e0b',
      sections: [
        {
          id: 'k9-prohibited',
          title: 'Prohibited Drugs',
          content: `
            <div class="alert alert-critical">
              <strong>DO NOT GIVE TO K9:</strong>
              <ul style="margin: 0.5rem 0 0 0;">
                <li>Acetaminophen</li>
                <li>Ciprofloxacin</li>
                <li>Clindamycin</li>
                <li>Cyclobenzaprine</li>
                <li>Fentanyl/OTFC</li>
              </ul>
            </div>
            <div class="alert alert-warning">
              <strong>Use with Caution:</strong>
              <ul style="margin: 0.5rem 0 0 0;">
                <li>Diphenhydramine - impacts sense of smell</li>
                <li>NSAIDs - can cause GI bleeding</li>
              </ul>
            </div>
          `
        },
        {
          id: 'k9-quick',
          title: 'K9 Quick Reference',
          content: `
            <div class="card">
              <div class="card-title">K9 Drug Quick Reference</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Drug</th><th>K9 Dose</th><th>Notes</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Ketamine</strong></td><td>75-150mg (2-5mg/kg) IM</td><td>Onset 2-5 min, consider Midazolam adjunct</td></tr>
                    <tr><td><strong>Naloxone</strong></td><td>1mg (0.02-0.04mg/kg) IV/IM</td><td>Opioid reversal</td></tr>
                    <tr><td><strong>Diazepam</strong></td><td>Seizures: 0.5-1mg/kg IV, 1-2mg/kg rectally</td><td>q4h as needed</td></tr>
                    <tr><td><strong>Diphenhydramine</strong></td><td>50mg IM/SQ/PO</td><td>Impacts sense of smell</td></tr>
                    <tr><td><strong>Dexamethasone</strong></td><td>3-4mg (0.5mg/kg) IV/IM</td><td>-</td></tr>
                    <tr><td><strong>Cefazolin</strong></td><td>0.5-1g (25mg/kg) IV daily</td><td>Give over 5 min</td></tr>
                    <tr><td><strong>Ceftriaxone</strong></td><td>1g IV/IM daily</td><td>-</td></tr>
                    <tr><td><strong>Amoxicillin/Clav</strong></td><td>10-20mg/kg PO BID x 5-7d</td><td>-</td></tr>
                    <tr><td><strong>Aspirin (Buffered)</strong></td><td>10-25mg/kg PO q8-12h</td><td>Only buffered aspirin</td></tr>
                    <tr><td><strong>Acetazolamide</strong></td><td>250mg q12h or 500mg q24h</td><td>Start 24h prior to ascent</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          `
        },
        {
          id: 'k9-pain',
          title: 'K9 Pain Management',
          content: `
            <div class="card drug-card">
              <div class="drug-name">Ketamine - K9 Pain Management</div>
              <div class="drug-class">Primary analgesic for MWD</div>
              <div class="drug-dose">
                75-150mg (2-5mg/kg) IM<br>
                Onset: 2-5 minutes
              </div>
              <ul>
                <li>Drug of choice for MWD pain management</li>
                <li>Consider Midazolam adjunct for emergence reactions</li>
                <li>Be prepared for increased salivation</li>
                <li>Monitor airway closely</li>
              </ul>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Buffered Aspirin - K9</div>
              <div class="drug-class">NSAID analgesic</div>
              <div class="drug-dose">10-25mg/kg PO q8-12h</div>
              <p><strong>Important:</strong> Only use buffered aspirin formulation</p>
              <p><strong>Use for:</strong> Mild to moderate pain, inflammation</p>
              <p style="color: var(--danger);"><strong>Warning:</strong> Can cause GI bleeding with prolonged use</p>
            </div>
            <div class="alert alert-critical">
              <strong>NEVER give Fentanyl/OTFC to K9s!</strong>
            </div>
          `
        },
        {
          id: 'k9-emergency',
          title: 'K9 Emergency Drugs',
          content: `
            <div class="card drug-card">
              <div class="drug-name">Naloxone - K9</div>
              <div class="drug-class">Opioid reversal</div>
              <div class="drug-dose">1mg (0.02-0.04mg/kg) IV/IM</div>
              <p><strong>Indication:</strong> Reversal of opioid effects (if accidentally exposed)</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Diazepam - K9 Seizures</div>
              <div class="drug-class">Anticonvulsant</div>
              <div class="drug-dose">
                15-30mg (0.5-1mg/kg) IV<br>
                OR<br>
                30-60mg (1-2mg/kg) rectally q4h
              </div>
              <p><strong>Sedation with opioid:</strong> 7.5mg (0.25mg/kg) IV/IM q4h</p>
            </div>
            <div class="card drug-card">
              <div class="drug-name">Dexamethasone - K9</div>
              <div class="drug-class">Glucocorticoid</div>
              <div class="drug-dose">3-4mg (0.5mg/kg) IV/IM</div>
              <p><strong>Use for:</strong> Allergic reactions, inflammation, cerebral edema</p>
            </div>
          `
        }
      ]
    },

    shock: {
      title: 'Shock Classification',
      subtitle: 'Hemorrhagic shock classes and resuscitation',
      color: '#dc2626',
      sections: [
        {
          id: 'shock-classes',
          title: 'Classes of Shock',
          content: `
            <div class="card">
              <div class="card-title">Classes of Hemorrhagic Shock</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Parameter</th><th>Class I</th><th>Class II</th><th>Class III</th><th>Class IV</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Blood Loss (ml)</strong></td><td><750</td><td>750-1500</td><td>1500-2000</td><td>>2000</td></tr>
                    <tr><td><strong>Blood Loss (%)</strong></td><td><15%</td><td>15-30%</td><td>30-40%</td><td>>40%</td></tr>
                    <tr><td><strong>Pulse Rate</strong></td><td><100</td><td>100-120</td><td>120-140</td><td>>140</td></tr>
                    <tr><td><strong>Blood Pressure</strong></td><td>Normal</td><td>Normal</td><td>Decreased</td><td>Decreased</td></tr>
                    <tr><td><strong>Pulse Pressure</strong></td><td>Normal</td><td>Narrowed</td><td>Narrowed</td><td>Narrowed</td></tr>
                    <tr><td><strong>Respiratory Rate</strong></td><td>14-20</td><td>20-30</td><td>30-40</td><td>>35</td></tr>
                    <tr><td><strong>Urine Output (ml/hr)</strong></td><td>>30</td><td>20-30</td><td>5-15</td><td>Negligible</td></tr>
                    <tr><td><strong>Mental Status</strong></td><td>Slightly anxious</td><td>Mildly anxious</td><td>Anxious, confused</td><td>Confused, lethargic</td></tr>
                    <tr><td><strong>Fluid Replacement</strong></td><td>Crystalloid</td><td>Crystalloid</td><td>Blood + Crystalloid</td><td>Blood + Crystalloid</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="alert alert-info">
              <strong>Note:</strong> These guidelines are for a 70kg adult. Individual responses may vary based on age, medications, and pre-existing conditions.
            </div>
          `
        },
        {
          id: 'shock-indicators',
          title: 'Field Indicators',
          content: `
            <div class="card">
              <div class="card-title">Shock Assessment - Field Indicators</div>
              <ul>
                <li><strong>Altered mental status</strong> (in absence of TBI)</li>
                <li><strong>Weak or absent radial pulse</strong></li>
                <li><strong>Capillary refill >2 seconds</strong></li>
                <li><strong>Decreased blood pressure</strong></li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Pulse Pressure Estimation</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Pulse Location</th><th>Estimated SBP</th></tr></thead>
                  <tbody>
                    <tr><td>Radial pulse present</td><td>~80 mmHg</td></tr>
                    <tr><td>Femoral pulse present</td><td>~70 mmHg</td></tr>
                    <tr><td>Carotid pulse present</td><td>~60 mmHg</td></tr>
                  </tbody>
                </table>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted);">These are quick estimates only. Use actual BP measurement when possible.</p>
            </div>
            <div class="alert alert-critical">
              <strong>The Lethal Triad:</strong> Hypothermia + Acidosis + Coagulopathy = Death
            </div>
          `
        },
        {
          id: 'shock-resuscitation',
          title: 'Resuscitation',
          content: `
            <div class="card">
              <div class="card-title">Fluid Resuscitation Priority</div>
              <ol>
                <li><strong>Whole Blood Transfusion (warmed)</strong> - Preferred</li>
                <li>Components in 1:1 ratio (Plasma:RBCs:Platelets)</li>
                <li>ROLO (Ranger O Low-titer)</li>
                <li>Freeze-Dried Plasma (FDP)</li>
                <li>Hextend 500ml bolus</li>
                <li>Lactated Ringers OR Plasma-Lyte A</li>
              </ol>
            </div>
            <div class="alert alert-success">
              <strong>Resuscitation Endpoints:</strong>
              <ul style="margin: 0.5rem 0 0 0;">
                <li>Palpable radial pulse</li>
                <li>Improved mental status</li>
                <li>SBP 90-100 mmHg (hemorrhagic shock)</li>
                <li>SBP >110 mmHg (TBI with altered mental status)</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Tranexamic Acid (TXA)</div>
              <div class="drug-dose">
                1-2g IV/IO flush ASAP<br>
                DO NOT administer >3 hours post injury
              </div>
              <p><strong>Criteria:</strong> Hemorrhagic shock, major amputations, penetrating torso, severe bleeding, pelvic fracture</p>
            </div>
            <div class="card">
              <div class="card-title">Calcium Supplementation</div>
              <div class="drug-dose">
                CaCl 10cc slow IV/IO push OR CaGluc 30cc slow IV/IO push<br>
                After 2g TXA (use second IV/IO site)<br>
                Repeat after every 4th unit of blood
              </div>
            </div>
          `
        }
      ]
    },

    vitals: {
      title: 'Vitals & Conversions',
      subtitle: 'Normal values, conversions, and reference tables',
      color: '#22c55e',
      sections: [
        {
          id: 'vitals-normal',
          title: 'Normal Vitals',
          content: `
            <div class="card">
              <div class="card-title">Normal Adult Vital Signs</div>
              <div class="table-wrapper">
                <table>
                  <tbody>
                    <tr><td><strong>Heart Rate</strong></td><td>60-100 bpm</td></tr>
                    <tr><td><strong>Respiratory Rate</strong></td><td>12-20 breaths/min</td></tr>
                    <tr><td><strong>Blood Pressure</strong></td><td>90-120 / 60-80 mmHg</td></tr>
                    <tr><td><strong>SpO2</strong></td><td>95-100%</td></tr>
                    <tr><td><strong>Temperature</strong></td><td>97.8-99.1°F (36.5-37.3°C)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Glasgow Coma Scale (GCS)</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Response</th><th>Score</th></tr></thead>
                  <tbody>
                    <tr><td colspan="2" style="background: var(--bg-highlight);"><strong>Eye Opening</strong></td></tr>
                    <tr><td>Spontaneous</td><td>4</td></tr>
                    <tr><td>To voice</td><td>3</td></tr>
                    <tr><td>To pain</td><td>2</td></tr>
                    <tr><td>None</td><td>1</td></tr>
                    <tr><td colspan="2" style="background: var(--bg-highlight);"><strong>Verbal Response</strong></td></tr>
                    <tr><td>Oriented</td><td>5</td></tr>
                    <tr><td>Confused</td><td>4</td></tr>
                    <tr><td>Inappropriate words</td><td>3</td></tr>
                    <tr><td>Incomprehensible sounds</td><td>2</td></tr>
                    <tr><td>None</td><td>1</td></tr>
                    <tr><td colspan="2" style="background: var(--bg-highlight);"><strong>Motor Response</strong></td></tr>
                    <tr><td>Obeys commands</td><td>6</td></tr>
                    <tr><td>Localizes pain</td><td>5</td></tr>
                    <tr><td>Withdraws from pain</td><td>4</td></tr>
                    <tr><td>Flexion (decorticate)</td><td>3</td></tr>
                    <tr><td>Extension (decerebrate)</td><td>2</td></tr>
                    <tr><td>None</td><td>1</td></tr>
                  </tbody>
                </table>
              </div>
              <p style="margin-top: 0.5rem;"><strong>Total: 3-15</strong> | Severe TBI: 3-8 | Moderate TBI: 9-13</p>
            </div>
          `
        },
        {
          id: 'vitals-conversions',
          title: 'Conversions',
          content: `
            <div class="card">
              <div class="card-title">Weight Conversions</div>
              <div class="table-wrapper">
                <table>
                  <tbody>
                    <tr><td>1 kg</td><td>2.2 lbs</td></tr>
                    <tr><td>1 lb</td><td>0.45 kg</td></tr>
                    <tr><td>40 kg</td><td>88 lbs</td></tr>
                    <tr><td>60 kg</td><td>132 lbs</td></tr>
                    <tr><td>80 kg</td><td>176 lbs</td></tr>
                    <tr><td>100 kg</td><td>220 lbs</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Temperature</div>
              <div class="table-wrapper">
                <table>
                  <tbody>
                    <tr><td>98.6°F</td><td>37.0°C</td><td>Normal</td></tr>
                    <tr><td>95°F</td><td>35.0°C</td><td>Hypothermia onset</td></tr>
                    <tr><td>100°F</td><td>37.8°C</td><td>Low-grade fever</td></tr>
                    <tr><td>104°F</td><td>40.0°C</td><td>High fever</td></tr>
                  </tbody>
                </table>
              </div>
              <p style="margin-top: 0.5rem; font-size: 0.85rem;">
                <strong>°F = (°C × 1.8) + 32</strong><br>
                <strong>°C = (°F - 32) / 1.8</strong>
              </p>
            </div>
            <div class="card">
              <div class="card-title">Volume</div>
              <div class="table-wrapper">
                <table>
                  <tbody>
                    <tr><td>1 L</td><td>1000 ml</td></tr>
                    <tr><td>1 tsp</td><td>5 ml</td></tr>
                    <tr><td>1 tbsp</td><td>15 ml</td></tr>
                    <tr><td>1 oz</td><td>30 ml</td></tr>
                    <tr><td>1 cup</td><td>240 ml</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          `
        },
        {
          id: 'vitals-ivrates',
          title: 'IV Fluid Rates',
          content: `
            <div class="card">
              <div class="card-title">IV Fluid Rates (Drops/Min)</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>ml/hr</th><th>10 gtt</th><th>15 gtt</th><th>60 gtt</th></tr></thead>
                  <tbody>
                    <tr><td>50</td><td>8</td><td>12</td><td>50</td></tr>
                    <tr><td>100</td><td>17</td><td>25</td><td>100</td></tr>
                    <tr><td>125</td><td>21</td><td>31</td><td>125</td></tr>
                    <tr><td>150</td><td>25</td><td>37</td><td>150</td></tr>
                    <tr><td>200</td><td>33</td><td>50</td><td>200</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Drip Rate Formula</div>
              <div class="drug-dose">
                Drops/min = (Volume in ml × Drop factor) / Time in minutes
              </div>
              <p><strong>Drop factors:</strong></p>
              <ul>
                <li>Macro drip: 10 or 15 gtt/ml</li>
                <li>Micro drip: 60 gtt/ml</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Burn Fluid Resuscitation (Rule of Ten)</div>
              <div class="drug-dose">
                %TBSA x 10ml/hour for adults 40-80kg<br>
                (+100ml/hr for every 10kg above 80kg)
              </div>
              <p><strong>Indication:</strong> Burns >20% TBSA</p>
            </div>
          `
        }
      ]
    }
  };

  let currentPhase = 'public';
  let currentSection = null;
  const PHASES = ['public', 'drugs', 'k9', 'shock', 'vitals'];

  function initNavigation() {
    document.querySelectorAll('.phase-btn').forEach(btn => {
      btn.addEventListener('click', () => setPhase(btn.dataset.phase));
    });
    document.querySelectorAll('.bottom-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => setPhase(btn.dataset.phase));
    });
    window.addEventListener('hashchange', handleHashChange);
    initSwipeNavigation();
    handleHashChange();
  }

  function initSwipeNavigation() {
    const main = document.getElementById('mainContent');
    let touchStartX = 0, touchStartY = 0, touchEndX = 0, touchEndY = 0;
    const minSwipeDistance = 80, maxVerticalMovement = 100;

    main.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    main.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = Math.abs(touchEndY - touchStartY);
      if (Math.abs(deltaX) > minSwipeDistance && deltaY < maxVerticalMovement) {
        const currentIndex = PHASES.indexOf(currentPhase);
        if (deltaX < 0 && currentIndex < PHASES.length - 1) setPhase(PHASES[currentIndex + 1]);
        else if (deltaX > 0 && currentIndex > 0) setPhase(PHASES[currentIndex - 1]);
      }
    }, { passive: true });
  }

  function setPhase(phase) {
    if (!CONTENT[phase]) return;
    currentPhase = phase;
    currentSection = null;
    document.querySelectorAll('.phase-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.phase === phase));
    document.querySelectorAll('.bottom-nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.phase === phase));
    window.location.hash = phase;
    renderPhase(phase);
  }

  function handleHashChange() {
    const hash = window.location.hash.slice(1) || 'public';
    const parts = hash.split('/');
    const phase = parts[0];
    const section = parts[1] || null;
    if (CONTENT[phase]) {
      currentPhase = phase;
      currentSection = section;
      document.querySelectorAll('.phase-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.phase === phase));
      document.querySelectorAll('.bottom-nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.phase === phase));
      renderPhase(phase, section);
    }
  }

  function renderPhase(phase, sectionId = null) {
    const content = CONTENT[phase];
    const main = document.getElementById('mainContent');
    const sectionNav = content.sections.map(sec => `
      <button class="subsection-btn${sectionId === sec.id || (!sectionId && sec.id === content.sections[0].id) ? ' active' : ''}" data-section="${sec.id}">${sec.title}</button>
    `).join('');
    const activeSection = sectionId ? content.sections.find(s => s.id === sectionId) : content.sections[0];

    main.innerHTML = `
      <div class="section-header">
        <span class="section-phase" style="background: ${content.color}22; color: ${content.color};">${content.title}</span>
        <h1 class="section-title">${activeSection.title}</h1>
        <p class="section-subtitle">${content.subtitle}</p>
      </div>
      <nav class="subsection-nav">${sectionNav}</nav>
      <div class="section-content">${activeSection.content}</div>
    `;

    main.querySelectorAll('.subsection-btn').forEach(btn => {
      btn.addEventListener('click', () => window.location.hash = `${currentPhase}/${btn.dataset.section}`);
    });
    window.scrollTo(0, 0);
  }

  function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (query.length < 2) {
        searchResults.classList.remove('visible');
        return;
      }

      const results = [];
      for (const [phaseKey, phase] of Object.entries(CONTENT)) {
        for (const section of phase.sections) {
          const titleMatch = section.title.toLowerCase().includes(query);
          const contentMatch = section.content.toLowerCase().includes(query);
          if (titleMatch || contentMatch) {
            results.push({
              phase: phaseKey,
              phaseTitle: phase.title,
              section: section.id,
              title: section.title,
              relevance: titleMatch ? 2 : 1
            });
          }
        }
      }

      results.sort((a, b) => b.relevance - a.relevance);

      if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result"><div class="search-result-title">No results found</div></div>';
      } else {
        searchResults.innerHTML = results.slice(0, 8).map(r => `
          <div class="search-result" data-phase="${r.phase}" data-section="${r.section}">
            <div class="search-result-title">${r.title}</div>
            <div class="search-result-phase">${r.phaseTitle}</div>
          </div>
        `).join('');
      }
      searchResults.classList.add('visible');
    });

    searchResults.addEventListener('click', (e) => {
      const result = e.target.closest('.search-result');
      if (result && result.dataset.phase) {
        window.location.hash = `${result.dataset.phase}/${result.dataset.section}`;
        searchInput.value = '';
        searchResults.classList.remove('visible');
      }
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-box')) {
        searchResults.classList.remove('visible');
      }
    });
  }

  function initOfflineSupport() {
    const indicator = document.getElementById('offlineIndicator');
    if (!indicator) return;
    const updateStatus = () => indicator.classList.toggle('visible', !navigator.onLine);
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
    updateStatus();
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    }
  }

  function init() {
    console.log('[LF Medic Pharmacology] init() - CONTENT keys:', Object.keys(CONTENT));
    console.log('[LF Medic Pharmacology] PHASES:', PHASES);
    try {
      initNavigation();
      initSearch();
      initOfflineSupport();
      console.log('[LF Medic Pharmacology] init() complete, currentPhase:', currentPhase);
    } catch(e) {
      console.error('[LF Medic Pharmacology] ERROR:', e);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
