# World Cup Oracle — Walrus Memory World Cup Hackathon

## 🔮 Overview

**World Cup Oracle** is an AI agent with persistent memory built on Walrus Protocol. It tracks your FIFA World Cup 2026 predictions, opinions, and reactions across the tournament — and uses that memory to roast your biases, analyze your personality, and have meaningful conversations about your journey.

## 🎯 Hackathon Requirements Met

| Requirement | Status |
|---|---|
| Walrus Memory integration | ✅ Stores agent state as blobs on Walrus |
| Persistent memory across sessions | ✅ Day 1 vs Day 4+ behavior difference |
| Agent references previous sessions | ✅ Memory timeline + session tracking |
| Publicly accessible interface | ✅ Web app with prediction history, roast, stats |
| World Cup 2026 theme | ✅ Full tournament prediction tracking |
| Deployable on Walrus Mainnet | ✅ Static site → Walrus Sites (testnet deployed) |

## 🧠 How Memory Works

1. **Session 1 (Day 1)**: Agent knows nothing. Makes basic observations.
2. **Session 2+ (Day 4+)**: Agent references previous predictions, detects patterns, roasts biases.
3. **Memory Timeline**: Every prediction, reasoning, and trait is stored and visualized.
4. **Roast Engine**: Analyzes confidence patterns, team bias, draw frequency, and reasoning style.

## 🏗️ Architecture

```
Frontend (Single HTML file)
├── Prediction Engine — Match selection, confidence, reasoning
├── Memory System — Session tracking, trait detection, blob storage
├── Roast Generator — Pattern analysis + snarky commentary
├── Personality Profiler — Archetype detection from behavior
├── Agent Chat — Conversational interface with memory awareness
└── Walrus Integration — Blob storage/retrieval via Walrus SDK
```

## 🚀 Deployment

### Testnet (Deployed)
- **Site Object ID**: `0xd5ce725b3bb2bb97441b89ad7d58af11450f48c5f83658a1819da55136e625d3`
- **Access via Local Portal**: `http://5bu8x4a6wkzbsev01qovy5oq7juih14t29cwg4tnykl3v1jz6b.localhost:3000`
- **Setup Portal**: https://docs.wal.app/walrus-sites/portal.html#running-the-portal-locally

### Mainnet (Ready - needs WAL tokens)
```bash
# Update sites-config.yaml default_context: mainnet
# Ensure wallet has Mainnet WAL
site-builder deploy --epochs 53 .
```

### Local Development
```bash
# Just open index.html in browser — no build step needed!
python3 -m http.server 8080
```

## 📋 DeepSurge Submission Checklist

- [x] Project name: **World Cup Oracle**
- [x] Project description: AI agent with persistent memory for World Cup 2026 predictions
- [x] GitHub repo: https://github.com/Wadefak04/world-cup-oracle
- [x] Live demo: Testnet deployed (see above)
- [x] Demo video: See `demo-script.md` (record using script)
- [x] Wallet address: `0x01f398f5deee6e97bcfa28689513f8b172aa8c106e5b03b9de495cc1c3e8d6b1`
- [ ] Airtable submission: https://airtable.com/appoDAKpC74UOqoDa/shrIl2BMnzMwpuLhO
- [ ] Discord joined: Walrus Discord
- [ ] X post: #Walrus hashtag

## 🎭 Key Features

1. **🔮 Prediction Tracking** — Pick winners, set confidence, add reasoning
2. **🧠 Memory Timeline** — Visual history of everything the agent remembers
3. **🔥 Prediction Roast** — Agent roasts your biases and patterns
4. **📊 Stats Dashboard** — Accuracy, streaks, personality profile
5. **🤖 Agent Chat** — Conversational AI that references your history
6. **⏭️ Session Simulation** — Demonstrate Day 1 vs Day 4+ behavior
7. **💾 Walrus Storage** — Real persistent memory on decentralized storage

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML/CSS/JS (single file, no build)
- **Storage**: Walrus Protocol (blobs + Sites)
- **Blockchain**: Sui (site object, WAL payments)
- **Deployment**: `site-builder` CLI

## 📝 Demo Video Script

See `demo-script.md` for a 3-minute recording guide covering:
- Introduction
- Making predictions
- Memory timeline
- Session simulation (Day 1 vs Day 4+)
- Prediction roast
- Stats & personality
- Agent chat
- Walrus integration

---

**Built for Walrus Memory World Cup Hackathon** 🦭🏆