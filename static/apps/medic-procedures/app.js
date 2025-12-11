/**
 * Light Fighter Medic - Procedures
 * TCCC Phases, Surgical Procedures, Field Tools
 * Based on Ranger Medic Handbook 2019 & CoTCCC Guidelines
 */

(function() {
  'use strict';

  const CONTENT = {
    cuf: {
      title: 'Care Under Fire',
      subtitle: 'Actions taken while still under effective hostile fire',
      color: '#dc2626',
      sections: [
        {
          id: 'cuf-overview',
          title: 'Overview',
          content: `
            <div class="alert alert-critical">
              <strong>PRIORITY:</strong> Return fire and take cover. The best medicine on the battlefield is fire superiority.
            </div>
            <div class="card">
              <div class="card-title">Care Under Fire Priorities</div>
              <ol>
                <li><strong>Return fire and take cover</strong></li>
                <li>Direct or expect casualty to remain engaged as combatant if appropriate</li>
                <li>Direct casualty to move to cover and apply self-aid if able</li>
                <li>Try to keep casualty from sustaining additional wounds</li>
                <li>Stop life-threatening external hemorrhage if tactically feasible</li>
              </ol>
            </div>
            <div class="alert alert-warning">
              <strong>Airway management is generally best deferred until Tactical Field Care phase.</strong>
            </div>
          `
        },
        {
          id: 'cuf-hemorrhage',
          title: 'Hemorrhage Control',
          content: `
            <div class="card march-card massive">
              <div class="card-title">
                <span class="march-letter">M</span>
                Massive Hemorrhage
              </div>
              <div class="alert alert-critical">
                <strong>LIFE-THREATENING BLEEDING:</strong>
                <ul style="margin-top: 0.5rem; margin-bottom: 0;">
                  <li>Spurting blood or flowing blood</li>
                  <li>Blood soaking rapidly through uniform</li>
                  <li>Blood pooling on the ground</li>
                  <li>Complete amputation</li>
                </ul>
              </div>
              <h4>Actions:</h4>
              <ul>
                <li>Direct casualty to control hemorrhage by self-aid if able</li>
                <li>Use a <strong>CoTCCC-recommended limb tourniquet</strong> for extremity hemorrhage</li>
                <li>Apply tourniquet <strong>"High and Tight"</strong> if bleeding site is not easily identifiable</li>
                <li>Move the casualty to cover</li>
              </ul>
              <div class="alert alert-info">
                <strong>CoTCCC Recommended Tourniquets:</strong>
                <ul style="margin-top: 0.5rem; margin-bottom: 0;">
                  <li>Combat Application Tourniquet (CAT)</li>
                  <li>SOF Tactical Tourniquet (SOFTT)</li>
                  <li>Emergency Medical Tourniquet (EMT)</li>
                </ul>
              </div>
            </div>
          `
        },
        {
          id: 'cuf-movement',
          title: 'Casualty Movement',
          content: `
            <div class="card">
              <div class="card-title">Extrication</div>
              <p>Casualties should be extricated from burning vehicles or buildings and moved to relative safety. Do what is necessary to stop the burning process.</p>
            </div>
            <div class="card">
              <div class="card-title">Movement Methods</div>
              <ul>
                <li><strong>Fastest method:</strong> Dragging along the long axis of patient's body by two rescuers</li>
                <li>Spinal precautions or stabilization should only be considered <strong>after</strong> casualty is removed from enemy threat</li>
                <li>Only indicated by mechanism of injury</li>
              </ul>
            </div>
            <div class="decision-box">
              <div class="decision-question">Is the casualty conscious?</div>
              <div class="decision-options">
                <div class="decision-yes">YES: Direct to move to cover and self-aid</div>
                <div class="decision-no">NO: Move casualty to cover if tactically feasible</div>
              </div>
            </div>
          `
        }
      ]
    },

    tfc: {
      title: 'Tactical Field Care',
      subtitle: 'Care rendered when no longer under effective hostile fire',
      color: '#f59e0b',
      sections: [
        {
          id: 'tfc-march',
          title: 'MARCH Protocol',
          content: `
            <div class="alert alert-info">
              <strong>MARCH-PAWS</strong> is the assessment and treatment sequence for Tactical Field Care.
            </div>
            <div class="quick-grid">
              <div class="card" style="border-left: 4px solid #dc2626;"><strong style="color: #dc2626;">M</strong> - Massive Hemorrhage</div>
              <div class="card" style="border-left: 4px solid #f97316;"><strong style="color: #f97316;">A</strong> - Airway</div>
              <div class="card" style="border-left: 4px solid #eab308;"><strong style="color: #eab308;">R</strong> - Respiration</div>
              <div class="card" style="border-left: 4px solid #22c55e;"><strong style="color: #22c55e;">C</strong> - Circulation</div>
              <div class="card" style="border-left: 4px solid #3b82f6;"><strong style="color: #3b82f6;">H</strong> - Hypothermia/Head Injury</div>
            </div>
            <div class="card">
              <div class="card-title">Initial Actions</div>
              <ul>
                <li>Establish security perimeter IAW tactical SOPs</li>
                <li>Maintain situational awareness</li>
                <li>Triage casualties as required</li>
                <li>Casualties with <strong>altered mental status</strong> should have weapons cleared/secured, communications gear secured, sensitive items redistributed</li>
              </ul>
            </div>
          `
        },
        {
          id: 'tfc-hemorrhage',
          title: 'M - Massive Hemorrhage',
          content: `
            <div class="card march-card massive">
              <div class="card-title"><span class="march-letter">M</span> Massive Hemorrhage Control</div>
              <ol>
                <li>Assess for unrecognized hemorrhage and control all life-threatening bleeding</li>
                <li>Use one or more CoTCCC-recommended <strong>limb tourniquets</strong> if necessary</li>
                <li>Use CoTCCC-approved <strong>hemostatic dressing</strong> for compressible hemorrhage not amenable to limb tourniquet</li>
                <li>Apply <strong>junctional tourniquet</strong> immediately if bleeding site is amenable</li>
              </ol>
              <h4>Tourniquet Reassessment:</h4>
              <ul>
                <li>Expose wound and determine if tourniquet is needed</li>
                <li>If bleeding not controlled, tighten tourniquet if possible</li>
                <li>If first tourniquet fails, add second tourniquet <strong>side-by-side</strong></li>
              </ul>
              <div class="alert alert-warning">
                <strong>Convert tourniquets in less than 2 hours</strong> if casualty NOT in shock, possible to monitor wound closely, NOT controlling bleeding from amputation.<br>
                <strong>Do NOT remove if TQ in place >6 hours.</strong>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Pelvic Binder Indications</div>
              <p>Apply for suspected pelvic fracture and/or severe blunt force or blast injury with:</p>
              <ul>
                <li>Pelvic pain</li>
                <li>Any major lower limb amputation/near amputation</li>
                <li>Physical exam suggestive of pelvic fracture</li>
                <li>Unconsciousness or shock</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">CoTCCC Hemostatic Dressings</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Product</th><th>NSN</th></tr></thead>
                  <tbody>
                    <tr><td>Combat Gauze (CG) Z-Fold</td><td>6510-01-562-3325</td></tr>
                    <tr><td>Celox Gauze Z-fold</td><td>6510-01-623-9910</td></tr>
                    <tr><td>ChitoGauze</td><td>6510-01-591-7740</td></tr>
                    <tr><td>X-Stat Single Applicator</td><td>6510-01-644-7335</td></tr>
                  </tbody>
                </table>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted);">Note: X-Stat cannot be removed in the field.</p>
            </div>
          `
        },
        {
          id: 'tfc-airway',
          title: 'A - Airway',
          content: `
            <div class="card march-card airway">
              <div class="card-title"><span class="march-letter">A</span> Airway Management</div>
              <h4>Unconscious WITHOUT Airway Obstruction:</h4>
              <ol>
                <li>Chin lift or jaw thrust maneuver</li>
                <li>Nasopharyngeal airway (NPA)</li>
                <li>Place casualty in <strong>recovery position</strong></li>
              </ol>
              <h4>Airway Obstruction or Impending Obstruction:</h4>
              <ol>
                <li>Allow conscious casualty to assume any position that best protects airway (including sitting up)</li>
                <li>Chin lift or jaw thrust maneuver</li>
                <li>Nasopharyngeal airway</li>
                <li>Place unconscious casualty in recovery position</li>
              </ol>
              <div class="alert alert-critical">
                <strong>If previous measures unsuccessful:</strong> Perform surgical cricothyroidotomy
                <ul style="margin-top: 0.5rem; margin-bottom: 0;">
                  <li>CricKey technique (preferred)</li>
                  <li>Bougie-aided open surgical technique</li>
                  <li>Standard open surgical technique</li>
                </ul>
                <p style="margin-top: 0.5rem;"><strong>Use lidocaine if casualty is conscious.</strong></p>
              </div>
            </div>
            <div class="card">
              <div class="card-title">DOPE Troubleshooting</div>
              <p>If ventilation problems occur with an advanced airway:</p>
              <ul>
                <li><strong>D</strong> - Dislodgement: Check tube placement</li>
                <li><strong>O</strong> - Obstruction: Consider suctioning</li>
                <li><strong>P</strong> - Pneumothorax: Consider NCD</li>
                <li><strong>E</strong> - Equipment failure: Disconnect vent and use BVM</li>
              </ul>
            </div>
            <div class="alert alert-info">
              <strong>Spinal stabilization is NOT necessary</strong> for casualties with penetrating trauma.
            </div>
          `
        },
        {
          id: 'tfc-respiration',
          title: 'R - Respiration',
          content: `
            <div class="card march-card respiration">
              <div class="card-title"><span class="march-letter">R</span> Respiration / Breathing</div>
              <h4>Progressive Respiratory Distress + Known/Suspected Torso Trauma:</h4>
              <p>Consider <strong>tension pneumothorax</strong> - Decompress chest on side of injury</p>
              <div class="alert alert-warning">
                <strong>Needle Decompression:</strong>
                <ul style="margin: 0.5rem 0;">
                  <li>14-gauge, 3.25 inch needle/catheter</li>
                  <li><strong>Primary Site:</strong> 5th ICS, Anterior Axillary Line</li>
                  <li><strong>Alternate Site:</strong> 2nd or 3rd ICS, Midclavicular Line</li>
                </ul>
              </div>
              <h4>Open/Sucking Chest Wounds:</h4>
              <ol>
                <li>Apply <strong>vented chest seal</strong> (preferred)</li>
                <li>Or apply non-vented chest seal</li>
                <li>Burp wound if indicated for breathing difficulty</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Tension Pneumothorax Indicators</div>
              <ul>
                <li>Difficulty or worsening breathing with chest/abdominal injury</li>
                <li>Decreased SpO2</li>
                <li>Decreased breath sounds on affected side</li>
                <li>Tracheal deviation (late sign)</li>
                <li>Jugular vein distention (late sign)</li>
              </ul>
            </div>
            <div class="alert alert-info">
              <strong>Initiate pulse oximetry monitoring.</strong><br>
              Casualties with moderate/severe TBI should receive supplemental O2 to maintain SpO2 >90%.
            </div>
          `
        },
        {
          id: 'tfc-circulation',
          title: 'C - Circulation',
          content: `
            <div class="card march-card circulation">
              <div class="card-title"><span class="march-letter">C</span> Circulation</div>
              <h4>IV/IO Access:</h4>
              <ul>
                <li>Start 18-gauge IV or saline lock if indicated</li>
                <li>If IV not obtainable, use intraosseous (IO) needle</li>
              </ul>
              <h4>Shock Assessment - Field Indicators:</h4>
              <ul>
                <li>Altered mental status (in absence of TBI)</li>
                <li>Weak or absent radial pulse</li>
                <li>Capillary refill >2 seconds</li>
                <li>Decreased blood pressure</li>
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
            </div>
            <div class="card">
              <div class="card-title">Tranexamic Acid (TXA)</div>
              <div class="drug-dose">1-2g IV/IO flush as soon as possible<br>DO NOT administer >3 hours post injury</div>
              <p><strong>TXA Criteria:</strong> Hemorrhagic shock, major amputations, penetrating torso, severe bleeding, pelvic fracture</p>
            </div>
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
              <div class="alert alert-success">
                <strong>Resuscitation Endpoints:</strong> Palpable radial pulse, improved mental status, SBP 90-100 mmHg (hemorrhagic shock), SBP >110 mmHg (TBI with altered mental status)
              </div>
            </div>
          `
        },
        {
          id: 'tfc-hypothermia',
          title: 'H - Hypothermia',
          content: `
            <div class="card march-card hypothermia">
              <div class="card-title"><span class="march-letter">H</span> Hypothermia Prevention</div>
              <div class="alert alert-critical">
                <strong>The Lethal Triad:</strong> Hypothermia + Acidosis + Coagulopathy = Death
              </div>
              <ul>
                <li>Minimize casualty environmental exposure</li>
                <li>Keep PPE on if feasible</li>
                <li>Replace wet clothing if possible</li>
                <li>Get casualty onto insulated surface ASAP</li>
                <li>Use hypothermia prevention kit with active rewarming</li>
                <li>If unavailable: dry blankets, poncho liners, sleeping bags</li>
                <li><strong>Warm IV fluids are preferred</strong></li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">HPMK Components</div>
              <ul>
                <li>Ready-Heat Blanket (apply to torso, NOT directly on skin)</li>
                <li>Heat-Reflective Shell (HRS)</li>
                <li>Self-heating fluid warmer</li>
              </ul>
            </div>
            <div class="alert alert-info">
              Hypothermia prevention and fluid resuscitation should be executed <strong>simultaneously</strong> if possible.
            </div>
          `
        },
        {
          id: 'tfc-paws',
          title: 'PAWS',
          content: `
            <div class="alert alert-info"><strong>PAWS</strong> follows MARCH in the treatment sequence.</div>
            <div class="card">
              <div class="card-title">P - Pain Management</div>
              <p>See <a href="../medic-pharmacology/#drugs-pain" style="color: var(--info);">Pharmacology App</a> for detailed protocols.</p>
              <h4>Mild to Moderate Pain (still able to fight):</h4>
              <ul><li>Tylenol 650mg bilayer - 2 PO q8h</li><li>Meloxicam 15mg PO daily</li></ul>
              <h4>Moderate to Severe Pain:</h4>
              <ul>
                <li><strong>NOT in shock:</strong> OTFC 800mcg</li>
                <li><strong>IN shock/respiratory distress:</strong> Ketamine 50mg IM/IN or 20mg slow IV/IO</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">A - Antibiotics</div>
              <p><em>Early administration recommended for ALL open combat wounds.</em></p>
              <ul>
                <li><strong>If able to take PO:</strong> Moxifloxacin 400mg PO daily</li>
                <li><strong>If unable to take PO:</strong> Ertapenem 1g IV/IM daily</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">W - Wounds</div>
              <ul><li>Inspect and dress known wounds</li><li>Check for additional wounds (full body sweep)</li></ul>
            </div>
            <div class="card">
              <div class="card-title">S - Splinting</div>
              <ul><li>Splint fractures</li><li><strong>Recheck pulses after splinting</strong></li></ul>
            </div>
            <div class="card">
              <div class="card-title">Burns</div>
              <ul>
                <li>Facial burns: aggressively monitor airway</li>
                <li>Estimate TBSA to nearest 10% using Rule of Nines</li>
                <li>Cover with dry, sterile dressings</li>
                <li>>20% TBSA: initiate IV fluids (Rule of Ten)</li>
              </ul>
              <div class="alert alert-info" style="margin-top: 1rem;">
                <strong>USAISR Rule of Ten:</strong><br>
                %TBSA x 10ml/hour for adults 40-80kg<br>
                (+100ml/hr for every 10kg above 80kg)
              </div>
            </div>
          `
        }
      ]
    },

    tacevac: {
      title: 'Tactical Evacuation Care',
      subtitle: 'Care during evacuation to higher level of care',
      color: '#22c55e',
      sections: [
        {
          id: 'tacevac-transition',
          title: 'Transition of Care',
          content: `
            <div class="card">
              <div class="card-title">Tactical Force Actions</div>
              <ul>
                <li>Establish evacuation point security</li>
                <li>Stage casualties for evacuation</li>
                <li>Communicate patient status to TACEVAC personnel</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">SIT Report Method</div>
              <ol>
                <li>Identify receiving care provider on evac platform</li>
                <li>Establish direct contact (Radio/Eye Contact/Hand Contact)</li>
                <li>Provide SIT status beginning with most serious:</li>
              </ol>
              <div class="alert alert-info" style="margin-top: 1rem;">
                <strong>S</strong> - Stable or Unstable<br>
                <strong>I</strong> - Injuries (life threats & MOI)<br>
                <strong>T</strong> - Treatments (drugs & interventions)
              </div>
            </div>
          `
        },
        {
          id: 'tacevac-airway',
          title: 'Airway (TACEVAC)',
          content: `
            <div class="card">
              <div class="card-title">Additional Airway Options in TACEVAC</div>
              <p>In addition to TFC airway management, consider:</p>
              <ul>
                <li><strong>Supraglottic airway</strong></li>
                <li><strong>Endotracheal intubation</strong></li>
              </ul>
              <p>Then surgical cricothyroidotomy if needed.</p>
            </div>
            <div class="card">
              <div class="card-title">ETI Confirmation Methods</div>
              <p>Confirm tube placement with minimum of 2 techniques:</p>
              <ul>
                <li>End-tidal CO2 monitoring (most reliable)</li>
                <li>Tube misting</li>
                <li>Breath against cheek/wrist</li>
                <li>Auscultate breath sounds</li>
                <li>Monitor SpO2</li>
              </ul>
              <div class="alert alert-warning" style="margin-top: 0.5rem;">
                <strong>DO NOT rely on auscultation or visual misting as sole placement confirmation.</strong>
              </div>
            </div>
          `
        },
        {
          id: 'tacevac-tbi',
          title: 'Traumatic Brain Injury',
          content: `
            <div class="card">
              <div class="card-title">TBI Indicators</div>
              <ul>
                <li>Obvious mechanism of injury</li>
                <li>Loss of consciousness >30 min</li>
                <li>Confused or disoriented state</li>
                <li>Moderate TBI: GCS 9-13</li>
                <li>Severe TBI: GCS 3-8</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Moderate/Severe TBI Monitoring</div>
              <ul>
                <li>SBP should be >90 mmHg (target >110 mmHg)</li>
                <li>O2 sat >90%</li>
                <li>Hypothermia prevention</li>
                <li>PCO2 maintained 35-40 mmHg (if capnography available)</li>
                <li><strong>Assume spinal injury until cleared</strong></li>
              </ul>
            </div>
            <div class="alert alert-critical">
              <strong>Herniation Indicators:</strong> Asymmetric pupillary dilation, fixed dilated pupil, extensor posturing, widening pulse pressure<br><br>
              <strong>If impending herniation suspected:</strong>
              <ol style="margin: 0.5rem 0 0 0;">
                <li>250ml of 3% or 5% hypertonic saline bolus</li>
                <li>Elevate head 30 degrees</li>
                <li>Hyperventilate at 20 breaths/min with highest O2</li>
              </ol>
            </div>
          `
        },
        {
          id: 'tacevac-cpr',
          title: 'CPR Considerations',
          content: `
            <div class="card">
              <div class="card-title">CPR in TACEVAC</div>
              <p>CPR <strong>may be attempted</strong> if:</p>
              <ul>
                <li>Casualty does NOT have obviously fatal wounds</li>
                <li>Quickly arriving at surgical capability</li>
              </ul>
              <div class="alert alert-critical" style="margin-top: 1rem;">
                <strong>CPR should NOT be attempted if:</strong>
                <ul style="margin: 0.5rem 0 0 0;">
                  <li>Compromising the mission</li>
                  <li>Denying lifesaving treatment to other casualties</li>
                </ul>
              </div>
              <p style="margin-top: 1rem;">Casualties with torso/polytrauma and no pulse should have <strong>bilateral needle decompression</strong> before discontinuing care.</p>
            </div>
          `
        }
      ]
    },

    procedures: {
      title: 'Procedures',
      subtitle: 'Step-by-step surgical and medical procedures',
      color: '#06b6d4',
      sections: [
        {
          id: 'proc-cric',
          title: 'Surgical Cricothyroidotomy',
          content: `
            <div class="alert alert-critical">
              <strong>Indications:</strong> Severe airway obstruction, failure of airway positioning, failure of NPA, unable to manually ventilate
            </div>
            <div class="card">
              <div class="card-title">Equipment Needed</div>
              <ul>
                <li>Scalpel</li>
                <li>Tracheal Hook or Bougie</li>
                <li>Antiseptic (Povidone/Chlorhexidine/Alcohol)</li>
                <li>Sterile gloves and 4x4 sponge</li>
                <li>ET Tube (6.0-7.0) or Cric-specific tube</li>
                <li>Bag-Valve-Mask (BVM)</li>
                <li>Securing device, tape, or suture</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Procedure Steps</div>
              <ol>
                <li>Position patient supine, head/neck midline</li>
                <li><strong>If conscious:</strong> Administer procedural sedation, inject lidocaine 2-4ml into cricothyroid membrane and trachea</li>
                <li>Identify cricothyroid membrane: Soft aspect just inferior to larynx, midline, anterior trachea</li>
                <li>Cleanse the site</li>
                <li>Stabilize larynx between thumb and index finger of non-dominant hand</li>
                <li>Make a <strong>VERTICAL</strong> skin incision over cricothyroid membrane</li>
                <li>Carefully incise <strong>horizontally</strong> through the membrane</li>
                <li>If needed: Insert tracheal hook, hook cricoid cartilage, apply anterior displacement, widen incision</li>
                <li>Insert 6.0-7.0 ET tube through midline of membrane, direct distally into trachea 2cm past cricothyroid membrane</li>
                <li>Inflate cuff with 10cc air</li>
                <li>Confirm placement with minimum 2 techniques (ETCO2, misting, auscultation, SpO2)</li>
                <li>Secure tube to prevent dislodging</li>
                <li>Attach BVM and ventilate (1 breath every 6-8 seconds, 8-10 breaths/min)</li>
              </ol>
            </div>
            <div class="alert alert-warning">
              <strong>Critical Notes:</strong> Maintain C-spine precautions if concerned. If SpO2 drops <90%, stop procedure and ventilate 30-60 seconds before retry. Confirm airway before and after ANY patient movement.
            </div>
          `
        },
        {
          id: 'proc-ncd',
          title: 'Needle Chest Decompression',
          content: `
            <div class="alert alert-critical">
              <strong>Indications:</strong> Difficulty/worsening breathing with MOI, decreased SpO2 with chest/abdominal injury, decreased breath sounds on affected side, tracheal deviation (late), JVD (late)
            </div>
            <div class="card">
              <div class="card-title">Equipment</div>
              <ul>
                <li>10G to 14G, 3.25" needle with catheter</li>
                <li>Antiseptic swab</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Site Selection</div>
              <div class="alert alert-info">
                <strong>Primary Site:</strong> Affected side, 5th intercostal space (nipple level), anterior axillary line<br><br>
                <strong>Alternate Site:</strong> Affected side, 2nd or 3rd intercostal space, mid-clavicular line
              </div>
              <p style="margin-top: 0.5rem; color: var(--accent);"><strong>Ensure needle entry is NOT medial to nipple line and NOT directed toward heart.</strong></p>
            </div>
            <div class="card">
              <div class="card-title">Procedure Steps</div>
              <ol>
                <li>Select site based on injury pattern and patient condition</li>
                <li>Cleanse site with antiseptic</li>
                <li>Insert needle with catheter <strong>perpendicular (90°)</strong> over the rib into intercostal space</li>
                <li>Puncture the parietal pleura</li>
                <li>Hold needle with catheter for 5-10 seconds before removing needle</li>
                <li>Leave catheter in place (converts tension to open pneumothorax)</li>
                <li>Reassess effectiveness</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Assess Effectiveness</div>
              <ul>
                <li>Increased SpO2</li>
                <li>Can patient breathe better?</li>
                <li>Auscultate breath sounds</li>
                <li>Chest rise and fall</li>
              </ul>
              <p style="margin-top: 0.5rem;"><strong>If ineffective:</strong> Repeat at alternate site, consider bilateral NCD or finger thoracostomy.</p>
            </div>
          `
        },
        {
          id: 'proc-chesttube',
          title: 'Chest Tube / Finger Thoracostomy',
          content: `
            <div class="alert alert-info">
              <strong>Indications:</strong> Multiple unsuccessful NCDs, extended time before evacuation, large hemothorax suspected
            </div>
            <div class="card">
              <div class="card-title">Equipment</div>
              <ul>
                <li>6" or 9" Peans forceps (clamp)</li>
                <li>Chlorhexidine gluconate solution/swab</li>
                <li>Scalpel, #10</li>
                <li>28 Fr to 36 Fr chest tube</li>
                <li>Heimlich valve</li>
                <li>Sterile gloves, securing device/suture</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Site Selection</div>
              <div class="drug-dose">Affected side, 5th intercostal space (nipple level), anterior to midaxillary line</div>
            </div>
            <div class="card">
              <div class="card-title">Procedure Steps</div>
              <ol>
                <li>Cleanse site with antiseptic</li>
                <li>Locally anesthetize skin, rib periosteum, and pleura (and/or procedural sedation)</li>
                <li>Make 2-3cm <strong>horizontal</strong> incision parallel to ribs</li>
                <li>Bluntly dissect through subcutaneous tissue just over top of 6th rib</li>
                <li>Puncture parietal pleura with tip of clamp and spread tissues</li>
                <li>With index finger of non-dominant hand, trace clamp into incision to avoid organ injury and clear adhesions/clots</li>
                <li><strong>FINGER THORACOSTOMY:</strong> Stop here if no chest tube available</li>
                <li>With finger still in place, clamp proximal end of chest tube and insert to desired length</li>
                <li>Look for "fogging" of chest tube with expiration</li>
                <li>Connect end of chest tube to Heimlich valve</li>
                <li>Secure tube in place (suture or adhesive chest seals)</li>
              </ol>
            </div>
            <div class="alert alert-critical">
              <strong>Surgical intervention required if:</strong> Blood loss 1000-1500ml immediately OR drainage 200-300ml/hr
            </div>
          `
        },
        {
          id: 'proc-io',
          title: 'Intraosseous Access',
          content: `
            <div class="alert alert-info">
              <strong>Indication:</strong> Inability to attain vascular access through peripheral extremity or external jugular when life-saving fluids or medications are needed.
            </div>
            <div class="card">
              <div class="card-title">Site Selection (Priority Order)</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Site</th><th>Location</th><th>Needle Size</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Proximal Humerus</strong></td><td>Greater tubercle (internally rotate arm)</td><td>45mm 15ga</td></tr>
                    <tr><td><strong>Sternal (Manubrium)</strong></td><td>Midline, 1.5cm below sternal notch</td><td>38.5mm 15ga</td></tr>
                    <tr><td><strong>Proximal Tibia</strong></td><td>1 finger medial to tuberosity, 2 fingers below patella</td><td>25mm 15ga</td></tr>
                    <tr><td><strong>Distal Tibia</strong></td><td>2 fingers proximal to medial malleolus</td><td>25mm 15ga</td></tr>
                  </tbody>
                </table>
              </div>
              <p style="font-size: 0.85rem;">The more proximal the site, the better flow rate.</p>
            </div>
            <div class="card">
              <div class="card-title">Procedure Steps (Non-Sternal)</div>
              <ol>
                <li>Cleanse site with antiseptic</li>
                <li>Ensure flat, stable platform</li>
                <li>Use gentle, steady downward pressure with boring/screwing motion</li>
                <li>Advance needle at 90° angle until penetrating marrow (feeling of "give" or "pop")</li>
                <li>Remove stylet and driver</li>
                <li>Attach primed extension set to catheter hub</li>
                <li>Attempt to aspirate marrow blood (confirms placement)</li>
                <li>Flush with 5cc NS (or TXA if indicated)</li>
                <li>Consider 5-10cc lidocaine flush for pain control</li>
                <li>Attach IV tubing/saline lock and administer fluids/meds</li>
              </ol>
            </div>
            <div class="alert alert-warning">
              <strong>Cautions:</strong> Do NOT rock or bend during insertion. Do NOT leave catheter inserted >24 hours. Do NOT attach syringe directly to IO catheter hub.
            </div>
          `
        },
        {
          id: 'proc-ejiv',
          title: 'External Jugular IV',
          content: `
            <div class="alert alert-info">
              <strong>Indication:</strong> Vascular access when peripheral IV not obtainable.
            </div>
            <div class="card">
              <div class="card-title">Equipment</div>
              <ul>
                <li>Constricting band (or finger pressure)</li>
                <li>Chlorhexidine gluconate swab</li>
                <li>2x 14G IV catheter/needle</li>
                <li>10cc syringe with normal saline</li>
                <li>Needleless saline lock</li>
                <li>Tegaderm (at least 2.5" x 2.5")</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Procedure Steps</div>
              <ol>
                <li>Place patient supine or modified Trendelenburg position</li>
                <li>Maintain C-spine precautions as required</li>
                <li>Turn patient's head to opposite side</li>
                <li>Attach 10cc syringe (filled with NS) to catheter/needle</li>
                <li>Cleanse site with antiseptic</li>
                <li>Apply light pressure on inferior aspect of EJ to create tourniquet effect</li>
                <li>Align needle/catheter/syringe in direction of vein, tip aimed toward "same-side" nipple</li>
                <li>Insert catheter/needle into vein and aspirate</li>
                <li><strong>Confirm blood return when aspirating</strong></li>
                <li><strong>DO NOT allow air to enter the vein</strong></li>
                <li>Advance catheter and withdraw needle/syringe</li>
                <li>Attach needleless saline lock and flush with NS</li>
                <li>Apply Tegaderm over venipuncture site</li>
              </ol>
            </div>
            <div class="alert alert-critical">
              <strong>Critical:</strong> DO NOT allow air to enter the vein - can cause air embolism.
            </div>
          `
        },
        {
          id: 'proc-iv',
          title: 'Peripheral IV / Saline Lock',
          content: `
            <div class="card">
              <div class="card-title">Equipment</div>
              <ul>
                <li>Constricting band</li>
                <li>Chlorhexidine gluconate solution/swab</li>
                <li>2x 18G or 16G IV catheter/needle</li>
                <li>Needleless saline lock</li>
                <li>Tegaderm (at least 2.5" x 2.5")</li>
                <li>IV tubing (if needed), IV securing device</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Procedure Steps</div>
              <ol>
                <li>Prep equipment and don gloves</li>
                <li>Apply constricting band</li>
                <li>Select vein (AC fossa, forearm, dorsum of hand)</li>
                <li>Cleanse/prep site</li>
                <li>Insert catheter/needle at 15-30° angle</li>
                <li>Advance catheter and remove needle</li>
                <li>Attach needleless saline lock</li>
                <li>Release constricting band</li>
                <li>Apply Tegaderm over venipuncture site</li>
                <li>Flush with 5-10ml normal saline</li>
                <li>Attach IV tubing if indicated</li>
                <li>Secure IV tubing with tape or securing device</li>
              </ol>
            </div>
            <div class="alert alert-warning">
              <strong>Notes:</strong> Never delay evacuation for IV access unless needed for lifesaving procedure. Warmed IV fluids preferred. DO NOT REMOVE saline lock when discontinuing fluids.
            </div>
          `
        }
      ]
    },

    tools: {
      title: 'Tools & References',
      subtitle: 'MEDEVAC requests, triage, and reference tables',
      color: '#8b5cf6',
      sections: [
        {
          id: 'tools-medevac',
          title: '9-Line MEDEVAC',
          content: `
            <div class="card">
              <div class="card-title">MEDEVAC Request Format</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Line</th><th>Content</th><th>Example</th></tr></thead>
                  <tbody>
                    <tr><td><strong>1</strong></td><td>Location (Grid)</td><td>11SNT 79652 89123</td></tr>
                    <tr><td><strong>2</strong></td><td>Callsign & Frequency</td><td>DUSTOFF 7, 36.250</td></tr>
                    <tr><td><strong>3</strong></td><td># and Precedence</td><td>2 Alpha, 1 Bravo</td></tr>
                    <tr><td><strong>4</strong></td><td>Special Equipment</td><td>A-None, B-Hoist, C-Extract</td></tr>
                    <tr><td><strong>5</strong></td><td># by Type</td><td>2L, 1A (Litter/Ambulatory)</td></tr>
                    <tr><td><strong>6</strong></td><td>Security at PZ</td><td>N-None, P-Possible, E-Enemy</td></tr>
                    <tr><td><strong>7</strong></td><td>PZ Marking</td><td>C-Smoke (Green)</td></tr>
                    <tr><td><strong>8</strong></td><td>Nationality/Status</td><td>A-US Military</td></tr>
                    <tr><td><strong>9</strong></td><td>Terrain/Obstacles</td><td>Open field, wires to south</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Line 3 - Precedence</div>
              <div class="table-wrapper">
                <table>
                  <tbody>
                    <tr class="triage-immediate"><td><strong>A - Urgent</strong></td><td>Within 2 hours</td></tr>
                    <tr class="triage-delayed"><td><strong>B - Priority</strong></td><td>Within 4 hours</td></tr>
                    <tr class="triage-minimal"><td><strong>C - Routine</strong></td><td>Within 24 hours</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          `
        },
        {
          id: 'tools-mist',
          title: 'MIST Report',
          content: `
            <div class="card">
              <div class="card-title">MIST Report Format</div>
              <div class="alert alert-info">Use MIST to communicate casualty information to receiving medical personnel.</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Letter</th><th>Content</th></tr></thead>
                  <tbody>
                    <tr><td><strong>M</strong></td><td>Mechanism of Injury and Time of Injury (if known)</td></tr>
                    <tr><td><strong>I</strong></td><td>Injury or Illness</td></tr>
                    <tr><td><strong>S</strong></td><td>Symptoms and Vital Signs (A-Airway, B-Breathing, C-Pulse, D-LOC, E-Other)</td></tr>
                    <tr><td><strong>T</strong></td><td>Treatment Given (Tourniquet/time, drugs administered)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          `
        },
        {
          id: 'tools-triage',
          title: 'Triage Categories',
          content: `
            <div class="card triage-immediate" style="border: 2px solid #dc2626;">
              <div class="card-title" style="color: #dc2626;">IMMEDIATE (T1)</div>
              <p>Requires immediate LSI and/or surgery. Without medical attention, they will die.</p>
              <ul>
                <li>Hemodynamically unstable with airway obstruction</li>
                <li>Chest or abdominal injuries</li>
                <li>Massive external bleeding</li>
                <li>Shock</li>
              </ul>
            </div>
            <div class="card triage-delayed" style="border: 2px solid #f59e0b;">
              <div class="card-title" style="color: #f59e0b;">DELAYED (T2)</div>
              <p>Likely to need surgery, but condition permits delay without endangering life, limb, or eyesight.</p>
              <ul>
                <li>Large soft tissue wounds (no shock)</li>
                <li>Fractures of major bones</li>
                <li>Burns <20% TBSA</li>
              </ul>
            </div>
            <div class="card triage-minimal" style="border: 2px solid #22c55e;">
              <div class="card-title" style="color: #22c55e;">MINIMAL (T3)</div>
              <p>"Walking wounded" - minor injuries treatable with self or buddy aid.</p>
            </div>
            <div class="card triage-expectant" style="border: 2px solid #6b7280;">
              <div class="card-title" style="color: #6b7280;">EXPECTANT (T4)</div>
              <p>Wounds so extensive that survival is highly unlikely even with optimal resources.</p>
              <p><strong>Should still receive comfort measures and pain medication.</strong></p>
            </div>
          `
        },
        {
          id: 'tools-equipment',
          title: 'CoTCCC Equipment',
          content: `
            <div class="card">
              <div class="card-title">Tourniquets</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Name</th><th>NSN</th></tr></thead>
                  <tbody>
                    <tr><td>Combat Application Tourniquet (CAT)</td><td>6515-01-521-7976</td></tr>
                    <tr><td>SOF Tactical Tourniquet (SOFTT)</td><td>6515-01-530-7015</td></tr>
                    <tr><td>Emergency Medical Tourniquet (EMT)</td><td>6515-01-580-1645</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Hemostatic Dressings</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Name</th><th>NSN</th></tr></thead>
                  <tbody>
                    <tr><td>Combat Gauze Z-Fold</td><td>6510-01-562-3325</td></tr>
                    <tr><td>Celox Gauze Z-fold</td><td>6510-01-623-9910</td></tr>
                    <tr><td>ChitoGauze</td><td>6510-01-591-7740</td></tr>
                    <tr><td>X-Stat Single Applicator</td><td>6510-01-644-7335</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Junctional Tourniquets</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Name</th><th>NSN</th></tr></thead>
                  <tbody>
                    <tr><td>Combat Ready Clamp (CRoC)</td><td>6515-01-589-9135</td></tr>
                    <tr><td>SAM Junctional Tourniquet</td><td>6515-01-618-7475</td></tr>
                    <tr><td>JETT</td><td>6515-01-616-5841</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Airway</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Name</th><th>NSN</th></tr></thead>
                  <tbody>
                    <tr><td>CricKey</td><td>6515-01-640-6701</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          `
        }
      ]
    }
  };

  let currentPhase = 'cuf';
  let currentSection = null;
  const PHASES = ['cuf', 'tfc', 'tacevac', 'procedures', 'tools'];

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
    currentPhase = phase;
    currentSection = null;
    document.querySelectorAll('.phase-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.phase === phase));
    document.querySelectorAll('.bottom-nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.phase === phase));
    window.location.hash = phase;
    renderPhase(phase);
  }

  function handleHashChange() {
    const hash = window.location.hash.slice(1) || 'cuf';
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

  function initOfflineSupport() {
    const indicator = document.getElementById('offlineIndicator');
    function updateStatus() { indicator.classList.toggle('visible', !navigator.onLine); }
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
    updateStatus();
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed:', err));
    }
  }

  function init() {
    initNavigation();
    initOfflineSupport();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
