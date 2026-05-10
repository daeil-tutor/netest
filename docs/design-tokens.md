# 디자인 토큰 매핑 테이블

> Figma 변수명 ↔ CSS custom property 매핑.
> Figma: https://figma.com/design/7IeRNVQ483UAQJJmgBIozv/
>
> Claude Code가 Figma 디자인 구현 시 이 문서를 참조합니다.
> 토큰 추가/변경 시 이 문서도 업데이트하세요.

## 네이밍 규칙

- Figma `/` → CSS `-` 변환
- 예: `primary/900` → `--color-primary-900`
- 예: `Spacing/spacing-xl` → `--spacing-xl`
- 예: `Type/H1Headline` → `--type-h1` (또는 개별: `--type-h1-font-size` 등)

---

## 색상 (Colors)

### Primary & Brand

| Figma 변수명 | CSS Property          | 값      | 용도            |
| ------------ | --------------------- | ------- | --------------- |
| primary/900  | `--color-primary-900` | #01326b | 강조 짙음       |
| primary/800  | `--color-primary-800` | #01418c | 강조            |
| primary/700  | `--color-primary-700` | #0154b5 | 강조            |
| primary/600  | `--color-primary-600` | #026ce8 | **브랜드 메인** |
| primary/500  | `--color-primary-500` | #0277ff | 강조 밝음       |
| primary/400  | `--color-primary-400` | #3592ff | 강조 밝음       |
| primary/300  | `--color-primary-300` | #55a4ff | 강조 매우 밝음  |
| primary/200  | `--color-primary-200` | #8bc0ff | 배경            |
| primary/100  | `--color-primary-100` | #b1d5ff | 배경            |
| primary/50   | `--color-primary-50`  | #e6f1ff | 배경 매우 밝음  |

**Semantic:**

- `--color-brand-primary`: primary/600
- `--color-brand-secondary`: primary/400

### Yellow (Accent)

| Figma 변수명 | CSS Property         | 값      | 용도      |
| ------------ | -------------------- | ------- | --------- |
| yellow/900   | `--color-yellow-900` | #643310 | 짙음      |
| yellow/800   | `--color-yellow-800` | #824315 |           |
| yellow/700   | `--color-yellow-700` | #a8571c |           |
| yellow/600   | `--color-yellow-600` | #d86f23 | 메인      |
| yellow/500   | `--color-yellow-500` | #ed7a27 | **경고**  |
| yellow/400   | `--color-yellow-400` | #f19552 |           |
| yellow/300   | `--color-yellow-300` | #f3a66e |           |
| yellow/200   | `--color-yellow-200` | #f7c29c | 배경      |
| yellow/100   | `--color-yellow-100` | #f9d6bc |           |
| yellow/50    | `--color-yellow-50`  | #fdf2e9 | 배경 밝음 |

### Blue/Cyan (Accent)

| Figma 변수명 | CSS Property       | 값      | 용도      |
| ------------ | ------------------ | ------- | --------- |
| blue/900     | `--color-blue-900` | #005c59 | 짙음      |
| blue/800     | `--color-blue-800` | #007874 |           |
| blue/700     | `--color-blue-700` | #009b96 |           |
| blue/600     | `--color-blue-600` | #00c7c0 | 메인      |
| blue/500     | `--color-blue-500` | #00dbd3 |           |
| blue/400     | `--color-blue-400` | #33e2dc |           |
| blue/300     | `--color-blue-300` | #54e7e2 |           |
| blue/200     | `--color-blue-200` | #8aeeeb | 배경      |
| blue/100     | `--color-blue-100` | #b0f4f1 |           |
| blue/50      | `--color-blue-50`  | #e6fbfb | 배경 밝음 |

### Green (Success)

| Figma 변수명 | CSS Property        | 값      | 용도      |
| ------------ | ------------------- | ------- | --------- |
| green/900    | `--color-green-900` | #125a34 | 짙음      |
| green/800    | `--color-green-800` | #187644 |           |
| green/700    | `--color-green-700` | #1f9958 |           |
| green/600    | `--color-green-600` | #28c471 | **성공**  |
| green/500    | `--color-green-500` | #2cd77c |           |
| green/400    | `--color-green-400` | #56df96 |           |
| green/300    | `--color-green-300` | #72e4a7 |           |
| green/200    | `--color-green-200` | #9eedc3 | 배경      |
| green/100    | `--color-green-100` | #bef3d6 |           |
| green/50     | `--color-green-50`  | #eafbf2 | 배경 밝음 |

### Grey (Neutral)

| Figma 변수명 | CSS Property       | 값      | 용도        |
| ------------ | ------------------ | ------- | ----------- |
| grey/900     | `--color-grey-900` | #1a1a1a | 텍스트 주요 |
| grey/800     | `--color-grey-800` | #333333 |             |
| grey/700     | `--color-grey-700` | #505050 |             |
| grey/600     | `--color-grey-600` | #666666 | 텍스트 보조 |
| grey/500     | `--color-grey-500` | #888888 | 텍스트 약함 |
| grey/400     | `--color-grey-400` | #999999 |             |
| grey/300     | `--color-grey-300` | #bbbbbb | 보더        |
| grey/200     | `--color-grey-200` | #dddddd | 보더 밝음   |
| grey/100     | `--color-grey-100` | #f2f2f2 | 배경        |
| grey/50      | `--color-grey-50`  | #f9f9f9 | 배경 밝음   |

**Semantic:**

- `--color-text-primary`: grey/900
- `--color-text-secondary`: grey/600
- `--color-text-tertiary`: grey/500
- `--color-bg-primary`: white/100%
- `--color-bg-secondary`: grey/50
- `--color-bg-tertiary`: grey/100
- `--color-border-primary`: grey/300
- `--color-border-secondary`: grey/200
- `--color-border-light`: grey/100

### White & Black (with opacity)

| Figma            | CSS                 | 값        |
| ---------------- | ------------------- | --------- |
| white/White 100% | `--color-white-100` | #ffffff   |
| white/White 90%  | `--color-white-90`  | #ffffffe5 |
| white/White 80%  | `--color-white-80`  | #ffffffcc |
| ...              | ...                 | ...       |
| black/Black 100% | `--color-black-100` | #000000   |
| black/Black 90%  | `--color-black-90`  | #000000e5 |
| ...              | ...                 | ...       |

---

## 스페이싱 (Spacing)

| Figma 변수명         | CSS Property     | 값   | 용도      |
| -------------------- | ---------------- | ---- | --------- |
| Spacing/spacing-none | `--spacing-none` | 0    | 간격 없음 |
| Spacing/spacing-xxs  | `--spacing-xxs`  | 4px  | 극소      |
| Spacing/spacing-xs   | `--spacing-xs`   | 8px  | 매우 작음 |
| Spacing/spacing-sm   | `--spacing-sm`   | 12px | 작음      |
| Spacing/spacing-md   | `--spacing-md`   | 16px | 기본      |
| Spacing/spacing-lg   | `--spacing-lg`   | 20px | 보통      |
| Spacing/spacing-xl   | `--spacing-xl`   | 24px | 큼        |
| Spacing/spacing-2xl  | `--spacing-2xl`  | 32px | 매우 큼   |
| Spacing/spacing-3xl  | `--spacing-3xl`  | 40px | 극대      |

---

## 반경 (Border Radius)

| Figma 변수명       | CSS Property    | 값   | 용도        |
| ------------------ | --------------- | ---- | ----------- |
| Radius/radius-none | `--radius-none` | 0    | 각진 모서리 |
| Radius/radius-xxs  | `--radius-xxs`  | 2px  | 극소        |
| Radius/radius-xs   | `--radius-xs`   | 4px  | 매우 작음   |
| Radius/radius-sm   | `--radius-sm`   | 8px  | **기본**    |
| Radius/radius-lg   | `--radius-lg`   | 16px | 큼          |

---

## 타이포그래피 (Typography)

### Font Family

| Figma                   | CSS                        | 값                               |
| ----------------------- | -------------------------- | -------------------------------- |
| font family/font family | `--font-family-pretendard` | "pretendard", -apple-system, ... |

### Font Size (Primitive)

| Figma        | CSS              | 값   |
| ------------ | ---------------- | ---- |
| font size/10 | `--font-size-10` | 10px |
| font size/11 | `--font-size-11` | 11px |
| ...          | ...              | ...  |
| font size/28 | `--font-size-28` | 28px |

**Semantic aliases:**

- `--font-size-xs`: 12px
- `--font-size-sm`: 14px
- `--font-size-base`: 16px
- `--font-size-lg`: 18px
- `--font-size-xl`: 24px
- `--font-size-2xl`: 28px

### Font Weight

| Figma           | CSS                     | 값  |
| --------------- | ----------------------- | --- |
| font weight/400 | `--font-weight-regular` | 400 |
| font weight/700 | `--font-weight-bold`    | 700 |

**Semantic:**

- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600

### Line Height (Primitive)

| Figma          | CSS                | 값   |
| -------------- | ------------------ | ---- |
| line height/14 | `--line-height-14` | 14px |
| line height/16 | `--line-height-16` | 16px |
| line height/18 | `--line-height-18` | 18px |
| line height/20 | `--line-height-20` | 20px |
| line height/28 | `--line-height-28` | 28px |
| line height/32 | `--line-height-32` | 32px |

### Typography Composite Styles

#### Headline

| Figma           | CSS Shorthand | CSS Individual                                                                               | 구성       |
| --------------- | ------------- | -------------------------------------------------------------------------------------------- | ---------- |
| Type/H1Headline | `--type-h1`   | `--type-h1-font-size`: 28px<br>`--type-h1-font-weight`: 700<br>`--type-h1-line-height`: 32px | Bold 28/32 |
| Type/H2Headline | `--type-h2`   | `--type-h2-font-size`: 24px<br>`--type-h2-font-weight`: 700<br>`--type-h2-line-height`: 28px | Bold 24/28 |

#### Subtitle

| Figma           | CSS Shorthand | CSS Individual                                                                               | 구성       |
| --------------- | ------------- | -------------------------------------------------------------------------------------------- | ---------- |
| Type/S1Subtitle | `--type-s1`   | `--type-s1-font-size`: 18px<br>`--type-s1-font-weight`: 700<br>`--type-s1-line-height`: 20px | Bold 18/20 |
| Type/S2Subtitle | `--type-s2`   | `--type-s2-font-size`: 16px<br>`--type-s2-font-weight`: 700<br>`--type-s2-line-height`: 20px | Bold 16/20 |

#### Body

| Figma       | CSS Shorthand | CSS Individual                                                                               | 구성          |
| ----------- | ------------- | -------------------------------------------------------------------------------------------- | ------------- |
| Type/B1Body | `--type-b1`   | `--type-b1-font-size`: 15px<br>`--type-b1-font-weight`: 700<br>`--type-b1-line-height`: 18px | Bold 15/18    |
| Type/B2Body | `--type-b2`   | `--type-b2-font-size`: 14px<br>`--type-b2-font-weight`: 400<br>`--type-b2-line-height`: 16px | Regular 14/16 |
| Type/B3Body | `--type-b3`   | `--type-b3-font-size`: 14px<br>`--type-b3-font-weight`: 700<br>`--type-b3-line-height`: 16px | Bold 14/16    |
| Type/B4Body | `--type-b4`   | `--type-b4-font-size`: 13px<br>`--type-b4-font-weight`: 700<br>`--type-b4-line-height`: 16px | Bold 13/16    |
| Type/B5Body | `--type-b5`   | `--type-b5-font-size`: 12px<br>`--type-b5-font-weight`: 400<br>`--type-b5-line-height`: 14px | Regular 12/14 |

#### Caption

| Figma          | CSS Shorthand | CSS Individual                                                                                                                     | 구성          |
| -------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Type/C1Caption | `--type-c1`   | `--type-c1-font-size`: 11px<br>`--type-c1-font-weight`: 400<br>`--type-c1-line-height`: 16px<br>`--type-c1-letter-spacing`: -0.3px | Regular 11/16 |
| Type/C2Caption | `--type-c2`   | `--type-c2-font-size`: 10px<br>`--type-c2-font-weight`: 400<br>`--type-c2-line-height`: 16px<br>`--type-c2-letter-spacing`: -0.3px | Regular 10/16 |

---

## 그림자 & 효과 (Effects)

| Figma 변수명 | CSS Property  | 값                            |
| ------------ | ------------- | ----------------------------- |
| shadow/sm    | `--shadow-sm` | 0 0 12px rgba(0, 0, 0, 0.1)   |
| shadow/lg    | `--shadow-lg` | 0 8px 24px rgba(0, 0, 0, 0.1) |

**Semantic shadow aliases:**

- `--shadow-xs`: 0 1px 2px rgba(0, 0, 0, 0.05)
- `--shadow-md`: 0 4px 6px rgba(0, 0, 0, 0.07)
- `--shadow-xl`: 같음 `--shadow-lg`
- `--shadow-2xl`: 0 20px 25px rgba(0, 0, 0, 0.15)

---

## 사용 가이드

### ✅ 올바른 사용 (DO)

```css
/* Hex 색상 → CSS 변수 매핑 */
color: var(--color-text-primary);
background: var(--color-bg-primary);
border: 1px solid var(--color-border-primary);

/* 스페이싱 */
margin: var(--spacing-md);
padding: var(--spacing-sm) var(--spacing-md);

/* 타이포그래피 (shorthand) */
font: var(--type-h1);

/* 또는 개별 (더 세밀한 제어) */
font-size: var(--font-size-lg);
font-weight: var(--font-weight-bold);
line-height: var(--line-height-28);
```

### ❌ 금지 (DON'T)

```css
/* ⛔ hex 코드 직접 사용 금지 */
color: #1a1a1a;

/* ⛔ Tailwind 기본 클래스 금지 */
class="text-gray-500 bg-red-100"

/* ⛔ 임의의 숫자 금지 */
margin: 15px;
font-size: 13px;
```

### Claude AI 변환 규칙

Claude Code가 Figma에서 디자인을 읽을 때:

1. **Hex 색상** (예: `#1a1a1a`) 발견
   - 이 테이블에서 색상값 찾기
   - 찾으면: `var(--color-grey-900)` 사용
   - 못 찾으면: ⚠️ 플래그하고 신규 토큰 제안

2. **스페이싱 숫자** (예: `16px`) 발견
   - `--spacing-md` 매핑 후 사용
   - 테이블에 없는 값: ⚠️ 플래그

3. **폰트 스타일** 발견
   - Type 복합 변수 사용 (shorthand)
   - 또는 개별 변수 조합 (`--type-b1-font-size` + `--type-b1-font-weight` 등)

4. **새로운 색상/값 발견**
   - Figma에 변수가 없으면: ⚠️ 스킵 + 리포트
   - Figma에 있으나 테이블에 없으면: 이 문서 업데이트 후 사용

---

## 마지막 업데이트

- **일시**: 2026-05-10
- **소스**: Figma design system (primary design file)
- **다음 동기화**: Figma 변수 추가/변경 후
