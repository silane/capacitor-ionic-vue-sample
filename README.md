# capacitor-ionic-vue-sample
[Capacitor](https://capacitorjs.com/)、[Ionic](https://ionicframework.com/)、[Vite](https://vitejs.dev/)、[Vue](https://vuejs.org/)でサンプルモバイルアプリを最低限のファイルだけで作成したもの。


## 各フレームワーク、ライブラリの説明
### Capacitor
ウェブアプリをモバイルアプリ化するフレームワーク。

### Ionic
見た目をAndroidやiOSに似せたウェブコンポーネントライブラリ。

### Vite
ウェブアプリを作成するためのビルドツール

### Vue
ウェブアプリのためのDOM操作ライブラリ。

## 各ファイルの説明
### `src/`
Vue、Ionicによるウェブアプリ。

### `vite.config.js`
Viteの設定ファイル。Vueをビルドできるようにしているだけ。

### `index.html`
ウェブアプリの外枠になる。Viteで使用される。

### `package.json`
ご存知npmが扱うファイル。Viteによって、`$ npm run dev`で開発サーバ起動、`npm run build`でビルドができるようにしてある。

### `capacitor.config.json`
Capacitorの設定ファイル。Viteは`dist/`ディレクトリ以下にビルドしたファイルを出力するのでその名前を指定している他、アプリ名やアプリのIDを指定している。

### `android/`
Capacitorが生成したディレクトリ。中身はAndroidStudioで扱えるプロジェクトの形式になっている。

## 開発手順
`src/`ディレクトリ以下のアプリ本体をコーディング。

`$ npm run build`でViteを使って`src/`ディレクトリの内容をビルドし`dist/`ディレクトリに出力。

`$ npx cap sync`でCapacitorを使って`dist/`ディレクトリの内容を`andorid/`ディレクトリに反映。

`$ npx cap open android`でAndroidStudioが開くのでよしなにビルドしたりエミュレータで動かしたりする。
