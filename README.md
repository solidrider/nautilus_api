# nautilus_api

## Nautilusとは？
#### 様々な情報レイヤーを一枚の地図に重ねて、その場所や地域の価値を知るためのアプリです。

<img width="1019" alt="スクリーンショット 2022-11-30 19 39 02" src="https://user-images.githubusercontent.com/76609328/204778425-f696bdb1-42fe-48da-b1cb-f8552d2dca67.png">


#### 主な機能は以下の３つ
<img width="1044" alt="スクリーンショット 2022-11-30 19 44 09" src="https://user-images.githubusercontent.com/76609328/204778510-4d0cf3ed-f03b-468e-8da9-8ae4d4668f9d.png">


#### 今回は機能①に注目しつつ、日本の都道府県レベルで地域性を知ることができるアプリを開発しました。
<hr>

## 実際のアプリ画面

![動画１](https://user-images.githubusercontent.com/76609328/204788982-9c899e9d-5bcb-4ecf-aa9f-2a2fc44f890d.gif)
#### 1. 画面左サイドバーからレイヤーを選択するとレイヤー情報に応じて地図が塗り分けられます。
#### 2. レイヤーは複数選択することができレイヤーの重ね合わせによる複合的な情報を可視化することができます。
#### 3. 任意の地点をクリックするとその地点のレイヤー情報をまとめて取得することができます。
#### この例では人口密度と県民所得のレイヤーを選択しており、色の濃さおよびクリックによって東京都が両者とも高い数値であることがわかります。

## その他の機能

### 1. ランキング機能
![動画２](https://user-images.githubusercontent.com/76609328/204791251-3fdef490-5d5a-4999-bb45-5a8154a124f1.gif)

#### ランキング表示によって色情報ではなく表形式でデータを見ることができます。
<hr>

### 2. 相関係数計算機能
![動画３](https://user-images.githubusercontent.com/76609328/204791824-3bf439fd-a4b7-416c-b53d-99437c437f19.gif)

#### レイヤー同士の関係性を相関係数を計算することで目安的に知ることができます。
#### 人口密度と県民所得の例ではやや正の相関が見られる。
#### →このことから人口密度の高い地域ほど都市部が多く、都市部では所得が平均的に高いことというような考察することができます。

<hr>

## 活用例
