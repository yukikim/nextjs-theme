# nextjs-theme

Astro から Next.js へ移行したデザインテーマです。Next.js App Router、Tailwind CSS v4、next/image に対応しています。

## セットアップ

依存関係をインストールします。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開くと確認できます。

## 利用コマンド

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## 主な構成

- App Router 構成: src/app
- 共通コンポーネント: src/components
- テーマCSS: src/app/tailus.css
- 画像アセット: public/images

## 移行内容

- Astro のページ構成を Next.js の App Router に移植
- Layout、Header、Footer、Hero、Features、Stats、Testimonials、CallToAction、Blog を React コンポーネント化
- 画像を next/image へ移行
- 外部画像用に next.config.ts で remotePatterns を設定

## 移行チェックリスト

- npm run lint が通る
- npm run build が通る
- src 配下に img タグが残っていない
- public/images のローカル画像が正しく表示される
- 外部画像が next/image 経由で表示される
- Header のモバイルメニューが開閉できる

## 次に確認するとよい項目

- 実運用用の meta 情報の調整
- リンク先のダミー URL の差し替え
- 必要に応じたダークモード切り替えUIの追加
