# Yoko Graph Browser

Yoko Graph Browserは、横画面専用のスマホブラウザアプリケーションです。このアプリは、グラフy=0をモチーフにしたデザインを採用しており、Google検索機能を統合しています。

## 特徴

- **横画面専用**: デバイスの向きに応じて最適化されたユーザーインターフェース。
- **Google検索バー**: ユーザーが簡単に検索クエリを入力できるインターフェース。
- **グラフy=0デザイン**: アプリ全体にわたって一貫したテーマを提供する視覚的要素。

## ファイル構成

- `src/App.tsx`: アプリケーションのエントリーポイント。
- `src/components/GoogleSearchBar.tsx`: Google検索バーのコンポーネント。
- `src/components/GraphZeroDesign.tsx`: グラフy=0をモチーフにしたデザインコンポーネント。
- `src/hooks/useOrientation.ts`: デバイスの向きを検出するカスタムフック。
- `src/styles/graphZero.css`: アプリ全体のスタイルシート。
- `src/types/index.ts`: TypeScriptの型定義ファイル。
- `public/index.html`: アプリケーションのHTMLテンプレート。

## インストール

1. リポジトリをクローンします。
   ```
   git clone <repository-url>
   ```
2. 依存関係をインストールします。
   ```
   npm install
   ```
3. アプリケーションを起動します。
   ```
   npm start
   ```

## 使用方法

アプリケーションを起動すると、横画面モードで表示されます。Google検索バーに検索クエリを入力し、結果を表示することができます。グラフy=0をテーマにしたデザインが、視覚的な体験を提供します。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細はLICENSEファイルを参照してください。