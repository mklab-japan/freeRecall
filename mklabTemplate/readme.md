# jsPsych用のテンプレート
jsPsychチュートリアル（https://www.notion.so/jsPsych-73cade0a2e044217aedf01b5845e8d4e）で用いたjsPsych用のテンプレートです。

## 使い方
index.htmlとmain.jsを書き換えてご利用ください。


mklabPluginsに少し便利な修正を加えたプラグインが入っているのでよろしければどうぞ。読み込むプラグインとしてこちらを指定してください。typeとして読み込む名前はオリジナルのままで利用できます。

## mklabPluginsに入っているもの
 * jspsych-fullscreen-J.js
 
 フルスクリーン表示の日本語対応版
 * jspsych-html-button-response-mk.js
 
 オリジナルでは，選んだボタン（choices）の順番（index）のみが出力されていたため，選んだボタンの値も出力されるように修正
 （例えば，「1」「2」「3」というボタンがあり，「1」を選んだ場合，オリジナルでは「0」が出力，修正版では，indexの「0」とvalueの「1」が出力されます）
 * jspsych-image-button-response-mk.js
 
 オリジナルでは，選んだボタン（choices）の順番（index）のみが出力されていたため，選んだボタンの値も出力されるように修正
 * jspsych-survey-likert-viewport.js
 
 リッカート尺度の単位をviewport（vh, vw）に変更
 * jspsych-survey-multi-choice-mk.js
 
 多肢選択のレイアウトを変更したもの（例えば，選択肢の後ろにあったチェックボタンを選択肢の前に移動）
 * jspsych-survey-text-mk.js
 
 教示（preamble）がテキストボックスの上に来るように修正