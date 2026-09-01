---
name: heytea-style-skill
description: >-
  Turn a user-supplied photo into two complementary spacious object-and-doodle
  posters by default: one with thin irregular subject-derived Chinese handwriting
  integrated into the composition and one text-free narrative version. Use for
  喜茶感实物手绘海报, 细黑线稚拙手写, 真实物件加涂鸦, 产品灵感小画, or 白底松散文字构图.
---

# 喜茶风格 Skill

Create an original poster language from the user's photo: recognizable photographic objects become anchors, ingredients, terrain, props, or stages; thin naive handwriting and black-line doodles connect them into one idea. Preserve photographic texture. Do not turn the whole image into a cartoon.

This is a non-official study workflow. Learn structural principles only. Never reproduce HEYTEA logos, mascots, packaging marks, source wording, or an exact reference layout.

## Required reading

1. Read `references/style-guide.md` before analysis, prompting, or generation.
2. For any image containing text, also read `references/lettering-guide.md`.
3. Review the result with `references/evaluation.md`.

## Workflow

### 1. Read the source image

Make a source-element map before composing:

- `main anchor`: the most recognizable subject or product;
- `supporting elements`: zero to three source-derived objects, ingredients, textures, gestures, shadows, or fragments that strengthen the idea;
- `subject traits`: shape, material, flavor, action, season, mood, use, visual metaphor, or relationship;
- `preservation rule`: what must remain photographic and recognizable.

Use real extracted elements only when they are visibly supported by the source. Do not invent product ingredients or claims.

### 2. Write the concept before the layout

Choose one clear proposition and one action verb. Generate three to five short copy candidates from the subject traits, then keep the strongest one. Copy may use a light homophone, personification, relaxed humor, ingredient language, or product-inspiration phrasing, but it must remain natural and relevant.

Default copy length:

- one phrase of 2-8 Chinese characters; or
- two micro-phrases totaling no more than 12 Chinese characters.

Avoid generic slogans, forced puns, long sentences, unsupported efficacy claims, and copying wording from references.

### 3. Assign a text role

Text is a compositional material, not automatically a title. Assign one primary role:

- loose phrase above or beside the subject;
- object label or ingredient note;
- dialogue or thought fragment;
- tag, ticket, wrapper, sign, or container writing;
- curved path, falling rhythm, or bridge between elements;
- phrase partially tucked behind or threaded through an object;
- sparse paired phrases that balance two source elements.

Do not reserve a fixed upper-left title block unless the subject and phrase genuinely need it.

### 4. Choose a mode

- `双方案` (default): generate two independent concepts from the same source image. One is `文字融入版`; the other is `无字叙事版`. They must differ in composition, element relationships, and narrative priority, not merely by adding or removing text.
- `文字融入版`: short subject-derived copy participates in the composition. Use alone only when the user explicitly requests a single text version.
- `无字叙事版`: no text, letters, numbers, labels, or random glyphs; object relationships and doodle actions carry the idea. Use alone only when the user explicitly requests a single no-text version.

When the user does not specify a mode, always use `双方案`. A request such as "做一张", "生成一下", or "试试看" does not override this default. Only an explicit request for one text version or one no-text version does.

### 5. Build the image

For `文字融入版`, separate semantic accuracy from visual generation when needed:

1. Generate or edit the photographic base with the main anchor and selected supporting elements.
2. Plan one or more small lettering zones around the actual object relationships; do not create a generic empty title rectangle.
3. Generate each short lettering layer separately when exact Chinese matters.
4. Composite accepted lettering layers without changing the source objects. `scripts/composite_title_layer.py` can place a lettering layer; run it once per zone when multiple phrases are used.

A real handwritten layer supplied or drawn for the exact phrase remains the most reliable solution.

## Core visual rules

- Preserve one main photographic anchor and optionally zero to three recognizable source-derived supporting elements.
- Keep a clean white or soft off-white field with active negative space.
- Default to thin black pen lines for both handwriting and doodles: uneven pressure, slight tremor, blunt or broken ends, bad joins, and no vector polish.
- Handwriting must be naive, loose, tilted, irregularly sized, and unevenly spaced. Horizontal strokes may stretch; character structures may loosen while remaining readable.
- Reject standard fonts, calligraphy, rounded cute fonts, brush-script elegance, and neat commercial typography.
- Let text touch the visual logic: point, label, orbit, bridge, interrupt, sit on, hide behind, or answer the object.
- Doodles should transform the meaning of real elements rather than decorate empty areas.
- Keep figures primitive and functional, with no detailed face, fashion, or mascot identity.
- Use heavy marker lettering only when the source has enough visual weight and the concept explicitly needs one emphatic word. It is never the automatic default.
- Prefer 3:4 or 2:3 portrait output; use the image tool's supported portrait size.

## Output contract

Produce the selected image or images first when an image tool is available. For the default `双方案`, output both finished images, with the `文字融入版` first and the `无字叙事版` second, followed by a compact record:

```markdown
## 成品
- 文字融入版：[image or output path]
- 无字叙事版：[image or output path]

## 概念
- 主体：...
- 提取元素：...
- 文案：...
- 文字角色：... / 无字

## 生成 Prompt
...

## 修正 Prompt
...
```

If no image tool is available, omit `成品`. Do not claim missing reference assets were used.

## Correction priorities

1. If the source becomes cartoonish, restore photographic texture first.
2. If the copy is generic, rewrite it from the subject traits before changing layout.
3. If text looks like a font, keep the base and regenerate only the affected lettering layer.
4. If the poster looks like a title plus product cutout, reassign the text as a label, path, dialogue, tag, or object-attached phrase.
5. If the composition is busy, remove invented props and retain only source-derived support elements plus one clear doodle action.
