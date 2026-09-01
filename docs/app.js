const cases = [
  {
    id: "hotpot",
    title: "海鲜牛肉锅",
    copy: "锅里见",
    source: "圆形锅、牛肉、芝士、贝壳、虾与汤勺",
  },
  {
    id: "architecture",
    title: "黄昏高楼与路灯",
    copy: "灯亮了",
    source: "玻璃高楼、住宅楼、三头路灯、粉蓝天空与树冠",
  },
  {
    id: "berries",
    title: "三种莓果",
    copy: "莓好碰头",
    source: "覆盆子、蓝莓、黑莓与透明果盒",
  },
  {
    id: "coffee",
    title: "木质咖啡馆",
    copy: "先坐一杯",
    source: "白色拿铁杯、拉花、木吧台、水龙头与麻袋",
  },
  {
    id: "puzzle",
    title: "拼图与纸鹤",
    copy: "慢慢拼好",
    source: "蓝灰拼图、折纸鹤、木桌与窗光",
  },
  {
    id: "blueberries",
    title: "水洗蓝莓",
    copy: "洗蓝莓呀",
    source: "湿蓝莓、水流、水滴与透明果盒",
  },
  {
    id: "watermelon",
    title: "吃过的半只西瓜",
    copy: "瓜分快乐",
    source: "真实西瓜、湿润果肉、瓜皮、籽与塑料袋",
  },
  {
    id: "tulips",
    title: "黄白粉郁金香",
    copy: "郁见春光",
    source: "两朵黄白粉郁金香、深绿叶片、花茎与日照明暗",
  },
  {
    id: "orange-cat",
    title: "眯眼张嘴的橘猫",
    copy: "喵两句",
    source: "橘猫、眯眼张嘴表情、胡须、揣起前爪与橘白毛色",
  },
];

const promptCache = new Map();

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);
}

async function loadPrompt(path) {
  if (!promptCache.has(path)) {
    promptCache.set(path, fetch(path).then(response => {
      if (!response.ok) throw new Error(`Prompt 加载失败：${path}`);
      return response.text();
    }));
  }
  return promptCache.get(path);
}

function imageCard(spec) {
  const article = document.createElement("article");
  article.className = "media-card";
  article.dataset.role = spec.role;
  article.innerHTML = `
    <div class="media-frame" data-lightbox-src="${escapeHtml(spec.image)}" data-caption="${escapeHtml(spec.title)}">
      <img src="${escapeHtml(spec.image)}" alt="${escapeHtml(spec.alt)}" loading="lazy" width="1024" height="1536">
    </div>
    <div class="card-body">
      <div class="card-label">
        <h4>${escapeHtml(spec.title)}</h4>
        <span class="role-mark" aria-hidden="true"></span>
      </div>
      ${spec.note ? `<p class="source-note">${escapeHtml(spec.note)}</p>` : ""}
      ${spec.prompt ? `
        <details class="prompt-details">
          <summary>查看完整生成 Prompt</summary>
          <pre>加载 Prompt…</pre>
          <button class="copy-button" type="button">复制 Prompt</button>
        </details>` : ""}
    </div>`;

  if (spec.prompt) {
    const pre = article.querySelector("pre");
    const button = article.querySelector(".copy-button");
    loadPrompt(spec.prompt).then(prompt => {
      pre.textContent = prompt;
      button.dataset.prompt = prompt;
    }).catch(error => {
      pre.textContent = error.message;
      button.disabled = true;
    });
  }
  return article;
}

function renderGallery() {
  const root = document.querySelector("#gallery-list");
  cases.forEach((item, index) => {
    const section = document.createElement("section");
    section.className = "case-group";
    section.dataset.case = item.id;
    section.innerHTML = `
      <header class="case-header">
        <div>
          <span class="case-index">${String(index + 1).padStart(2, "0")} / ${String(cases.length).padStart(2, "0")}</span>
          <h3>${escapeHtml(item.title)}</h3>
        </div>
        <p class="case-copy">${escapeHtml(item.copy)}</p>
      </header>
      <div class="case-grid"></div>`;

    const grid = section.querySelector(".case-grid");
    grid.append(
      imageCard({
        image: `assets/cases/${item.id}/source.webp`,
        title: "原始输入",
        alt: `${item.title}原始照片`,
        role: "source",
        note: `提取元素：${item.source}`,
      }),
      imageCard({
        image: `assets/cases/${item.id}/text.webp`,
        title: `文字融入版：${item.copy}`,
        alt: `${item.title}文字融入版海报，文案${item.copy}`,
        role: "text",
        prompt: `assets/prompts/${item.id}-text.txt`,
      }),
      imageCard({
        image: `assets/cases/${item.id}/no-text.webp`,
        title: "无字叙事版",
        alt: `${item.title}无字叙事版海报`,
        role: "no-text",
        prompt: `assets/prompts/${item.id}-no-text.txt`,
      }),
    );
    root.append(section);
  });
}

function setFilter(filter) {
  document.querySelectorAll(".filter").forEach(button => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });
  document.querySelectorAll(".media-card").forEach(card => {
    const role = card.dataset.role;
    card.hidden = filter !== "all" && role !== "source" && role !== filter;
  });
}

function showToast() {
  const toast = document.querySelector("#toast");
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1500);
}

renderGallery();

document.addEventListener("click", async event => {
  const filter = event.target.closest(".filter");
  if (filter) setFilter(filter.dataset.filter);

  const copyButton = event.target.closest(".copy-button");
  if (copyButton?.dataset.prompt) {
    await navigator.clipboard.writeText(copyButton.dataset.prompt);
    showToast();
  }

  const frame = event.target.closest("[data-lightbox-src]");
  if (frame) {
    const dialog = document.querySelector("#lightbox");
    const image = document.querySelector("#lightbox-image");
    image.src = frame.dataset.lightboxSrc;
    image.alt = frame.dataset.caption;
    document.querySelector("#lightbox-caption").textContent = frame.dataset.caption;
    dialog.showModal();
  }
});

document.querySelector("#lightbox-close").addEventListener("click", () => {
  document.querySelector("#lightbox").close();
});

document.querySelector("#lightbox").addEventListener("click", event => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});
