// 상품 API 서버 (Express) — 계약: API_CONTRACT.md > "상품 (Store / sub2 페이지)"
import express from 'express';
import { getAllProducts, getProductByNo } from './db.js';

const app = express();
const PORT = process.env.PORT || 3001;

// CORS 허용 (프론트가 Vite 프록시 대신 절대경로로 호출하는 경우 대비)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// GET /api/products — 상품 목록 전체
app.get('/api/products', (req, res) => {
  res.json(getAllProducts());
});

// GET /api/products/:no — 단일 상품 상세
app.get('/api/products/:no', (req, res) => {
  const no = Number(req.params.no);
  if (!Number.isInteger(no)) {
    return res.status(400).json({ error: 'invalid product no' });
  }
  const product = getProductByNo(no);
  if (!product) {
    return res.status(404).json({ error: 'product not found' });
  }
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`[BE] products API listening on http://localhost:${PORT}`);
});
