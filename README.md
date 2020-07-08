# 概要
Electron+React+TypeScriptでデスクトップアプリを作りたかった。
Qiitaにそれっぽい記事があったので試してみてるのがこのプロジェクト


# 参考記事

## Electron & React & Redux & TypeScript アプリ作成ワークショップ 1日目

https://qiita.com/EBIHARA_kenji/items/25e59f7132b96cb886f3

Node.jsやnpm、yarn、必要なmoduleの導入などの環境構築を行う程度
本記事ではreduxを入れているが、このプロジェクトではmobxを導入した

## Electron & React & Redux & TypeScript アプリ作成ワークショップ 2日目

https://qiita.com/EBIHARA_kenji/items/e6da1c3d6d16cf07b60a

typescriptやwebpackなどの環境設定を行い(詳細は以下に列挙)
最小構成で、一応動作するElectronアプリを作るところまで。

- typescriptの設定
- eslintの設定
- prettierの設定
- eslintとprettieの連携
- webpackの設定

eslintとprettier入らないので設定しなかった。

### トラブルシューティング

`./src/main.ts`の中で`path`や`process`などが無いと怒られた。
下記の手順で解決した
- yarn add -D @types/node
- tsconfig.jsonに、`types:["node"}`を追記。

関連コミット [191478b] [a63b532]

## 3日目～5日目はスキップ

 Reduxを使った基本的なアプリの開発だったのでここはスキップ
 仮にMobxを使うための環境設定を頑張る。

- mobxを使うにあたって
  - `mobx`と`mobx-react`を入れていれば基本は使える
  - decorator記法がエラーになるのでtsconfig.jsonで`"experimentalDecorators": true`を有効にしておく
  - tsconfig.jsonの`files`でコンパイル対象のファイルを定義しているとそのファイル以外ではデコレーターが使えない？という問題が起こった
  - tsconfig.jsonの中のElectron用の設定部分を`tsconfig.electron.json`に分離した
  - Electron用のビルドをする場合は`yarn tsc --project electron`にする。

- index.tscの中でいろいろやってみた
  - 普通にReact動くしMobxも動く、特に問題なさそう
