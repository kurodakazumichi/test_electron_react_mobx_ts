---
marp: true
---
<!-- theme: gaia -->
<!-- size: 16:9 -->
<!-- page_number: true -->
<!-- paginate: true -->

# Electron+React+TypeScriptでデスクトップアプリ

Qiitaにそれっぽい記事があったので試してみてるのがこのプロジェクト

---

# ワークショップ 1日目

https://qiita.com/EBIHARA_kenji/items/25e59f7132b96cb886f3

- 環境構築を行う程度
  - Node.jsやnpm、yarn、必要なmoduleの導入など
- 参考記事ではreduxを入れている
  - ➡このプロジェクトではmobxを導入した

---

# ワークショップ 2日目

https://qiita.com/EBIHARA_kenji/items/e6da1c3d6d16cf07b60a

- 環境設定
  (typescript、webpackなどの設定)
- 最小構成でElectronアプリが一応動くとこまで
- eslintとprettier
  - ➡個人的に不要なので入れなかった

---

# トラブルシューティング

`./src/main.ts`の中で`path`や`process`などが無いですよと**エラー**

## 解決方法
- `yarn add -D @types/node`
- tsconfig.jsonに、`types:{"node"}`を追記。

関連コミット [191478b] [a63b532]

---

# ワークショップ 3日目～5日目

**👆これはやらなかった**

- Reduxを使ったアプリの開発練習

  ➡ だってMobx使うし
  ➡ その辺は慣れてるし

---

# mobxを使うにあたって
- `yarn add mobx mobx-react`で導入
- `@computed`とかのデコレーション記法がエラーになる
  - tsconfig.jsonの`"experimentalDecorators": true`を有効化
- ElectronとReact用でtsconfigを分けるべきかも
  - tsconfig.jsonの`files`でコンパイル対象のファイルを定義しているとそのファイル以外でデコレーターが使えない
  - tsconfig.jsonの中のElectron用の設定部分を`tsconfig.electron.json`に分離
  - `yarn tsc --project electron`でビルド

---
# mobx動く？

普通に動く(^^)/

---


## ワークショップ 6日目

- Electronからローカルファイルにアクセスする話
- セキュリティとかどうなの？

  ➡ そういうときの為にpreloadってものがあるのじゃ

---

## 基本の流れ

- Reactで作ったものをビルド
- Electron用の処理をビルド
- 👆これを同じフォルダに出力されるようにする(./distとか)
- `electron ./dist/main.js`で実行

---

## この記事で分かった事

- Reactで作ったアプリをElectronで動かす方法
- ローカルファイルにアクセスする方法
- 基本的な考え方

React+Reduxの話が多め、そこらへんは読んでない

---

## この記事でわからなかった事

- HMRのやり方
  - コード書いたら変更がそのまま反映されてほしい
  ☞ https://cano.work/posts/2019-01-02--introduce-electron-webpack/
  - electron-webpackというものがあるらしい
  - それ使えば望んでる環境が手に入る(らしい)

---

## 調べときたいnpm

- fs-extra
  ➡ ファイルのアクセスに
- shortid
  ➡ 一意のID作成に

`yarn add fs-extra shortid && yarn add -D @types/fs-extra @types/shortid`

インストールしたけど結局使ってない。