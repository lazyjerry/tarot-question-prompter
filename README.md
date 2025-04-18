# Tarot Insight AI 🎴🤖

一個簡單的塔羅占卜網頁應用，讓使用者輸入問題、抽取三張牌，並自動產生提示詞給 ChatGPT 或其他 AI 模型進行占卜解析。

## 🔮 功能特色

- 輸入你想詢問的問題（例如：「我該轉職嗎？」）
- 抽出 3 張隨機塔羅牌，包含正位／逆位（會自動旋轉圖片）
- 生成給 AI 的提示語，幫助 AI 占卜回答你的問題

## 📁 專案結構

www/
├── index.html # 主頁面
├── main.css # 樣式檔案
├── main.js # 抽牌與提示詞邏輯
└── tarot/ # 所有塔羅牌圖像（共 78 張）

## 🚀 使用方式

1. 下載或 clone 此專案：

```bash
git clone https://github.com/your-username/tarot-insight-ai.git
cd tarot-insight-ai/www

	2.	使用本地伺服器啟動（建議）：

npx serve .
# 或使用 VSCode Live Server 擴充功能開啟 index.html

	3.	開啟瀏覽器，輸入問題並抽牌！

⸻

💡 AI 提示語格式

抽牌後會自動產生提示詞，例如：

請根據以下三張塔羅牌提供占卜解讀，並以我提出的問題為核心做出分析：

- 問題：「我該轉職嗎？」
- 第一張牌：魔術師（正位）
- 第二張牌：隱士（逆位）
- 第三張牌：死神（正位）

請從過去、現在、未來三個面向解釋，並包含情緒與建議。

你可以複製這段文字貼給 ChatGPT 來獲得詳細解讀 ✨

🛠 技術使用
	•	HTML5 + CSS3 + 原生 JavaScript
	•	圖片旋轉使用 transform: scaleY(-1)
	•	自動產生占卜提示詞

⸻

📜 授權

MIT License
```
