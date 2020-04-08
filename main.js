//参加者番号を生成
const subjectID = Math.floor(Math.random() * 100000)
jsPsych.data.addProperties({
    subjectID: subjectID
})

//学習開始のメッセージ
const readyLearning = {
    type: 'html-button-response',
    stimulus: learningInst,
    choices: ['次へ'],
    post_trial_gap: postTrialGap
}

//学習単語の試行
const learningTrial = {
    type: 'html-keyboard-response',
    stimulus: jsPsych.timelineVariable("item"),
    choices: jsPsych.NO_KEYS,
    trial_duration: learningDuration,
    post_trial_gap: postTrialGap,
    data: {
        trialType: 'learning'
    }
}

//学習段階を構成
const learningPhase = {
    timeline: [learningTrial],
    timeline_variables: learningWordList,
    data: {
        phase: 'learning'
    }
}

//計算課題
const mathTrial = {
    type: 'html-button-response',
    stimulus: '1 + 1 + 1 = 1 ',
    choices: ['誤り', '正しい'],
    prompt: '<div style = "font-size: 2.5vh"><p>計算結果が正しいかどうかを判断し，</p>' +
        '<p>ボタンをクリックして回答してください</p></div>',
    data: {
        trialType: 'mathCongruent'
    },
    //試行開始時に正しい計算式または誤った計算式を生成する
    on_start: function (trial) {
        var mathElapsedTime = 0;
        let mathCorrect = 0;
        let mathNumbers = [];
        for (let i = 0; i < 3; i++) {
            mathNumbers[i] = Math.floor(Math.random() * 9 + 1);
            mathCorrect = mathCorrect + mathNumbers[i];
        }
        mathBranch = Math.floor(Math.random() * 2);
        //正しい計算式を出す
        if (mathBranch == 0) {
            trial.stimulus = '<div style ="font-size:4vh"><p>' + String(mathNumbers[0]) + ' + ' + String(mathNumbers[1]) + ' + ' + String(mathNumbers[2]) + ' = ' + String(mathCorrect) + '</p></div>';
            //正誤判定用
            trial.data.trialType = 'mathCongruent';
        }
        //誤った計算式を出す
        else {
            trial.stimulus = '<div style ="font-size:4vh"><p>' + String(mathNumbers[0]) + ' + ' + String(mathNumbers[1]) + ' + ' + String(mathNumbers[2]) + ' = ' + String(mathCorrect + Math.floor(Math.random() * 9 + 1)) + '</p></div>';
            trial.data.trialType = 'mathIncongruent';
        }
    },
    on_finish: function (data) {
        //誤り計算式で誤りを選んだ時は正解
        if (data.trialType == 'mathIncongruent' && data.button_pressed == 0) {
            data.mathResponse = 'correct';
        }
        //正しい計算式で正しいを選んだ時は正解
        else if (data.trialType == 'mathCongruent' && data.button_pressed == 1) {
            data.mathResponse = 'correct';
        }
        //上記以外は不正解
        else {
            data.mathResponse = 'incorrect';
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
}

//計算段階（mathDurationの時間までループ）
const mathPhase = {
    timeline: [mathTrial],
    loop_function: function (data) {

        //計算課題の経過時間が予定時間（mathDuration)以下の場合はループする（trueでループ継続）
        if (Date.now() - startTime < mathDuration) {
            return true;
        } else {
            return false;
        };
    },
    data: {
        phase: 'math'
    }
};

//自由再生段階
const freeRecallPhase = {
    type: 'html-keyboard-response',
    stimulus: freeRecallText,
    choices: jsPsych.NO_KEYS,
    trial_duration: freeRecallDuration,
    post_trial_gap: postTrialGap,
    data: {
        trialType: 'freeRecall',
        phase: 'freeRecall'
    }
}

//終了画面
const finishMSG = {
    type: 'html-keyboard-response',
    stimulus: finishMSGtext,
    choices: jsPsych.NO_KEYS,
    trial_duration: 10 * 1000,
    post_trial_gap: postTrialGap,
    data: {
        trialType: 'finish',
        phase: 'finish'
    }
}

//全体構成
//空のtimelineを作成
const timeline = [];

//学習段階をタイムラインに追加
timeline.push(readyLearning);
timeline.push(learningPhase);

//計算段階
switch (addMathPhase) {
    case 0:
        break;
    case 1:
        timeline.push(getStartTime, mathPhase)
        break;
    case 2:
        if (subjectID % 2 == 0) {
            timeline.push(getStartTime, mathPhase)
        }
        break;
}

//自由再生段階
timeline.push(freeRecallPhase)

//終了画面
timeline.push(finishMSG)

//以下はjsPsychの初期設定
jsPsych.init({
    timeline: timeline,
    on_finish: function () {
        //データ保存の設定
        switch (savingMethod) {
            case 0:
                //終了時にデータを画面に表示
                jsPsych.data.displayData("csv")
                break;
            case 1:
                //終了時にデータをcsvに出力
                jsPsych.data.get().localSave("csv", "data.csv")
                break;
            case 2:
                break;
        }
    }
});