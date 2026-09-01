# Lettering Guide

Use this guide for every `文字融入版`.

## The target

The default lettering looks drawn with a thin black pen by an untrained but visually sensitive hand. It is not a font with rough texture added.

Required traits:

- thin black strokes with small pressure changes;
- slight tremor, blunt ends, broken joins, occasional overshoots;
- characters may tilt and vary in size;
- radicals and internal spaces may loosen while staying readable;
- horizontal strokes may extend farther than expected;
- rows and columns may drift, with irregular word spacing;
- the overall rhythm is relaxed, sparse, and deliberately unpolished.

Reject standard fonts, neat handwriting, brush calligraphy, elegant dry-brush scripts, rounded cute lettering, uniform monoline type, perfect grids, and balanced commercial title blocks.

Heavy black marker writing is an exception for one emphatic word or a visually heavy source. It must never replace the default thin-line system automatically.

## Copy generation

Derive copy from visible or user-stated subject traits. Use this sequence:

1. List factual nouns: subject, ingredient, material, place, gesture, season.
2. List one sensory or behavioral trait: sour, crisp, soft, drifting, stacked, waiting, melting, turning.
3. Choose one language device: direct naming, personification, light homophone, relaxed joke, product proposition, or ingredient note.
4. Draft three to five candidates.
5. Remove the generic, forced, long, or hard-to-render candidates.

Preferred length:

- 2-8 Chinese characters for one phrase;
- two micro-phrases totaling at most 12 characters;
- labels of 2-5 characters.

Good principles:

- the phrase could plausibly belong only to this subject;
- the joke is understandable without explanation;
- the copy sounds spoken, not like advertising boilerplate;
- a homophone adds meaning instead of existing only for cleverness;
- ingredient or product language is factually supported.

Avoid generic encouragement, long prose, copied campaign wording, forced puns, rare characters, mixed scripts without a reason, and claims not supported by the source.

## Placement grammar

Choose placement after assigning the text role:

- `loose horizontal`: uneven baseline near a broad object edge;
- `loose vertical`: one drifting column, not a ceremonial title;
- `scattered`: two or three short units separated by photo elements;
- `curved path`: follows steam, liquid, a peel, a handle, or motion;
- `object-attached`: touches or partially hides behind the subject;
- `label cluster`: small notes around visible ingredients or parts;
- `inside a drawn container`: tag, sign, wrapper, speech shape, or diagram;
- `paired`: two micro-lines balancing two source objects.

Do not default to a large upper-left rectangle. Do not force four characters into a 2x2 grid. Text may be small, but it cannot feel incidental or randomly pasted on.

## Production workflow

Image models often preserve text texture but normalize the glyph skeleton. For exact Chinese:

1. Lock the photographic base and source-element layout.
2. Mark each lettering zone and its role.
3. Generate one short phrase per lettering layer when practical.
4. Ask for only exact black handwriting on white or transparent background.
5. Review spelling and glyph readability before compositing.
6. Composite layers one by one without regenerating the base.

`scripts/composite_title_layer.py` can place each accepted layer. A real handwritten layer or a separately generated exact lettering layer remains preferable to a system font.

Fidelity order:

1. real hand-drawn lettering for the exact copy;
2. custom lettering layer drawn from the required skeleton traits;
3. title-only image generation with a valid style reference;
4. all-in-one poster generation for drafts.

## Lettering-layer prompt

```text
Create only the exact Chinese handwriting below on a plain white or transparent background.

Exact text:
"[copy]"

Role and layout:
[role], [horizontal / vertical / scattered / curved / attached], fitted to [object relationship].

Lettering:
Thin black pen handwriting, naive and loose, readable but not typeset. Uneven character sizes, slight individual tilts, irregular spacing, loose internal structures, imperfect joins, blunt or broken ends, small pressure variation, and one or two naturally elongated horizontal strokes where useful. Preserve the exact characters.

No standard font, no calligraphy, no brush script, no rounded cute font, no neat baseline, no perfect grid, no extra characters, no pinyin, no English, no logo, no illustration, no object, no watermark.
```

## Corrections

If it looks like a font:

```text
Keep the exact wording and placement. Redraw only the lettering layer with less regular glyph skeletons: vary character scale and tilt, loosen radicals, break the baseline, lengthen selected horizontal strokes, introduce imperfect joins and blunt endings. Keep the strokes thin and readable. No font skeleton, calligraphy, rounded cute handwriting, or neat typesetting.
```

If text is visually detached:

```text
Keep the photographic base. Reposition only the lettering so it performs its assigned role: [point to / orbit / bridge / rest on / hide behind / follow] [source element]. Preserve negative space and exact spelling.
```

If characters are wrong, shorten the copy or split it into multiple exact layers. Do not keep regenerating the full poster.
