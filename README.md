# tarot-question-prompter 🎴💬

這是一個輕量化塔羅牌占卜網頁應用，讓使用者輸入他們想詢問的問題，並在抽出三張牌之後，自動生成提示詞，協助 AI（如 ChatGPT）進行個人化占卜解析。

本專案純使用 HTML、CSS、JavaScript 開發，無需後端即可執行，適合部署於任何靜態網頁平台。

---

## 🔮 功能特色

- **問題輸入**：使用者可自由輸入想詢問的內容
- **三張塔羅牌抽取**：每張牌皆隨機正位／逆位顯示（圖片自動翻轉）
- **AI Prompt 生成**：根據問題與抽牌結果，自動輸出占卜提示詞

---

## 📁 專案結構

www/
├── index.html # 主頁面
├── style.css # 樣式檔案
├── script.js # 邏輯與互動功能
└── tarot/ # 塔羅牌圖像素材（共 78 張）

---

## 🛠 技術使用

- HTML5 + CSS3 + 原生 JavaScript
- 圖片翻轉使用 `transform: scaleY(-1)`
- 提示詞邏輯運算與簡易文字格式化

---

## 📄 授權 License

本專案採用 [MIT License](https://opensource.org/licenses/MIT) 開源釋出，歡迎自由使用、修改與擴充。

---

## 📬 聯絡方式

作者：[lazyjerry](https://github.com/lazyjerry)  
如有合作或問題，歡迎透過 GitHub issue 或私訊聯絡。

---

## ⭐ Star Me!

如果你喜歡這個專案，歡迎幫我點個 Star 🌟 讓更多人看到！
