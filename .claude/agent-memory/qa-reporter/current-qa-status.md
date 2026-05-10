---
name: 2026-05-10 QA 리포트 현황
description: 14개 컴포넌트 전체 검사 결과 - 빌드 통과, 토큰 1건 위반, 스토리 1개 누락, 테스트 전무
type: project
---

## 검사 날짜

2026-05-10

## 검사 범위

src/components/ui/ 14개 컴포넌트 (Badge, Button, CardImage, CardItem, Divider, Footer, GameFilter, GnbBar, Image, Link, Logo, RecommendItem, SearchBar, SwiperPagination)

## 주요 결과

**통과 (Green)**: 빌드, TypeScript, 이미지 경로, Props 타입, Code Connect
**경고 (Yellow)**: 토큰 준수 2건, Stories 1개 누락
**실패 (Red)**: 테스트 전무 (0/14)

## 긴급 수정 사항 (P0)

### 1. 테스트 파일 전무 (0/14)

- 모든 컴포넌트에 .test.tsx 파일 없음
- npm test 스크립트도 package.json에 미등록
- 영향: 배포 전 품질 보증 불가능

### 2. Divider.tsx 토큰 위반

파일: `/Users/kimdaeil/Desktop/netest/src/components/ui/Divider.tsx`

```typescript
// Line 15, 20
backgroundColor: "rgba(255,255,255,0.2)",  // ❌
backgroundColor: "rgba(0,0,0,0.1)",        // ❌
```

필요: 토큰 변수로 대체 (docs/design-tokens.md 참조)

## 권장 수정 사항 (P1)

### 1. Logo.stories.tsx 생성

- 유일하게 stories 파일 누락된 컴포넌트
- 다른 컴포넌트 stories.tsx 참조하여 생성

### 2. npm test 스크립트 추가

package.json scripts에 추가:

```json
"test": "vitest"
```

## 세부 현황

| 항목         | 결과 | 상세                                              |
| ------------ | ---- | ------------------------------------------------- |
| 빌드         | ✅   | vite build 373ms, 이미지 번들 포함 정상           |
| TypeScript   | ✅   | tsc -b 에러 없음, \*\*.figma.ts exclude 설정 확인 |
| Stories 파일 | ⚠️   | 13/14 (Logo 누락)                                 |
| Test 파일    | ❌   | 0/14 (모두 누락)                                  |
| 이미지 경로  | ✅   | 모두 상대 경로 (../../images/)                    |
| Props 타입   | ✅   | 모든 컴포넌트 인터페이스 정의됨                   |
| 토큰 준수    | ⚠️   | Divider rgba() 2건 위반                           |

## 레거시 이미지 (정리 가능)

- src/images/item-thumbnail-1.png (미사용)
- src/images/card-thumbnail-1.png (미사용)

## 다음 단계

1. 테스트 파일 추가 (14개)
2. Divider.tsx 토큰화
3. Logo.stories.tsx 생성
4. package.json test 스크립트 추가
5. npm test 전체 실행 확인
