//ようこそ画面
var welcome = {
  type: "html-keyboard-response",
  stimulus: '<p>これから，様々な単語が5秒間，表示されます。</p>'+
  '<p>表示された単語を覚えていってください。</p>'+
 '<p>後ほど，記憶テストを行います。</p>'+
  '<p>記憶テストに回答できるよう，覚えてください。</p>'+
  '<p><br>準備ができたら，スペースキーを押してください。実験がはじまります。</p>'
};

//注視点
const showFixation = {
  type: "html-keyboard-response",
  stimulus: '<div style = "font-size: 4vh">+</div>',
  trial_duration: 1 * 1000,
  choices: jsPsych.NO_KEYS,
  post_trial_gap: 0.5 * 1000
};

//単語リスト
const wordList = [
  {word: '<p style = "font-size: 4vh;">リンゴ</p>'},
  {word: '<p style = "font-size: 4vh;">ミカン</p>'},
  {word: '<p style = "font-size: 4vh;">キウイ</p>'},
  {word: '<p style = "font-size: 4vh;">イチゴ</p>'},
  {word: '<p style = "font-size: 4vh;">メロン</p>'}
];

//単語を呈示
const showLearningWord = {
  type: "html-keyboard-response",
  stimulus: jsPsych.timelineVariable('word'),
  trial_duration: 5 * 1000,
  choices: jsPsych.NO_KEYS,
  post_trial_gap: 0.5 * 1000
};

//注視点と単語呈示からなる学習段階を作成
const learningPhase = {
  timeline: [showFixation, showLearningWord],
  timeline_variables: wordList,
  randomize_order: true
};

//自由再生開始
const startFreeRecall = {
  type: 'html-keyboard-response',
  stimulus: '<p>先ほど覚えた単語を思い出し，回答用紙に記入してください。</p>'+
  '<p>60秒が経過したら，この画面が切り替わります。回答をやめてください。</p>',
  trial_duration: 60 * 1000,
  choices: jsPsych.NO_KEYS
};

const stopFreeRecall = {
  type: 'html-keyboard-response',
  stimulus: '<p style = "color: tomato; font-size:4vh;">回答をやめてください。</p>',
  trial_duration: 5 * 1000,
  choices: jsPsych.NO_KEYS
};

//テスト段階を構成
const testPhase = {
  timeline: [startFreeRecall, stopFreeRecall]
};

//デブリーフィング
const debriefPhase = {
  type: 'html-keyboard-response',
  stimulus: '<div style = "color: tomato; font-size:4vh;"><p>これで実験終了です。ありがとうございました！</p></div>',
  trial_duration: 5 * 1000,
  choices: jsPsych.NO_KEYS
};

//実験を構成
const timeline = [];

//各段階を追加
timeline.push(welcome);
timeline.push(learningPhase);
timeline.push(testPhase);
timeline.push(debriefPhase);

//実験開始
jsPsych.init({
  timeline: timeline,
	on_finish: function()
	{
		jsPsych.data.displayData("csv")
	}
});
