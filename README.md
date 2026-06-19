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
| Deployable on Walrus Mainnet | ✅ Static site → Walrus Sites |

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

### Local Development
```bash
# Just open index.html in a browser — no build step needed!
# Or use a simple HTTP server:
python3 -m http.server 8080
```

### Deploy to Walrus Sites
```bash
# Install site-builder
cargo install walrus-site-builder

# Configure
cp sites-config.yaml.example sites-config.yaml
# Edit sites-config.yaml with your Sui package ID

# Build & Deploy
site-builder deploy --epochs 10 ./path-to-index-file
```

### Demo Mode
The app runs in **demo mode** by default (no wallet needed). Memory is stored in localStorage. Connect a Sui wallet to persist on Walrus Mainnet.

## 📋 DeepSurge Submission Checklist

- [ ] Project name: **World Cup Oracle**
- [ ] Project description: AI agent with persistent memory for World Cup 2026 predictions
- [ ] GitHub repo: [link]
- [ ] Live demo: [Walrus Sites link]
- [ ] Demo video: [3 min max]
- [ ] Wallet address: [Sui wallet for WAL prizes]
- [ ] Airtable submission: [form link]
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
