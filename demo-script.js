// ============================================================
// WORLD CUP ORACLE — DEMO SCRIPT FOR HACKATHON VIDEO
// Copy-paste this entire script into browser console (F12)
// Run on: https://Wadefak04.github.io/world-cup-oracle/ or local file
// ============================================================

(function() {
  console.log('%c🔮 WORLD CUP ORACLE — DEMO SCRIPT STARTED', 'font-size:20px;color:#fbbf24;font-weight:bold');
  console.log('%cRecord your screen now! This script will demonstrate all features.', 'font-size:14px;color:#9ca3af');

  // --- Helper: Wait for element ---
  const waitFor = (selector, timeout = 5000) => new Promise((resolve, reject) => {
    const el = document.querySelector(selector);
    if (el) return resolve(el);
    const observer = new MutationObserver(() => {
      const el = document.querySelector(selector);
      if (el) { observer.disconnect(); resolve(el); }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    setTimeout(() => { observer.disconnect(); reject(new Error(`Timeout: ${selector}`)); }, timeout);
  });

  // --- Helper: Type into input ---
  const typeInto = (selector, text) => waitFor(selector).then(el => {
    el.focus();
    el.value = text;
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  });

  // --- Helper: Click ---
  const clickEl = (selector) => waitFor(selector).then(el => el.click());

  // --- Helper: Sleep ---
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  // --- Helper: Log step ---
  const step = (msg) => console.log(`%c▶ ${msg}`, 'font-size:14px;color:#10b981;font-weight:bold');

  // --- MAIN DEMO SEQUENCE ---
  async function runDemo() {
    try {
      // ==================================================
      // STEP 1: Landing page
      // ==================================================
      step('STEP 1: Show landing page - World Cup Oracle header');
      await sleep(2000);

      step('STEP 2: Show wallet status (Demo Mode)');
      await sleep(1000);

      // ==================================================
      // STEP 3: Make first prediction
      // ==================================================
      step('STEP 3: Make first prediction — Mexico vs Argentina');
      await clickEl('#matchSelect');
      await sleep(300);
      await typeInto('#matchSelect', '1'); // Mexico vs Argentina
      await sleep(500);
      await clickEl('#pickSelect');
      await sleep(300);
      const pickEl = document.querySelector('#pickSelect');
      if (pickEl) pickEl.value = '🇲🇽 Mexico';
      await sleep(300);

      await typeInto('#confidence', '9');
      document.getElementById('confVal').textContent = '9';
      await sleep(300);

      await typeInto('#reasoning', 'Mexico has home advantage in 2026 and Argentina\'s defense is aging. El Tri will shock the world!');
      await sleep(500);

      await clickEl('#submitBtn');
      await sleep(1000);

      // ==================================================
      // STEP 4: Second prediction
      // ==================================================
      step('STEP 4: Second prediction — Brazil vs England (Draw)');
      await typeInto('#matchSelect', '3');
      await sleep(300);
      const pickEl2 = document.querySelector('#pickSelect');
      if (pickEl2) pickEl2.value = 'Draw';
      await sleep(300);
      await typeInto('#confidence', '6');
      document.getElementById('confVal').textContent = '6';
      await sleep(300);
      await typeInto('#reasoning', 'Both teams strong but cancels out. Tactical draw likely.');
      await sleep(500);
      await clickEl('#submitBtn');
      await sleep(1000);

      // ==================================================
      // STEP 5: Third prediction (show bias)
      // ==================================================
      step('STEP 5: Third prediction — Mexico again (show team bias)');
      await typeInto('#matchSelect', '1');
      await sleep(300);
      const pickEl3 = document.querySelector('#pickSelect');
      if (pickEl3) pickEl3.value = '🇲🇽 Mexico';
      await sleep(300);
      await typeInto('#confidence', '8');
      document.getElementById('confVal').textContent = '8';
      await sleep(300);
      await typeInto('#reasoning', 'My gut says Mexico. Always bet on green.');
      await sleep(500);
      await clickEl('#submitBtn');
      await sleep(1000);

      // ==================================================
      // STEP 6: Show Predictions tab
      // ==================================================
      step('STEP 6: Scroll to predictions list - show all 3');
      await sleep(2000);

      // ==================================================
      // STEP 7: Switch to Memory tab
      // ==================================================
      step('STEP 7: Switch to MEMORY tab - show agent memory');
      await clickEl('.tab[onclick="switchTab(\'memory\')"]');
      await sleep(1500);
      step('Show memory timeline - predictions, reasoning, traits detected');
      await sleep(3000);

      // ==================================================
      // STEP 8: Simulate NEW SESSION (Day 4+)
      // ==================================================
      step('STEP 8: SIMULATE NEW SESSION (Day 4+) - KEY DEMO MOMENT');
      // Find the "New Session" button (added dynamically)
      const sessionBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('New Session'));
      if (sessionBtn) {
        sessionBtn.click();
        await sleep(1000);
        step('Session 2 started! Agent now has memory from Session 1');
        await sleep(2000);
      }

      // ==================================================
      // STEP 9: Make prediction in Session 2
      // ==================================================
      step('STEP 9: Make prediction in Session 2 - agent references past');
      await clickEl('.tab[onclick="switchTab(\'predict\')"]');
      await sleep(500);
      await typeInto('#matchSelect', '5'); // Spain vs Portugal
      await sleep(300);
      const pickEl4 = document.querySelector('#pickSelect');
      if (pickEl4) pickEl4.value = '🇪🇸 Spain';
      await sleep(300);
      await typeInto('#confidence', '7');
      document.getElementById('confVal').textContent = '7';
      await sleep(300);
      await typeInto('#reasoning', 'Spain possession game beats Portugal counter-attack. Also redeeming my Mexico bias!');
      await sleep(500);
      await clickEl('#submitBtn');
      await sleep(1000);

      // ==================================================
      // STEP 10: Roast Tab
      // ==================================================
      step('STEP 10: ROAST TAB - Agent roasts your predictions');
      await clickEl('.tab[onclick="switchTab(\'roast\')"]');
      await sleep(500);
      await clickEl('#roastBtn');
      await sleep(2000);
      step('Read the roast aloud for video!');
      await sleep(4000);

      // ==================================================
      // STEP 11: Stats Tab
      // ==================================================
      step('STEP 11: STATS TAB - Accuracy, streak, personality profile');
      await clickEl('.tab[onclick="switchTab(\'stats\')"]');
      await sleep(1500);
      step('Show personality profile - agent analyzes your behavior');
      await sleep(3000);

      // ==================================================
      // STEP 12: Agent Chat
      // ==================================================
      step('STEP 12: AGENT CHAT - Talk to Oracle with memory');
      await clickEl('.tab[onclick="switchTab(\'agent\')"]');
      await sleep(500);

      const chatQs = [
        'What do you remember about my predictions?',
        'Am I biased toward any team?',
        'What\'s my accuracy so far?',
        'Roast me again!',
        'How does Walrus memory work here?'
      ];

      for (const q of chatQs) {
        await typeInto('#chatInput', q);
        await clickEl('#chatInput + button, button:has-text("Send")');
        await sleep(2500);
      }

      // ==================================================
      // STEP 13: Walrus Memory Storage
      // ==================================================
      step('STEP 13: MEMORY TAB - Save/Load from Walrus');
      await clickEl('.tab[onclick="switchTab(\'memory\')"]');
      await sleep(500);
      await clickEl('#saveBtn');
      await sleep(2000);
      await clickEl('#loadBtn');
      await sleep(1500);
      step('Show memory blob ID - stored on Walrus!');

      // ==================================================
      // STEP 14: Final wrap
      // ==================================================
      step('STEP 14: Summary - All hackathon requirements met!');
      console.log('%c✅ Walrus Memory integration', 'color:#10b981');
      console.log('%c✅ Persistent memory across sessions', 'color:#10b981');
      console.log('%c✅ Day 1 vs Day 4+ behavior difference', 'color:#10b981');
      console.log('%c✅ Public interface with memory visualization', 'color:#10b981');
      console.log('%c✅ World Cup 2026 theme', 'color:#10b981');
      console.log('%c✅ Deployable to Walrus Sites', 'color:#10b981');

      console.log('%c🎬 DEMO COMPLETE - Stop recording!', 'font-size:18px;color:#fbbf24;font-weight:bold');
      console.log('%c📝 Submit: GitHub + Airtable + DeepSurge + X post #Walrus', 'font-size:14px;color:#8b5cf6');

    } catch (e) {
      console.error('%c❌ Demo error:', 'color:#ef4444', e);
      console.log('You can run individual steps manually. Check console for errors.');
    }
  }

  // Run it!
  runDemo();
})();

// ============================================================
// MANUAL STEP-BY-STEP (if auto script fails, run these individually):
// ============================================================
/*
// 1. Make prediction
// document.getElementById('matchSelect').value = '1';
// document.getElementById('pickSelect').value = '🇲🇽 Mexico';
// document.getElementById('confidence').value = '9';
// document.getElementById('confVal').textContent = '9';
// document.getElementById('reasoning').value = 'Mexico home advantage!';
// document.getElementById('submitBtn').click();

// 2. Switch tabs
// document.querySelector('.tab[onclick="switchTab(\'memory\')"]').click();
// document.querySelector('.tab[onclick="switchTab(\'roast\')"]').click();
// document.querySelector('.tab[onclick="switchTab(\'stats\')"]').click();
// document.querySelector('.tab[onclick="switchTab(\'agent\')"]').click();

// 3. New session
// Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('New Session'))?.click();

// 4. Roast
// document.getElementById('roastBtn').click();

// 5. Chat
// document.getElementById('chatInput').value = 'What do you remember?';
// document.querySelector('#chatInput + button').click();

// 6. Save to Walrus
// document.getElementById('saveBtn').click();
// document.getElementById('loadBtn').click();
*/
