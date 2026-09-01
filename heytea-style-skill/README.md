# 喜茶风格 Skill

把用户照片里的真实主体和少量辅助元素重新组织成留白充足的竖版海报。默认使用细黑线、松散、大小不一的稚拙中文手写，让文字成为标签、路径、对话、注释或物体关系的一部分，而不是固定的大标题。

这是一个非官方风格研究工作流，只学习实物摄影、手写文字和功能性涂鸦之间的结构关系。不得复刻喜茶官方 Logo、吉祥物、包装标识、原文案或具体广告版式。

## 核心能力

- 保留主体与 0–3 个可追溯到原图的辅助实物元素。
- 从主体的形状、口感、动作、季节、用途或情绪中生成短文案。
- 支持轻微谐音、拟人、松弛幽默和产品灵感表达，但不硬造梗。
- 默认文案为 2–8 个汉字，必要时拆成两组微文案以降低错字风险。
- 文字可作注释、标签、对话、路径、桥梁或物体附着文字。
- 保留照片质感，以细黑线手写和功能性涂鸦介入。

## 默认输出

默认生成两套独立成品：

- `文字融入版`：短文案参与构图，不预设固定标题区。
- `无字叙事版`：彻底无文字，依靠真实物件关系和一条明确动作线讲故事。

两套共用同一张输入图，但分别设计裁切、元素关系、留白和叙事重点，不能只是同一版加字或删字。只有用户明确要求单一模式时才输出一套。

## 安装

将整个 `heytea-style-skill` 文件夹复制到：

```text
~/.codex/skills/heytea-style-skill
```

然后在 Codex 中使用：

```text
$heytea-style-skill 使用这张照片生成一套文字融入版和一套无字叙事版。
```

## 目录

```text
heytea-style-skill/
├── SKILL.md
├── agents/openai.yaml
├── assets/
├── references/
│   ├── style-guide.md
│   ├── lettering-guide.md
│   └── evaluation.md
├── scripts/composite_title_layer.py
└── evals/evals.json
```

## 验证

```bash
python3 -m json.tool evals/evals.json >/dev/null
python3 -m py_compile scripts/composite_title_layer.py
python3 /path/to/skill-creator/scripts/quick_validate.py .
```
