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

  // liタグ生成
  const li = document.createElement("li");

  // div生成：createElement:JS上でDOM生成
  const div = document.createElement("div");
  div.className = "list-row";

  // 　liタグの子要素に各要素を設定
  li.appendChild(div);

  const p = document.createElement("p");
  // タグ内に文字列生成：innerText:TODOに入力した内容を生成する
  p.innerText = inputText;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // button(完了)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
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
