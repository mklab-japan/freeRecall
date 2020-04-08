# 自由再生課題
刺激の差し替えや呈示時間などをカスタマイズしやすい自由再生課題です。    
デフォルトの刺激は系列位置効果実験用の無意味語にしてあります。刺激は佐藤・小川（ 2017）によるなるほど！心理学実験法からの引用です。    
プログラムの詳しい説明は以下をご覧ください。系列位置効果の実験だけでなく，虚記憶や感情語の記憶実験にも利用できるはずです。紙に回答してもらうスタイルなので，正誤判断をしたい場合などは実験者が正答を別途配布する必要があります。    
キーボード入力を使わないのでスマートフォンでも利用できます（サーバーにアップする必要はありますが）。

## 利用方法
cloneまたはダウンロードしていだだき，index.htmlを開いてください。刺激や設定の変更はstimuli.jsとsetting.jsを編集することで可能です。

## 課題の構造
学習段階→計算段階*→自由再生段階から構成されます。    
*計算段階の実施の有無は設定で変更することができます。

## 刺激の差し替え
学習段階で呈示する単語を差し替えることができます。stimuli.jsをエディタで開いていただき，learningWordListを差し替えることで変更が可能です。単語の数を増やした分，試行回数が自動的に追加されます。

## 設定変更
setting.jsをエディタで開いて編集することで様々な実験設定を変更できます。参加者IDはランダムに5桁を生成です。

 * 計算課題の有無   
  計算課題の実施するかどうかを3パターン（全員なし，全員あり，参加者IDの偶数だけあり）で設定できます。

 * 計算課題の制限時間
 * 学習単語の呈示時間
 * 自由再生段階の時間
 * 各試行後のブランクの時間
 * 学習段階の教示
 * 自由再生段階の教示
 * 終了画面のメッセージ
 * データの保存方法   
データの保存方法は終了後に画面にcsvで表示，もしくは，終了時にcsvファイルで出力のどちらかを選択できます。

## デモ
デモです。計算段階ありでデータは最後に画面に表示されます。スマートフォンでも実行可能です（授業利用の可です）。

https://mklab-japan.github.io/freeRecall/
