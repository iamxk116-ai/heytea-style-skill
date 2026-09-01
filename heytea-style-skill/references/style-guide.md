# Style Guide

## Style diagnosis

The reusable system is not a fixed brand layout. It combines:

- truthful photographic fragments;
- spacious white or warm-white ground;
- thin, naive black handwriting;
- restrained line-drawn interventions;
- short copy derived from the photographed subject;
- a visual joke or product proposition created by the relationship between text, object, and doodle.

The poster should feel casually authored, not templated. Learn these relationships without copying official marks, mascots, wording, or exact compositions.

## Default pair

Unless the user explicitly requests only one mode, create two separate posters from the same source:

1. `文字融入版`: copy and photographic elements form one composition.
2. `无字叙事版`: no text of any kind; object relationships and one clear doodle action carry the idea.

Do not reuse one layout with text hidden. Change the crop or scale, supporting-element selection, negative-space distribution, and action emphasis so each version resolves independently.

## Source-element mapping

Before making a prompt, write:

```text
main anchor: ...
supporting source elements (0-3): ...
recognizable traits: ...
action verb: ...
concept tension or joke: ...
elements that must stay photographic: ...
```

The main anchor carries recognition. Supporting elements may be separate cutouts of fruit, leaves, hands, utensils, packaging details, droplets, texture, or shadows only when visible in the source. One source object may appear once as the anchor and again as a small crop or detail only when repetition has a compositional purpose.

Do not flatten the whole photo into illustration. Do not invent ingredients, claims, or brand artifacts.

## Text roles

Choose one primary role and at most one secondary role:

- `phrase`: a loose short phrase with no formal title block;
- `annotation`: a thin note pointing to a real detail;
- `label`: a product, ingredient, flavor, or object tag grounded in the source;
- `dialogue`: a short line spoken or imagined by an object or tiny worker;
- `path`: text follows a curve, fall, pour, steam, orbit, or walking direction;
- `container`: text lives inside a tag, wrapper, cup, sign, ticket, or drawn shape;
- `bridge`: words connect two photographic pieces;
- `object-integrated`: a stroke or character visually touches, hides behind, rests on, or passes through the subject.

Text does not have to be the largest element. It must have a reason for its location.

## Composition recipes

### A. One anchor, one loose phrase

Use for a strong single subject. Place the photo anchor off-center, set one short phrase in the nearby negative space, and let one extended stroke or small doodle point toward the subject. Avoid a formal header.

### B. Anchor plus ingredient constellation

Use when the source visibly contains several ingredients or parts. Keep one main product anchor and arrange one to three smaller photographic cutouts around it. Add thin labels, a path, or a short paired phrase. Uneven spacing is welcome; clutter is not.

### C. Object becomes terrain or tool

Use a photographed rim, peel, stem, handle, surface, or silhouette as a hill, road, pool, vehicle, stage, or working tool for one primitive figure. The doodle must respond to the object's actual geometry.

### D. Text as object behavior

Let the phrase pour, hang, orbit, lean, stack, stretch, or get interrupted in a way that matches the subject. Keep all words readable; visual play should not create wrong characters.

### E. Two-object dialogue

Use when the source has a clear pair. Preserve both as photographic elements, give each a small spatial role, and use one or two very short lines as dialogue or contrast. Do not turn the result into a comic panel.

### F. Busy-photo recovery

Extract only the strongest anchor and up to three evidence-backed supporting elements. Remove scene clutter, preserve useful shadows or contact points, and rebuild a quiet white field.

## Doodle language

Doodles are functional marks, not decorative stickers.

- line: thin black pen by default, inconsistent pressure, small gaps, overshoots, hard bends, and bad joins;
- figures: faceless or nearly faceless, primitive proportions, open segmented outlines, practical poses;
- props: one ladder, bag, bucket, arrow, ground line, steam line, liquid arc, or diagram mark when it clarifies the action;
- action: pour, carry, push, pull, climb, inspect, wash, taste, collect, wait, point, or imagine;
- scale: subordinate to the photographic anchor.

Avoid smooth vectors, kawaii stickers, expressive mascots, detailed people, repeated decoration, dense comic scenes, and colored outlines. A larger line drawing is allowed only when its sparse shape helps organize the photo fragments.

## Lettering hierarchy

Thin black handwriting is the default identity signal. Heavy marker lettering is conditional, not primary.

- Keep most phrases short and light.
- Mix character sizes and tilts without making the text illegible.
- Stretch selected horizontal strokes to connect space or objects.
- Allow loose radicals, uneven baselines, awkward gaps, and nonparallel rows.
- Place phrases horizontally, vertically, scattered, curved, or object-attached according to the idea.
- Avoid automatic upper-left placement and perfect grids.

Read `lettering-guide.md` for copy and production rules.

## Prompt skeleton

```text
Use the uploaded image as the only factual source. Create an original vertical object-and-doodle poster on a clean white or soft off-white field.

Source preservation:
Keep [main anchor] photographic and recognizable, preserving its real texture, color, shape, and material. Extract only these visible supporting elements: [0-3 elements]. Do not invent ingredients or turn the whole image into a cartoon.

Concept:
[one sentence proposition]. Action verb: [verb].

Composition:
[recipe and spatial relationships]. Maintain generous active negative space. Do not use a fixed title block.

Text:
Exact short Chinese copy: "[copy]". Its role is [phrase / annotation / label / dialogue / path / container / bridge / object-integrated]. Draw it as thin black naive handwriting: loose structure, uneven sizes, slight tilts, irregular spacing, occasional stretched horizontal strokes, imperfect joins, readable characters. No standard font, no calligraphy, no rounded cute font, no neat typesetting.

Doodle intervention:
[one source-responsive action]. Thin uneven black pen lines, primitive and functional, no polished mascot.

Constraints:
No HEYTEA logo or mascot, no copied reference wording or layout, no watermark, no fake packaging marks, no unsupported product claims, no extra text, no gradients, no sticker collage, no full cartoon conversion.
```

For `无字叙事版`, remove the text section and explicitly forbid all text, letters, numbers, labels, and random glyphs.
