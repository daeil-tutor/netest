import { Link } from "./Link";
var meta = {
  title: "UI/Link",
  component: Link,
  parameters: {
    layout: "centered",
    design: {
      url: "https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=10:307",
    },
  },
  tags: ["autodocs"],
};
export default meta;
export var Default = {
  args: {
    href: "#",
    children: "Link",
  },
};
export var WithUrl = {
  args: {
    href: "https://example.com",
    children: "Visit Site",
  },
};
export var External = {
  args: {
    href: "https://example.com",
    target: "_blank",
    rel: "noopener noreferrer",
    children: "External Link",
  },
};
export var TermsLink = {
  args: {
    href: "#terms",
    children: "이용약관",
  },
};
export var PrivacyLink = {
  args: {
    href: "#privacy",
    children: "개인정보처리방침",
  },
};
