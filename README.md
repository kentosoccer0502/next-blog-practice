# Next.jsブログアプリ

このプロジェクトは、Next.jsとTypeScriptを用いて作成されたブログアプリです。ユーザー認証、記事の作成・編集・削除、画像アップロード、Markdown対応、管理画面など、実用的な機能を備えています。

## 背景

本業で新規PJに参画するにあたり、未経験の技術スタックをキャッチアップするためにハンズオンで開発した簡易アプリ。

## 主な機能

- ユーザー登録・ログイン（認証機能）
- 記事の新規作成・編集・削除（管理画面あり）
- Markdown記法による記事投稿・プレビュー
- 画像アップロード（トップ画像設定）
- 記事の公開/非公開切り替え
- 記事一覧・詳細ページ
- コードハイライト（highlight.js）
- レスポンシブ対応

## 技術スタック

- **フレームワーク**: [Next.js](https://nextjs.org) (App Router, Server Actions)
- **言語**: TypeScript
- **UI**: React, Tailwind CSS, Radix UI, Shadcn UI
- **認証**: NextAuth.js
- **バリデーション**: Zod
- **ORM/DB**: Prisma, SQLite
- **Markdown**: react-markdown, remark-gfm, rehype-highlight
- **画像処理**: Next.js Image, 独自アップロードロジック
- **その他**: date-fns, bcryptjs

## 技術的な注目点・難しい点

- **App Router/Server Actions**: Next.jsの新しいApp Routerとサーバーアクションを活用し、フォーム送信やDB操作をサーバー側で安全に実装しています。
- **画像アップロード**: 画像ファイルのバリデーション・保存・プレビューを実装し、セキュリティやUXに配慮しています。
- **認証とセッション管理**: NextAuth.jsとカスタムコールバックでユーザー情報を柔軟に管理しています。
- **Markdownプレビュー**: 入力中にリアルタイムでMarkdownプレビューを表示し、コードブロックのハイライトも対応しています。
- **型安全なバリデーション**: Zodによる型安全なフォームバリデーションを徹底しています。
- **クライアント/サーバーコンポーネントの使い分け**: UI/UXとセキュリティの両立のため、use client / use serverを適切に使い分けています。

## 開発・起動方法

```bash
npm install
npm run dev
```

## デプロイ

[Vercel](https://vercel.com/) で簡単にデプロイできます。

---
