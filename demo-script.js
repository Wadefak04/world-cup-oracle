/**
 * ============================================================
 * WORLD CUP ORACLE — DEMO SCRIPT
 * Copy-paste this ENTIRE script into browser console (F12 → Console)
 * Run each section step by step for the 3-minute demo video
 * ============================================================
 */

// ============================================================
// SECTION 1: INITIAL STATE CHECK (Day 1 - Fresh Agent)
// ============================================================
console.log('%c=== WORLD CUP ORACLE DEMO - DAY 1 ===', 'color: #fbbf24; font-size: 16px; font-weight: bold;');
console.log('%cStep 1: Fresh agent - no memory yet', 'color: #10b981; font-size: 14px;');

// Check current state
console.log('Predictions:', window.state?.predictions?.length || 0);
console.log('Memories:', window.state?.memories?.length || 0);
console.log('Sessions:', window.state?.sessions || 1);

// Navigate to Predict tab
switchTab('predict');
console.log('%c✅ On Predict tab', 'color: #10b981;');

// ============================================================
// SECTION 2: MAKE FIRST PREDICTIONS (Session 1)
// ============================================================
console.log('%c\nStep 2: Making first predictions...', 'color: #10b981; font-size: 14px;');

// Prediction 1: Argentina vs Mexico - pick Argentina with high confidence
document.getElementById('matchSelect').value = '1'; // Argentina vs Mexico
updatePickOptions();
document.getElementById('pickSelect').value = '🇦🇷 Argentina';
document.getElementById('confidence').value = '9';
document.getElementById('confVal').textContent = '9';
document.getElementById('reasoning').value = 'Argentina won 2022, Messi\'s last World Cup, they\'re destiny';
submitPrediction();

// Wait a bit
await new Promise(r => setTimeout(r, 500));

// Prediction 2: Brazil vs England - pick Draw (shows draw bias)
document.getElementById('matchSelect').value = '3'; // Brazil vs England
updatePickOptions();
document.getElementById('pickSelect').value = 'Draw';
document.getElementById('confidence').value = '7';
document.getElementById('confVal').textContent = '7';
document.getElementById('reasoning').value = 'Both teams are evenly matched, tactical battle will end in draw';
submitPrediction();

await new Promise(r => setTimeout(r, 500));

// Prediction 3: France vs Germany - pick France, low confidence (cautious)
document.getElementById('matchSelect').value = '4'; // France vs Germany
updatePickOptions();
document.getElementById('pickSelect').value = '🇫🇷 France';
document.getElementById('confidence').value = '3';
document.getElementById('confVal').textContent = '3';
document.getElementById('reasoning').value = 'Germany has home advantage but France has better squad depth';
submitPrediction();

await new Promise(r => setTimeout(r, 500));

console.log('%c✅ Made 3 predictions with different patterns', 'color: #10b981;');
console.log('Total predictions:', state.predictions.length);

// ============================================================
// SECTION 3: CHECK MEMORY BUILT FROM PREDICTIONS
// ============================================================
console.log('%c\nStep 3: Memory built from predictions', 'color: #fbbf24; font-size: 14px;');

switchTab('memory');
console.log('%c✅ On Memory tab - showing agent learned:', 'color: #10b981;');
console.log('- Total memories:', state.memories.length);
state.memories.forEach(m => console.log(`  [Session ${m.session}] ${m.type}: ${m.content}`));

// ============================================================
// SECTION 4: GET ROASTED (Day 1 Roast - Limited Data)
// ============================================================
console.log('%c\nStep 4: First roast (Day 1 - limited data)', 'color: #fbbf24; font-size: 14px;');

switchTab('roast');
generateRoast();

// Wait for roast to render
await new Promise(r => setTimeout(r, 500));

console.log('%cRoast generated! Check the UI for results', 'color: #10b981;');

// ============================================================
// SECTION 5: SIMULATE NEW SESSION (Day 4+)
// ============================================================
console.log('%c\n=== WORLD CUP ORACLE DEMO - DAY 4+ (NEW SESSION) ===', 'color: #8b5cf6; font-size: 16px; font-weight: bold;');
console.log('%cStep 5: Simulating new session (time passed)...', 'color: #10b981; font-size: 14px;');

switchTab('memory');
newSession();

console.log('%c✅ New session started! Session:', state.currentSession, 'color: #10b981;');

// ============================================================
// SECTION 6: MAKE MORE PREDICTIONS (Session 2)
// ============================================================
console.log('%cStep 6: Making more predictions in Session 2...', 'color: #10b981; font-size: 14px;');

switchTab('predict');

// Prediction 4: Spain vs Portugal - pick Spain (shows team bias)
document.getElementById('matchSelect').value = '5'; // Spain vs Portugal
updatePickOptions();
document.getElementById('pickSelect').value = '🇪🇸 Spain';
document.getElementById('confidence').value = '8';
document.getElementById('confVal').textContent = '8';
document.getElementById('reasoning').value = 'Spain possession game will control tempo, Pedri & Yamal too good';
submitPrediction();

await new Promise(r => setTimeout(r, 500));

// Prediction 5: Italy vs Netherlands - pick Italy again (bias forming)
document.getElementById('matchSelect').value = '6'; // Italy vs Netherlands
updatePickOptions();
document.getElementById('pickSelect').value = '🇮🇹 Italy';
document.getElementById('confidence').value = '8';
document.getElementById('confVal').textContent = '8';
document.getElementById('reasoning').value = 'Italy defense is impenetrable, Donnarumma in goal';
submitPrediction();

await new Promise(r => setTimeout(r, 500));

// Prediction 6: Another Argentina pick (strong bias)
document.getElementById('matchSelect').value = '1'; // Argentina vs Mexico again (for demo)
updatePickOptions();
document.getElementById('pickSelect').value = '🇦🇷 Argentina';
document.getElementById('confidence').value = '9';
document.getElementById('confVal').textContent = '9';
document.getElementById('reasoning').value = 'Argentina destiny confirmed, can\'t bet against Messi';
submitPrediction();

console.log('%c✅ Made 3 more predictions - patterns emerging', 'color: #10b981;');
console.log('Total predictions:', state.predictions.length);

// ============================================================
// SECTION 7: CHECK MEMORY NOW (Day 4+ Memory Depth)
// ============================================================
console.log('%c\nStep 7: Memory depth after 2 sessions', 'color: #fbbf24; font-size: 14px;');

switchTab('memory');
console.log('%cAgent now has:', 'color: #10b981;');
console.log('- Total memories:', state.memories.length);
console.log('- Sessions:', state.sessions);

// Show key memories
const keyMemories = state.memories.filter(m => m.type === 'preference' || m.type === 'trait' || m.type === 'session');
keyMemories.forEach(m => console.log(`  [Session ${m.session}] ${m.type}: ${m.content}`));

// ============================================================
// SECTION 8: GET ROASTED AGAIN (Day 4+ Roast - Rich Data)
// ============================================================
console.log('%c\nStep 8: Roast after 2 sessions (MUCH more personal)', 'color: #fbbf24; font-size: 14px;');

switchTab('roast');
generateRoast();

await new Promise(r => setTimeout(r, 500));

console.log('%c✅ Compare this roast to Day 1 - much more specific!', 'color: #10b981;');

// ============================================================
// SECTION 9: STATS & PERSONALITY PROFILE
// ============================================================
console.log('%c\nStep 9: Stats & Personality Profile', 'color: #fbbf24; font-size: 14px;');

switchTab('stats');
console.log('%cStats:', 'color: #10b981;');
console.log('- Total:', document.getElementById('statTotal').textContent);
console.log('- Accuracy:', document.getElementById('statAccuracy').textContent);
console.log('- Avg Confidence:', document.getElementById('statAvgConf').textContent);
console.log('- Streak:', document.getElementById('statStreak').textContent);
console.log('- Sessions:', document.getElementById('statSessions').textContent);

console.log('%cPersonality:', 'color: #10b981;');
console.log(document.getElementById('personalityText').innerText);

// ============================================================
// SECTION 10: AGENT CHAT - MEMORY AWARE CONVERSATION
// ============================================================
console.log('%c\nStep 10: Chat with Oracle - it remembers everything', 'color: #fbbf24; font-size: 14px;');

switchTab('agent');

// Send test messages
const chatInput = document.getElementById('chatInput');

// Question 1: About predictions
chatInput.value = 'What are my predictions so far?';
sendChat();

await new Promise(r => setTimeout(r, 1500));

// Question 2: About bias
chatInput.value = 'What teams am I biased towards?';
sendChat();

await new Promise(r => setTimeout(r, 1500));

// Question 3: About accuracy
chatInput.value = 'How accurate am I?';
sendChat();

await new Promise(r => setTimeout(r, 1500));

// Question 4: About Walrus
chatInput.value = 'How does Walrus memory work here?';
sendChat();

console.log('%c✅ Chat demonstrates persistent memory awareness', 'color: #10b981;');

// ============================================================
// SECTION 11: WALRUS STORAGE DEMO
// ============================================================
console.log('%c\nStep 11: Walrus Memory Storage', 'color: #fbbf24; font-size: 14px;');

switchTab('memory');
saveMemoryToWalrus();

await new Promise(r => setTimeout(r, 1500));

console.log('%cStorage status:', document.getElementById('memoryStatus').innerText);

// ============================================================
// FINAL SUMMARY
// ============================================================
console.log('%c\n=== DEMO COMPLETE ===', 'color: #fbbf24; font-size: 18px; font-weight: bold;');
console.log('%cKey hackathon requirements demonstrated:', 'color: #10b981;');
console.log('✅ Persistent memory across sessions (Day 1 vs Day 4+)');
console.log('✅ Agent behavior changes based on memory');
console.log('✅ Memory visualization (timeline)');
console.log('✅ World Cup 2026 theme');
console.log('✅ Public interface with predictions, roast, stats, chat');
console.log('✅ Walrus storage integration');
console.log('✅ Deployable as static site to Walrus Sites');

console.log('%c\n🎥 Video recording tips:', 'color: #8b5cf6;');
console.log('1. Record full screen at 1080p');
console.log('2. Keep under 3 minutes');
console.log('3. Narrate: "Day 1 - agent knows nothing" → "Day 4 - agent roasts my Argentina bias"');
console.log('4. Show the Memory tab timeline');
console.log('5. Show Agent Chat referencing previous sessions');
console.log('6. Show Walrus save/load');
