//設定

// 計算課題の有無
// 0 = 計算課題なし
// 1 = 計算課題あり`
// 2 = 参加者IDが偶数のみ計算課題あり
const addMathPhase = 1;

//計算課題ありの場合の計算課題の制限時間（単位はms）
const mathDuration = 10 * 1000;

//学習単語の呈示時間（単位はms）
const learningDuration = 1 * 1000;

//学習単語をランダム呈示するかどうか
// 0 = ランダム呈示しない（learningWordListの上から順に呈示）
// 1 = ランダム呈示する
const randomizedOrder = 1;

//自由再生の時間（単位はms）
const freeRecallDuration = 60 * 1000;

//各試行後のブランクの時間（単位はms）
const postTrialGap = 0.5 * 1000;

//学習段階の教示
const learningInst = '<div style="font-size: 3vh"><p>この実験では，紙とペンが必要です。用意してください。</p>' +
    '<p>これから画面に表示される単語を覚えてください。</p>' +
    '<p>準備ができたら「次へ」を押してください。</p></div>'

//自由再生段階の教示
const freeRecallText = '<p>先ほど覚えた単語を回答用紙に記入してください！</p>' +
    '<p>回答は思い出した順でかまいません。60秒経つと終了します。</p>'

//終了画面
const finishMSGtext = '<p>実験終了です！お疲れさまでした！</p>'

//データ保存方法
// 0 = 終了後に画面に表示
// 1 = 終了時にcsvで出力
// 2 = 何も出さない（体験用）
const savingMethod = 0;