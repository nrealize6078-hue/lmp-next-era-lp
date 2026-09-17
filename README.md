# LIFE MAKE PARTNERS｜新時代の集客 LP

賃貸仲介・管理会社に向けた LIFE MAKE PARTNERS 加盟訴求のランディングページ。

**公開URL:** https://nrealize6078-hue.github.io/lmp-next-era-lp/

## 構成

ビルド不要の静的サイトです。`index.html` をブラウザーで開けばそのまま確認できます。

| ファイル | 役割 |
|---|---|
| `index.html` | 見出し・文章・リンク・ページ構成 |
| `style.css` | 色・文字サイズ・余白・スマホ対応 |
| `script.js` | 集客モデルのタブ切替 / LINEボタンのフォールバック / 固定ボトムバーの表示 |
| `hero.png` | ヒーローのメイン画像 |
| `LP_原稿.txt` | 文章だけの修正相談用原稿（LPへは自動反映されません） |
| `README_編集方法.txt` | 非エンジニア向けの編集手順 |

## 問い合わせ導線

LINE公式アカウントに一本化しています（最終CTAのカード＋固定ボトムバーの2か所）。
リンクの変更は `index.html` 内の `https://lin.ee/vV1leDB` を全置換してください。

## 公開の反映

`main` ブランチのルートを GitHub Pages が配信しています。push すれば数十秒で反映されます。

```
git add -A && git commit -m "更新内容" && git push
```

## 公開前に確定が必要なもの

- 「地域独占」の表現
- 地域ごとの募集枠・活動範囲・加盟条件
