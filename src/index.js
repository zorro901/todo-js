import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して、初期化
  const inputText = document.getElementById("add-text").value; //テキストボックスの値を取得
  document.getElementById("add-text").value = ""; //値を初期化

  // li生成
  const li = document.createElement("li");
  li.className = "list-row";
  li.innerText = inputText;

  // div生成
  const div = document.createElement("div");
  li.appendChild(div);

  // button（完了）生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => alert("完了"));

  // button（削除）生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => alert("削除"));

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);

  // divタグの子要素に各要素を設定
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  console.log(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
