//学習語を配列で入力してください
//シングルクォーテーション(')で囲んでください
//単語同士はカンマで繋いでください
let learningWordList = [
'リンゴ',
'ミカン',
'スイカ',
'イチゴ',
'メロン',
'キウイ',
'パイン'
]

//連想配列に変換
for (i in learningWordList) {
    learningWordList[i] = {
        item: learningWordList[i],
        itemType: 'learningWordList'
    }
}

//ランダマイズ
learningWordList = jsPsych.randomization.shuffle(learningWordList)
