/**
 * Light Fighter Medic - Procedures
 * TCCC Phases, Surgical Procedures, Field Tools
 * Based on Ranger Medic Handbook 2019 & CoTCCC Guidelines
 */

(function() {
  'use strict';

  // ==========================================================================
  // CONTENT DATA
  // ==========================================================================

  const CONTENT = {
    general: {
      title: 'General First Aid',
      subtitle: 'Essential skills for anyone - no medical training required',
      color: '#10b981',
      sections: [
        {
          id: 'gen-overview',
          title: 'Start Here',
          keywords: ['first aid', 'basics', 'emergency', 'help', 'start', 'beginner'],
          content: `
            <div class="alert alert-info">
              <strong>You can save a life.</strong> Most emergencies require simple actions done quickly and correctly. Stay calm, assess the situation, and act.
            </div>
            <div class="card">
              <div class="card-title">The Three Rules</div>
              <ol>
                <li><strong>Scene Safety</strong> - Do not become the next casualty. Check for hazards (traffic, fire, downed power lines, attackers)</li>
                <li><strong>Call for Help</strong> - Dial 911 (or local emergency) immediately. Put on speaker if alone</li>
                <li><strong>Stop the Bleeding</strong> - Most preventable deaths are from blood loss. Apply pressure</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Initial Assessment (30 Seconds)</div>
              <ol>
                <li><strong>Are they conscious?</strong> Tap shoulder, ask "Are you okay?"</li>
                <li><strong>Are they breathing?</strong> Look at chest, listen, feel for breath</li>
                <li><strong>Are they bleeding?</strong> Look for blood - check under clothes, under body</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">What to Say to 911</div>
              <ol>
                <li>Your location (address, landmarks, what you see)</li>
                <li>What happened (car accident, fall, gunshot, etc.)</li>
                <li>How many people are injured</li>
                <li>Are they breathing? Conscious? Bleeding?</li>
                <li>Your name and phone number</li>
              </ol>
              <p><strong>Stay on the line.</strong> The dispatcher will guide you.</p>
            </div>
            <div class="alert alert-success">
              <strong>Good Samaritan Laws</strong> protect people who help in emergencies. You cannot be sued for trying to save someone's life if you act in good faith and within your abilities.
            </div>
          `
        },
        {
          id: 'gen-bleeding',
          title: 'Bleeding Control',
          keywords: ['bleeding', 'blood', 'hemorrhage', 'wound', 'cut', 'pressure', 'tourniquet'],
          content: `
            <div class="alert alert-critical">
              <strong>A person can bleed to death in 3-5 minutes.</strong> Do not wait for help. Act now.
            </div>
            <div class="card">
              <div class="card-title">Stop the Bleed - Three Steps</div>
              <ol>
                <li><strong>CALL 911</strong> - Get help coming</li>
                <li><strong>FIND the bleeding</strong> - Remove/cut clothing to expose wound</li>
                <li><strong>STOP the bleeding</strong> - Use one of three methods below</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Method 1: Direct Pressure</div>
              <p><strong>For most wounds:</strong></p>
              <ol>
                <li>Place clean cloth, gauze, or your bare hand directly on wound</li>
                <li>Push HARD with both hands - it should hurt them</li>
                <li>Hold pressure continuously for 10 minutes minimum</li>
                <li>Do NOT lift to check - you break the clot forming</li>
                <li>If blood soaks through, add more material ON TOP (do not remove)</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Method 2: Wound Packing</div>
              <p><strong>For deep wounds (stab, gunshot, severe laceration):</strong></p>
              <ol>
                <li>Stuff clean cloth or gauze INTO the wound</li>
                <li>Pack it tight - push material to the bottom of wound first</li>
                <li>Keep packing until wound is completely full</li>
                <li>Apply direct pressure on top</li>
                <li>Hold for 3 minutes minimum</li>
              </ol>
              <div class="alert alert-warning" style="margin-top: 0.5rem;">
                <strong>Improvised packing:</strong> T-shirt, towel, cloth, feminine pads, diapers - anything absorbent
              </div>
            </div>
            <div class="card">
              <div class="card-title">Method 3: Tourniquet</div>
              <p><strong>For life-threatening limb bleeding that won't stop:</strong></p>
              <ol>
                <li>Place 2-3 inches ABOVE the wound (between wound and heart)</li>
                <li>Wrap tight and secure</li>
                <li>Twist windlass/stick until bleeding STOPS</li>
                <li>Secure the windlass in place</li>
                <li>Note the time - write on patient's forehead if needed</li>
              </ol>
              <div class="drug-dose">
                <strong>Improvised Tourniquet:</strong> Belt, strap, torn cloth (2"+ wide) + stick/pen for windlass. NEVER use wire, rope, or narrow cord.
              </div>
            </div>
            <div class="card">
              <div class="card-title">Where NOT to Use Tourniquet</div>
              <ul>
                <li>Neck (use direct pressure only)</li>
                <li>Torso/chest/abdomen (pack wound, apply pressure)</li>
                <li>Groin/armpit (pack wound deeply, apply pressure)</li>
              </ul>
            </div>
            <div class="alert alert-info">
              <strong>Myth:</strong> "Tourniquets cause amputation." <strong>Fact:</strong> Modern data shows tourniquets can stay on for hours without limb loss. A loose tourniquet is dangerous - a tight one saves lives.
            </div>
          `
        },
        {
          id: 'gen-wounds',
          title: 'Wound Care',
          keywords: ['wound', 'cut', 'laceration', 'puncture', 'scrape', 'abrasion', 'cleaning', 'bandage', 'dressing'],
          content: `
            <div class="card">
              <div class="card-title">Basic Wound Care Steps</div>
              <ol>
                <li><strong>Stop bleeding first</strong> (if any)</li>
                <li><strong>Wash your hands</strong> or use gloves if available</li>
                <li><strong>Clean the wound</strong> with clean water - flush thoroughly</li>
                <li><strong>Remove debris</strong> gently with clean tweezers if visible</li>
                <li><strong>Apply antibiotic ointment</strong> (optional but helps)</li>
                <li><strong>Cover with clean bandage</strong></li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Cleaning Solutions (Best to Worst)</div>
              <ol>
                <li>Sterile saline or wound wash</li>
                <li>Clean drinking water (bottled preferred)</li>
                <li>Tap water (if clean source)</li>
                <li>Boiled and cooled water</li>
                <li>Diluted povidone-iodine (Betadine)</li>
              </ol>
              <div class="alert alert-warning" style="margin-top: 0.5rem;">
                <strong>Do NOT use:</strong> Hydrogen peroxide (damages tissue), rubbing alcohol (painful, damages tissue), or full-strength iodine on open wounds
              </div>
            </div>
            <div class="card">
              <div class="card-title">Signs of Infection (Watch For)</div>
              <ul>
                <li>Increasing pain after 24 hours</li>
                <li>Redness spreading beyond wound edge</li>
                <li>Warmth and swelling increasing</li>
                <li>Pus or foul-smelling drainage</li>
                <li>Red streaks moving toward heart</li>
                <li>Fever</li>
              </ul>
              <p style="color: var(--accent);"><strong>Any of these = seek medical care immediately.</strong></p>
            </div>
            <div class="card">
              <div class="card-title">Sutures/Stitches - When Needed</div>
              <p>Seek professional closure if:</p>
              <ul>
                <li>Wound edges won't stay together</li>
                <li>Cut is >1/2 inch deep</li>
                <li>Cut is on face, hands, or over a joint</li>
                <li>Wound is gaping open</li>
                <li>Bleeding won't stop with pressure</li>
              </ul>
              <p><strong>Time limit:</strong> Stitches work best within 6-8 hours of injury. After 24 hours, most wounds are left open to heal.</p>
            </div>
            <div class="card">
              <div class="card-title">Butterfly Strips (Improvised Closure)</div>
              <ol>
                <li>Clean and dry wound completely</li>
                <li>Apply benzoin or let skin dry (helps adhesive stick)</li>
                <li>Place strip on one side of wound, pull edges together, secure other side</li>
                <li>Space strips 1/4 inch apart</li>
                <li>Apply strips perpendicular to wound direction</li>
              </ol>
              <p><strong>Improvised:</strong> Medical tape cut into strips works if nothing else available</p>
            </div>
          `
        },
        {
          id: 'gen-burns',
          title: 'Burns',
          keywords: ['burn', 'fire', 'scald', 'thermal', 'chemical', 'sunburn', 'blister'],
          content: `
            <div class="card">
              <div class="card-title">Burn Severity</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Degree</th><th>Appearance</th><th>Treatment</th></tr></thead>
                  <tbody>
                    <tr><td><strong>1st (Superficial)</strong></td><td>Red, dry, painful (like sunburn)</td><td>Cool water, aloe, OTC pain relief</td></tr>
                    <tr><td><strong>2nd (Partial)</strong></td><td>Blisters, wet, very painful</td><td>Cool water, loose covering, may need medical care</td></tr>
                    <tr><td><strong>3rd (Full)</strong></td><td>White/brown/black, dry, may not hurt</td><td>Emergency - call 911</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Immediate Burn Care</div>
              <ol>
                <li><strong>Stop the burning</strong> - Remove from heat source, remove hot clothing</li>
                <li><strong>Cool with water</strong> - Run cool (not ice cold) water for 10-20 minutes</li>
                <li><strong>Remove jewelry</strong> - Rings, watches, bracelets before swelling</li>
                <li><strong>Cover loosely</strong> - Clean, dry bandage or cling wrap</li>
                <li><strong>Pain relief</strong> - Ibuprofen or acetaminophen</li>
              </ol>
            </div>
            <div class="alert alert-critical">
              <strong>Do NOT:</strong>
              <ul style="margin: 0.25rem 0 0 0;">
                <li>Apply ice (causes more damage)</li>
                <li>Pop blisters (infection risk)</li>
                <li>Apply butter, oil, or grease (traps heat)</li>
                <li>Use fluffy cotton (sticks to wound)</li>
                <li>Remove stuck clothing (cut around it)</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">When to Seek Emergency Care</div>
              <ul>
                <li>Burns larger than palm of hand</li>
                <li>Burns on face, hands, feet, genitals, or over joints</li>
                <li>All electrical burns (damage is internal)</li>
                <li>Chemical burns</li>
                <li>Burns that go all around a limb</li>
                <li>Burns in someone under 5 or over 60</li>
                <li>Difficulty breathing (airway burns)</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Chemical Burns</div>
              <ol>
                <li>Brush off dry chemicals first (before water)</li>
                <li>Flush with large amounts of water for 20+ minutes</li>
                <li>Remove contaminated clothing while flushing</li>
                <li>Continue flushing during transport if possible</li>
              </ol>
              <p><strong>Eye exposure:</strong> Flush from inner corner outward. Hold eyelids open. Flush for 20+ minutes.</p>
            </div>
          `
        },
        {
          id: 'gen-fractures',
          title: 'Fractures & Sprains',
          keywords: ['fracture', 'break', 'broken bone', 'sprain', 'strain', 'splint', 'immobilize', 'dislocation'],
          content: `
            <div class="card">
              <div class="card-title">Signs of Fracture</div>
              <ul>
                <li>Pain that increases with movement</li>
                <li>Swelling and bruising</li>
                <li>Deformity (looks wrong compared to other side)</li>
                <li>Unable to bear weight or use limb</li>
                <li>Grinding sensation</li>
                <li>Bone visible through skin (open fracture - emergency)</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Basic Splinting Principles</div>
              <ol>
                <li><strong>Immobilize the joint above AND below</strong> the injury</li>
                <li><strong>Pad bony areas</strong> to prevent pressure sores</li>
                <li><strong>Check circulation before and after</strong> - pulse, color, sensation</li>
                <li><strong>Elevate if possible</strong> to reduce swelling</li>
                <li><strong>Apply ice</strong> wrapped in cloth (20 min on, 20 min off)</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Improvised Splints</div>
              <ul>
                <li><strong>Arm:</strong> Magazines, newspapers, boards, cardboard rolled</li>
                <li><strong>Leg:</strong> Boards, ski poles, hiking sticks, another person's leg</li>
                <li><strong>Finger:</strong> Popsicle stick, pen, tape to adjacent finger</li>
                <li><strong>Sling:</strong> Belt, scarf, shirt tied behind neck</li>
              </ul>
              <p><strong>Binding:</strong> Torn cloth strips, belts, rope, tape, shoe laces</p>
            </div>
            <div class="card">
              <div class="card-title">RICE for Sprains</div>
              <ul>
                <li><strong>R</strong>est - Stop using the injured area</li>
                <li><strong>I</strong>ce - 20 minutes on, 20 minutes off</li>
                <li><strong>C</strong>ompression - Elastic bandage, wrap snug (not tight)</li>
                <li><strong>E</strong>levation - Raise above heart level when possible</li>
              </ul>
            </div>
            <div class="alert alert-critical">
              <strong>Call 911 Immediately If:</strong>
              <ul style="margin: 0.25rem 0 0 0;">
                <li>Bone visible through skin</li>
                <li>Severe deformity</li>
                <li>No pulse below injury</li>
                <li>Numbness or tingling below injury</li>
                <li>Blue or white skin below injury</li>
                <li>Suspected spine, pelvis, or hip fracture</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Suspected Spine Injury</div>
              <p><strong>If mechanism suggests spine injury (fall, dive, car accident):</strong></p>
              <ol>
                <li>DO NOT MOVE unless immediate danger (fire, collapse)</li>
                <li>Tell patient not to move their head or neck</li>
                <li>Place hands on both sides of head to stabilize</li>
                <li>Keep head, neck, and spine in line</li>
                <li>Wait for professional help with proper equipment</li>
              </ol>
            </div>
          `
        },
        {
          id: 'gen-cpr',
          title: 'CPR & Choking',
          keywords: ['cpr', 'cardiac arrest', 'heart', 'choking', 'heimlich', 'rescue breathing', 'aed'],
          content: `
            <div class="alert alert-critical">
              <strong>For unresponsive, not breathing normally:</strong> Call 911, start CPR immediately. Push hard and fast.
            </div>
            <div class="card">
              <div class="card-title">Hands-Only CPR (Adults)</div>
              <ol>
                <li>Call 911 (speaker phone)</li>
                <li>Place heel of hand on center of chest (between nipples)</li>
                <li>Place other hand on top, fingers interlaced</li>
                <li>Keep arms straight, shoulders over hands</li>
                <li>Push HARD - at least 2 inches deep</li>
                <li>Push FAST - 100-120 compressions per minute (beat of "Stayin' Alive")</li>
                <li>Let chest fully recoil between compressions</li>
                <li>Do not stop until help arrives or patient responds</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Using an AED</div>
              <ol>
                <li>Turn on AED (it will give voice instructions)</li>
                <li>Expose chest completely (dry if wet)</li>
                <li>Apply pads as shown in pictures on pads</li>
                <li>Plug in connector if needed</li>
                <li>"Analyzing" - DO NOT TOUCH patient</li>
                <li>If shock advised - "Clear!" - push button</li>
                <li>Immediately resume CPR for 2 minutes</li>
                <li>Follow AED prompts</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Choking - Conscious Adult</div>
              <p><strong>If person CAN cough, speak, or breathe:</strong> Encourage coughing, do not intervene</p>
              <p><strong>If person CANNOT cough, speak, or breathe:</strong></p>
              <ol>
                <li>Stand behind person, wrap arms around waist</li>
                <li>Make fist with one hand, place above navel, below ribs</li>
                <li>Grab fist with other hand</li>
                <li>Pull sharply inward and upward (J-shaped motion)</li>
                <li>Repeat until object comes out or person becomes unconscious</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Choking - Unconscious Adult</div>
              <ol>
                <li>Lower person to ground on their back</li>
                <li>Call 911 if not done</li>
                <li>Start CPR</li>
                <li>Before giving breaths, look in mouth for object</li>
                <li>If visible, sweep out with finger</li>
                <li>Continue CPR</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Choking - Infant (Under 1 Year)</div>
              <ol>
                <li>Place baby face-down on forearm, head lower than body</li>
                <li>Support head with hand (jaw, not throat)</li>
                <li>Give 5 firm back blows between shoulder blades</li>
                <li>Turn baby face-up on other forearm</li>
                <li>Give 5 chest thrusts with 2 fingers on breastbone</li>
                <li>Alternate back blows and chest thrusts until clear</li>
              </ol>
            </div>
          `
        },
        {
          id: 'gen-environmental',
          title: 'Heat & Cold',
          keywords: ['heat', 'cold', 'hypothermia', 'hyperthermia', 'heatstroke', 'frostbite', 'dehydration'],
          content: `
            <div class="card">
              <div class="card-title">Heat Exhaustion</div>
              <p><strong>Signs:</strong> Heavy sweating, weakness, cool/pale/clammy skin, fast/weak pulse, nausea, fainting</p>
              <p><strong>Treatment:</strong></p>
              <ol>
                <li>Move to cool area (shade, AC)</li>
                <li>Lie down, elevate legs</li>
                <li>Remove excess clothing</li>
                <li>Apply cool, wet cloths</li>
                <li>Sip water slowly</li>
                <li>If vomiting or no improvement in 30 min: call 911</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Heat Stroke (EMERGENCY)</div>
              <p><strong>Signs:</strong> High temp (>103°F), hot/red/dry OR damp skin, fast/strong pulse, confusion, unconsciousness</p>
              <div class="alert alert-critical" style="margin-top: 0.5rem;">
                <strong>Call 911 immediately.</strong> This is life-threatening.
              </div>
              <p><strong>While waiting:</strong></p>
              <ol>
                <li>Move to coolest area possible</li>
                <li>Cool rapidly: cold water immersion is best</li>
                <li>Or: ice packs to neck, armpits, groin</li>
                <li>Spray with water and fan</li>
                <li>Do NOT give fluids if unconscious</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Hypothermia</div>
              <p><strong>Signs:</strong> Shivering (stops in severe cases), confusion, slurred speech, drowsiness, weak pulse, slow breathing</p>
              <p><strong>Treatment:</strong></p>
              <ol>
                <li>Move to warm area</li>
                <li>Remove wet clothing</li>
                <li>Warm center of body first (chest, neck, head, groin)</li>
                <li>Use skin-to-skin contact under blankets</li>
                <li>Give warm drinks if conscious (no alcohol)</li>
                <li>Handle gently - sudden movement can cause cardiac arrest</li>
              </ol>
              <div class="alert alert-warning" style="margin-top: 0.5rem;">
                <strong>Do NOT:</strong> Rub extremities, use direct heat (heating pad, hot water), give alcohol
              </div>
            </div>
            <div class="card">
              <div class="card-title">Frostbite</div>
              <p><strong>Signs:</strong> White/grayish-yellow skin, waxy feel, numbness, hard or waxy texture</p>
              <p><strong>Treatment:</strong></p>
              <ol>
                <li>Get to warm area</li>
                <li>Do NOT rub or massage</li>
                <li>Immerse in warm (not hot) water (100-105°F)</li>
                <li>Do NOT use dry heat</li>
                <li>Do NOT walk on frostbitten feet unless necessary</li>
                <li>Loosely bandage with dry, sterile dressing</li>
                <li>Seek medical care</li>
              </ol>
            </div>
          `
        },
        {
          id: 'gen-allergic',
          title: 'Allergic Reactions',
          keywords: ['allergy', 'allergic', 'anaphylaxis', 'epipen', 'epinephrine', 'bee sting', 'swelling'],
          content: `
            <div class="card">
              <div class="card-title">Mild Allergic Reaction</div>
              <p><strong>Signs:</strong> Hives, itching, mild swelling, runny nose</p>
              <p><strong>Treatment:</strong></p>
              <ul>
                <li>Remove allergen if possible (stinger, food)</li>
                <li>Antihistamine (Benadryl/diphenhydramine 25-50mg)</li>
                <li>Monitor for worsening</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Anaphylaxis (SEVERE - EMERGENCY)</div>
              <p><strong>Signs:</strong></p>
              <ul>
                <li>Difficulty breathing, wheezing</li>
                <li>Swelling of throat, tongue, lips</li>
                <li>Widespread hives</li>
                <li>Dizziness, confusion</li>
                <li>Rapid or weak pulse</li>
                <li>Nausea, vomiting</li>
                <li>Feeling of doom</li>
              </ul>
              <div class="alert alert-critical" style="margin-top: 0.5rem;">
                <strong>This can kill in minutes. Act immediately.</strong>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Using an EpiPen</div>
              <ol>
                <li>Call 911</li>
                <li>Remove blue safety cap</li>
                <li>Hold orange tip against outer thigh (through clothes is OK)</li>
                <li>Push firmly until click</li>
                <li>Hold for 10 seconds</li>
                <li>Remove and massage area</li>
                <li>Note time given</li>
                <li>Second dose in 5-15 min if no improvement</li>
                <li>Lay person down, elevate legs (unless breathing trouble)</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Bee/Wasp Stings</div>
              <ol>
                <li>Remove stinger immediately (scrape, don't squeeze)</li>
                <li>Wash with soap and water</li>
                <li>Apply cold pack</li>
                <li>Take antihistamine for itching</li>
                <li>Watch for signs of anaphylaxis for 30+ minutes</li>
              </ol>
            </div>
            <div class="alert alert-info">
              <strong>If someone has severe allergies:</strong> They may carry epinephrine. Ask them or check medical alert bracelet. Help them use it if they can't.
            </div>
          `
        },
        {
          id: 'gen-poison',
          title: 'Poisoning',
          keywords: ['poison', 'overdose', 'toxic', 'ingestion', 'narcan', 'naloxone', 'drugs'],
          content: `
            <div class="card">
              <div class="card-title">First Steps for Poisoning</div>
              <ol>
                <li>Call <strong>Poison Control: 1-800-222-1222</strong> (US)</li>
                <li>Identify what was taken, how much, and when</li>
                <li>Save container/substance if possible</li>
                <li>Do NOT induce vomiting unless instructed</li>
                <li>Do NOT give anything by mouth unless instructed</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Signs of Poisoning</div>
              <ul>
                <li>Burns or redness around mouth/lips</li>
                <li>Breath smells chemical</li>
                <li>Vomiting, nausea, abdominal pain</li>
                <li>Difficulty breathing</li>
                <li>Confusion, drowsiness</li>
                <li>Seizures</li>
                <li>Open containers nearby</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Opioid Overdose</div>
              <p><strong>Signs:</strong> Pinpoint pupils, unconscious, slow/shallow/no breathing, blue lips</p>
              <ol>
                <li>Call 911</li>
                <li>Give Narcan (Naloxone) if available:
                  <ul>
                    <li>Nasal: spray one nostril</li>
                    <li>Inject: IM into outer thigh</li>
                  </ul>
                </li>
                <li>If no response in 2-3 min, give second dose</li>
                <li>Start CPR if not breathing</li>
                <li>Place in recovery position when breathing</li>
                <li>Stay with them - Narcan wears off</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Inhaled Poison (Gas, Fumes)</div>
              <ol>
                <li>Get to fresh air immediately</li>
                <li>Open windows/doors if safe</li>
                <li>Do NOT enter area if you smell gas/fumes</li>
                <li>Call 911</li>
                <li>Begin CPR if not breathing</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Skin Exposure</div>
              <ol>
                <li>Remove contaminated clothing carefully</li>
                <li>Brush off dry chemicals before water</li>
                <li>Flush skin with large amounts of water for 20+ min</li>
                <li>Wash gently with soap and water</li>
                <li>Call Poison Control</li>
              </ol>
            </div>
          `
        }
      ]
    },
    cuf: {
      title: 'Care Under Fire',
      subtitle: 'Actions while under effective hostile fire',
      color: '#dc2626',
      sections: [
        {
          id: 'cuf-overview',
          title: 'Overview',
          keywords: ['care under fire', 'cuf', 'hostile fire', 'return fire', 'cover'],
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
            <div class="card">
              <div class="card-title">CUF Assessment</div>
              <p>Tactical patient assessment during CUF is limited to:</p>
              <ul>
                <li>Rapid head-to-toe survey (<strong>10-15 seconds</strong> or as tactically feasible)</li>
                <li>Identifying life-threatening hemorrhage only</li>
                <li>Airway management (other than positioning) deferred to TFC</li>
              </ul>
            </div>
            <div class="alert alert-warning">
              <strong>Airway management is generally best deferred until Tactical Field Care phase.</strong>
            </div>
          `
        },
        {
          id: 'cuf-hemorrhage',
          title: 'Hemorrhage Control',
          keywords: ['hemorrhage', 'bleeding', 'tourniquet', 'blood', 'massive hemorrhage', 'cat', 'softt'],
          content: `
            <div class="card march-card massive">
              <div class="card-title">
                <span class="march-letter">M</span>
                Massive Hemorrhage
              </div>
              <div class="alert alert-critical">
                <strong>LIFE-THREATENING BLEEDING:</strong>
                <ul style="margin-top: 0.5rem; margin-bottom: 0;">
                  <li>Spurting or flowing blood</li>
                  <li>Blood soaking rapidly through uniform</li>
                  <li>Blood pooling on the ground</li>
                  <li>Complete or partial amputation</li>
                  <li>Extremity with absent distal pulse</li>
                </ul>
              </div>
            </div>
            <div class="card">
              <div class="card-title">CUF Hemorrhage Actions</div>
              <ol>
                <li>Direct casualty to control hemorrhage by self-aid if able</li>
                <li>Use a <strong>CoTCCC-recommended limb tourniquet</strong></li>
                <li>Apply tourniquet <strong>"High and Tight"</strong> (as proximal as possible)</li>
                <li>Move the casualty to cover</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">CoTCCC Recommended Tourniquets</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Name</th><th>NSN</th></tr></thead>
                  <tbody>
                    <tr><td>Combat Application Tourniquet (CAT)</td><td>6515-01-521-7976</td></tr>
                    <tr><td>SOF Tactical Tourniquet (SOFTT-W)</td><td>6515-01-530-7015</td></tr>
                    <tr><td>Emergency Medical Tourniquet (EMT)</td><td>6515-01-580-1645</td></tr>
                    <tr><td>SAM XT Extremity Tourniquet</td><td>6515-01-680-1797</td></tr>
                    <tr><td>TX2/TX3 Tourniquet</td><td>6515-01-699-4207</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="alert alert-info">
              <strong>High and Tight Placement:</strong> Place tourniquet as high as possible on the affected limb, over the uniform if necessary. This is the fastest method and accounts for wounds you may not immediately see.
            </div>
          `
        },
        {
          id: 'cuf-movement',
          title: 'Casualty Movement',
          keywords: ['movement', 'drag', 'extrication', 'carry', 'move casualty'],
          content: `
            <div class="card">
              <div class="card-title">Extrication</div>
              <p>Casualties should be extricated from:</p>
              <ul>
                <li>Burning vehicles or buildings</li>
                <li>Areas of continued hostile fire</li>
                <li>Hazardous environments (water, chemical, collapse)</li>
              </ul>
              <p><strong>Do what is necessary to stop the burning process.</strong></p>
            </div>
            <div class="card">
              <div class="card-title">Movement Methods</div>
              <ul>
                <li><strong>Fastest:</strong> Dragging along the long axis of patient's body (2 rescuers)</li>
                <li><strong>Hasty:</strong> Fireman's carry, pack-strap carry</li>
                <li><strong>Equipment:</strong> SKEDCO, litter, poncho</li>
              </ul>
              <div class="alert alert-warning" style="margin-top: 0.5rem;">
                Spinal precautions should only be considered <strong>AFTER</strong> casualty is removed from threat.
              </div>
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
      subtitle: 'Care when no longer under effective hostile fire',
      color: '#f59e0b',
      sections: [
        {
          id: 'tfc-march',
          title: 'MARCH Protocol',
          keywords: ['march', 'protocol', 'assessment', 'tfc', 'tactical field care', 'paws'],
          content: `
            <div class="alert alert-info">
              <strong>MARCH-PAWS</strong> is the assessment and treatment sequence for Tactical Field Care.
            </div>
            <div class="quick-grid">
              <div class="card" style="border-left: 4px solid #dc2626;"><strong style="color: #dc2626;">M</strong> - Massive Hemorrhage</div>
              <div class="card" style="border-left: 4px solid #f97316;"><strong style="color: #f97316;">A</strong> - Airway</div>
              <div class="card" style="border-left: 4px solid #eab308;"><strong style="color: #eab308;">R</strong> - Respiration</div>
              <div class="card" style="border-left: 4px solid #22c55e;"><strong style="color: #22c55e;">C</strong> - Circulation</div>
              <div class="card" style="border-left: 4px solid #3b82f6;"><strong style="color: #3b82f6;">H</strong> - Hypothermia/Head</div>
            </div>
            <div class="card">
              <div class="card-title">Then PAWS</div>
              <ul>
                <li><strong>P</strong> - Pain management</li>
                <li><strong>A</strong> - Antibiotics</li>
                <li><strong>W</strong> - Wounds (inspect and dress)</li>
                <li><strong>S</strong> - Splinting</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Initial TFC Actions</div>
              <ol>
                <li>Establish security perimeter IAW tactical SOPs</li>
                <li>Consolidate casualties in CCP</li>
                <li>Conduct triage to identify priority</li>
                <li>Casualties with <strong>altered mental status</strong>: disarm, secure weapons and comms</li>
                <li>Delegate minor injuries to RFRs/ARFRs</li>
                <li>Communicate casualty status and MEDEVAC requirements to C2</li>
              </ol>
            </div>
          `
        },
        {
          id: 'tfc-hemorrhage',
          title: 'M - Massive Hemorrhage',
          keywords: ['hemorrhage', 'bleeding', 'tourniquet', 'hemostatic', 'junctional', 'conversion', 'txa'],
          content: `
            <div class="card march-card massive">
              <div class="card-title"><span class="march-letter">M</span> Hemorrhage Control</div>
              <ol>
                <li>Assess for unrecognized hemorrhage and control all life-threatening bleeding</li>
                <li>Expose wound to assess tourniquet necessity</li>
                <li>Apply CoTCCC-recommended <strong>limb tourniquet</strong> if indicated</li>
                <li>Use <strong>hemostatic dressing</strong> for compressible hemorrhage not amenable to tourniquet</li>
                <li>Apply <strong>junctional tourniquet</strong> for groin/axilla bleeding</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Tourniquet Reassessment</div>
              <ul>
                <li>Expose wound - determine if TQ still needed</li>
                <li>If bleeding not controlled: tighten TQ or add second <strong>side-by-side</strong></li>
                <li>Mark time of application on TQ and casualty card</li>
              </ul>
              <div class="alert alert-warning" style="margin-top: 0.5rem;">
                <strong>Conversion:</strong> Consider in <2 hours if:
                <ul style="margin: 0.25rem 0 0 0;">
                  <li>Casualty NOT in shock</li>
                  <li>Can monitor wound closely</li>
                  <li>NOT an amputation</li>
                </ul>
                <strong>Do NOT remove if TQ in place >6 hours.</strong>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Hemostatic Dressings</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Product</th><th>NSN</th></tr></thead>
                  <tbody>
                    <tr><td>Combat Gauze Z-Fold</td><td>6510-01-562-3325</td></tr>
                    <tr><td>Celox Gauze Z-fold</td><td>6510-01-623-9910</td></tr>
                    <tr><td>ChitoGauze</td><td>6510-01-591-7740</td></tr>
                    <tr><td>X-Stat (cannot remove in field)</td><td>6510-01-644-7335</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Junctional Hemorrhage</div>
              <p>For groin, axilla, or neck bleeding not amenable to limb tourniquet:</p>
              <ul>
                <li>Combat Ready Clamp (CRoC) - NSN 6515-01-589-9135</li>
                <li>SAM Junctional Tourniquet - NSN 6515-01-618-7475</li>
                <li>JETT - NSN 6515-01-616-5841</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Pelvic Binder</div>
              <p>Apply for suspected pelvic fracture with:</p>
              <ul>
                <li>Pelvic pain or instability</li>
                <li>Major lower limb amputation/near amputation</li>
                <li>Unconsciousness or shock with pelvic MOI</li>
              </ul>
            </div>
          `
        },
        {
          id: 'tfc-airway',
          title: 'A - Airway',
          keywords: ['airway', 'npa', 'opa', 'recovery position', 'jaw thrust', 'chin lift', 'cric', 'cricothyroidotomy'],
          content: `
            <div class="card march-card airway">
              <div class="card-title"><span class="march-letter">A</span> Airway Management</div>
              <p><strong>Conscious patient talking normally = airway intact.</strong></p>
              <p>Unconscious patient: tongue is most common obstruction.</p>
            </div>
            <div class="card">
              <div class="card-title">Unconscious WITHOUT Obstruction</div>
              <ol>
                <li>Chin lift or jaw thrust maneuver</li>
                <li>Nasopharyngeal airway (NPA)</li>
                <li>Place in <strong>recovery position</strong></li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Airway Obstruction or Impending</div>
              <ol>
                <li>Allow conscious casualty to assume position that protects airway</li>
                <li>Chin lift or jaw thrust</li>
                <li>NPA (contraindicated in suspected basilar skull fracture)</li>
                <li>Suction if available</li>
                <li>Place unconscious casualty in recovery position</li>
              </ol>
              <div class="alert alert-critical" style="margin-top: 0.5rem;">
                <strong>If above measures fail:</strong> Surgical cricothyroidotomy
              </div>
            </div>
            <div class="card">
              <div class="card-title">NPA Sizing</div>
              <ul>
                <li>Measure: tip of nose to earlobe</li>
                <li>Common adult sizes: 28F (7.0mm), 32F (8.0mm)</li>
                <li>Lubricate and insert bevel toward septum</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Recovery Position</div>
              <ol>
                <li>Roll casualty onto side (injured side down if possible)</li>
                <li>Flex upper knee for stability</li>
                <li>Position upper arm to support head</li>
                <li>Allows drainage, prevents aspiration</li>
              </ol>
            </div>
            <div class="alert alert-info">
              <strong>Spinal stabilization is NOT necessary</strong> for casualties with penetrating trauma.
            </div>
          `
        },
        {
          id: 'tfc-respiration',
          title: 'R - Respiration',
          keywords: ['respiration', 'breathing', 'pneumothorax', 'tension', 'ncd', 'needle decompression', 'chest seal'],
          content: `
            <div class="card march-card respiration">
              <div class="card-title"><span class="march-letter">R</span> Respiration</div>
              <p>Progressive respiratory distress + known/suspected torso trauma = <strong>consider tension pneumothorax</strong></p>
            </div>
            <div class="card">
              <div class="card-title">Tension Pneumothorax Signs</div>
              <ul>
                <li>Difficulty/worsening breathing after chest/abdominal injury</li>
                <li>Decreased SpO2</li>
                <li>Decreased breath sounds on affected side</li>
                <li>Tracheal deviation (late sign)</li>
                <li>JVD (late sign)</li>
                <li>Cyanosis</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Needle Chest Decompression</div>
              <div class="drug-dose">
                14-gauge, 3.25" needle/catheter<br>
                <strong>Primary:</strong> 5th ICS, Anterior Axillary Line<br>
                <strong>Alternate:</strong> 2nd/3rd ICS, Midclavicular Line
              </div>
              <p style="color: var(--accent);"><strong>Ensure NOT medial to nipple line and NOT directed toward heart.</strong></p>
            </div>
            <div class="card">
              <div class="card-title">Open/Sucking Chest Wound</div>
              <ol>
                <li>Apply <strong>vented chest seal</strong> (HyFin, SAM, Bolin)</li>
                <li>If no vented seal: apply non-vented and monitor closely</li>
                <li>If breathing worsens: burp seal or perform NCD</li>
              </ol>
            </div>
            <div class="alert alert-info">
              <strong>Initiate pulse oximetry.</strong> Maintain SpO2 >90%, especially with moderate/severe TBI.
            </div>
          `
        },
        {
          id: 'tfc-circulation',
          title: 'C - Circulation',
          keywords: ['circulation', 'shock', 'iv', 'io', 'fluids', 'blood', 'transfusion', 'resuscitation', 'txa'],
          content: `
            <div class="card march-card circulation">
              <div class="card-title"><span class="march-letter">C</span> Circulation</div>
              <h4>Shock Indicators (Field Assessment):</h4>
              <ul>
                <li>Altered mental status (without TBI)</li>
                <li>Weak or absent radial pulse</li>
                <li>Capillary refill >2 seconds</li>
                <li>Cold, pale, clammy skin</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Pulse Pressure Estimation</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Pulse Present</th><th>Est. SBP</th></tr></thead>
                  <tbody>
                    <tr><td>Radial</td><td>~80 mmHg</td></tr>
                    <tr><td>Femoral</td><td>~70 mmHg</td></tr>
                    <tr><td>Carotid</td><td>~60 mmHg</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">IV/IO Access</div>
              <ul>
                <li>Start 18-gauge IV or saline lock</li>
                <li>If IV not obtainable: use IO (humerus preferred)</li>
                <li>Do NOT delay evacuation for IV access unless lifesaving</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">TXA (Tranexamic Acid)</div>
              <div class="drug-dose">
                1-2g IV/IO flush ASAP<br>
                <strong>DO NOT give >3 hours post injury</strong>
              </div>
              <p><strong>Criteria:</strong> Hemorrhagic shock, amputations, penetrating torso, severe bleeding, pelvic fracture</p>
            </div>
            <div class="card">
              <div class="card-title">Fluid Resuscitation Priority</div>
              <ol>
                <li><strong>Whole Blood (warmed)</strong> - Preferred</li>
                <li>1:1:1 Components (Plasma:RBCs:Platelets)</li>
                <li>LTOWB / ROLO</li>
                <li>Freeze-Dried Plasma</li>
                <li>Hextend 500ml bolus</li>
                <li>Lactated Ringers / Plasma-Lyte A</li>
              </ol>
            </div>
            <div class="alert alert-success">
              <strong>Resuscitation Endpoints:</strong>
              <ul style="margin: 0.25rem 0 0 0;">
                <li>Palpable radial pulse</li>
                <li>Improved mental status</li>
                <li>SBP 90-100 mmHg (hemorrhagic shock)</li>
                <li>SBP >110 mmHg (TBI)</li>
              </ul>
            </div>
          `
        },
        {
          id: 'tfc-hypothermia',
          title: 'H - Hypothermia/Head',
          keywords: ['hypothermia', 'warming', 'head injury', 'tbi', 'brain', 'lethal triad'],
          content: `
            <div class="card march-card hypothermia">
              <div class="card-title"><span class="march-letter">H</span> Hypothermia Prevention</div>
              <div class="alert alert-critical">
                <strong>The Lethal Triad:</strong> Hypothermia + Acidosis + Coagulopathy = Death
              </div>
            </div>
            <div class="card">
              <div class="card-title">Prevention Measures</div>
              <ul>
                <li>Minimize environmental exposure</li>
                <li>Keep protective equipment on if feasible</li>
                <li>Replace wet clothing</li>
                <li>Get casualty onto insulated surface ASAP</li>
                <li>Use HPMK (Hypothermia Prevention Management Kit)</li>
                <li>If unavailable: dry blankets, poncho liner, sleeping bag</li>
                <li><strong>Warm IV fluids preferred</strong></li>
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
            <div class="card">
              <div class="card-title">Head Injury / TBI</div>
              <ul>
                <li>Maintain SBP >90 mmHg (target >110 mmHg)</li>
                <li>Maintain SpO2 >90%</li>
                <li>Prevent hypothermia</li>
                <li>Elevate head 30° if no spinal concern</li>
                <li>Document GCS/AVPU</li>
              </ul>
              <div class="alert alert-critical" style="margin-top: 0.5rem;">
                <strong>Herniation Signs:</strong> Asymmetric pupil dilation, fixed dilated pupil, extensor posturing, widening pulse pressure
                <p style="margin-top: 0.5rem;"><strong>Treatment:</strong> 250ml 3% or 5% hypertonic saline bolus, elevate head 30°, hyperventilate at 20 breaths/min</p>
              </div>
            </div>
          `
        },
        {
          id: 'tfc-paws',
          title: 'PAWS',
          keywords: ['pain', 'antibiotics', 'wounds', 'splinting', 'burns', 'analgesia'],
          content: `
            <div class="card">
              <div class="card-title">P - Pain Management</div>
              <h4>Mild-Moderate (able to fight):</h4>
              <div class="drug-dose">Tylenol 650mg x2 PO q8h + Meloxicam 15mg PO daily</div>
              <h4>Moderate-Severe (NOT in shock):</h4>
              <div class="drug-dose">OTFC 800mcg transmucosal (have Naloxone ready)</div>
              <h4>Moderate-Severe (IN shock):</h4>
              <div class="drug-dose">Ketamine 50mg IM/IN or 20mg slow IV/IO</div>
              <p><a href="../medic-pharmacology/#drugs" style="color: var(--info);">See Pharmacology App for details</a></p>
            </div>
            <div class="card">
              <div class="card-title">A - Antibiotics</div>
              <p><em>Recommended for ALL open combat wounds.</em></p>
              <div class="drug-dose">
                <strong>If PO:</strong> Moxifloxacin 400mg daily<br>
                <strong>If unable PO:</strong> Ertapenem 1g IV/IM daily
              </div>
            </div>
            <div class="card">
              <div class="card-title">W - Wounds</div>
              <ul>
                <li>Inspect and dress all known wounds</li>
                <li>Full body sweep for additional wounds</li>
                <li>Document on casualty card</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">S - Splinting</div>
              <ul>
                <li>Splint fractures and dislocations</li>
                <li><strong>Check pulses before and after splinting</strong></li>
                <li>Pad bony prominences</li>
                <li>Immobilize joint above and below fracture</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Burns</div>
              <ul>
                <li>Facial burns: aggressively monitor airway (edema risk)</li>
                <li>Estimate TBSA (Rule of Nines)</li>
                <li>Cover with dry, sterile dressings</li>
                <li>>20% TBSA: IV fluids per Rule of Ten</li>
              </ul>
              <div class="drug-dose">
                <strong>Rule of Ten:</strong> %TBSA x 10ml/hr (40-80kg adult)<br>
                Add 100ml/hr for every 10kg above 80kg
              </div>
            </div>
          `
        }
      ]
    },

    tacevac: {
      title: 'TACEVAC',
      subtitle: 'Tactical Evacuation Care',
      color: '#22c55e',
      sections: [
        {
          id: 'tacevac-transition',
          title: 'Transition of Care',
          keywords: ['transition', 'handover', 'evacuation', 'sit report', 'medevac'],
          content: `
            <div class="card">
              <div class="card-title">Tactical Force Actions</div>
              <ul>
                <li>Establish evacuation point security</li>
                <li>Stage casualties for evacuation</li>
                <li>Communicate patient status to TACEVAC personnel</li>
                <li>Consolidate medical supplies</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">SIT Report Method</div>
              <ol>
                <li>Identify receiving care provider on evac platform</li>
                <li>Establish direct contact (radio/eye/hand)</li>
                <li>Provide SIT status (most serious first):</li>
              </ol>
              <div class="alert alert-info" style="margin-top: 0.5rem;">
                <strong>S</strong> - Stable or Unstable<br>
                <strong>I</strong> - Injuries (life threats & MOI)<br>
                <strong>T</strong> - Treatments (drugs & interventions)
              </div>
            </div>
            <div class="card">
              <div class="card-title">Casualty Documentation</div>
              <ul>
                <li>Complete DD Form 1380 (Tactical Combat Casualty Care Card)</li>
                <li>Document all interventions with times</li>
                <li>Document vital signs</li>
                <li>Attach to casualty (do not lose)</li>
              </ul>
            </div>
          `
        },
        {
          id: 'tacevac-reassess',
          title: 'Reassessment',
          keywords: ['reassess', 'monitor', 'vitals', 'airway'],
          content: `
            <div class="card">
              <div class="card-title">After Movement Reassessment</div>
              <p>After every evacuation movement, reassess:</p>
              <ul>
                <li>Mental status (AVPU)</li>
                <li>Airway patency</li>
                <li>Vital signs</li>
                <li>All interventions (TQs, chest seals, airways, IVs)</li>
                <li>Bleeding control</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">DOPE Troubleshooting</div>
              <p>For ventilation problems with advanced airway:</p>
              <ul>
                <li><strong>D</strong> - Dislodgement: Check tube position</li>
                <li><strong>O</strong> - Obstruction: Suction</li>
                <li><strong>P</strong> - Pneumothorax: Consider NCD</li>
                <li><strong>E</strong> - Equipment failure: Disconnect vent, use BVM</li>
              </ul>
            </div>
          `
        },
        {
          id: 'tacevac-tbi',
          title: 'TBI Management',
          keywords: ['tbi', 'brain injury', 'head trauma', 'gcs', 'concussion', 'herniation'],
          content: `
            <div class="card">
              <div class="card-title">TBI Severity</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Severity</th><th>GCS</th><th>LOC</th></tr></thead>
                  <tbody>
                    <tr><td>Mild</td><td>13-15</td><td><30 min</td></tr>
                    <tr><td>Moderate</td><td>9-12</td><td>30 min - 24 hr</td></tr>
                    <tr><td>Severe</td><td>3-8</td><td>>24 hr</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">TBI Management Goals</div>
              <ul>
                <li>SBP >110 mmHg</li>
                <li>SpO2 >90%</li>
                <li>Prevent hypothermia</li>
                <li>Elevate head 30° (if no spinal concern)</li>
                <li>PCO2 35-40 mmHg (if capnography)</li>
                <li>Document serial neuro exams</li>
              </ul>
            </div>
            <div class="alert alert-critical">
              <strong>Herniation Signs:</strong>
              <ul style="margin: 0.25rem 0 0 0;">
                <li>Asymmetric or fixed dilated pupil(s)</li>
                <li>Extensor posturing (decerebrate)</li>
                <li>Widening pulse pressure</li>
                <li>Cushing's triad (HTN, bradycardia, irregular breathing)</li>
              </ul>
              <strong>If suspected:</strong>
              <ol style="margin: 0.25rem 0 0 0;">
                <li>250ml 3-5% hypertonic saline bolus</li>
                <li>Elevate head 30°</li>
                <li>Hyperventilate at 20 breaths/min</li>
              </ol>
            </div>
          `
        },
        {
          id: 'tacevac-cpr',
          title: 'CPR Considerations',
          keywords: ['cpr', 'cardiac arrest', 'resuscitation', 'death'],
          content: `
            <div class="card">
              <div class="card-title">CPR May Be Attempted If:</div>
              <ul>
                <li>Casualty does NOT have obviously fatal wounds</li>
                <li>Quickly arriving at surgical capability</li>
                <li>Resources available and mission allows</li>
              </ul>
            </div>
            <div class="alert alert-critical">
              <strong>CPR Should NOT Be Attempted If:</strong>
              <ul style="margin: 0.25rem 0 0 0;">
                <li>Obviously fatal wounds</li>
                <li>Compromising the mission</li>
                <li>Denying lifesaving treatment to other casualties</li>
                <li>Prolonged pulseless arrest with no reversible cause</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Before Discontinuing Care</div>
              <p>Casualties with torso/polytrauma and no pulse should receive:</p>
              <ul>
                <li><strong>Bilateral needle decompression</strong></li>
                <li>Assess for reversible causes</li>
              </ul>
            </div>
          `
        }
      ]
    },

    procedures: {
      title: 'Procedures',
      subtitle: 'Step-by-step field procedures',
      color: '#06b6d4',
      sections: [
        {
          id: 'proc-cric',
          title: 'Surgical Cric',
          keywords: ['cric', 'cricothyroidotomy', 'surgical airway', 'airway', 'emergency airway'],
          content: `
            <div class="alert alert-critical">
              <strong>Indications:</strong> Airway obstruction unrelieved by positioning/NPA, facial trauma preventing BVM, unable to ventilate
            </div>
            <div class="card">
              <div class="card-title">Equipment</div>
              <ul>
                <li>Scalpel (#20 or #10)</li>
                <li>Tracheal hook or bougie</li>
                <li>6.0-7.0 cuffed ET tube or cric-specific tube</li>
                <li>10cc syringe</li>
                <li>BVM</li>
                <li>Securing device/tape</li>
                <li>Antiseptic, gloves</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Procedure</div>
              <ol>
                <li>Position supine, head/neck midline</li>
                <li><strong>If conscious:</strong> Ketamine sedation, lidocaine to site</li>
                <li>Identify cricothyroid membrane (soft depression below thyroid cartilage)</li>
                <li>Stabilize larynx with non-dominant hand</li>
                <li>Make <strong>VERTICAL</strong> skin incision (3-4cm)</li>
                <li>Make <strong>HORIZONTAL</strong> incision through membrane</li>
                <li>Insert tracheal hook on inferior border, apply anterior traction</li>
                <li>Insert bougie or tube (6.0-7.0)</li>
                <li>Inflate cuff (10cc)</li>
                <li>Confirm placement (ETCO2, misting, auscultation, SpO2)</li>
                <li>Secure tube</li>
                <li>Ventilate: 1 breath every 6-8 seconds</li>
              </ol>
            </div>
            <div class="alert alert-warning">
              <strong>If SpO2 drops <90%:</strong> Stop, ventilate 30-60 sec, then retry.<br>
              <strong>Always confirm airway before AND after any patient movement.</strong>
            </div>
          `
        },
        {
          id: 'proc-ncd',
          title: 'Needle Decompression',
          keywords: ['ncd', 'needle decompression', 'chest', 'pneumothorax', 'tension'],
          content: `
            <div class="alert alert-critical">
              <strong>Indications:</strong> Suspected tension pneumothorax with respiratory distress, decreased SpO2, decreased breath sounds, tracheal deviation
            </div>
            <div class="card">
              <div class="card-title">Equipment</div>
              <ul>
                <li>14G, 3.25" needle/catheter (minimum)</li>
                <li>Antiseptic</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Site Selection</div>
              <div class="drug-dose">
                <strong>Primary:</strong> 5th ICS, Anterior Axillary Line (nipple level, anterior to mid-axilla)<br>
                <strong>Alternate:</strong> 2nd/3rd ICS, Midclavicular Line
              </div>
              <p style="color: var(--accent);"><strong>NOT medial to nipple line. NOT directed at heart.</strong></p>
            </div>
            <div class="card">
              <div class="card-title">Procedure</div>
              <ol>
                <li>Select site based on injury pattern</li>
                <li>Clean site</li>
                <li>Insert needle <strong>perpendicular (90°)</strong> to chest wall</li>
                <li>Advance over superior border of rib (avoid neurovascular bundle)</li>
                <li>Puncture parietal pleura (may feel "pop")</li>
                <li>Hold 5-10 seconds</li>
                <li>Remove needle, leave catheter in place</li>
                <li>Reassess patient</li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Effectiveness Check</div>
              <ul>
                <li>Improved breathing</li>
                <li>Increased SpO2</li>
                <li>Improved breath sounds</li>
                <li>Rush of air on insertion</li>
              </ul>
              <p><strong>If ineffective:</strong> Repeat at alternate site or consider finger thoracostomy.</p>
            </div>
          `
        },
        {
          id: 'proc-chesttube',
          title: 'Finger Thoracostomy',
          keywords: ['chest tube', 'finger thoracostomy', 'thoracostomy', 'hemothorax', 'pneumothorax'],
          content: `
            <div class="alert alert-info">
              <strong>Indications:</strong> Failed NCD, extended evacuation time, suspected large hemothorax
            </div>
            <div class="card">
              <div class="card-title">Equipment</div>
              <ul>
                <li>Scalpel (#10)</li>
                <li>Kelly clamp / Peans forceps</li>
                <li>Chest tube (28-36 Fr) - optional</li>
                <li>Heimlich valve - if using tube</li>
                <li>Antiseptic, gloves, suture</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Site</div>
              <div class="drug-dose">
                5th ICS (nipple level), Anterior to Midaxillary Line, affected side
              </div>
            </div>
            <div class="card">
              <div class="card-title">Procedure</div>
              <ol>
                <li>Clean site, local anesthesia if time permits</li>
                <li>2-3cm <strong>horizontal</strong> incision parallel to ribs</li>
                <li>Blunt dissect through tissue to pleura (over top of 6th rib)</li>
                <li>Puncture pleura with clamp tip, spread</li>
                <li><strong>Insert finger</strong> to confirm entry and sweep for adhesions</li>
                <li><strong>FINGER THORACOSTOMY:</strong> Can stop here if no tube</li>
                <li>If tube: insert with finger guidance, attach Heimlich valve</li>
                <li>Secure with suture and occlusive dressing</li>
              </ol>
            </div>
            <div class="alert alert-critical">
              <strong>Surgical intervention if:</strong> >1000-1500ml immediate output OR >200-300ml/hr continued drainage
            </div>
          `
        },
        {
          id: 'proc-io',
          title: 'IO Access',
          keywords: ['io', 'intraosseous', 'vascular access', 'ezio', 'bone'],
          content: `
            <div class="alert alert-info">
              <strong>Indication:</strong> Vascular access needed, peripheral IV unobtainable
            </div>
            <div class="card">
              <div class="card-title">Site Priority (Best Flow First)</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Site</th><th>Location</th><th>Needle</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Proximal Humerus</strong></td><td>Greater tubercle (rotate arm internally)</td><td>45mm</td></tr>
                    <tr><td><strong>Sternum</strong></td><td>Manubrium, 1.5cm below sternal notch</td><td>38.5mm</td></tr>
                    <tr><td><strong>Proximal Tibia</strong></td><td>2 fingers below patella, 1 finger medial</td><td>25mm</td></tr>
                    <tr><td><strong>Distal Tibia</strong></td><td>2 fingers above medial malleolus</td><td>25mm</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Procedure (EZ-IO)</div>
              <ol>
                <li>Clean site</li>
                <li>Stabilize limb on flat surface</li>
                <li>Insert at 90° with steady pressure</li>
                <li>Stop when you feel "give" or "pop"</li>
                <li>Remove stylet</li>
                <li>Attach primed extension set</li>
                <li>Aspirate (may get marrow)</li>
                <li>Flush with 5-10ml NS</li>
                <li><strong>Lidocaine 40mg slow IO</strong> for pain (conscious patient)</li>
                <li>Secure and infuse</li>
              </ol>
            </div>
            <div class="alert alert-warning">
              <strong>Do NOT:</strong> Rock/bend during insertion. Leave >24 hours. Attach syringe directly to hub.
            </div>
          `
        },
        {
          id: 'proc-iv',
          title: 'IV Access',
          keywords: ['iv', 'intravenous', 'peripheral', 'saline lock', 'venipuncture'],
          content: `
            <div class="card">
              <div class="card-title">Site Selection</div>
              <ul>
                <li>Antecubital fossa (AC)</li>
                <li>Forearm</li>
                <li>Dorsum of hand</li>
                <li>External jugular (EJ) - alternate</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Procedure</div>
              <ol>
                <li>Apply tourniquet proximal to site</li>
                <li>Select vein (palpate, visible)</li>
                <li>Clean site</li>
                <li>Insert catheter at 15-30° angle, bevel up</li>
                <li>Advance until flash</li>
                <li>Lower angle, advance catheter</li>
                <li>Remove needle</li>
                <li>Release tourniquet</li>
                <li>Attach saline lock or IV tubing</li>
                <li>Flush with 5-10ml NS</li>
                <li>Secure with Tegaderm</li>
              </ol>
            </div>
            <div class="alert alert-warning">
              <strong>Notes:</strong>
              <ul style="margin: 0.25rem 0 0 0;">
                <li>Never delay evac for IV unless lifesaving</li>
                <li>Warm fluids preferred</li>
                <li>Do NOT remove saline lock when discontinuing fluids</li>
              </ul>
            </div>
          `
        },
        {
          id: 'proc-tourniquet',
          title: 'Tourniquet',
          keywords: ['tourniquet', 'cat', 'softt', 'bleeding', 'hemorrhage', 'application', 'conversion'],
          content: `
            <div class="card">
              <div class="card-title">Application</div>
              <ol>
                <li>Place 2-3" above wound (or high and tight if bleeding source unknown)</li>
                <li>Pull strap tight</li>
                <li>Turn windlass until bleeding stops</li>
                <li>Lock windlass</li>
                <li>Secure remaining strap</li>
                <li><strong>Mark time on TQ and casualty card</strong></li>
              </ol>
            </div>
            <div class="card">
              <div class="card-title">Verification</div>
              <ul>
                <li>Bleeding stopped</li>
                <li>Distal pulse absent</li>
                <li>If bleeding continues: tighten or add second TQ side-by-side</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Conversion (TFC Phase)</div>
              <p>Consider conversion if ALL criteria met:</p>
              <ul>
                <li>TQ in place <2 hours</li>
                <li>Casualty NOT in shock</li>
                <li>Can monitor wound closely</li>
                <li>NOT an amputation</li>
              </ul>
              <h4>Conversion Procedure:</h4>
              <ol>
                <li>Apply direct pressure / pressure dressing distal to TQ</li>
                <li>Slowly release TQ</li>
                <li>Monitor for bleeding x 2 minutes</li>
                <li>If bleeding: reapply TQ immediately</li>
                <li>If no bleeding: leave loosened TQ in place</li>
              </ol>
              <div class="alert alert-critical" style="margin-top: 0.5rem;">
                <strong>Do NOT remove TQ if in place >6 hours</strong> - risk of reperfusion injury, hyperkalemia
              </div>
            </div>
          `
        }
      ]
    },

    tools: {
      title: 'Tools',
      subtitle: 'MEDEVAC, Triage, References',
      color: '#8b5cf6',
      sections: [
        {
          id: 'tools-medevac',
          title: '9-Line MEDEVAC',
          keywords: ['9 line', 'medevac', 'evacuation', 'helicopter', 'dustoff'],
          content: `
            <div class="card">
              <div class="card-title">9-Line MEDEVAC Request</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Line</th><th>Content</th><th>Example</th></tr></thead>
                  <tbody>
                    <tr><td><strong>1</strong></td><td>Location (Grid)</td><td>11SNT 79652 89123</td></tr>
                    <tr><td><strong>2</strong></td><td>Callsign & Freq</td><td>DUSTOFF 7, 36.250</td></tr>
                    <tr><td><strong>3</strong></td><td># by Precedence</td><td>2A, 1B</td></tr>
                    <tr><td><strong>4</strong></td><td>Special Equipment</td><td>A-None</td></tr>
                    <tr><td><strong>5</strong></td><td># by Type</td><td>2L, 1A</td></tr>
                    <tr><td><strong>6</strong></td><td>Security at PZ</td><td>N-No enemy</td></tr>
                    <tr><td><strong>7</strong></td><td>PZ Marking</td><td>C-Smoke (green)</td></tr>
                    <tr><td><strong>8</strong></td><td>Nationality</td><td>A-US Mil</td></tr>
                    <tr><td><strong>9</strong></td><td>Terrain/Obstacles</td><td>Open, wires S</td></tr>
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
                    <tr><td><strong>A-S - Urgent Surgical</strong></td><td>Within 2 hours, needs surgery</td></tr>
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
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Line 5 - Type</div>
              <ul>
                <li><strong>L:</strong> Litter</li>
                <li><strong>A:</strong> Ambulatory</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Line 6 - Security</div>
              <ul>
                <li><strong>N:</strong> No enemy</li>
                <li><strong>P:</strong> Possible enemy</li>
                <li><strong>E:</strong> Enemy in area</li>
                <li><strong>X:</strong> Armed escort required</li>
              </ul>
            </div>
          `
        },
        {
          id: 'tools-mist',
          title: 'MIST Report',
          keywords: ['mist', 'report', 'handover', 'patient report'],
          content: `
            <div class="card">
              <div class="card-title">MIST Report Format</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Letter</th><th>Content</th></tr></thead>
                  <tbody>
                    <tr><td><strong>M</strong></td><td>Mechanism of Injury + Time</td></tr>
                    <tr><td><strong>I</strong></td><td>Injuries found</td></tr>
                    <tr><td><strong>S</strong></td><td>Signs/Symptoms (vitals, mental status)</td></tr>
                    <tr><td><strong>T</strong></td><td>Treatments given (TQ time, meds, etc.)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Example</div>
              <p><strong>M:</strong> GSW to right thigh, 1423 hrs</p>
              <p><strong>I:</strong> Through-and-through right thigh, no bone involvement</p>
              <p><strong>S:</strong> A+Ox4, HR 98, BP 118/72, SpO2 98%</p>
              <p><strong>T:</strong> TQ right thigh 1425, wound packed w/ combat gauze, 1g TXA IV</p>
            </div>
          `
        },
        {
          id: 'tools-triage',
          title: 'Triage',
          keywords: ['triage', 'priority', 'immediate', 'delayed', 'minimal', 'expectant'],
          content: `
            <div class="card triage-immediate" style="border: 2px solid #dc2626;">
              <div class="card-title" style="color: #dc2626;">IMMEDIATE (T1) - RED</div>
              <p>Requires immediate intervention. Will die without treatment.</p>
              <ul>
                <li>Airway obstruction</li>
                <li>Tension pneumothorax</li>
                <li>Massive hemorrhage</li>
                <li>Shock</li>
              </ul>
            </div>
            <div class="card triage-delayed" style="border: 2px solid #f59e0b;">
              <div class="card-title" style="color: #f59e0b;">DELAYED (T2) - YELLOW</div>
              <p>Needs treatment but can wait without life threat.</p>
              <ul>
                <li>Large wounds without shock</li>
                <li>Fractures (stable)</li>
                <li>Burns <20% TBSA</li>
              </ul>
            </div>
            <div class="card triage-minimal" style="border: 2px solid #22c55e;">
              <div class="card-title" style="color: #22c55e;">MINIMAL (T3) - GREEN</div>
              <p>"Walking wounded" - minor injuries.</p>
              <ul>
                <li>Minor lacerations</li>
                <li>Sprains</li>
                <li>Small burns</li>
              </ul>
            </div>
            <div class="card triage-expectant" style="border: 2px solid #6b7280;">
              <div class="card-title" style="color: #6b7280;">EXPECTANT (T4) - BLACK</div>
              <p>Injuries incompatible with survival given resources.</p>
              <ul>
                <li>Massive head trauma with brain matter</li>
                <li>Burns >85% TBSA</li>
                <li>Prolonged cardiac arrest</li>
              </ul>
              <p><strong>Still provide comfort measures.</strong></p>
            </div>
          `
        },
        {
          id: 'tools-vitals',
          title: 'Vitals & GCS',
          keywords: ['vitals', 'vital signs', 'gcs', 'glasgow', 'avpu', 'blood pressure', 'heart rate'],
          content: `
            <div class="card">
              <div class="card-title">Normal Adult Vitals</div>
              <div class="table-wrapper">
                <table>
                  <tbody>
                    <tr><td><strong>HR</strong></td><td>60-100 bpm</td></tr>
                    <tr><td><strong>RR</strong></td><td>12-20/min</td></tr>
                    <tr><td><strong>BP</strong></td><td>90-120 / 60-80</td></tr>
                    <tr><td><strong>SpO2</strong></td><td>95-100%</td></tr>
                    <tr><td><strong>Temp</strong></td><td>97.8-99.1°F</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">AVPU Scale</div>
              <ul>
                <li><strong>A</strong> - Alert</li>
                <li><strong>V</strong> - Responds to Voice</li>
                <li><strong>P</strong> - Responds to Pain</li>
                <li><strong>U</strong> - Unresponsive</li>
              </ul>
            </div>
            <div class="card">
              <div class="card-title">Glasgow Coma Scale</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Eye</th><th>Verbal</th><th>Motor</th></tr></thead>
                  <tbody>
                    <tr><td>4-Spontaneous</td><td>5-Oriented</td><td>6-Obeys</td></tr>
                    <tr><td>3-To voice</td><td>4-Confused</td><td>5-Localizes</td></tr>
                    <tr><td>2-To pain</td><td>3-Inappropriate</td><td>4-Withdraws</td></tr>
                    <tr><td>1-None</td><td>2-Incomprehensible</td><td>3-Flexion</td></tr>
                    <tr><td></td><td>1-None</td><td>2-Extension</td></tr>
                    <tr><td></td><td></td><td>1-None</td></tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Total: 3-15</strong> | Severe: 3-8 | Moderate: 9-12 | Mild: 13-15</p>
            </div>
          `
        },
        {
          id: 'tools-equipment',
          title: 'Equipment NSNs',
          keywords: ['nsn', 'equipment', 'supply', 'cat', 'tourniquet', 'gauze'],
          content: `
            <div class="card">
              <div class="card-title">Tourniquets</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Item</th><th>NSN</th></tr></thead>
                  <tbody>
                    <tr><td>CAT Gen 7</td><td>6515-01-521-7976</td></tr>
                    <tr><td>SOFTT-W</td><td>6515-01-530-7015</td></tr>
                    <tr><td>SAM XT</td><td>6515-01-680-1797</td></tr>
                    <tr><td>TX2/TX3</td><td>6515-01-699-4207</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Hemostatic Agents</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Item</th><th>NSN</th></tr></thead>
                  <tbody>
                    <tr><td>Combat Gauze Z-Fold</td><td>6510-01-562-3325</td></tr>
                    <tr><td>Celox Gauze</td><td>6510-01-623-9910</td></tr>
                    <tr><td>ChitoGauze</td><td>6510-01-591-7740</td></tr>
                    <tr><td>X-Stat</td><td>6510-01-644-7335</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Chest Seals</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Item</th><th>NSN</th></tr></thead>
                  <tbody>
                    <tr><td>HyFin Vent</td><td>6510-01-632-4628</td></tr>
                    <tr><td>SAM Chest Seal</td><td>6510-01-644-5308</td></tr>
                    <tr><td>Bolin Chest Seal</td><td>6510-01-643-2507</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="card">
              <div class="card-title">Airway</div>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Item</th><th>NSN</th></tr></thead>
                  <tbody>
                    <tr><td>CricKey</td><td>6515-01-640-6701</td></tr>
                    <tr><td>NPA 28Fr</td><td>6515-01-204-4041</td></tr>
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
  // STATE
  // ==========================================================================

  let currentPhase = 'general';
  let currentSection = null;
  const PHASES = ['general', 'cuf', 'tfc', 'tacevac', 'procedures', 'tools'];

  // ==========================================================================
  // SEARCH
  // ==========================================================================

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
          const keywordMatch = section.keywords && section.keywords.some(k => k.includes(query));
          const contentMatch = section.content.toLowerCase().includes(query);

          if (titleMatch || keywordMatch || contentMatch) {
            results.push({
              phase: phaseKey,
              phaseTitle: phase.title,
              section: section.id,
              title: section.title,
              relevance: titleMatch ? 3 : (keywordMatch ? 2 : 1)
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

  // ==========================================================================
  // NAVIGATION
  // ==========================================================================

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
    let touchStartX = 0, touchStartY = 0;
    const minSwipe = 80, maxVertical = 100;

    main.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    main.addEventListener('touchend', (e) => {
      const deltaX = e.changedTouches[0].screenX - touchStartX;
      const deltaY = Math.abs(e.changedTouches[0].screenY - touchStartY);
      if (Math.abs(deltaX) > minSwipe && deltaY < maxVertical) {
        const idx = PHASES.indexOf(currentPhase);
        if (deltaX < 0 && idx < PHASES.length - 1) setPhase(PHASES[idx + 1]);
        else if (deltaX > 0 && idx > 0) setPhase(PHASES[idx - 1]);
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
    const hash = window.location.hash.slice(1) || 'general';
    const [phase, section] = hash.split('/');
    if (CONTENT[phase]) {
      currentPhase = phase;
      currentSection = section || null;
      document.querySelectorAll('.phase-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.phase === phase));
      document.querySelectorAll('.bottom-nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.phase === phase));
      renderPhase(phase, section);
    }
  }

  function renderPhase(phase, sectionId = null) {
    const content = CONTENT[phase];
    const main = document.getElementById('mainContent');
    const activeSection = sectionId ? content.sections.find(s => s.id === sectionId) : content.sections[0];

    const sectionNav = content.sections.map(sec => `
      <button class="subsection-btn${sec.id === activeSection.id ? ' active' : ''}" data-section="${sec.id}">${sec.title}</button>
    `).join('');

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

  // ==========================================================================
  // OFFLINE
  // ==========================================================================

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

  // ==========================================================================
  // INIT
  // ==========================================================================

  function init() {
    initNavigation();
    initSearch();
    initOfflineSupport();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
