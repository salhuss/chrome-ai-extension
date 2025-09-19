# chrome-ai-extension
🧭 AI Browser Extension

A Chrome (Manifest V3) extension that transforms your browser into an AI-powered assistant. It lets you chat with an AI model directly in a side panel, summarize or explain any web page, and even query selected text with a right-click.

⸻

✨ Current Features
	•	Side Panel Chat
A persistent chat interface that stays open per tab, letting you ask questions or request summaries while you browse.
	•	Page Context Extraction
Reads visible text from the current page or grabs highlighted selections to provide context for AI responses.
	•	Context Menu Integration
Right-click on any text selection and choose “Ask AI about selection” to instantly send it to the assistant.
	•	Configurable Settings
Options page to set your API base URL, model, and context length (stored in chrome.storage.sync).
	•	Secure Backend Design
Assumes a lightweight proxy backend (Cloudflare Worker, FastAPI, etc.) that safely handles API keys and forwards requests to your AI provider.
	•	MVP Complete
Already supports summarization, explanations, and context-aware Q&A using your chosen AI model.

⸻

🚀 Getting Started
	1.	Clone this repo or download the source.
	2.	Open chrome://extensions, enable Developer Mode, and click Load unpacked.
	3.	Select the project folder.
	4.	Open the extension’s side panel from the toolbar or right-click a page selection → Ask AI.
	5.	Configure your API endpoint and model in the Settings page.

⸻

🛣️ Next Steps / Roadmap
	•	Streaming Responses
Display answers token-by-token for a more interactive experience.
	•	Omnibox Integration
Type ai <your query> directly in Chrome’s address bar to talk to the AI.
	•	Enhanced Page Summaries
Split long pages into chunks, embed them, and perform retrieval-augmented generation (RAG) for better coverage.
	•	Custom Per-Site Rules
Auto-summarize or explain specific sites (e.g., research papers, news, or documentation).
	•	Privacy Enhancements
Explore on-device AI models (via WebGPU/WASM) for offline or private Q&A.
	•	UI Improvements
Better theming, multi-conversation history, and exportable chat logs.

⸻

⚠️ Important Notes
	•	Do not embed API keys directly in the extension. Always route requests through your backend proxy.
	•	This project is an MVP and a learning tool. Expect bugs and limitations.
