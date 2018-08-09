# pwa-intall-banner
PWAの最小構成ファイル。manifest.jsonファイルの設定とServie Workerの登録処理を行うことで、ホームスクリーンへのアイコン追加をすることができるプログラム  

## 前提条件
- LocalhostまたはHTTPS経由での配信が必要となります。

## ディレクトリ構成
```
リポジトリTOP
│
├ index.html .. 
├ src
│　├ css
│　├ images .. ホームスクリーンのアイコン画像
│　├ js
│　　├ app.js .. ServiceWorkerの登録処理を記述
│　　├ material.min.js.js .. ページデザイン用
├ manifest.json .. ウェブアプリ マニュフェスト
├ sw.js .. Service Workerの実行ファイル
```
## 動作概要
- index.htmlを表示したタイミングで、Service Workerの登録が行われます。
- 正常に登録ができればconsoleログに「Service worker registered」と表示されます。
- インストールバナー表示条件の詳細は、[こちら](https://developers.google.com/web/fundamentals/app-install-banners/)をご参照ください。
