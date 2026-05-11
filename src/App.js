"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
var imgBanner = "https://www.figma.com/api/mcp/asset/73bd8da5-b8db-485d-9147-29e0e92eae7c";
var bannerEvents = [
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
var recommendedGames = [
    { id: "recommend-1", imageUrl: itemThumbnail1 },
    { id: "recommend-2", imageUrl: itemThumbnail1 },
    { id: "recommend-3", imageUrl: itemThumbnail1 },
    { id: "recommend-4", imageUrl: itemThumbnail1 },
    { id: "recommend-5", imageUrl: itemThumbnail1 },
];
var gameFilters = [
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
var gameCards = [
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
    var _a = useState(null), hoverRecommendId = _a[0], setHoverRecommendId = _a[1];
    var _b = useState(null), hoverCardId = _b[0], setHoverCardId = _b[1];
    return (_jsxs("div", { style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            backgroundColor: "var(--color-grey-50)",
        }, children: [_jsx(GnbBar, {}), _jsx(Banner, { imageUrl: imgBanner, events: bannerEvents, height: 560 }), _jsxs("div", { style: {
                    maxWidth: "1280px",
                    width: "100%",
                    boxSizing: "border-box",
                    margin: "0 auto",
                    padding: "var(--spacing-3xl) 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--spacing-3xl)",
                    alignItems: "flex-start",
                }, children: [_jsxs("div", { style: {
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            gap: "var(--spacing-lg)",
                            alignItems: "flex-end",
                        }, children: [_jsxs("div", { style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "var(--spacing-xl)",
                                    width: "797px",
                                    flexShrink: 0,
                                }, children: [_jsx("h2", { style: {
                                            fontFamily: "var(--font-family-pretendard)",
                                            fontSize: "var(--font-size-28)",
                                            fontWeight: 700,
                                            color: "var(--color-text-primary)",
                                            margin: 0,
                                            lineHeight: "var(--line-height-32)",
                                        }, children: "\uCD94\uCC9C\uAC8C\uC784" }), _jsx("p", { style: {
                                            fontFamily: "var(--font-family-pretendard)",
                                            fontSize: "var(--font-size-16)",
                                            fontWeight: 700,
                                            color: "var(--color-text-tertiary)",
                                            margin: 0,
                                            lineHeight: "var(--line-height-20)",
                                        }, children: "#\uCD5C\uADFC\uC5D0 \uB9CE\uC774 \uAC80\uC0C9\uB41C" }), _jsx("div", { style: {
                                            display: "flex",
                                            gap: "var(--spacing-xs)",
                                            alignItems: "center",
                                        }, children: recommendedGames.map(function (game) { return (_jsx("div", { onMouseEnter: function () { return setHoverRecommendId(game.id); }, onMouseLeave: function () { return setHoverRecommendId(null); }, children: _jsx(RecommendItem, { status: hoverRecommendId === game.id ? "hover" : "default", imageUrl: game.imageUrl }) }, game.id)); }) })] }), _jsxs("div", { style: {
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
                                }, children: [_jsxs("div", { style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "var(--spacing-xxs)",
                                            width: "100%",
                                        }, children: [_jsx(Button, { style: "primary", size: "lg", state: "default", children: "NEXON ID \uB85C\uADF8\uC778" }), _jsxs("div", { style: {
                                                    display: "flex",
                                                    gap: 0,
                                                    width: "100%",
                                                }, children: [_jsx("div", { style: { flex: "1 0 0" }, children: _jsx(Button, { style: "secondary", size: "md", state: "default", children: "\uCE74\uCE74\uC624\uD1A1 \uB85C\uADF8\uC778" }) }), _jsx("div", { style: { flex: "1 0 0" }, children: _jsx(Button, { style: "secondary", size: "md", state: "default", children: "QR \uB85C\uADF8\uC778" }) })] })] }), _jsxs("div", { style: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            width: "100%",
                                            fontFamily: "var(--font-family-pretendard)",
                                            color: "var(--color-text-secondary)",
                                            fontSize: "var(--font-size-12)",
                                            lineHeight: "var(--line-height-14)",
                                        }, children: [_jsxs("div", { style: { display: "flex", gap: "var(--spacing-lg)" }, children: [_jsx(Link, { href: "#", children: "\uB125\uC2A8 ID \uCC3E\uAE30" }), _jsx(Link, { href: "#", children: "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30" })] }), _jsx(Link, { href: "#", children: "\uD68C\uC6D0\uAC00\uC785" })] })] })] }), _jsxs("div", { style: {
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            gap: "var(--spacing-lg)",
                        }, children: [_jsxs("div", { style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    gap: "var(--spacing-lg)",
                                }, children: [_jsxs("div", { style: {
                                            display: "flex",
                                            gap: "var(--spacing-xs)",
                                            alignItems: "flex-end",
                                        }, children: [_jsx("h2", { style: {
                                                    fontFamily: "var(--font-family-pretendard)",
                                                    fontSize: "var(--font-size-28)",
                                                    fontWeight: 700,
                                                    color: "var(--color-text-primary)",
                                                    margin: 0,
                                                    lineHeight: "var(--line-height-32)",
                                                    whiteSpace: "nowrap",
                                                }, children: "\uC804\uCCB4 \uAC8C\uC784" }), _jsxs("div", { style: {
                                                    display: "flex",
                                                    gap: "var(--spacing-xs)",
                                                    alignItems: "center",
                                                }, children: [_jsx("span", { style: {
                                                            fontFamily: "var(--font-family-pretendard)",
                                                            fontSize: "var(--font-size-14)",
                                                            fontWeight: 400,
                                                            color: "var(--color-text-primary)",
                                                            lineHeight: "var(--line-height-16)",
                                                            whiteSpace: "nowrap",
                                                        }, children: "\uBAA8\uBC14\uC77C\uAC8C\uC784 \uCEE4\uBBA4\uB2C8\uD2F0 \uBAA8\uC544\uBCF4\uAE30" }), _jsx(NewpageIcon, {})] })] }), _jsx(SearchBar, {})] }), _jsx("div", { style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    width: "100%",
                                    alignItems: "flex-end",
                                    justifyContent: "flex-start",
                                    backgroundColor: "var(--color-background-white)",
                                    gap: "var(--spacing-md)",
                                    padding: "var(--spacing-2xl)",
                                }, children: gameFilters.map(function (filter) { return (_jsx(GameFilter, { label: filter.name, state: filter.isActive ? "active" : "default" }, filter.id)); }) }), _jsx("div", { style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    width: "100%",
                                    columnGap: "var(--spacing-xl)",
                                    rowGap: "var(--spacing-3xl)",
                                }, children: gameCards.map(function (card) { return (_jsx("div", { style: {
                                        width: "300px", // CardItem vertical 고정 너비와 일치
                                    }, onMouseEnter: function () { return setHoverCardId(card.id); }, onMouseLeave: function () { return setHoverCardId(null); }, children: _jsx(CardItem, { style: "vertical", state: hoverCardId === card.id ? "hover" : "default", imageUrl: card.imageUrl }) }, card.id)); }) })] })] }), _jsx(Footer, {})] }));
}
