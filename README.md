🛒 Cart Simulator – 쇼핑몰 장바구니 시뮬레이터

React + Next.js 기반으로 만든 간단하지만 구조적으로 깔끔한 장바구니 웹앱입니다.
상품 목록, 장바구니 상태 관리, 수량 조절, 총 가격 계산 등을 통해
**상태 관리(Zustand)**와 React 컴포넌트 구성 능력을 보여주기 위한 학습용 프로젝트입니다.

⸻

🚀 배포 주소

👉 https://cart-simulator-six.vercel.app/cart

⸻

✨ 주요 기능 (MVP)

📦 상품 목록
• 상품 이미지, 이름, 가격, 설명 표시
• 반응형 그리드 UI

➕ 장바구니 기능
• “장바구니 담기” 버튼
• 수량 증가 / 감소
• 특정 상품 제거
• 전체 비우기
• 장바구니 총 금액 / 총 수량 자동 계산

🔔 피드백
• 장바구니에 담길 때 toast 메시지 표시

⸻

🧰 기술 스택

Frontend
• Next.js (App Router)
• React
• TypeScript
• Tailwind CSS
• Zustand (전역 상태 관리)

ETC
• Vercel 배포
• Unsplash 이미지 리소스 사용

⸻

🧱 프로젝트 구조

```
cart-simulator/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── ProductCard.tsx
│   │   └── ToastProvider.tsx
│   ├── cart/page.tsx
│   ├── page.tsx
│   └── layout.tsx
├── store/
│   └── cartStore.ts
└── public/
```

🗂 Zustand 상태 관리 구조

CartState 타입

```ts
type CartState = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  changeQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  getTotalCount: () => number;
  getTotalPrice: () => number;
};
```

주요 로직 요약
• items → 장바구니 배열
• addItem(product) → 없으면 추가, 있으면 수량 증가
• changeQuantity(id, delta) → +1 / -1 처리
• removeItem(id) → 해당 id 상품 제거
• clearCart() → 장바구니 초기화
• getTotalCount() / getTotalPrice() → reduce로 합산

🧪 구현하면서 배운 점
• React 상태 관리만으로는 복잡한 전역 공유가 불편해 Zustand의 장점을 체감함
• Next.js 15 / App Router 구조 이해
• 이미지 최적화, 반응형 레이아웃, UI/UX 피드백(toast) 추가
• 컴포넌트 단위 분리 · props 설계
• 실제 쇼핑몰 앱의 장바구니 구조를 간단하게 구현해볼 수 있었음

👩🏻‍💻 만든 사람

이채린 | Frontend Developer
