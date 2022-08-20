import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //   以下のDOMをJSで生成する
  //   <li>
  //   <div class="list-row">
  //     <p>TODOです</p>
  //     <button>完了</button>
  //     <button>削除</button>
  //   </div>
  //   </li>
  createIncompleteList(inputText);
};

// 関数：未完了リストから指定の要素を削除
const deleteFromIncomleteList = (idtaget, target) => {
  document.getElementById(idtaget).removeChild(target);
};

// 関数：未完了リストに追加する
const createIncompleteList = (text) => {
  // liタグ生成
  const li = document.createElement("li");
  li.idName = "list-area";

  // div生成：createElement:JS上でDOM生成
  const div = document.createElement("div");
  div.className = "list-row";

  // 　liタグの子要素に各要素を設定
  li.appendChild(div);

  const p = document.createElement("p");
  // タグ内に文字列生成：innerText:TODOに入力した内容を生成する
  p.innerText = text;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグを未完了リストから削除
    deleteFromIncomleteList("incomplete-list", li);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // p　タグ生成
    const p = document.createElement("p");
    p.innerText = text;

    // div以下を初期化
    addTarget.textContent = null;

    // button（戻す）タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ（div）を完了リストから削除
      deleteFromIncomleteList("complete-list", li);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
      console.log(text);

      // p　タグ生成
      const p = document.createElement("p");
      p.innerText = text;
    });

    // divタグの子要素に要素を追加
    addTarget.append(p);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(li);
    console.log(addTarget);
  });

  // button(完了)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（li）を未完了リストから削除
    deleteFromIncomleteList("incomplete-list", li);
  });

  // 　divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
