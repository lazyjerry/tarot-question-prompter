// 塔羅牌資料
const tarotDeck = [
  {
    "name": "愚者",
    "image": "./tarot/fool.jpg",
    "upright": "新開始、冒險、自由",
    "reversed": "愚蠢、衝動、缺乏計劃"
  },
  {
    "name": "魔術師",
    "image": "./tarot/magician.jpg",
    "upright": "創造力、行動、意志力",
    "reversed": "操控、欺騙、缺乏信心"
  },
  {
    "name": "女祭司",
    "image": "./tarot/high-priestess.jpg",
    "upright": "直覺、潛意識、神秘",
    "reversed": "不安、缺乏信任、隱藏的事物"
  },
  {
    "name": "皇后",
    "image": "./tarot/empress.jpg",
    "upright": "母性、滋養、豐饒",
    "reversed": "依賴、缺乏自信、情感不穩定"
  },
  {
    "name": "皇帝",
    "image": "./tarot/emperor.jpg",
    "upright": "權威、結構、控制",
    "reversed": "專制、混亂、缺乏紀律"
  },
  {
    "name": "教皇",
    "image": "./tarot/hierophant.jpg",
    "upright": "傳統、信仰、教育",
    "reversed": "反叛、獨立、質疑"
  },
  {
    "name": "戀人",
    "image": "./tarot/lovers.jpg",
    "upright": "愛情、和諧、選擇",
    "reversed": "不和、分離、衝突"
  },
  {
    "name": "戰車",
    "image": "./tarot/chariot.jpg",
    "upright": "勝利、意志力、控制",
    "reversed": "失敗、缺乏方向、放棄"
  },
  {
    "name": "力量",
    "image": "./tarot/strength.jpg",
    "upright": "勇氣、內在力量、同情",
    "reversed": "脆弱、懦弱、缺乏信心"
  },
  {
    "name": "隱士",
    "image": "./tarot/hermit.jpg",
    "upright": "內省、孤獨、智慧",
    "reversed": "孤立、迷失方向、缺乏指導"
  },
  {
    "name": "命運之輪",
    "image": "./tarot/wheel-fortune.jpg",
    "upright": "變化、循環、命運",
    "reversed": "不幸、延遲、缺乏控制"
  },
  {
    "name": "正義",
    "image": "./tarot/justice.jpg",
    "upright": "公平、真理、法律",
    "reversed": "不公、偏見、缺乏誠信"
  },
  {
    "name": "吊人",
    "image": "./tarot/hanged-man.jpg",
    "upright": "放棄、獻身、轉變",
    "reversed": "自私、缺乏靈性、逃避"
  },
  {
    "name": "死神",
    "image": "./tarot/death.jpg",
    "upright": "結束、轉變、重生",
    "reversed": "抵抗變化、延遲、恐懼"
  },
  {
    "name": "節制",
    "image": "./tarot/temperance.jpg",
    "upright": "平衡、節制、和諧",
    "reversed": "不平衡、過度、缺乏耐心"
  },
  {
    "name": "惡魔",
    "image": "./tarot/devil.jpg",
    "upright": "束縛、誘惑、物質主義",
    "reversed": "解放、克服、釋放"
  },
  {
    "name": "高塔",
    "image": "./tarot/tower.jpg",
    "upright": "突發事件、破壞、啟示",
    "reversed": "避免災難、延遲、恐懼"
  },
  {
    "name": "星星",
    "image": "./tarot/star.jpg",
    "upright": "希望、靈感、平靜",
    "reversed": "失望、缺乏信心、悲觀"
  },
  {
    "name": "月亮",
    "image": "./tarot/moon.jpg",
    "upright": "幻覺、直覺、潛意識",
    "reversed": "混亂、恐懼、缺乏方向"
  },
  {
    "name": "太陽",
    "image": "./tarot/sun.jpg",
    "upright": "快樂、成功、活力",
    "reversed": "失敗、延遲、缺乏信心"
  },
  {
    "name": "審判",
    "image": "./tarot/judgement.jpg",
    "upright": "重生、內省、救赎",
    "reversed": "拒絕改變、逃避責任、缺乏自我反省"
  },
  {
    "name": "世界",
    "image": "./tarot/world.jpg",
    "upright": "完成、成就、整合",
    "reversed": "不完整、延遲、缺乏方向"
  }
];

// 當前抽牌模式
let drawMode = "single";

// DOM元素
const cardContainer = document.getElementById("card-container");
const drawBtn = document.getElementById("draw-btn");
const singleBtn = document.getElementById("single-btn");
const threeBtn = document.getElementById("three-btn");
const celticBtn = document.getElementById("celtic-btn");
const interpretation = document.getElementById("interpretation");
const interpretationContent = document.getElementById(
  "interpretation-content"
);

// 事件監聽器
drawBtn.addEventListener("click", drawCards);
singleBtn.addEventListener("click", () => setDrawMode("single"));
threeBtn.addEventListener("click", () => setDrawMode("three"));
celticBtn.addEventListener("click", () => setDrawMode("celtic"));

// 生成 AI 提示詞
function generatePrompt(question, drawMode, cards) {
  let prompt = `請幫我解釋牌意並且分析「${question} 」我使用的`;
  if (drawMode === "single") {
    prompt += "牌陣是：單張牌占卜。我抽到的塔羅牌：「";
    const card = cards[0];
    const orientation = card.isReversed ? "逆位" : "正位";
    prompt += `${card.name} (${orientation}) 」`;
  } else if (drawMode === "three") {
    prompt += "牌陣是：時間之流。我抽到的塔羅牌：「";
    const positions = ["過去", "現在", "未來"];
    cards.forEach((card, index) => {
      const orientation = card.isReversed ? "逆位" : "正位";
      prompt += `${positions[index]}: ${card.name} (${orientation}) `;
    });
    prompt += "」";
  } else if (drawMode === "celtic") {
    prompt += "牌陣是：凱爾特十字占卜。我抽到的塔羅牌：「";
    const positions = [
      "中心",
      "橫跨",
      "上方",
      "下方",
      "左方",
      "右方",
      "背後",
      "環境",
      "希望與恐懼",
      "最終結果",
    ];
    cards.forEach((card, index) => {
      const orientation = card.isReversed ? "逆位" : "正位";
      prompt += `${positions[index]} - ${card.name} (${orientation}) `;
    });
    prompt += "」";
  }
  prompt += "。";
  return prompt;
}

// 設置抽牌模式
function setDrawMode(mode) {
  drawMode = mode;

  // 更新按鈕樣式
  singleBtn.classList.remove("bg-purple-600");
  threeBtn.classList.remove("bg-purple-600");
  celticBtn.classList.remove("bg-purple-600");

  switch (mode) {
    case "single":
      singleBtn.classList.add("bg-purple-600");
      drawBtn.textContent = "抽取一張牌";
      break;
    case "three":
      threeBtn.classList.add("bg-purple-600");
      drawBtn.textContent = "抽取三張牌";
      break;
    case "celtic":
      celticBtn.classList.add("bg-purple-600");
      drawBtn.textContent = "凱爾特十字占卜";
      break;
  }
}

// 初始化設置
setDrawMode("single");

// 抽牌函數
function drawCards() {
  // 清空容器
  cardContainer.innerHTML = "";

  // 根據模式抽牌
  let cardsToDraw = 1;
  let spreadName = "單張牌占卜";

  switch (drawMode) {
    case "single":
      cardsToDraw = 1;
      spreadName = "單張牌占卜";
      break;
    case "three":
      cardsToDraw = 3;
      spreadName = "三張牌占卜";
      break;
    case "celtic":
      cardsToDraw = 10;
      spreadName = "凱爾特十字占卜";
      break;
  }

  // 洗牌
  const shuffledDeck = [...tarotDeck].sort(() => 0.5 - Math.random());
  const drawnCards = shuffledDeck.slice(0, cardsToDraw);

  // 顯示卡片
  drawnCards.forEach((card, index) => {
    // 決定正逆位 (50%機率)
    const isReversed = Math.random() > 0.5;
    card.isReversed = isReversed;

    // 創建卡片元素
    const cardElement = document.createElement("div");
    cardElement.className = "card w-40 h-64 md:w-48 md:h-72 relative";

    // 卡片背面
    const cardBack = document.createElement("div");
    cardBack.className = "card-back";
    cardBack.innerHTML =
      '<i class="fas fa-star text-white text-4xl"></i>';

    // 卡片正面
    const cardFront = document.createElement("div");
    cardFront.className = "card-front";

    // 卡片內容
    const cardName = document.createElement("h3");
    cardName.className = "text-lg font-bold text-center text-white";
    cardName.textContent = card.name;

    const cardImage = document.createElement("img");
    cardImage.className = "card-image mb-2";
    cardImage.src = card.image;
    cardImage.alt = card.name;
    if(isReversed){
      cardImage.style.transform = 'scaleY(-1)';
    }

    const cardPosition = document.createElement("div");
    cardPosition.className = "text-sm text-center";
    cardPosition.textContent = isReversed ? "逆位" : "正位";
    cardPosition.style.color = isReversed ? "#ef4444" : "#10b981";
    

    cardFront.appendChild(cardName);
    cardFront.appendChild(cardImage);
    cardFront.appendChild(cardPosition);

    // 添加到卡片元素
    cardElement.appendChild(cardBack);
    cardElement.appendChild(cardFront);

    // 添加到容器
    cardContainer.appendChild(cardElement);

    // 點擊翻牌
    cardElement.addEventListener("click", () => {
      // 顯示解釋
      showInterpretation(card, isReversed, index, spreadName);
    });

    // 延遲翻牌動畫
    setTimeout(() => {
      cardElement.classList.add("flipped");

    }, 100 + index * 200);
  });

  // 如果是凱爾特十字，添加特殊佈局
  if (drawMode === "celtic") {
    setTimeout(() => {
      cardContainer.classList.add(
        "grid",
        "grid-cols-3",
        "gap-4",
        "max-w-2xl",
        "mx-auto"
      );

      // 重新排列卡片
      const cards = Array.from(cardContainer.children);
      const newOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

      // 凱爾特十字的特殊排列
      newOrder.forEach((newIndex, oldIndex) => {
        cardContainer.appendChild(cards[newIndex]);
      });

      // 為中心卡片添加發光效果
      cards[0].classList.add("glow");
    }, 1000);
  } else {
    cardContainer.classList.remove(
      "grid",
      "grid-cols-3",
      "gap-4",
      "max-w-2xl",
      "mx-auto"
    );
  }

  const question = document.getElementById("questionInput").value.trim();
    document.getElementById("aiPrompt").value = generatePrompt(question,drawMode, drawnCards);
}

// 顯示牌義解釋
function showInterpretation(card, isReversed, position, spreadName) {
  interpretation.classList.remove("hidden");

  let positionText = "";

  // 根據位置添加解釋
  if (drawMode === "three") {
    const positions = ["過去", "現在", "未來"];
    positionText = `<p class="mb-2"><span class="text-purple-300">位置:</span> ${positions[position]}</p>`;
  } else if (drawMode === "celtic") {
    const positions = [
      "中心 - 當前情況",
      "橫跨 - 挑戰",
      "上方 - 目標",
      "下方 - 基礎",
      "左方 - 過去",
      "右方 - 未來",
      "背後 - 自我認知",
      "環境 - 外部影響",
      "希望與恐懼",
      "最終結果",
    ];
    positionText = `<p class="mb-2"><span class="text-purple-300">位置:</span> ${positions[position]}</p>`;
  }

  interpretationContent.innerHTML = `
          <div class="bg-gray-900 bg-opacity-70 rounded-lg p-4 mb-4">
              <h3 class="text-xl font-bold mb-2 flex items-center gap-2">
                  <span class="${
                    isReversed ? "text-red-400" : "text-green-400"
                  }">${card.name} ${
    isReversed ? "(逆位)" : "(正位)"
  }</span>
              </h3>
              ${positionText}
              <p class="mb-2"><span class="text-purple-300">牌陣:</span> ${spreadName}</p>
              <div class="border-t border-gray-700 my-3"></div>
              <p class="font-semibold mb-2">${
                isReversed ? "逆位意義:" : "正位意義:"
              }</p>
              <p class="mb-4">${
                isReversed ? card.reversed : card.upright
              }</p>
              <div class="border-t border-gray-700 my-3"></div>
              <p class="text-sm text-gray-400"></p>
          </div>
      `;

    // 往下滾動到 #interpretation 解釋區域
    interpretation.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }); 
}