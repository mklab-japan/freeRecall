let stimulusPhrase;
let temp_responses;
const surveyDemo = {
    type: 'survey-text',
    preamble: '<p style = "font-size: 2vh">以下の質問にご回答ください</p>',
    button_label: '次へ',
    questions: [{
        prompt: '<p style = "font-size: 2vh">あなたの好きな四文字熟語を1つ入力してください</p>',
        name: 'surveyDemo',
        rows: 1,
        columns: 10
    }],
    on_finish: function (data) {
        //データを一時的に格納
        temp_responses = JSON.parse(data.responses);
        //テキスト入力した質問のデータを格納
        stimulusPhrase = temp_responses.surveyDemo;
    }
};

const textDemo = {
    type: 'html-keyboard-response',
    stimulus: ' ',
    choices: jsPsych.NO_KEYS,
    trial_duration: 10000,
    on_start: function (trial) {
        //試行開始時に刺激を入力したテキストに置き換え
        trial.stimulus = stimulusPhrase;
    }
};

//実験を構成
const timeline = [];
timeline.push(surveyDemo);
timeline.push(textDemo);

jsPsych.init({
    timeline: timeline,
});
