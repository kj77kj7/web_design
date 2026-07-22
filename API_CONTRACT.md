# API 계약

이 문서는 백엔드(기능구현) 세션과 프론트엔드(디자인) 세션이 공통으로 참고하는 API 스펙입니다.
API를 추가/변경할 때마다 백엔드 세션이 이 문서를 함께 업데이트합니다.

## 엔드포인트 목록

### 상품 (Store / sub2 페이지)

> 상태: **FE 제안 / 백엔드 구현 대기.** 프론트 Store 페이지가 소비할 스펙을 프론트 세션이 먼저 정의함.
> 이미지 파일은 현재 프론트 번들(`src/assets/images/products/`)에 존재. 백엔드는 `image` 값으로 **파일명**만 내려주고, 프론트가 번들 에셋에 매핑(추후 정적 서빙으로 전환 가능).

**GET /api/products**
- 설명: Store 페이지에 노출할 상품 목록 전체
- 요청 파라미터(선택, 추후):
  - `sort` — 정렬 기준 (예: `price_asc`, `price_desc`, `new`). 디자인의 "Sort By"
  - `collection` — 컬렉션 필터. 디자인의 "Collections"
- 응답 형식:
```json
[
  { "no": 16, "name": "A waterful silhouette of blooming curves", "price": 13490000, "currency": "KRW", "image": "16-1.jpg", "isNew": true }
]
```

**GET /api/products/:no** (선택 — 상세 페이지용)
- 설명: 단일 상품 상세
- 응답 형식: 위 Product 객체 1건

## 공통 데이터 모델

### Product
| 필드 | 타입 | 설명 |
|---|---|---|
| `no` | int | 상품 번호(= 식별자). 이미지 파일명의 번호와 동일 |
| `name` | string | 영문 상품명 (Baskerville 표기) |
| `price` | int | 가격, 원(KRW) 정수. 표시 시 `₩` + 천단위 콤마 |
| `currency` | string | 통화 코드, 기본 `"KRW"` |
| `image` | string | `products/` 내 파일명. 규칙: 기본 `번호-1.jpg`, 없으면 `번호-2.jpg` |
| `isNew` | bool | `NEW IN` 태그 노출 여부 |

### 시드 데이터 (디자인 sub2 기준 11개 — 백엔드 초기 적재용)
| no | name | price(KRW) | image | isNew |
|---|---|---|---|---|
| 22 | Graceful bond | 4190000 | 22-1.jpg | true |
| 16 | A waterful silhouette of blooming curves | 13490000 | 16-1.jpg | true |
| 2 | Rippling floral arcs 4 | 2390000 | 02-2.jpg | true |
| 23 | Lucid lace | 8490000 | 23-1.jpg | true |
| 17 | A dewy floral shape | 6490000 | 17-1.jpg | true |
| 25 | Fluid vow | 7590000 | 25-1.jpg | true |
| 13 | Waterful curving bloom | 7190000 | 13-1.jpg | true |
| 27 | Floral fluidity | 12490000 | 27-1.jpg | true |
| 9 | Rippling floral arcs 2 | 2390000 | 09-1.jpg | true |
| 18 | Full flora | 9890000 | 18-1.jpg | true |
| 4 | Waterful botanical curve | 3490000 | 04-2.jpg | true |

## 변경 이력
- 2026-07-22 - 상품 API(GET /api/products, /api/products/:no) 및 Product 모델·시드 11건 정의 (FE 제안, 백엔드 구현 대기) - 프론트엔드 세션
