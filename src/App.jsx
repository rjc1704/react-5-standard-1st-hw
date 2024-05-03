import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({ name: "홍길동", age: 25 });
  // const [items, setItems] = useState(["사과", "바나나", "오렌지"]);

  // const [newItem, setNewItem] = useState("");

  const { name, age } = user;

  // const addNewItem = (e) => {
  //   e.preventDefault();
  //   if (items.includes(newIㄱtem)) {
  //     alert("이미 있는 아이템입니다.");
  //     return;
  //   }
  //   setItems([...items, newItem]);
  //   setNewItem("");
  // };

  // const handleRemoveItem = (itemName) => {
  //   const filteredItems = items.filter((item) => item !== itemName);
  //   setItems(filteredItems);
  // };

  // const logItems = () => {
  //   items.forEach((item) => console.log(item));
  // };

  const changeUserInfo = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <h1>사용자 정보</h1>
      <h2>사용자 정보 변경</h2>
      <section>
        <label>이름</label>
        <input name="name" defaultValue={user.name} onChange={changeUserInfo} />
        <label>나이</label>
        <input name="age" defaultValue={user.age} onChange={changeUserInfo} />
      </section>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      {/* <h2>사용자의 아이템 목록</h2>
      <form onSubmit={addNewItem}>
        <label htmlFor="newItem">새 아이템 추가:</label>
        <input
          id="newItem"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item}>
            {item} <button onClick={() => handleRemoveItem(item)}>삭제</button>
          </li>
        ))}
      </ul>
      <button onClick={logItems}>아이템 목록 콘솔에 출력</button> */}
    </>
  );
}

export default App;
