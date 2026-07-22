// SQLite 초기화 및 시드 적재 (Node 22 내장 node:sqlite 사용 → 네이티브 컴파일 불필요)
import { DatabaseSync } from 'node:sqlite';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { products, CURRENCY } from './seed-data.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = join(__dirname, 'products.db');

const db = new DatabaseSync(DB_PATH);

db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    no       INTEGER PRIMARY KEY,
    name     TEXT    NOT NULL,
    price    INTEGER NOT NULL,
    currency TEXT    NOT NULL DEFAULT '${CURRENCY}',
    image    TEXT    NOT NULL,
    isNew    INTEGER NOT NULL DEFAULT 0
  );
`);

// 최초 실행 시(테이블이 비어 있을 때) 시드 11건 적재
const count = db.prepare('SELECT COUNT(*) AS n FROM products').get().n;
if (count === 0) {
  const insert = db.prepare(
    'INSERT INTO products (no, name, price, currency, image, isNew) VALUES (?, ?, ?, ?, ?, ?)'
  );
  for (const p of products) {
    insert.run(p.no, p.name, p.price, CURRENCY, p.image, p.isNew ? 1 : 0);
  }
  console.log(`[BE] seeded ${products.length} products into ${DB_PATH}`);
}

// DB 행(row) → API 응답 객체 (isNew: int → bool)
function toProduct(row) {
  return {
    no: row.no,
    name: row.name,
    price: row.price,
    currency: row.currency,
    image: row.image,
    isNew: row.isNew === 1,
  };
}

export function getAllProducts() {
  return db.prepare('SELECT * FROM products ORDER BY no').all().map(toProduct);
}

export function getProductByNo(no) {
  const row = db.prepare('SELECT * FROM products WHERE no = ?').get(no);
  return row ? toProduct(row) : null;
}
