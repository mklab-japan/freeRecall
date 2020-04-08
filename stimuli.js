//学習語を配列で入力してください
//単語の前後をシングルクォーテーション(')で囲んでください
//単語同士はカンマで繋いでください
let learningWordList = [
    'メヒ',
    'ラエ',
    'エク',
    'ニム',
    'ナセ',
    'ノカ',
    'ホム',
    'ロツ',
    'ヌア',
    'ニユ',
    'セフ',
    'コヘ',
    'ミヒ',
    'ワマ',
    'タソ'
]

//連想配列に変換
for (i in learningWordList) {
    learningWordList[i] = {
        item: learningWordList[i],
        itemType: 'learningWord'
    }
}

//ランダマイズ
if(randomizedOrder == 1)
{
    learningWordList = jsPsych.randomization.shuffle(learningWordList)
}