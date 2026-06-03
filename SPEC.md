# HomeCal Web — 家族カレンダーアプリ 仕様書

## 1. 概要

家族5人（パパ・ママ・もも・朝・碧）の月間スケジュールを一覧表示するWebカレンダー。
スマートフォン最適化、GitHub Pages で無料公開。

---

## 2. 技術スタック

| 項目 | 採用技術 | 理由 |
|------|----------|------|
| フレームワーク | React (Vite) | 軽量・高速ビルド |
| スタイリング | Tailwind CSS | テーマ切り替えが容易 |
| 状態管理 | Zustand | シンプルで軽量 |
| データ永続化 | localStorage | サーバー不要・無料運用 |
| ホスティング | GitHub Pages | 無料・カスタムドメイン可 |
| デプロイ | GitHub Actions | push で自動デプロイ |

---

## 3. 画面構成

```
┌─────────────────────────────────┐
│  ヘッダー (月ナビゲーション・テーマ選択)  │
├──┬───┬───┬───┬───┬───┤
│日│パパ│ママ│もも│ 朝 │ 碧 │  ← 列ヘッダー
├──┼───┼───┼───┼───┼───┤
│1 │   │ 日 │ 塾 │   │ 塾 │
│2 │   │ 準 │   │ 塾 │水泳│
│  │   │   │   │   │   │
│…│   │   │   │   │   │
│31│   │ 深 │ 塾 │   │   │
├──────────────────────────────────┤
│  繰り返し設定パネル (折りたたみ)         │
└─────────────────────────────────┘
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
- 今日の行をハイライト表示

### 4.3 セルの表示

- 各セルに最大3件のイベントを表示（超過時は「+n」）
- セルタップ → イベント一覧ボトムシート表示
- 長押し（0.5秒） → 新規イベント追加ダイアログ

---

## 5. ママの勤務状況

### 5.1 入力方法

各日のママ列セルにドロップダウン（リストボックス）で勤務状況を設定。

| 値 | 意味 | 表示色 |
|----|------|--------|
| 日 | 日勤 | 青系 |
| 準 | 準夜勤 | 橙系 |
| 深 | 深夜勤 | 紫系 |
| ◯ | 休み | 緑系 |

- **デフォルト**: 日
- 値はlocalStorageに `mama_shift_{YYYY-MM-DD}` キーで保存
- セルは選択値を大きめのテキストで中央表示し、操作はクリック／タップでリストボックスを開く
- スマホではリストボックスをフルスクリーンモーダル風に表示して選択しやすくし、タッチ目標は最小44pxを確保

### 5.2 UI

```
選択: ▼
 - 日
 - 準
 - 深
 - ◯
```

スマホでは文字サイズ最小16px、タップ領域最小44px。リストはスクロール可能で選択後に閉じる。

---

## 6. 繰り返し予定設定（下部パネル）

ページ下部に折りたたみ可能な設定パネルを配置。
設定値がカレンダーのデフォルト表示となり、個別に上書き可能。

### 6.1 塾の設定（もも・朝・碧 各自）

各人ごとにセクションを分け、曜日ごとに有効／無効と開始・終了時刻を個別設定する。

| 設定項目 | UI |
|----------|----|
| 曜日ごとのON/OFF | 各曜日行の左端チェックボックス |
| 各曜日の開始時刻 | 時刻ピッカー (HH:MM)。チェック OFF の行はグレーアウト |
| 各曜日の終了時刻 | 同上 |

- チェックが入った曜日の該当セルに自動で「塾」と表示
- 保存キー: `juku_setting_{name}` (name = momo/asa/aoi)

#### 設定例（チェック入りの曜日だけ時刻を入力）

```
┌─ もも の塾 ─────────────────────────┐
│ □ 日  [--:--] 〜 [--:--]              │
│ □ 月  [--:--] 〜 [--:--]              │
│ ☑ 火  [17:00] 〜 [19:00]              │
│ □ 水  [--:--] 〜 [--:--]              │
│ ☑ 木  [17:00] 〜 [19:00]              │
│ □ 金  [--:--] 〜 [--:--]              │
│ □ 土  [--:--] 〜 [--:--]              │
└──────────────────────────────────────┘

┌─ 朝 の塾 ───────────────────────────┐
│ □ 日  ～ □ 土  （同形式）              │
└──────────────────────────────────────┘

┌─ 碧 の塾 ───────────────────────────┐
│ □ 日  ～ □ 土  （同形式）              │
└──────────────────────────────────────┘
```

### 6.2 スイミングの設定（碧）

塾と同形式（曜日ごとに時刻を設定）：

```
┌─ 碧 のスイミング ────────────────────┐
│ □ 日  [--:--] 〜 [--:--]              │
│ □ 月  [--:--] 〜 [--:--]              │
│ ☑ 水  [16:00] 〜 [17:30]              │
│ □ 木  ～ □ 土  [--:--] 〜 [--:--]    │
└──────────────────────────────────────┘
```

- 保存キー: `swimming_setting_aoi`
- 該当曜日セルに「水泳」と表示

### 6.3 繰り返し予定の個別上書き

- 繰り返しデフォルトで表示された予定はセルに薄い色で表示
- タップすると「その日だけ削除」「時刻変更」「以降すべて変更」を選択可能

---

## 7. その他のイベント

### 7.1 イベント追加

- セル長押し または「＋」FABボタンから追加ダイアログを開く
- 入力項目：
  - タイトル（必須）
  - 対象メンバー（複数選択可）
  - 日付
  - 開始・終了時刻（任意）
  - カラーラベル（8色から選択）
  - メモ（任意）

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

- イベントタップ → 詳細ボトムシート（編集・削除ボタン付き）
- 削除は確認ダイアログ表示

---

## 8. データ設計

すべてのデータを `localStorage` に保存（JSONシリアライズ）。

```
localStorage keys:
  events              : Event[]          // 全イベント配列
  mama_shifts         : {[date]: string} // ママ勤務状況
  juku_setting_momo   : RecurringSetting // ももの塾設定
  juku_setting_asa    : RecurringSetting // 朝の塾設定
  juku_setting_aoi    : RecurringSetting // 碧の塾設定
  swimming_setting_aoi: RecurringSetting // 碧のスイミング設定
  theme               : string           // 選択中テーマ
  override_events     : OverrideEvent[]  // 繰り返し個別上書き
```

```typescript
type Event = {
  id: string
  title: string
  members: ('papa' | 'mama' | 'momo' | 'asa' | 'aoi')[]
  date: string        // YYYY-MM-DD
  startTime?: string  // HH:MM
  endTime?: string    // HH:MM
  color: string       // カラーラベル
  note?: string
}

type DaySetting = {
  enabled: boolean
  startTime: string   // HH:MM
  endTime: string     // HH:MM
}

type RecurringSetting = {
  days: { [dayIndex: number]: DaySetting }  // key: 0=日, 1=月, ..., 6=土
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

設定アイコン（ヘッダー右上）からテーマを選択。

| テーマ名 | イメージ |
|----------|----------|
| ライト（デフォルト） | 白背景・清潔感 |
| ダーク | 黒背景・目に優しい |
| ナチュラル | ベージュ・木目調 |
| パステル | 淡い色合い・ポップ |

Tailwind CSS の CSS variables + `data-theme` 属性で切り替え。

---

## 10. スマートフォン最適化

- **ビューポート**: `width=device-width, initial-scale=1`
- **最小タップ領域**: 44×44px
- **フォントサイズ最小**: 12px（日付）、16px（入力）
- **スクロール**: 列ヘッダー固定、縦スクロールのみ
- **横スクロール対応**: 6列が狭い場合は左右スワイプでスクロール可能
- **FAB**: 右下に「＋」ボタン固定配置
- **ボトムシート**: モーダルは下から出現（自然なスマホ操作）
- **PWA対応**: manifest.json + Service Worker でホーム画面追加可能

---

## 11. GitHub Pages デプロイ構成

```
リポジトリ: HomeCal_web (public)
ブランチ: main → gh-pages (GitHub Actions で自動)

アクセスURL: https://{username}.github.io/HomeCal_web/
```

### GitHub Actions ワークフロー (.github/workflows/deploy.yml)

```yaml
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 12. ディレクトリ構成（実装時の想定）

```
HomeCal_web/
├── public/
│   ├── manifest.json
│   └── icons/
├── src/
│   ├── components/
│   │   ├── Calendar/
│   │   │   ├── CalendarGrid.tsx      # メイングリッド
│   │   │   ├── CalendarHeader.tsx    # 月ナビ・テーマ選択
│   │   │   ├── DayCell.tsx           # 各日セル
│   │   │   └── MamaShiftCell.tsx     # ママ勤務リストボックス
│   │   ├── Settings/
│   │   │   ├── SettingsPanel.tsx     # 繰り返し設定パネル
│   │   │   ├── RecurringForm.tsx     # 塾・スイミング設定フォーム
│   │   └── Events/
│   │       ├── EventDialog.tsx       # イベント追加・編集
│   │       └── EventBottomSheet.tsx  # イベント詳細
│   ├── store/
│   │   └── useCalendarStore.ts       # Zustand ストア
│   ├── utils/
│   │   ├── dateUtils.ts
│   │   └── recurringUtils.ts         # 繰り返し予定の展開ロジック
│   ├── themes/
│   │   └── themes.ts
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
- [ ] 複数デバイス間の同期（将来的に Firebase 等）
- [ ] 祝日の自動表示（内閣府API利用）
- [ ] パパの勤務状況の設定（ママと同様に追加するか）
- [ ] 通知機能（Web Push）

---

*作成日: 2026-06-03*