/**
 * TCCC Quick Reference App
 * Tactical Combat Casualty Care protocols, drug reference, and tools
 * Based on CoTCCC Guidelines (31 JAN 2017)
 */

(function() {
  'use strict';

  // ==========================================================================
  // Content Data
  // ==========================================================================

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
              <div class="card" style="border-left: 4px solid #dc2626;">
                <strong style="color: #dc2626;">M</strong> - Massive Hemorrhage
              </div>
              <div class="card" style="border-left: 4px solid #f97316;">
                <strong style="color: #f97316;">A</strong> - Airway
              </div>
              <div class="card" style="border-left: 4px solid #eab308;">
                <strong style="color: #eab308;">R</strong> - Respiration
              </div>
              <div class="card" style="border-left: 4px solid #22c55e;">
                <strong style="color: #22c55e;">C</strong> - Circulation
              </div>
              <div class="card" style="border-left: 4px solid #3b82f6;">
                <strong style="color: #3b82f6;">H</strong> - Hypothermia/Head Injury
              </div>
            </div>

            <div class="card">
              <div class="card-title">Initial Actions</div>
              <ul>
                <li>Establish security perimeter IAW tactical SOPs</li>
                <li>Maintain situational awareness</li>
                <li>Triage casualties as required</li>
                <li>Casualties with <strong>altered mental status</strong> should have:
                  <ul>
                    <li>Weapons cleared/secured</li>
                    <li>Communications gear secured</li>
                    <li>Sensitive items redistributed</li>
                  </ul>
                </li>
              </ul>
            </div>
          `
        },
        {
          id: 'tfc-hemorrhage',
          title: 'M - Massive Hemorrhage',
          content: `
            <div class="card march-card massive">
              <div class="card-title">
                <span class="march-letter">M</span>
                Massive Hemorrhage Control
              </div>

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
                <strong>Convert tourniquets in less than 2 hours</strong> if:
                <ul style="margin-top: 0.5rem; margin-bottom: 0;">
                  <li>Casualty is NOT in shock</li>
                  <li>Possible to monitor wound closely</li>
                  <li>NOT controlling bleeding from amputation</li>
                </ul>
                <p style="margin-top: 0.5rem;"><strong>Do NOT remove if TQ in place >6 hours.</strong></p>
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
                  <thead>
                    <tr><th>Product</th><th>NSN</th></tr>
                  </thead>
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
              <div class="card-title">
                <span class="march-letter">A</span>
                Airway Management
              </div>

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
              <div class="card-title">
                <span class="march-letter">R</span>
                Respiration / Breathing
              </div>

              <h4>Progressive Respiratory Distress + Known/Suspected Torso Trauma:</h4>
              <p>Consider <strong>tension pneumothorax</strong> - Decompress chest on side of injury</p>

              <div class="alert alert-warning">
                <strong>Needle Decompression:</strong>
                <ul style="margin: 0.5rem 0;">
                  <li>14-gauge, 3.25 inch needle/catheter</li>
                  <li><strong>Primary Site:</strong> 2nd Intercostal Space / Midclavicular Line</li>
                  <li><strong>Alternate Site:</strong> 4th or 5th ICS / Anterior Axillary Line</li>
                </ul>
              </div>

              <h4>Open/Sucking Chest Wounds:</h4>
              <ol>
                <li>Apply <strong>vented chest seal</strong> (preferred)</li>
                <li>Or apply non-vented chest seal</li>
                <li>Burp wound if indicated for breathing difficulty</li>
              </ol>

              <div class="card" style="margin-top: 1rem;">
                <div class="card-title">Tension Pneumothorax Indicators</div>
                <ul>
                  <li>Increasing hypoxia</li>
                  <li>Respiratory distress</li>
                  <li>Hypotension</li>
                </ul>
              </div>
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
              <div class="card-title">
                <span class="march-letter">C</span>
                Circulation
              </div>

              <h4>IV/IO Access:</h4>
              <ul>
                <li>Start 18-gauge IV or saline lock if indicated</li>
                <li>If IV not obtainable, use intraosseous (IO) needle</li>
              </ul>

              <h4>Shock Criteria:</h4>
              <ul>
                <li>Altered mental status (in absence of TBI)</li>
                <li>Weak or absent radial pulse</li>
              </ul>
            </div>

            <div class="card">
              <div class="card-title">Tranexamic Acid (TXA)</div>
              <div class="drug-dose">
                1 gram in 100ml NS or LR IV over 10 minutes<br>
                Administer ASAP but NOT >3 hours post injury
              </div>
              <p><strong>TXA Criteria:</strong></p>
              <ul>
                <li>Hemorrhagic shock</li>
                <li>One or more major amputations</li>
                <li>Penetrating torso trauma</li>
                <li>Evidence of severe bleeding</li>
              </ul>
              <p style="margin-top: 0.5rem;">Second dose: 1g after initial fluid resuscitation</p>
            </div>

            <div class="card">
              <div class="card-title">Fluid Resuscitation</div>

              <div class="decision-box">
                <div class="decision-question">Is casualty in hemorrhagic shock?</div>
                <div class="decision-options">
                  <div class="decision-no">NO: PO fluids if conscious and can swallow</div>
                  <div class="decision-yes">YES: See resuscitation order below</div>
                </div>
              </div>

              <h4>Resuscitation Order (preferred):</h4>
              <ol>
                <li>Whole blood (preferred)</li>
                <li>Plasma, RBCs, Platelets 1:1:1</li>
                <li>Plasma and RBCs 1:1</li>
                <li>Plasma alone OR RBCs alone</li>
                <li>Hextend 500ml bolus</li>
                <li>Lactated Ringers OR Plasma-Lyte A 500ml bolus</li>
              </ol>

              <div class="alert alert-success">
                <strong>Endpoints:</strong>
                <ul style="margin: 0.5rem 0 0 0;">
                  <li>Palpable radial pulse</li>
                  <li>Improved mental status</li>
                  <li>Systolic BP 80-90 mmHg</li>
                </ul>
                <p style="margin-top: 0.5rem;"><strong>For TBI:</strong> Target SBP >90 mmHg</p>
              </div>
            </div>
          `
        },
        {
          id: 'tfc-hypothermia',
          title: 'H - Hypothermia',
          content: `
            <div class="card march-card hypothermia">
              <div class="card-title">
                <span class="march-letter">H</span>
                Hypothermia Prevention
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

              <div class="alert alert-info">
                Hypothermia prevention and fluid resuscitation should be executed <strong>simultaneously</strong> if possible.
              </div>
            </div>
          `
        },
        {
          id: 'tfc-paws',
          title: 'PAWS',
          content: `
            <div class="alert alert-info">
              <strong>PAWS</strong> follows MARCH in the treatment sequence.
            </div>

            <div class="card">
              <div class="card-title">P - Pain Management</div>
              <p>See <strong>Drugs</strong> tab for detailed protocols.</p>

              <h4>Mild to Moderate Pain (still able to fight):</h4>
              <p>Combat Wound Medication Pack (CWMP):</p>
              <ul>
                <li>Tylenol 650mg bilayer - 2 PO q8h</li>
                <li>Meloxicam 15mg PO daily</li>
              </ul>

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
              <ul>
                <li>Inspect and dress known wounds</li>
                <li>Check for additional wounds</li>
              </ul>
            </div>

            <div class="card">
              <div class="card-title">S - Splinting</div>
              <ul>
                <li>Splint fractures</li>
                <li><strong>Recheck pulses after splinting</strong></li>
              </ul>
            </div>

            <div class="card">
              <div class="card-title">Additional Considerations</div>

              <h4>Burns:</h4>
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

              <h4 style="margin-top: 1rem;">Penetrating Eye Trauma:</h4>
              <ul>
                <li>Perform rapid field test of visual acuity</li>
                <li>Cover with <strong>rigid eye shield</strong> (NOT pressure patch)</li>
                <li>Administer antibiotics</li>
              </ul>
            </div>
          `
        },
        {
          id: 'tfc-documentation',
          title: 'Documentation & Prep',
          content: `
            <div class="card">
              <div class="card-title">Communication</div>
              <ul>
                <li>Communicate with casualty - encourage, reassure, explain care</li>
                <li>Communicate with tactical leadership - casualty status and evac requirements</li>
                <li>Communicate with evacuation system to arrange TACEVAC</li>
                <li>Relay MOI, injuries, signs/symptoms, treatments to evac personnel</li>
              </ul>
            </div>

            <div class="card">
              <div class="card-title">Documentation</div>
              <p>Document on <strong>DD Form 1380 (TCCC Card)</strong>:</p>
              <ul>
                <li>Clinical assessments</li>
                <li>Treatments rendered</li>
                <li>Changes in casualty status</li>
              </ul>
              <p>Forward with casualty to next level of care.</p>
            </div>

            <div class="card">
              <div class="card-title">Prepare for Evacuation</div>
              <ul>
                <li>Complete and secure TCCC Card to casualty</li>
                <li>Secure all loose ends of bandages and wraps</li>
                <li>Secure hypothermia prevention wraps/blankets/straps</li>
                <li>Secure litter straps</li>
                <li>Consider additional padding for long evacuations</li>
                <li>Provide instructions to ambulatory patients</li>
                <li>Stage casualties for evacuation</li>
                <li>Maintain security at evacuation site</li>
              </ul>
            </div>

            <div class="alert alert-critical">
              <strong>CPR Considerations:</strong><br>
              Battlefield blast or penetrating trauma casualties with <strong>no pulse, no ventilations, and no other signs of life</strong> should NOT be resuscitated.<br><br>
              <strong>Exception:</strong> Torso/polytrauma casualties with no pulse should have <strong>bilateral needle decompression</strong> performed to confirm/deny tension pneumothorax before discontinuing care.
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

              <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--text-muted);">
                *If verbal communication difficult, point to each injury and treatment and confirm acknowledgement.
              </p>
            </div>

            <div class="card">
              <div class="card-title">TACEVAC Personnel Actions</div>
              <ul>
                <li>Triage and stage casualties on evac platform</li>
                <li>Secure casualties IAW unit policies and safety requirements</li>
                <li>Re-assess casualties and re-evaluate all injuries and interventions</li>
              </ul>
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
          `
        },
        {
          id: 'tacevac-breathing',
          title: 'Breathing (TACEVAC)',
          content: `
            <div class="card">
              <div class="card-title">Oxygen Administration</div>
              <p>Administer oxygen when possible for:</p>
              <ul>
                <li>Low oxygen saturation by pulse oximetry</li>
                <li>Injuries associated with impaired oxygenation</li>
                <li>Unconscious casualty</li>
                <li>Casualty with TBI (maintain SpO2 >90%)</li>
                <li>Casualty in shock</li>
                <li>Casualty at altitude</li>
                <li>Known or suspected smoke inhalation</li>
              </ul>
            </div>

            <div class="alert alert-warning">
              <strong>Consider chest tube insertion</strong> if no improvement and/or long transport anticipated.
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
                <li>Decreased level of consciousness</li>
                <li>Pupillary dilation</li>
                <li>SBP should be >90 mmHg</li>
                <li>O2 sat >90%</li>
                <li>Hypothermia</li>
                <li>PCO2 maintained 35-40 mmHg (if capnography available)</li>
                <li>Penetrating head trauma (administer antibiotics)</li>
                <li><strong>Assume spinal injury until cleared</strong></li>
              </ul>
            </div>

            <div class="alert alert-critical">
              <strong>Herniation Indicators:</strong>
              <ul style="margin: 0.5rem 0;">
                <li>Asymmetric/unilateral pupillary dilation with decreased LOC</li>
                <li>Fixed dilated pupil</li>
                <li>Extensor posturing</li>
                <li>Widening pulse pressure</li>
              </ul>

              <strong>If impending herniation suspected:</strong>
              <ol style="margin: 0.5rem 0 0 0;">
                <li>Administer 250ml of 3% or 5% hypertonic saline bolus</li>
                <li>Elevate casualty's head 30 degrees</li>
                <li>Hyperventilate at 20 breaths/min with highest O2</li>
                <li>Maintain end-tidal CO2 30-35 mmHg</li>
              </ol>
            </div>

            <div class="alert alert-warning">
              <strong>DO NOT hyperventilate</strong> unless signs of impending herniation are present.
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

    drugs: {
      title: 'Drug Reference',
      subtitle: 'TCCC pharmacology quick reference',
      color: '#3b82f6',
      sections: [
        {
          id: 'drugs-quick',
          title: 'Quick Reference',
          content: `
            <div class="alert alert-info">
              <strong>Tap any drug below for detailed information.</strong>
            </div>

            <div class="card">
              <div class="card-title">Pain Management</div>
              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr><th>Drug</th><th>Dose</th><th>Route</th><th>Indication</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Acetaminophen</td><td>650mg x2</td><td>PO</td><td>Mild-mod pain</td></tr>
                    <tr><td>Meloxicam</td><td>15mg</td><td>PO</td><td>Mild-mod pain</td></tr>
                    <tr><td>OTFC (Fentanyl)</td><td>800mcg</td><td>Transmucosal</td><td>Mod-severe, NOT shock</td></tr>
                    <tr><td>Ketamine</td><td>50mg / 20mg</td><td>IM,IN / IV,IO</td><td>Mod-severe, IN shock</td></tr>
                    <tr><td>Morphine</td><td>5mg</td><td>IV/IO</td><td>Alternative to OTFC</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="card">
              <div class="card-title">Other Medications</div>
              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr><th>Drug</th><th>Dose</th><th>Route</th><th>Indication</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Moxifloxacin</td><td>400mg daily</td><td>PO</td><td>Antibiotic</td></tr>
                    <tr><td>Ertapenem</td><td>1g daily</td><td>IV/IM</td><td>Antibiotic (if no PO)</td></tr>
                    <tr><td>TXA</td><td>1g in 100ml</td><td>IV</td><td>Hemorrhage</td></tr>
                    <tr><td>Ondansetron</td><td>4mg q8h</td><td>ODT/IV/IM</td><td>Nausea/vomiting</td></tr>
                    <tr><td>Naloxone</td><td>0.4-2mg</td><td>IV/IM</td><td>Opioid reversal</td></tr>
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
                Acetaminophen 650mg bilayer - 2 tablets PO q8h<br>
                Meloxicam 15mg PO daily
              </div>

              <p><strong>Mission Impact:</strong> None to minimal</p>
            </div>

            <div class="card drug-card">
              <div class="drug-name">Moderate to Severe Pain - NOT in Shock</div>
              <div class="drug-class">Oral Transmucosal Fentanyl Citrate (OTFC)</div>

              <div class="drug-dose">
                800mcg transmucosal<br>
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
            </div>

            <div class="card">
              <div class="card-title">Ondansetron (Zofran) - Anti-nausea</div>
              <div class="drug-dose">
                4mg ODT/IV/IO/IM q8h PRN
              </div>
              <p>Consider for nausea/vomiting with pain medications.</p>
            </div>
          `
        },
        {
          id: 'drugs-antibiotics',
          title: 'Antibiotics',
          content: `
            <div class="alert alert-info">
              Early administration of antibiotics is recommended for <strong>ALL open combat wounds</strong>.
            </div>

            <div class="card drug-card">
              <div class="drug-name">Moxifloxacin (Avelox)</div>
              <div class="drug-class">Fluoroquinolone antibiotic</div>

              <div class="drug-dose">400mg PO daily</div>

              <p><strong>Use if:</strong> Casualty can take oral medications</p>
              <p><strong>Part of:</strong> Combat Wound Medication Pack</p>

              <div class="alert alert-warning" style="margin-top: 1rem;">
                <strong>GROUNDING medication</strong> for flight personnel
              </div>
            </div>

            <div class="card drug-card">
              <div class="drug-name">Ertapenem (Invanz)</div>
              <div class="drug-class">Carbapenem antibiotic</div>

              <div class="drug-dose">1g IV/IM daily</div>

              <p><strong>Use if:</strong> Unable to take oral medications</p>

              <h4 style="margin-top: 1rem;">Reconstitution:</h4>
              <ul>
                <li><strong>IV:</strong> 10ml Normal Saline</li>
                <li><strong>IM:</strong> 3.2ml 1% Lidocaine (without epinephrine)</li>
              </ul>
            </div>
          `
        },
        {
          id: 'drugs-txa',
          title: 'TXA',
          content: `
            <div class="card drug-card">
              <div class="drug-name">Tranexamic Acid (TXA)</div>
              <div class="drug-class">Antifibrinolytic agent</div>

              <div class="drug-dose">
                1g in 100ml NS or LR<br>
                IV over 10 minutes<br><br>
                Second dose: 1g after initial fluid resuscitation
              </div>

              <div class="alert alert-critical" style="margin-top: 1rem;">
                <strong>DO NOT administer >3 hours after injury</strong>
              </div>

              <h4>TXA Criteria:</h4>
              <ul>
                <li>Hemorrhagic shock</li>
                <li>One or more major amputations</li>
                <li>Penetrating torso trauma</li>
                <li>Evidence of severe bleeding</li>
              </ul>

              <div class="alert alert-warning" style="margin-top: 1rem;">
                <ul style="margin: 0;">
                  <li>Do NOT mix with blood products or Hextend</li>
                  <li>Inject no more than 100mg/min to avoid hypotension</li>
                  <li>Document on casualty card</li>
                </ul>
              </div>

              <h4 style="margin-top: 1rem;">Contraindications:</h4>
              <ul>
                <li>Subarachnoid hemorrhage</li>
                <li>Active intravascular clotting</li>
              </ul>
            </div>
          `
        },
        {
          id: 'drugs-reversal',
          title: 'Reversal Agent',
          content: `
            <div class="card drug-card">
              <div class="drug-name">Naloxone (Narcan)</div>
              <div class="drug-class">Opioid antagonist</div>

              <div class="drug-dose">
                0.4-2mg IV/IM<br>
                Repeat q2-3min PRN<br>
                Max: 10mg
              </div>

              <p><strong>Indication:</strong> Opioid overdose and reversal of effects:</p>
              <ul>
                <li>Respiratory depression</li>
                <li>Sedation</li>
                <li>Hypotension</li>
              </ul>

              <div class="alert alert-warning" style="margin-top: 1rem;">
                <strong>Have available when administering opioids.</strong><br>
                Titrate to effect - use caution that pain is still managed.
              </div>

              <p style="margin-top: 1rem;"><strong>K-9 Dosage:</strong> 1mg (0.02-0.04mg/kg) IV/IM</p>
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
                  <thead>
                    <tr><th>Line</th><th>Content</th><th>Example</th></tr>
                  </thead>
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

            <div class="card">
              <div class="card-title">Line 4 - Special Equipment</div>
              <ul>
                <li><strong>A:</strong> None</li>
                <li><strong>B:</strong> Hoist</li>
                <li><strong>C:</strong> Extraction equipment</li>
                <li><strong>D:</strong> Ventilator</li>
                <li><strong>E:</strong> Other (specify)</li>
              </ul>
            </div>

            <div class="card">
              <div class="card-title">Line 8 - Nationality/Status</div>
              <ul>
                <li><strong>A:</strong> US/Coalition Military</li>
                <li><strong>B:</strong> US/Coalition Civilian</li>
                <li><strong>C:</strong> Non-Coalition</li>
                <li><strong>D:</strong> Non-Coalition Civilian</li>
                <li><strong>E:</strong> Opposing Forces/Detainee</li>
                <li><strong>F:</strong> Child</li>
              </ul>
            </div>
          `
        },
        {
          id: 'tools-mist',
          title: 'MIST Report',
          content: `
            <div class="card">
              <div class="card-title">MIST Report Format</div>

              <div class="alert alert-info">
                Use MIST to communicate casualty information to receiving medical personnel.
              </div>

              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr><th>Letter</th><th>Content</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>M</strong></td>
                      <td>Mechanism of Injury and Time of Injury (if known)</td>
                    </tr>
                    <tr>
                      <td><strong>I</strong></td>
                      <td>Injury or Illness</td>
                    </tr>
                    <tr>
                      <td><strong>S</strong></td>
                      <td>Symptoms and Vital Signs<br>
                        <span style="font-size: 0.85rem; color: var(--text-muted);">
                          A-Airway status, B-Breathing rate, C-Pulse rate,<br>
                          D-Conscious/Unconscious, E-Other signs
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td><strong>T</strong></td>
                      <td>Treatment Given<br>
                        <span style="font-size: 0.85rem; color: var(--text-muted);">
                          Tourniquet/time applied, drugs administered
                        </span>
                      </td>
                    </tr>
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
              <p><strong>The key is to locate these individuals as quickly as possible.</strong></p>
            </div>

            <div class="card triage-delayed" style="border: 2px solid #f59e0b;">
              <div class="card-title" style="color: #f59e0b;">DELAYED (T2)</div>
              <p>Likely to need surgery, but condition permits delay without endangering life, limb, or eyesight.</p>
              <ul>
                <li>Large soft tissue wounds (no shock)</li>
                <li>Fractures of major bones</li>
                <li>Intra-abdominal/thoracic wounds (stable)</li>
                <li>Burns <20% TBSA</li>
              </ul>
            </div>

            <div class="card triage-minimal" style="border: 2px solid #22c55e;">
              <div class="card-title" style="color: #22c55e;">MINIMAL (T3)</div>
              <p>"Walking wounded" - minor injuries treatable with self or buddy aid.</p>
              <ul>
                <li>Small burns</li>
                <li>Minor lacerations/abrasions</li>
                <li>Small fractures</li>
              </ul>
              <p><em>Utilize for mission requirements, help transport wounded, or return to fight.</em></p>
            </div>

            <div class="card triage-expectant" style="border: 2px solid #6b7280;">
              <div class="card-title" style="color: #6b7280;">EXPECTANT (T4)</div>
              <p>Wounds so extensive that survival is highly unlikely even with optimal resources.</p>
              <ul>
                <li>Penetrating head trauma with massive brain damage</li>
                <li>Unresponsive</li>
              </ul>
              <p><strong>Should still receive comfort measures and pain medication. Re-triage as appropriate.</strong></p>
            </div>
          `
        },
        {
          id: 'tools-evac',
          title: 'Evacuation Precedence',
          content: `
            <div class="card triage-immediate" style="border: 2px solid #dc2626;">
              <div class="card-title" style="color: #dc2626;">URGENT / CAT A (Within 2 Hours)</div>
              <ul>
                <li>Dismounted IED attack injuries</li>
                <li>GSW/shrapnel to chest, abdomen, pelvis</li>
                <li>Ongoing airway difficulty</li>
                <li>Ongoing respiratory difficulty</li>
                <li>Unconscious casualty</li>
                <li>Known/suspected spinal injury</li>
                <li>Casualty in shock</li>
                <li>Bleeding difficult to control</li>
                <li>Moderate/Severe TBI</li>
                <li>Burns >20% TBSA</li>
              </ul>
            </div>

            <div class="card triage-delayed" style="border: 2px solid #f59e0b;">
              <div class="card-title" style="color: #f59e0b;">PRIORITY / CAT B (Within 4 Hours)</div>
              <ul>
                <li>Isolated open extremity fracture (bleeding controlled)</li>
                <li>Casualty with tourniquet in place</li>
                <li>Penetrating/serious eye injury</li>
                <li>Significant soft tissue injury (no major bleeding)</li>
                <li>Extremity injury with absent distal pulses</li>
                <li>Burns 10-20% TBSA</li>
              </ul>
            </div>

            <div class="card triage-minimal" style="border: 2px solid #22c55e;">
              <div class="card-title" style="color: #22c55e;">ROUTINE / CAT C (Within 24 Hours)</div>
              <ul>
                <li>Concussion (mild TBI)</li>
                <li>GSW to extremity (bleeding controlled, no TQ)</li>
                <li>Minor soft tissue shrapnel injury</li>
                <li>Closed fracture with intact distal pulses</li>
                <li>Burns <10% TBSA</li>
              </ul>
            </div>
          `
        },
        {
          id: 'tools-conversions',
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
              <div class="card-title">IV Fluid Rates (Drops/Min)</div>
              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr><th>ml/hr</th><th>10 gtt</th><th>15 gtt</th><th>60 gtt</th></tr>
                  </thead>
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
                  <thead>
                    <tr><th>Name</th><th>NSN</th></tr>
                  </thead>
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
                  <thead>
                    <tr><th>Name</th><th>NSN</th></tr>
                  </thead>
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
                  <thead>
                    <tr><th>Name</th><th>NSN</th></tr>
                  </thead>
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
                  <thead>
                    <tr><th>Name</th><th>NSN</th></tr>
                  </thead>
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

  // ==========================================================================
  // State
  // ==========================================================================

  let currentPhase = 'cuf';
  let currentSection = null;
  const PHASES = ['cuf', 'tfc', 'tacevac', 'drugs', 'tools'];

  // ==========================================================================
  // Navigation
  // ==========================================================================

  function initNavigation() {
    // Phase buttons (top nav)
    document.querySelectorAll('.phase-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const phase = btn.dataset.phase;
        setPhase(phase);
      });
    });

    // Bottom nav (mobile)
    document.querySelectorAll('.bottom-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const phase = btn.dataset.phase;
        setPhase(phase);
      });
    });

    // Handle hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Initialize swipe navigation
    initSwipeNavigation();

    // Initial load
    handleHashChange();
  }

  // ==========================================================================
  // Swipe Navigation (Mobile)
  // ==========================================================================

  function initSwipeNavigation() {
    const main = document.getElementById('mainContent');
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    const minSwipeDistance = 80;
    const maxVerticalMovement = 100;

    main.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    main.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const deltaX = touchEndX - touchStartX;
      const deltaY = Math.abs(touchEndY - touchStartY);

      // Only trigger if horizontal swipe is significant and vertical movement is minimal
      if (Math.abs(deltaX) > minSwipeDistance && deltaY < maxVerticalMovement) {
        const currentIndex = PHASES.indexOf(currentPhase);

        if (deltaX < 0 && currentIndex < PHASES.length - 1) {
          // Swipe left - next phase
          setPhase(PHASES[currentIndex + 1]);
        } else if (deltaX > 0 && currentIndex > 0) {
          // Swipe right - previous phase
          setPhase(PHASES[currentIndex - 1]);
        }
      }
    }
  }

  function setPhase(phase) {
    currentPhase = phase;
    currentSection = null;

    // Update nav buttons
    document.querySelectorAll('.phase-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.phase === phase);
    });
    document.querySelectorAll('.bottom-nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.phase === phase);
    });

    // Update URL
    window.location.hash = phase;

    // Render content
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

      // Update nav
      document.querySelectorAll('.phase-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.phase === phase);
      });
      document.querySelectorAll('.bottom-nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.phase === phase);
      });

      renderPhase(phase, section);
    }
  }

  // ==========================================================================
  // Rendering
  // ==========================================================================

  function renderPhase(phase, sectionId = null) {
    const content = CONTENT[phase];
    const main = document.getElementById('mainContent');

    // Build section navigation
    const sectionNav = content.sections.map(sec => `
      <button class="subsection-btn${sectionId === sec.id || (!sectionId && sec.id === content.sections[0].id) ? ' active' : ''}"
              data-section="${sec.id}">
        ${sec.title}
      </button>
    `).join('');

    // Find active section
    const activeSection = sectionId
      ? content.sections.find(s => s.id === sectionId)
      : content.sections[0];

    main.innerHTML = `
      <div class="section-header">
        <span class="section-phase" style="background: ${content.color}22; color: ${content.color};">${content.title}</span>
        <h1 class="section-title">${activeSection.title}</h1>
        <p class="section-subtitle">${content.subtitle}</p>
      </div>

      <nav class="subsection-nav">
        ${sectionNav}
      </nav>

      <div class="section-content">
        ${activeSection.content}
      </div>
    `;

    // Add section nav event listeners
    main.querySelectorAll('.subsection-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sectionId = btn.dataset.section;
        window.location.hash = `${currentPhase}/${sectionId}`;
      });
    });

    // Initialize checklists if present
    initChecklists();

    // Scroll to top
    window.scrollTo(0, 0);
  }

  // ==========================================================================
  // Checklists
  // ==========================================================================

  function initChecklists() {
    document.querySelectorAll('.checklist-item').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('checked');
      });
    });
  }

  // ==========================================================================
  // Offline Support
  // ==========================================================================

  function initOfflineSupport() {
    const indicator = document.getElementById('offlineIndicator');

    function updateStatus() {
      indicator.classList.toggle('visible', !navigator.onLine);
    }

    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
    updateStatus();

    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('SW registered'))
        .catch(err => console.log('SW registration failed:', err));
    }
  }

  // ==========================================================================
  // Initialize
  // ==========================================================================

  function init() {
    initNavigation();
    initOfflineSupport();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
