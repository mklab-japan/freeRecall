//id入力関数の定義
function getSubjectID() {
    const intRegExp = /(^\d{3,3}$)/;
    const promptMsg = "3桁のIDを入力してください";
    const confirmMsg = "確認のため，IDをもう一度，入力してください";
    const invalidMsg = "無効な値です。再度，入力してください。";
    const matchMsg = "IDが一致しません。再度，入力してください。";

    let snum = window.prompt(promptMsg, "");

    while (snum != null && intRegExp.test(snum) == false) {
        // if the input was invalid, prompt again
        window.alert(invalidMsg);
        snum = window.prompt(promptMsg, "");
    }

    if (snum == null) {
        return null;
    }

    let sconfirm = window.prompt(confirmMsg, "");
    while (sconfirm != null && (sconfirm != snum || intRegExp.test(sconfirm) == false)) {
        // if the input was invalid, prompt again
        if (intRegExp.test(sconfirm) == false) {
            window.alert(invalidMsg);
        }

        // if the numbers do not match, alert the user and bail out so they can start over
        else if (sconfirm != snum) {
            window.alert(matchMsg);
            return null;
        }

        sconfirm = window.prompt(confirmMsg, "");
    }

    return sconfirm;
}

//id入力
const subjectID = getSubjectID();

//刺激
//リストA
const listA = ['リストA'];

//リストB
const listB = ['リストB'];

//余りを計算
const setSelector = subjectID % 2;

let learningWords = [];
let newWords = [];

//セットの割り当ての分岐
switch (setSelector) {
    case 0:
        //set1
        learningWords = listA;
        newWords = listB;
        break;

    case 1:
        //set1
        learningWords = listB;
        newWords = listA;
        break;
}

const showLearningWords = {
    type: 'html-keyboard-response',
    stimulus: learningWords,
    trial_duration: 1 * 5000,
    choices: jsPsych.NO_KEYS
};

const showNewWords = {
    type: 'html-keyboard-response',
    stimulus: newWords,
    trial_duration: 1 * 5000,
    choices: jsPsych.NO_KEYS
};


let timeline = [];

timeline.push(showLearningWords);
timeline.push(showNewWords);

jsPsych.init({
    timeline: timeline
    }
);
