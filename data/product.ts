export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
};

export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "베이직 블랙 후드티",
    price: 39000,
    imageUrl:
      "https://images.unsplash.com/photo-1740252117012-bb53ad05e370?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "데일리로 입기 좋은 기본 블랙 후드티",
  },
  {
    id: "p2",
    name: "크림 니트 스웨터",
    price: 42000,
    imageUrl:
      "https://images.unsplash.com/photo-1740252117013-4fb21771e7ca?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "부드러운 크림 컬러의 니트 스웨터",
  },
  {
    id: "p3",
    name: "와이드 데님 팬츠",
    price: 45000,
    imageUrl:
      "https://images.unsplash.com/photo-1740252117027-4275d3f84385?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "편하게 입기 좋은 와이드 핏 데님",
  },
  {
    id: "p4",
    name: "그레이 오버핏 맨투맨",
    price: 35000,
    imageUrl:
      "https://images.unsplash.com/photo-1740252117070-7aa2955b25f8?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "데일리룩에 딱 맞는 편안한 오버핏 맨투맨",
  },
  {
    id: "p5",
    name: "프리미엄 코튼 후드 집업",
    price: 59000,
    imageUrl:
      "https://images.unsplash.com/photo-1740252117012-bb53ad05e370?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "두툼한 코튼 소재로 제작된 프리미엄 후드 집업",
  },
  {
    id: "p6",
    name: "라이트 블루 루즈핏 셔츠",
    price: 33000,
    imageUrl:
      "https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "깔끔하고 시원한 느낌의 루즈핏 셔츠",
  },
  {
    id: "p7",
    name: "브라운 캐주얼 니트 가디건",
    price: 52000,
    imageUrl:
      "https://images.unsplash.com/photo-1740252117013-4fb21771e7ca?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "가을 무드에 잘 어울리는 따뜻한 가디건",
  },
  {
    id: "p8",
    name: "프리미엄 울 트러커 자켓",
    price: 89000,
    imageUrl:
      "https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "울 소재의 고급스러운 트러커 스타일 자켓",
  },
  {
    id: "p9",
    name: "애쉬 그레이 루즈핏 맨투맨",
    price: 37000,
    imageUrl:
      "https://images.unsplash.com/photo-1740252117070-7aa2955b25f8?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "어떤 코디에도 잘 어울리는 루즈핏 맨투맨",
  },
];
