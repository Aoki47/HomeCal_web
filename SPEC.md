# HomeCal Web — 家族カレンダーアプリ 仕様書

## 1. 概要

家族5人（パパ・ママ・もも・朝・碧）の月間スケジュールを一覧表示するWebカレンダー。
スマートフォン最適化、GitHub Pages で無料公開。Firebase Realtime Database によるリアルタイム同期対応。

---

## 2. 技術スタック

| 項目 | 採用技術 | 理由 |
|------|----------|------|
| フレームワーク | React (Vite) | 軽量・高速ビルド |
| スタイリング | Tailwind CSS | テーマ切り替えが容易 |
| 状態管理 | Zustand | シンプルで軽量 |
| データ永続化 | Firebase Realtime Database（優先）+ localStorage（フォールバック） | 複数デバイス間リアルタイム同期 |
| ホスティング | GitHub Pages | 無料・カスタムドメイン可 |
| デプロイ | GitHub Actions (push → 自動) | `actions/upload-pages-artifact` + `actions/deploy-pages` |

---

## 3. 画面構成

```
┌─────────────────────────────────────┐
│  ヘッダー (月ナビゲーション・今日ボタン・テーマ選択)  │
├──────────────────────────────────────┤
│  ☁ クラウド同期中（Firebase接続時のみ表示）      │
├──┬───┬───┬───┬───┬───┤
│日│パパ│ママ│もも│ 朝 │ 碧 │  ← 列ヘッダー（固定）
├──┼───┼───┼───┼───┼───┤
│1 │   │ 日 │ 塾 │   │ 塾 │
│2 │   │ 準 │   │ 塾 │水泳│
│  │   │   │   │   │   │
│…│   │   │   │   │   │
│31│   │ 深 │ 塾 │   │   │
├──────────────────────────────────────┤
│  日別詳細パネル（日付 or メンバー列タップで表示）  │
├──────────────────────────────────────┤
│  設定パネル（繰り返し設定・折りたたみ）          │
└──────────────────────────────────────┘
```

---

## 4. カレンダー表示仕様

### 4.1 レイアウト

- **行方向**: 1日〜月末（縦スクロール）
- **列方向**: 日付 ｜ パパ ｜ ママ ｜ もも ｜ 朝 ｜ 碧
- 列ヘッダーは画面上部に固定（スクロール時も表示）

### 4.2 月ナビゲーション

- ヘッダーに「◀ 2026年6月 ▶」形式で表示
- 左右タップで前月・翌月に移動
- 「今日」ボタンで今日の行にスムーズスクロール

### 4.3 今日行のハイライト

- 今日の行にオレンジ色の枠（`border-2 border-orange-400`）を表示（絶対配置オーバーレイ）
- テーマに関わらずオレンジ固定

### 4.4 セルの表示

- 各メンバーセルに最大3件のバッジを表示（超過時は「+n」）
- ママ列：シフトバッジ（日/準/深/◯）+ イベント（最大2件）
- 各列右下に小さい「＋」ボタン（新規イベント追加）
- バッジタップ → イベント一覧ボトムシート
- セル空白タップ → 日別詳細パネル（そのメンバーでフィルタ）

### 4.5 日別詳細パネル

画面下部に固定表示されるパネル。

| タップ元 | パネルの表示内容 |
|---------|----------------|
| 日付列 | その日の全員の予定（ママシフト＋繰り返し＋イベント） |
| メンバー列の空白 | そのメンバーの予定のみ（タイトルに「名前｜日付」） |

- 同じ対象を再タップで閉じる
- ✕ボタンで閉じる

---

## 5. ママの勤務状況

### 5.1 入力方法

ママ列のシフトバッジをタップしてボトムシートで変更。

| 値 | 意味 | 表示色 |
|----|------|--------|
| 日 | 日勤 | 青系 |
| 準 | 準夜勤 | 橙系 |
| 深 | 深夜勤 | 紫系 |
| ◯ | 休み | 緑系 |

- **デフォルト**: 日
- Firebase: `mamaShifts/{YYYY-MM-DD}`
- localStorage フォールバック: `homecal-data` キー内

### 5.2 UI

小さいバッジとしてママ列の先頭に表示。タップでボトムシートを開き選択。

---

## 6. 繰り返し予定設定（下部パネル）

ページ下部に折りたたみ可能な設定パネルを配置。
設定値がカレンダーのデフォルト表示となり、個別に上書き可能。

### 6.1 塾の設定（もも・朝・碧 各自）

曜日ごとに有効／無効と開始・終了時刻を設定。

- Firebase: `settings/jukuMomo`, `settings/jukuAsa`, `settings/jukuAoi`
- 該当曜日のセルに「塾」バッジを自動表示

### 6.2 スイミングの設定（碧）

塾と同形式（曜日ごとに時刻を設定）。

- Firebase: `settings/swimmingAoi`
- 該当曜日のセルに「水泳」バッジを自動表示

### 6.3 繰り返し予定の個別上書き

- 繰り返し予定バッジをタップ → ボトムシートで「その日だけ削除」「時刻変更」「以降すべて変更」を選択
- Firebase: `overrides/{source}_{YYYY-MM-DD}`

---

## 7. その他のイベント

### 7.1 イベント追加

各メンバー列右下の「＋」ボタンから追加ダイアログを開く（FABボタンは廃止）。

- 入力項目：タイトル（必須）、対象メンバー（複数選択可）、日付、開始・終了時刻（任意）、カラーラベル（8色）、メモ（任意）

### 7.2 カラーラベル

| 色 | 用途例 |
|----|--------|
| 赤 | 重要・締切 |
| 橙 | 外出・行事 |
| 黄 | 学校行事 |
| 緑 | 習い事 |
| 青 | 仕事 |
| 紫 | 病院・受診 |
| ピンク | 家族イベント |
| グレー | その他 |

### 7.3 イベント編集・削除

- イベントバッジタップ → ボトムシートで一覧表示
- ボトムシート内で編集・削除
- 削除はシート内コンテンツ切り替え方式（確認画面に遷移）

---

## 8. データ設計

### 8.1 Firebase Realtime Database（優先）

Firebase が設定されている場合はこちらを使用。`useFirebaseSync` フックがリアルタイムリスナーを管理。

```
Firebase paths:
  events/{id}                 : CalEvent
  mamaShifts/{YYYY-MM-DD}     : MamaShift
  settings/jukuMomo           : RecurringSetting
  settings/jukuAsa            : RecurringSetting
  settings/jukuAoi            : RecurringSetting
  settings/swimmingAoi        : RecurringSetting
  overrides/{source}_{date}   : OverrideEvent
```

### 8.2 localStorage（Firebase 未設定時のフォールバック）

```
localStorage keys:
  homecal-data  : SharedState（events, mamaShifts, settings, overrides）
  homecal-ui    : { currentYear, currentMonth, theme }
```

### 8.3 型定義

```typescript
type Member = 'papa' | 'mama' | 'momo' | 'asa' | 'aoi'

type CalEvent = {
  id: string
  title: string
  members: Member[]
  date: string        // YYYY-MM-DD
  startTime?: string  // HH:MM
  endTime?: string    // HH:MM
  color: string
  note?: string
}

type MamaShift = '日' | '準' | '深' | '◯'

type DaySetting = {
  enabled: boolean
  startTime: string   // HH:MM
  endTime: string     // HH:MM
}

type RecurringSetting = {
  days: { [dayIndex: number]: DaySetting }  // 0=日, 1=月, ..., 6=土
  enabled: boolean
}

type OverrideEvent = {
  source: 'juku_momo' | 'juku_asa' | 'juku_aoi' | 'swimming_aoi'
  date: string        // YYYY-MM-DD
  action: 'delete' | 'modify'
  startTime?: string
  endTime?: string
}
```

---

## 9. テーマ

設定パネルからテーマを選択。`src/themes.ts` で定義。

| テーマ名 | イメージ |
|----------|----------|
| ライト（デフォルト） | 白背景・清潔感 |
| ダーク | 黒背景・目に優しい |
| ナチュラル | ベージュ・木目調 |
| パステル | 淡い色合い・ポップ |

---

## 10. スマートフォン最適化

- **ビューポート**: `width=device-width, initial-scale=1`
- **最小タップ領域**: 44×44px
- **スクロール**: 列ヘッダー固定、縦スクロールのみ
- **ボトムシート**: モーダルは下から出現
- **詳細パネル**: 画面下部に固定表示（max-h-52 でスクロール可能）

---

## 11. GitHub Pages デプロイ構成

```
リポジトリ: Aoki47/HomeCal_web (public)
ブランチ: main → push で自動デプロイ
アクセスURL: https://aoki47.github.io/HomeCal_web/
```

### GitHub Actions ワークフロー (.github/workflows/deploy.yml)

```yaml
on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build:
    steps:
      - npm ci
      - .env を GitHub Secrets から生成（VITE_FIREBASE_* 系）
      - npm run build
      - actions/upload-pages-artifact@v3

  deploy:
    - actions/deploy-pages@v4
```

**注意**: リポジトリを private にすると GitHub Pages が自動無効化される。public に戻した後は Pages の手動再有効化 + 再デプロイが必要。

---

## 12. ディレクトリ構成（実際）

```
HomeCal_web/
├── .github/workflows/deploy.yml
├── public/
├── src/
│   ├── components/
│   │   ├── CalendarHeader.tsx     # 月ナビ・今日ボタン・テーマ選択
│   │   ├── CalendarGrid.tsx       # メイングリッド・詳細パネル管理
│   │   ├── DayRow.tsx             # 1行分（日付＋5メンバー列）
│   │   ├── DayDetailPanel.tsx     # 日別詳細パネル（メンバーフィルタ対応）
│   │   ├── MamaShiftCell.tsx      # ママシフトバッジ＋選択ボトムシート
│   │   ├── EventBottomSheet.tsx   # イベント一覧・編集・削除
│   │   ├── EventDialog.tsx        # イベント追加・編集ダイアログ
│   │   ├── RecurringEventSheet.tsx # 繰り返し予定の個別上書き
│   │   └── SettingsPanel.tsx      # 繰り返し設定パネル
│   ├── hooks/
│   │   └── useFirebaseSync.ts     # Firebase リアルタイムリスナー
│   ├── firebase.ts                # Firebase 初期化
│   ├── store.ts                   # Zustand ストア
│   ├── types.ts                   # 型定義・定数
│   ├── themes.ts                  # テーマトークン定義
│   ├── utils.ts                   # 日付・繰り返し計算ユーティリティ
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 13. 未決定事項・今後の検討

- [ ] データのエクスポート・インポート機能（JSON）
- [ ] 祝日の自動表示（内閣府API利用）
- [ ] パパの勤務状況の設定（ママと同様に追加するか）
- [ ] 通知機能（Web Push）

---

*作成日: 2026-06-03 / 最終更新: 2026-06-09*
