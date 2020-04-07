const mathTrial = {
    type: 'html-button-response',
    stimulus: '1 + 1 + 1 = 1 ',
    choices: ['誤り', '正しい'],
    prompt: '<p>計算結果が正しいかどうかを判断してください</p>',
    //試行開始時に正しい計算式または誤った計算式を生成する
    on_start: function (trial) {
        let mathCorrect = 0;
        let mathNumbers = [];
        for (var i = 0; i < 3; i++) {
            mathNumbers[i] = Math.floor(Math.random() * 9 + 1);
            mathCorrect = mathCorrect + mathNumbers[i];
        }

        let mathBranch = Math.floor(Math.random() * 2);

        //正しい計算式を出す
        if (mathBranch == 0) {
            trial.stimulus = String(mathNumbers[0]) + ' + ' + String(mathNumbers[1]) + ' + ' + String(mathNumbers[2]) + ' = ' + String(mathCorrect);
        }
        //誤った計算式を出す
        else {
            trial.stimulus = String(mathNumbers[0]) + ' + ' + String(mathNumbers[1]) + ' + ' + String(mathNumbers[2]) + ' = ' + String(mathCorrect + Math.floor(Math.random() * 9 + 1));
        }
    }
};

//開始時間取得
let startTime;

const getStartTime = {
    type: 'call-function',
    func: function () {
        startTime = Date.now();
    }
};

const mathDuration = 60 * 1000;

const mathPhase = {
    timeline: [mathTrial],
    loop_function: function (data) {
        //計算課題の経過時間が予定時間（mathDuration)以下の場合はループ（trueでループ継続）
        if (Date.now() - startTime <= mathDuration) {
            return true;
        } else {
            return false;
        };
    }
};

const timeline = [];
timeline.push(getStartTime);
timeline.push(mathPhase);

jsPsych.init({
    timeline: timeline
});
