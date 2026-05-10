---
name: RecommendItem QA 검사 결과
description: RecommendItem 컴포넌트의 전체 검사 결과 (2026-05-10)
type: project
---

## 검사 일시

2026-05-10

## 전체 요약

- 빌드: ✅ 통과
- 타입 검사: ✅ 통과
- 토큰 준수: ⚠️ 2건 위반
- Story 파일: ✅ 완벽
- Test 파일: ❌ 누락

## 발견된 문제

### 1. CRITICAL: LineHeight 토큰 오류

**파일**: src/components/ui/RecommendItem.tsx, 줄 115
**문제**: `lineHeight: "var(--font-size-16)"` - 잘못된 토큰 참조
**현재값**: font-size 토큰을 lineHeight에 사용 (의미론적 오류)
**예상값**: `var(--line-height-16)` 또는 `var(--line-height-18)` 또는 `var(--line-height-20)`

**근거**:

- Game Name은 Bold 14px (Type/B2Body 또는 Type/B3Body)
- 토큰 정의: `--type-b2-line-height`: 16px, `--type-b3-line-height`: 16px
- Figma 스펙 필요: 정확한 line-height 값 확인

### 2. MEDIUM: Shadow 하드코딩

**파일**: src/components/ui/RecommendItem.tsx, 줄 38
**문제**: `boxShadow: isHover ? "0 0 6px rgba(0, 0, 0, 0.1)" : "none"`
**현재값**: 하드코딩된 rgba 값
**예상값**: `var(--shadow-sm)` (토큰 정의: `0 0 12px rgba(0, 0, 0, 0.1)`)

**근거**:

- 디자인 규칙: 모든 색상/효과는 토큰 사용 필수
- drop-shadow "0 0 6px rgba(0, 0, 0, 0.1)"은 --shadow-sm 정의와 유사
- Figma에서 정확한 shadow 스펙 확인 필요

### 3. MINOR: Test 파일 누락

**파일**: src/components/ui/RecommendItem.test.tsx (없음)
**필요 테스트**:

- Badge 텍스트 렌더링 (pick vs recommend)
- 호버 상태 이미지 줌 효과
- onClick 핸들러
- Props 기본값

## 통과 항목

- 빌드 성공 (npm run build)
- 타입 체크 성공 (npm run lint)
- Story 파일 완벽: CSF3, autodocs, Figma URL, play 함수 포함
- Props 인터페이스 정확
- 배지 스타일 토큰 사용 (colors.css 참조)
- 색상 토큰 모두 사용: `--color-background-white`, `--color-background-pick`, `--color-background-recommend`, `--color-text-inverse`, `--color-text-primary`

## 부분 이슈 (Figma 확인 필요)

1. **호버 이미지 확대율 불일치**:
   - 요청: 108.8% (153px × 1.088 = 166.464px)
   - 코드: 168.3px (153px × 1.0985 = 168.3px ≈ 110%)
   - 차이: 1.8px 미세한 차이, Figma 정밀도 문제일 가능성

2. **LineHeight 토큰 값 확인**:
   - 현재 Code: `var(--font-size-16)` (오류)
   - 토큰 옵션: `--line-height-16`, `--line-height-18`, `--line-height-20`
   - Figma Type/B2Body와 Type/B3Body 모두 line-height: 16px 사용

3. **Shadow 토큰 정확도**:
   - 코드의 "0 0 6px rgba(0, 0, 0, 0.1)"
   - 토큰의 "--shadow-sm": "0 0 12px rgba(0, 0, 0, 0.1)"
   - 블러반경만 다름 (6px vs 12px), Figma 정의 확인 필요

## 권장사항

1. Line 115: `var(--font-size-16)` → `var(--line-height-16)` 수정 (즉시)
2. Line 38: `"0 0 6px rgba(0, 0, 0, 0.1)"` → `var(--shadow-sm)` 토큰화 (높은 우선순위)
3. Test 파일 생성 (RecommendItem.test.tsx)
4. Figma 스펙 확인: drop-shadow 정확한 값, Game Name line-height 확인
