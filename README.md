# 喜茶风格 Skill

> **让真实物件长出一句话。**

![喜茶风格 Skill 画廊预览](docs/assets/cases/berries/text.webp)

**中文介绍 · [English](README.en.md) · [在线画廊](https://iamxk116-ai.github.io/heytea-style-skill/) · [下载 v1.0.0](https://github.com/iamxk116-ai/heytea-style-skill/releases/tag/v1.0.0)**

这是一个面向 Codex 的照片转海报 Skill：保留真实照片的质感，用稚拙黑线、松散短文案和功能性小人，把普通照片重组成两套留白充足的视觉叙事。

<p>
  <img src="https://img.shields.io/badge/version-v1.0.0-24231F?style=flat-square" alt="version 1.0.0">
  <img src="https://img.shields.io/badge/output-two%20posters-D9C36A?style=flat-square" alt="two poster outputs">
  <img src="https://img.shields.io/badge/license-MIT-24231F?style=flat-square" alt="MIT license">
</p>

## 它做什么

| 输入 | 处理 | 默认输出 |
| --- | --- | --- |
| 一张真实照片 | 读取主体、材质、动作和可见辅助元素 | 文字融入版 × 1 |
| 一句创意需求 | 从主体特性提炼 2–8 字短文案 | 无字叙事版 × 1 |
| 可选参考图 | 只学习结构关系，不复制品牌资产 | 完整 Prompt 与修正方向 |

### 两套结果，不是加字与删字

- **文字融入版**：文案成为路径、标签、对话、桥梁或物体附着内容，参与画面的空间关系。
- **无字叙事版**：不出现文字、字母、数字或随机符号，只用真实物件与小人动作讲故事。

两套方案分别规划裁切、留白、物件关系和动作线，保持照片可识别，不把整张图变成卡通。

## 风格方法

**先读物，再写话，再让文字参与构图。**

1. **元素地图**：确认一个摄影主锚点，提取最多三个真实可见的辅助元素。
2. **概念与动词**：先决定物件正在发生什么，再写与主体有关的短句。
3. **稚拙手写**：细黑线、轻微抖动、歪斜独立笔画、松散间距；拒绝标准字体、书法和工整排版。
4. **功能性小人**：小人只负责推、拉、攀、看、量等动作，不建立品牌吉祥物形象。
5. **精确修正**：错字优先重做文字层；主体失真优先恢复摄影质感。

## 测试画廊

在线画廊包含 **9 组 / 27 张 WebP / 18 份完整 Prompt**，支持筛选、灯箱查看、Prompt 展开与复制：

**[打开在线画廊 →](https://iamxk116-ai.github.io/heytea-style-skill/)**

精选案例包括：海鲜牛肉锅、黄昏建筑、三种莓果、木质咖啡馆、拼图纸鹤、水洗蓝莓、西瓜、郁金香和橘猫。

## 安装与调用

### 用 Codex Skill Installer 安装

```text
请使用 $skill-installer 安装这个 Skill：
https://github.com/iamxk116-ai/heytea-style-skill/tree/main/heytea-style-skill
```

### 手动安装

下载 [heytea-style-skill.skill](https://github.com/iamxk116-ai/heytea-style-skill/releases/download/v1.0.0/heytea-style-skill.skill)，解压后将顶层文件夹放入：

```text
~/.codex/skills/heytea-style-skill
```

然后调用：

```text
$heytea-style-skill 使用这张照片生成一套文字融入版和一套无字叙事版。
```

Skill 不绑定特定图像模型。安装者使用自己 Codex 环境中可用的图像生成工具、模型和额度。

## 仓库结构

```text
heytea-style-skill/
├── heytea-style-skill/     # 可安装 Skill
├── docs/                   # GitHub Pages 与公开案例
├── dist/                   # .skill 安装包
├── LICENSE                # Skill、文档和脚本：MIT
└── NOTICE.md              # 图片权利与非官方声明
```

## 使用边界与许可

这是一个**非官方风格研究项目**，与喜茶品牌无隶属、授权、赞助或合作关系。不得复制喜茶官方 Logo、吉祥物、包装标识、原文案、具体广告版式或其他受保护素材。

- Skill 指令、文档与脚本：MIT License。
- `docs/assets/cases/` 中的原图与生成图片：保留全部权利，不包含在 MIT 授权范围内。
- 使用者应确保公开输入照片拥有必要的上传、编辑和再发布权利。

## 本地验证

```bash
python3 /path/to/skill-creator/scripts/quick_validate.py heytea-style-skill
python3 -m json.tool heytea-style-skill/evals/evals.json >/dev/null
python3 -m py_compile heytea-style-skill/scripts/composite_title_layer.py
unzip -t dist/heytea-style-skill.skill
```
