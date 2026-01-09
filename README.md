# md-editor-lite

A lightweight React markdown editor focused on the **core editing experience**.
Built with **TypeScript**, designed for **library-friendly usage**, and has **no runtime dependency other than React**.

> Minimal. Predictable. Easy to integrate.

---

## ✨ Features

- ⚡ **Minimal dependencies**
  → No heavy editor engines, no unnecessary packages

- 🔁 **Controlled & Uncontrolled modes**
  → Works well with forms and external state management

- 🧩 **Customizable toolbar**
  → Enable only the features you need

- 🎨 **No CSS framework dependency**
  → No Tailwind, no opinionated styles
  → Fully styleable with plain CSS

---

## 🧠 Supported Markdown Syntax

- **Bold**
- _Italic_
- `Inline code`
- > Blockquote
- Headings (`#`, `##`, `###`)
- Ordered / Unordered lists
- Images: `![alt](url)`
- Links: `[text](url)`

---

## 📦 Installation

```bash
npm install md-editor-lite
```

---

## 🚀 Basic Usage (Uncontrolled)

```tsx
import { MarkdownEditor } from "md-editor-lite";

function App() {
  return <MarkdownEditor />;
}
```

---

## 🎛 Controlled Usage

```tsx
import { useState } from "react";
import { MarkdownEditor } from "md-editor-lite";

function App() {
  const [value, setValue] = useState("");

  return (
    <MarkdownEditor
      value={value}
      onChange={setValue}
      placeholder="Write your markdown here..."
    />
  );
}
```

> Controlled mode is recommended when:
>
> - Integrating with forms
> - Saving content externally
> - Syncing editor state with other UI

---

## 🧩 Props API

### `MarkdownEditor`

| Prop           | Type                      | Description                        |
| -------------- | ------------------------- | ---------------------------------- |
| `value`        | `string`                  | Markdown content (controlled mode) |
| `onChange`     | `(value: string) => void` | Called when content changes        |
| `defaultValue` | `string`                  | Initial value (uncontrolled mode)  |
| `placeholder`  | `string`                  | Placeholder text for the editor    |
| `readOnly`     | `boolean`                 | Disable editing                    |
| `toolbar`      | `ToolbarItem[]`           | Customize visible toolbar items    |
| `className`    | `string`                  | Custom class for root container    |

> If `value` is provided, the editor automatically works in **controlled mode**.

---

## 📱 Responsive Behavior

This library relies on the **browser viewport** for responsive layouts.

Make sure the following meta tag exists in your HTML document:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

> ⚠️ This library does **not** inject meta tags automatically
> → Host applications should manage viewport settings themselves

---

<details>
<summary>🇰🇷 한국어 설명</summary>

## 소개

**md-editor-lite**는
“필요한 기능만 제공하고, 나머지는 개발자에게 맡긴다”는 철학으로 만든
**경량 React 마크다운 에디터 라이브러리**입니다.

대형 에디터들이 흔히 가지는

- 과도한 번들 사이즈
- 복잡한 설정
- 강제되는 스타일 구조

이런 문제를 피하고,
**폼 / CMS / 관리자 페이지 / 사이드 프로젝트** 어디에든
부담 없이 사용할 수 있도록 설계되었습니다.

---

## 주요 특징

### ⚡ 가볍고 예측 가능한 구조

- 런타임 의존성은 **React만 필요**
- 외부 에디터 엔진 없이 동작
- 라이브러리·디자인 시스템 내부에서도 안전하게 사용 가능

### 🎛 Controlled / Uncontrolled 모두 지원

- 단순 textarea처럼 빠르게 사용 가능
- 상태를 외부에서 완전히 제어하는 구조도 지원
- React Hook Form 등과 호환 가능

### 🎨 스타일 독립성

- Tailwind / CSS Modules / styled-components 등
  **어떤 스타일링 방식과도 충돌하지 않음**
- 기본 스타일은 최소한만 제공

### 📦 라이브러리 배포를 고려한 설계

- 전역 CSS 주입 없음
- meta tag 자동 삽입 없음
- 호스트 애플리케이션의 환경을 침범하지 않음

---

## 이런 경우에 잘 어울려요

- “에디터 하나 때문에 라이브러리가 무거워지는 게 싫을 때”
- 관리자 페이지에 **심플한 마크다운 입력 UI**가 필요할 때
- 디자인 시스템 안에 자연스럽게 녹아드는 에디터가 필요할 때

</details>
