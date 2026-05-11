"use client";

import { useState } from "react";
import { GnbBar } from "./components/ui/GnbBar";
import { Banner } from "./components/ui/Banner";
import { RecommendItem } from "./components/ui/RecommendItem";
import { Button } from "./components/ui/Button";
import { Link } from "./components/ui/Link";
import { SearchBar } from "./components/ui/SearchBar";
import { GameFilter } from "./components/ui/GameFilter";
import { CardItem } from "./components/ui/CardItem";
import { Footer } from "./components/ui/Footer";
import { NewpageIcon } from "./components/icons/NewpageIcon";
import itemThumbnail1 from "./images/item-thumbnail-image-1.png";
import cardThumbnail1 from "./images/card-thumbnail-image-1.png";
import cardThumbnail2 from "./images/card-thumbnail-image-2.png";

const imgBanner =
  "https://www.figma.com/api/mcp/asset/73bd8da5-b8db-485d-9147-29e0e92eae7c";

const bannerEvents = [
  {
    id: "event-1",
    eventName: "마비노기 모바일 2차 카카오톡 이모티콘 출시",
    gameName: "넥슨",
  },
  {
    id: "event-2",
    eventName: "★바람의나라 30주년 운동회 개막★",
    gameName: "바람의나라",
  },
  {
    id: "event-3",
    eventName: "반주년 기념 버닝 이벤트",
    gameName: "메이플 키우기",
  },
  {
    id: "event-4",
    eventName: "넥슨 보안 캠페인",
    gameName: "넥슨",
  },
  {
    id: "event-5",
    eventName: "카러플 6주년 GOLD RUSH",
    gameName: "카트라이더 러쉬플러스",
  },
];

const recommendedGames = [
  { id: "recommend-1", imageUrl: itemThumbnail1 },
  { id: "recommend-2", imageUrl: itemThumbnail1 },
  { id: "recommend-3", imageUrl: itemThumbnail1 },
  { id: "recommend-4", imageUrl: itemThumbnail1 },
  { id: "recommend-5", imageUrl: itemThumbnail1 },
];

const gameFilters = [
  { id: "filter-1", name: "#전체", isActive: true },
  { id: "filter-2", name: "#얼리스테이지" },
  { id: "filter-3", name: "#Windows" },
  { id: "filter-4", name: "#macOS" },
  { id: "filter-5", name: "#Steam" },
  { id: "filter-6", name: "#EPIC" },
  { id: "filter-7", name: "#Android" },
  { id: "filter-8", name: "#iOS" },
  { id: "filter-9", name: "#PlayStation" },
  { id: "filter-10", name: "#XBOX" },
  { id: "filter-11", name: "#SWITCH" },
  { id: "filter-12", name: "#SWITCH2" },
  { id: "filter-13", name: "#RPG" },
  { id: "filter-14", name: "#액션 RPG" },
  { id: "filter-15", name: "#캐주얼" },
  { id: "filter-16", name: "#FPS" },
  { id: "filter-17", name: "#AOS/MOBA" },
  { id: "filter-18", name: "#이벤트" },
];

const gameCards = [
  { id: "card-1", imageUrl: cardThumbnail1 },
  { id: "card-2", imageUrl: cardThumbnail2 },
  { id: "card-3", imageUrl: cardThumbnail1 },
  { id: "card-4", imageUrl: cardThumbnail2 },
  { id: "card-5", imageUrl: cardThumbnail1 },
  { id: "card-6", imageUrl: cardThumbnail2 },
  { id: "card-7", imageUrl: cardThumbnail1 },
  { id: "card-8", imageUrl: cardThumbnail2 },
];

export default function App() {
  const [hoverRecommendId, setHoverRecommendId] = useState<string | null>(null);
  const [hoverCardId, setHoverCardId] = useState<string | null>(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        backgroundColor: "var(--color-grey-50)",
      }}
    >
      {/* GnbBar */}
      <GnbBar />

      {/* Banner Section */}
      <Banner imageUrl={imgBanner} events={bannerEvents} height={560} />

      {/* Main Container */}
      <div
        style={{
          maxWidth: "1280px",
          width: "100%",
          boxSizing: "border-box" as const,
          margin: "0 auto",
          padding: "var(--spacing-3xl) 0",
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-3xl)",
          alignItems: "flex-start",
        }}
      >
        {/* Section 1: Recommend Game + LogIn - Flex Row spanning full width */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: "var(--spacing-lg)",
            alignItems: "flex-end",
          }}
        >
          {/* Recommend Game - Left (797px) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-xl)",
              width: "797px",
              flexShrink: 0,
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-family-pretendard)",
                fontSize: "var(--font-size-28)",
                fontWeight: 700,
                color: "var(--color-text-primary)",
                margin: 0,
                lineHeight: "var(--line-height-32)",
              }}
            >
              추천게임
            </h2>
            <p
              style={{
                fontFamily: "var(--font-family-pretendard)",
                fontSize: "var(--font-size-16)",
                fontWeight: 700,
                color: "var(--color-text-tertiary)",
                margin: 0,
                lineHeight: "var(--line-height-20)",
              }}
            >
              #최근에 많이 검색된
            </p>
            {/* Recommend Items - Horizontal */}
            <div
              style={{
                display: "flex",
                gap: "var(--spacing-xs)",
                alignItems: "center",
              }}
            >
              {recommendedGames.map((game) => (
                <div
                  key={game.id}
                  onMouseEnter={() => setHoverRecommendId(game.id)}
                  onMouseLeave={() => setHoverRecommendId(null)}
                >
                  <RecommendItem
                    status={hoverRecommendId === game.id ? "hover" : "default"}
                    imageUrl={game.imageUrl}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* LogIn Box - Right (flex: 1, grows to remaining space ~463px) */}
          <div
            style={{
              flex: "1 0 0",
              height: "324px",
              padding: "var(--spacing-3xl) var(--spacing-2xl)",
              backgroundColor: "var(--color-background-white)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-sm)",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "0",
            }}
          >
            {/* Button Group */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-xxs)",
                width: "100%",
              }}
            >
              <Button style="primary" size="lg" state="default">
                NEXON ID 로그인
              </Button>
              <div
                style={{
                  display: "flex",
                  gap: 0,
                  width: "100%",
                }}
              >
                <div style={{ flex: "1 0 0" }}>
                  <Button style="secondary" size="md" state="default">
                    카카오톡 로그인
                  </Button>
                </div>
                <div style={{ flex: "1 0 0" }}>
                  <Button style="secondary" size="md" state="default">
                    QR 로그인
                  </Button>
                </div>
              </div>
            </div>

            {/* Link Group */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                fontFamily: "var(--font-family-pretendard)",
                color: "var(--color-text-secondary)",
                fontSize: "var(--font-size-12)",
                lineHeight: "var(--line-height-14)",
              }}
            >
              <div style={{ display: "flex", gap: "var(--spacing-lg)" }}>
                <Link href="#">넥슨 ID 찾기</Link>
                <Link href="#">비밀번호 찾기</Link>
              </div>
              <Link href="#">회원가입</Link>
            </div>
          </div>
        </div>

        {/* Section 2: Games */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "var(--spacing-lg)",
          }}
        >
          {/* Whole Game Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              gap: "var(--spacing-lg)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "var(--spacing-xs)",
                alignItems: "flex-end",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-family-pretendard)",
                  fontSize: "var(--font-size-28)",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  margin: 0,
                  lineHeight: "var(--line-height-32)",
                  whiteSpace: "nowrap",
                }}
              >
                전체 게임
              </h2>
              <div
                style={{
                  display: "flex",
                  gap: "var(--spacing-xs)",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-family-pretendard)",
                    fontSize: "var(--font-size-14)",
                    fontWeight: 400,
                    color: "var(--color-text-primary)",
                    lineHeight: "var(--line-height-16)",
                    whiteSpace: "nowrap",
                  }}
                >
                  모바일게임 커뮤니티 모아보기
                </span>
                <NewpageIcon />
              </div>
            </div>
            <SearchBar />
          </div>

          {/* Game Filter */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              backgroundColor: "var(--color-background-white)",
              gap: "var(--spacing-md)",
              padding: "var(--spacing-2xl)",
            }}
          >
            {gameFilters.map((filter) => (
              <GameFilter
                key={filter.id}
                label={filter.name}
                state={filter.isActive ? "active" : "default"}
              />
            ))}
          </div>

          {/* Card List - Flex Wrap Layout */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              columnGap: "var(--spacing-xl)",
              rowGap: "var(--spacing-3xl)",
            }}
          >
            {gameCards.map((card) => (
              <div
                key={card.id}
                style={{
                  width: "300px", // CardItem vertical 고정 너비와 일치
                }}
                onMouseEnter={() => setHoverCardId(card.id)}
                onMouseLeave={() => setHoverCardId(null)}
              >
                <CardItem
                  style="vertical"
                  state={hoverCardId === card.id ? "hover" : "default"}
                  imageUrl={card.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
