/**
 * Light Fighter Medic App
 * Guerrilla Assault Medicine Reference
 * Based on Ranger Medic Handbook 2019 & CoTCCC Guidelines
 *
 * "Hunt. Harm. Heal." - The Guerrilla Assault Medic's phrase
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

              <div class="card" style="margin-top: 1rem;">
                <div class="card-title">Tension Pneumothorax Indicators</div>
                <ul>
                  <li>Difficulty or worsening breathing with chest/abdominal injury</li>
                  <li>Decreased SpO2</li>
                  <li>Decreased breath sounds on affected side</li>
                  <li>Tracheal deviation (late sign)</li>
                  <li>Jugular vein distention (late sign)</li>
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
                  <thead>
                    <tr><th>Pulse Location</th><th>Estimated SBP</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Radial pulse present</td><td>~80 mmHg</td></tr>
                    <tr><td>Femoral pulse present</td><td>~70 mmHg</td></tr>
                    <tr><td>Carotid pulse present</td><td>~60 mmHg</td></tr>
                  </tbody>
                </table>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted);">These are quick estimates only. Use actual BP measurement when possible.</p>
            </div>

            <div class="card">
              <div class="card-title">Tranexamic Acid (TXA)</div>
              <div class="drug-dose">
                1-2g IV/IO flush as soon as possible<br>
                DO NOT administer >3 hours post injury
              </div>
              <p><strong>TXA Criteria:</strong></p>
              <ul>
                <li>Hemorrhagic shock</li>
                <li>One or more major amputations</li>
                <li>Penetrating torso trauma</li>
                <li>Evidence of severe bleeding</li>
                <li>Evidence of pelvic fracture</li>
              </ul>
              <p style="margin-top: 0.5rem;">Second dose: 1g after first unit of blood (if initial was 1g)</p>
              <p><strong>Do NOT delay blood product resuscitation for TXA administration.</strong></p>
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
                <strong>Resuscitation Endpoints:</strong>
                <ul style="margin: 0.5rem 0 0 0;">
                  <li>Palpable radial pulse</li>
                  <li>Improved mental status</li>
                  <li>SBP 90-100 mmHg (hemorrhagic shock)</li>
                  <li>SBP >110 mmHg (TBI with altered mental status)</li>
                </ul>
              </div>
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

              <div class="card" style="margin-top: 1rem;">
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
                <li>Check for additional wounds (full body sweep)</li>
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

            <div class="card">
              <div class="card-title">Penetrating Eye Trauma</div>
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
                <li>All drugs administered (type, dose, route, time)</li>
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
              <strong>Consider chest tube insertion</strong> if:
              <ul style="margin: 0.5rem 0 0 0;">
                <li>Multiple needle decompressions required</li>
                <li>No improvement with NCD</li>
                <li>Extended evacuation time (>1 hour)</li>
                <li>Transport at high altitude in unpressurized aircraft</li>
              </ul>
            </div>

            <div class="card">
              <div class="card-title">Ventilator Considerations</div>
              <ul>
                <li>Maintain strict bagging cycles (1 breath every 5 seconds)</li>
                <li>Tidal volume approximately 500ml</li>
                <li>Always use PEEP valve when bagging</li>
                <li>Consider sedation for prolonged intubation (if no shock/hypotension)</li>
                <li>Add physiologic PEEP (3-5 cm water)</li>
              </ul>
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
                <li>SBP should be >90 mmHg (target >110 mmHg)</li>
                <li>O2 sat >90%</li>
                <li>Hypothermia prevention</li>
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
                <li>Extensor posturing (decerebrate)</li>
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
              <strong>Indications:</strong>
              <ul style="margin: 0.5rem 0 0 0;">
                <li>Severe airway obstruction (trauma, edema, secretions, foreign body, tongue)</li>
                <li>Failure of airway positioning (chin-lift/jaw-thrust)</li>
                <li>Failure of Nasopharyngeal Airway</li>
                <li>Unable to manually ventilate</li>
              </ul>
            </div>

            <div class="card">
              <div class="card-title">Equipment Needed</div>
              <ul>
                <li>Scalpel</li>
                <li>Tracheal Hook or Bougie</li>
                <li>Povidone/Chlorhexidine/Alcohol swab</li>
                <li>Gloves (sterile preferred)</li>
                <li>Sterile 4x4 sponge</li>
                <li>ET Tube (6.0-7.0) or Cric-specific tube</li>
                <li>Bag-Valve-Mask (BVM)</li>
                <li>Curved hemostats if required</li>
                <li>Securing device, tape, or suture</li>
                <li>Suction (recommended)</li>
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
              <strong>Critical Notes:</strong>
              <ul style="margin: 0.5rem 0 0 0;">
                <li>Maintain C-spine precautions if concerned for injury</li>
                <li>If SpO2 drops <90%, stop procedure and ventilate 30-60 seconds before retry</li>
                <li>Confirm airway before and after ANY patient movement</li>
              </ul>
            </div>
          `
        },
        {
          id: 'proc-ncd',
          title: 'Needle Chest Decompression',
          content: `
            <div class="alert alert-critical">
              <strong>Indications:</strong>
              <ul style="margin: 0.5rem 0 0 0;">
                <li>Difficulty or worsening breathing with mechanism of injury</li>
                <li>Decreased SpO2 with chest/abdominal injury</li>
                <li>Decreased breath sounds on affected side</li>
                <li>Tracheal deviation (late sign)</li>
                <li>Jugular vein distention (late sign)</li>
              </ul>
            </div>

            <div class="card">
              <div class="card-title">Equipment Needed</div>
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

            <div class="alert alert-warning">
              <strong>Documentation:</strong> Vital signs, SpO2, lung sounds before/after, chest rise, skin color, capillary refill, response to treatment, complications.
            </div>
          `
        },
        {
          id: 'proc-chesttube',
          title: 'Chest Tube / Finger Thoracostomy',
          content: `
            <div class="alert alert-info">
              <strong>Indications:</strong>
              <ul style="margin: 0.5rem 0 0 0;">
                <li>Multiple unsuccessful needle decompressions</li>
                <li>Extended time before evacuation</li>
                <li>Extended evacuation distance/time</li>
                <li>Large hemothorax suspected</li>
              </ul>
            </div>

            <div class="card">
              <div class="card-title">Equipment Needed</div>
              <ul>
                <li>6" or 9" Peans forceps (clamp)</li>
                <li>Chlorhexidine gluconate solution/swab</li>
                <li>Scalpel, #10</li>
                <li>28 Fr to 36 Fr chest tube</li>
                <li>Heimlich valve</li>
                <li>Sterile gloves</li>
                <li>Securing device/suture</li>
              </ul>
            </div>

            <div class="card">
              <div class="card-title">Site Selection</div>
              <div class="drug-dose">
                Affected side, 5th intercostal space (nipple level), anterior to midaxillary line
              </div>
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
                <li>If available, apply negative-pressure suction (not exceeding -20 cm water)</li>
              </ol>
            </div>

            <div class="alert alert-critical">
              <strong>Surgical intervention required if:</strong>
              <ul style="margin: 0.5rem 0 0 0;">
                <li>Blood loss 1000-1500ml immediately</li>
                <li>Drainage 200-300ml/hr in adult patient</li>
              </ul>
            </div>

            <div class="alert alert-warning">
              <strong>ALL chest tubes should be placed with STERILE technique.</strong>
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
                  <thead>
                    <tr><th>Site</th><th>Location</th><th>Needle Size</th></tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Proximal Humerus</strong></td><td>Greater tubercle (internally rotate arm)</td><td>45mm 15ga</td></tr>
                    <tr><td><strong>Sternal (Manubrium)</strong></td><td>Midline, 1.5cm below sternal notch</td><td>38.5mm 15ga</td></tr>
                    <tr><td><strong>Proximal Tibia</strong></td><td>1 finger medial to tuberosity, 2 fingers below patella</td><td>25mm 15ga</td></tr>
                    <tr><td><strong>Distal Tibia</strong></td><td>2 fingers proximal to medial malleolus</td><td>25mm 15ga</td></tr>
                  </tbody>
                </table>
              </div>
              <p style="margin-top: 0.5rem; font-size: 0.85rem;">The more proximal the site, the better flow rate.</p>
            </div>

            <div class="card">
              <div class="card-title">Contraindications</div>
              <ul>
                <li>Fracture or injury to insertion site</li>
                <li>Absence of landmarks</li>
                <li>Injury proximal to IO site</li>
              </ul>
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
                <li>If flush difficult without aspiration, attempt to flush - if successful, proceed</li>
                <li>Consider 5-10cc lidocaine flush for pain control</li>
                <li>Attach IV tubing/saline lock and administer fluids/meds</li>
              </ol>
            </div>

            <div class="alert alert-warning">
              <strong>Cautions:</strong>
              <ul style="margin: 0.5rem 0 0 0;">
                <li>Do NOT rock or bend during insertion - maintain 90° angle</li>
                <li>Do NOT leave catheter inserted >24 hours</li>
                <li>Do NOT attach syringe directly to IO catheter hub</li>
              </ul>
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
              <div class="card-title">Equipment Needed</div>
              <ul>
                <li>Constricting band (or finger pressure)</li>
                <li>Chlorhexidine gluconate swab</li>
                <li>2x 14G IV catheter/needle</li>
                <li>10cc syringe with normal saline</li>
                <li>Needleless saline lock</li>
                <li>Tegaderm (at least 2.5" x 2.5")</li>
                <li>Gloves</li>
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
                <li><strong>NOTE:</strong> Confirm blood return when aspirating</li>
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
              <div class="card-title">Equipment Needed</div>
              <ul>
                <li>Constricting band</li>
                <li>Chlorhexidine gluconate solution/swab</li>
                <li>2x 18G or 16G IV catheter/needle</li>
                <li>Needleless saline lock</li>
                <li>Tegaderm (at least 2.5" x 2.5")</li>
                <li>IV tubing (if needed)</li>
                <li>IV securing device</li>
                <li>Gloves</li>
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
              <strong>Notes:</strong>
              <ul style="margin: 0.5rem 0 0 0;">
                <li>Never delay evacuation or treatments to gain IV access unless needed for lifesaving procedure</li>
                <li>Warmed IV fluids are always preferred to prevent hypothermia</li>
                <li>DO NOT REMOVE saline lock when discontinuing IV fluids</li>
              </ul>
            </div>

            <div class="card">
              <div class="card-title">Documentation</div>
              <ul>
                <li>IV site location</li>
                <li>IV catheter gauge</li>
                <li>Date/time started</li>
                <li>Fluids infused / rate</li>
                <li>Complications encountered</li>
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
                  <thead>
                    <tr><th>Drug</th><th>Dose</th><th>Route</th><th>Indication</th></tr>
                  </thead>
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
                  <thead>
                    <tr><th>Drug</th><th>Dose</th><th>Route</th><th>Use If</th></tr>
                  </thead>
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
                  <thead>
                    <tr><th>Drug</th><th>Dose</th><th>Route</th><th>Indication</th></tr>
                  </thead>
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
                  <thead>
                    <tr><th>Drug</th><th>Dose</th><th>Route</th><th>Indication</th></tr>
                  </thead>
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

              <p style="margin-top: 0.5rem;"><strong>Onset:</strong> 15 min | <strong>Peak:</strong> 20-40 min | <strong>Duration:</strong> 2-3 hours</p>
              <p><strong>K9 Dosage:</strong> DO NOT GIVE to K9s</p>
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

              <p style="margin-top: 0.5rem;"><strong>K9 Dosage:</strong> 75-150mg (2-5mg/kg) IM. Onset 2-5 min. Consider Midazolam adjunct.</p>
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
              <p><strong>Contraindication:</strong> Pregnancy (tooth discoloration)</p>
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
              <p><strong>Contraindications:</strong> Subarachnoid hemorrhage, active intravascular clotting</p>
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
              <p><strong>Contraindications:</strong> Hyperglycemia, cranial/spinal hemorrhage</p>
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
              <p><strong>Contraindications:</strong> Shock, coma, alcohol intoxication, narrow-angle glaucoma</p>
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
              <p><strong>Contraindications:</strong> MI recovery phase, cardiac arrhythmias, heart block, CHF</p>
              <p><strong>Mission Impact:</strong> GROUNDING - causes drowsiness</p>
              <p><strong>K9 Dosage:</strong> DO NOT GIVE</p>
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
              <p><strong>Contraindication:</strong> Do NOT use as IV regional anesthesia (can cause cardiac arrest)</p>
              <p><strong>Mission Impact:</strong> GROUNDING for flight personnel</p>
            </div>
          `
        },
        {
          id: 'drugs-k9',
          title: 'K9 Dosages',
          content: `
            <div class="alert alert-critical">
              <strong>DO NOT GIVE TO K9:</strong> Acetaminophen, Ciprofloxacin, Clindamycin, Cyclobenzaprine, Fentanyl/OTFC
            </div>

            <div class="card">
              <div class="card-title">K9 Drug Quick Reference</div>
              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr><th>Drug</th><th>K9 Dose</th><th>Notes</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Ketamine</td><td>75-150mg (2-5mg/kg) IM</td><td>Onset 2-5 min, consider Midazolam adjunct</td></tr>
                    <tr><td>Naloxone</td><td>1mg (0.02-0.04mg/kg) IV/IM</td><td>Opioid reversal</td></tr>
                    <tr><td>Diazepam</td><td>Seizures: 0.5-1mg/kg IV, 1-2mg/kg rectally</td><td>q4h as needed</td></tr>
                    <tr><td>Diphenhydramine</td><td>50mg IM/SQ/PO</td><td>Impacts sense of smell</td></tr>
                    <tr><td>Dexamethasone</td><td>3-4mg (0.5mg/kg) IV/IM</td><td>-</td></tr>
                    <tr><td>Cefazolin</td><td>0.5-1g (25mg/kg) IV daily</td><td>Give over 5 min</td></tr>
                    <tr><td>Ceftriaxone</td><td>1g IV/IM daily</td><td>-</td></tr>
                    <tr><td>Amoxicillin/Clav</td><td>10-20mg/kg PO BID x 5-7d</td><td>-</td></tr>
                    <tr><td>Aspirin (Buffered)</td><td>10-25mg/kg PO q8-12h</td><td>Only buffered aspirin</td></tr>
                    <tr><td>Acetazolamide</td><td>250mg q12h or 500mg q24h</td><td>Start 24h prior to ascent</td></tr>
                  </tbody>
                </table>
              </div>
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
                  </tbody>                </table>
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
          id: 'tools-shock',
          title: 'Shock Classification',
          content: `
            <div class="card">
              <div class="card-title">Classes of Hemorrhagic Shock</div>
              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr><th>Parameter</th><th>Class I</th><th>Class II</th><th>Class III</th><th>Class IV</th></tr>
                  </thead>
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
          id: 'tools-conversions',
          title: 'Conversions & Vitals',
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
  const PHASES = ['cuf', 'tfc', 'tacevac', 'procedures', 'drugs', 'tools'];

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
