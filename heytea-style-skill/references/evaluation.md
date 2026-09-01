# Evaluation Guide

Review the final image, not only the prompt.

## Pass criteria

- Unless the user explicitly requested one mode, two finished images are delivered: one `文字融入版` and one `无字叙事版`.
- The two default outputs use independently resolved compositions, not one layout with text toggled.
- The main subject remains recognizable and photographic.
- Every supporting photographic fragment is visibly derived from the source or supplied facts.
- The poster has generous active negative space without becoming an empty template.
- The concept is based on a real subject trait, not a generic slogan.
- Text has an explicit compositional role and interacts with an object, path, label system, dialogue, or spatial relationship.
- Default handwriting uses thin black, loose, irregular strokes rather than a heavy marker title.
- Characters vary naturally in tilt, scale, spacing, joins, and horizontal-stroke length while remaining readable.
- Doodles transform or explain the role of real objects instead of filling space.
- The image does not reproduce official logos, mascots, source wording, or exact layouts.

For `文字融入版`:

- copy is short, subject-derived, correctly written, and free of unsupported claims;
- wordplay or homophones feel relevant rather than forced;
- text does not automatically occupy a reserved upper-left title block;
- standard fonts, calligraphy, rounded cute fonts, and neat commercial typography are absent;
- if exact Chinese required separate layers, the base stayed unchanged during lettering correction.

For `无字叙事版`:

- there is no text, letter, number, label, watermark, or random glyph;
- object relationships and one clear action carry the idea;
- no empty title zone remains from a text-first template.

## Failure modes

- `font drift`: thin handwriting is replaced by a standard font or rounded cute type;
- `marker drift`: every concept becomes a large heavy black title;
- `title-template drift`: text is always upper-left and objects are always lower-right;
- `generic copy`: the phrase could fit any unrelated photo;
- `forced wordplay`: the pun needs explanation or distorts the subject;
- `text detachment`: words float as a caption instead of participating in composition;
- `source loss`: photo texture disappears or source elements become invented illustrations;
- `element inflation`: invented fruit, ingredients, props, or claims enter the poster;
- `decorative doodles`: lines and figures do not respond to object geometry;
- `brand copying`: official marks, mascot identity, source wording, or exact layouts are reproduced;
- `single-pass trap`: the entire image changes repeatedly while fixing one wrong character.

## Review questions

1. What exact source trait produced the idea and copy?
2. Which photographic elements were extracted, and can each be traced to the source?
3. What role does the text play besides being readable?
4. Does the lettering feel thin, loose, irregular, and non-font-like?
5. Is every character correct?
6. Could any word, doodle, or supporting object be removed?
7. Is the result original and clearly free of official brand assets?

## Release checks

- Public files contain no absolute workstation paths, social-media source filenames, chat caches, credentials, or raw extraction scripts.
- Public packages do not contain unavailable private reference indexes or claim missing cutouts as usable inputs.
- `scripts/composite_title_layer.py` exists and compiles when documentation mentions it.
- JSON evals parse and Python helper scripts compile.
- `.DS_Store`, stale output packages, and unrelated generated files are not staged.
