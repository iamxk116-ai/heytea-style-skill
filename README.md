# 喜茶风格 Skill

> 让真实物件长出一句话。

保留照片的真实质感，用稚拙细黑线、松散短文案和功能性小人，把一张普通照片重组成两套留白充足的海报。

![三种莓果文字融入版示例](docs/assets/cases/berries/text.webp)

## 能做什么

- 从用户照片中确定一个主要摄影锚点和少量真实辅助元素。
- 根据主体特性写出简短、自然、可参与构图的中文文案。
- 默认生成两套独立结果：`文字融入版` 与 `无字叙事版`。
- 使用细黑线、稚拙手写和功能性小人建立新的物件关系。
- 保留摄影材质，不把主体整体转换成卡通或品牌吉祥物。

## 在线画廊

GitHub Pages 展示 9 组公开测试，每组包含原图、文字融入版、无字叙事版和完整生成 Prompt：

**[打开喜茶风格 Skill 在线画廊](https://iamxk116-ai.github.io/heytea-style-skill/)**

本地预览入口：[docs/index.html](docs/index.html)

## 安装

下载 [heytea-style-skill.skill](dist/heytea-style-skill.skill)，解压后把 `heytea-style-skill` 文件夹放入：

```text
~/.codex/skills/heytea-style-skill
```

调用示例：

```text
$heytea-style-skill 使用这张照片生成一套文字融入版和一套无字叙事版。
```

## 默认结果

1. `文字融入版`：文案来自主体特性，并作为路径、标签、对话或物体关系的一部分。
2. `无字叙事版`：禁止文字、字母、数字和随机符号，仅依靠真实物件与小人动作讲故事。

两套方案必须分别设计裁切、留白、动作和叙事重点，不能只是同一张图加字或删字。

## 仓库结构

```text
.
├── heytea-style-skill/   # 可安装 Skill
├── dist/                 # .skill 安装包
├── docs/                 # GitHub Pages 与公开案例
├── LICENSE               # Skill、文档和脚本的 MIT 许可
└── NOTICE.md             # 图片权利与非官方声明
```

## 验证

```bash
python3 -m json.tool heytea-style-skill/evals/evals.json >/dev/null
python3 -m py_compile heytea-style-skill/scripts/composite_title_layer.py
python3 /path/to/skill-creator/scripts/quick_validate.py heytea-style-skill
unzip -t dist/heytea-style-skill.skill
```

## 使用边界

这是一个非官方风格研究项目，与喜茶品牌无隶属、授权或合作关系。项目只研究实物摄影、稚拙手写、功能性涂鸦与留白之间的结构关系；不得复制喜茶官方 Logo、吉祥物、包装标识、原文案、具体广告版式或其他受保护素材。

## 许可

- Skill 指令、文档与脚本：MIT License。
- `docs/assets/cases/` 中的原图及生成图片：保留全部权利，不包含在 MIT 授权中。
