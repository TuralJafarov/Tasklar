import Typography from "@mui/material/Typography";
import MUTextfield from "../components/MUTextfield";
import { useState } from "react";
import MUIButton from "../components/MUIButton";
import CustomSelect from "../components/CustomSelect";
import { Box, TableRow, TableCell } from "@mui/material";
import MUTable from "../components/MUTable";
import MUICheckbox from "../components/MUICheckbox";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");

  // Add funksiyası
  const addTodo = () => {
    setTodos([
      ...todos,
      { id: Date.now(), text: input, description, dueDate, priority },
    ]);
    setInput("");
    setDescription("");
    setDueDate("");
    setPriority("");
  };

  // Delete funksiyası
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Status dəyişdirmək funksiyası
  const toggleTodoStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Filtr edilmiş todo-lar
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );


  
  const options = [
    { id: 1, value: "Easy" },
    { id: 2, value: "Medium" },
    { id: 3, value: "Hard" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h2" align="center" color="initial">
        To Do List
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <div>
          <MUTextfield
            label="Todo-ları filtrlə"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            fullWidth
          />
          <MUTextfield
            label="Qısa təsvir"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
          />

          <MUTextfield
            value={dueDate}
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
            fullWidth
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
          }}
        >
          <MUTextfield
            label="Əlavə et"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            fullWidth
          />
          <div>
            <CustomSelect
              sx={{ maxWidth: "200px" }}
              options={options}
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            />
          </div>

          <MUIButton
            sx={{ marginTop: "10px" }}
            variant="contained"
            color="primary"
            onClick={addTodo}
          >
            Add Todo
          </MUIButton>
        </div>
      </Box>

      {/* Filtr sahəsi */}

      {/* Filterlenmiş datalar */}
      <div>
        <MUTable>
          {filteredTodos?.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>{todo.text}</TableCell>
              <TableCell align="center">{todo.description}</TableCell>
              <TableCell align="center">{todo.dueDate}</TableCell>
              <TableCell align="center">{todo.priority}</TableCell>
              <TableCell align="center">
                <MUICheckbox
                  checked={todo.completed}
                  onChange={() => toggleTodoStatus(todo.id)}
                />
              </TableCell>
              <TableCell align="center">
                <MUIButton
                  variant="outlined"
                  color="secondary"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Sil
                </MUIButton>
              </TableCell>
            </TableRow>
          ))}
        </MUTable>
      </div>
    </div>
  );
};

export default TodoList;
