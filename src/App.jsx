import { useState } from "react";

function App() {
  // 1.할 일 입력 후 추가 버튼 클릭 시 할 일이 하단에 추가되고, 완료와 삭제 버튼이 우측에 생깁니다.
  // 2.할 일 완료 버튼 클릭 시 텍스트 중앙을 가로지르는 선이 생기고, 완료 버튼이 취소로 변경됩니다.
  // 3. 삭제 버튼 시 할 일이 삭제됩니다.
  const [work, setWork] = useState("");
  const [todos, setTodos] = useState([
    {
      id: crypto.randomUUID(),
      text: "잠자기",
      isDone: false,
    },
    {
      id: crypto.randomUUID(),
      text: "일어나기",
      isDone: true,
    },
  ]);
  console.log(work);

  const HandleAdd = (e) => {
    setWork(e.target.value);
  };

  const HandleAddTodo = (e) => {
    e.preventDefault();
    if (!work.trim()) {
      return alert("빈칸을 채우세요!");
    } else if (work.length < 3) {
      return alert("세글자 이상 넣으세요");
    }
    const newTodo = {
      id: crypto.randomUUID(),
      text: work,
      isdone: false,
    };

    setTodos([...todos, newTodo]);
    setWork("");
  };

  const DeleteHandleButton = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const HandleToggleButton = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };
  return (
    <div>
      <h1>할 일 목록</h1>
      <form onSubmit={HandleAddTodo}>
        <input
          type="text"
          placeholder="할 일을 추가하세요"
          value={work}
          onChange={HandleAdd}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todos.map((todo) => {
          // 노션에는 중괄호 대신 소괄호를 넣었는데 그 이유는??
          return (
            <li
              key={todo.id}
              style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
            >
              {todo.text}
              <button onClick={() => HandleToggleButton(todo.id)}>
                {" "}
                {todo.isDone ? "취소" : "완료"}
              </button>
              <button onClick={() => DeleteHandleButton(todo.id)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
