"use client";
import React, { useState } from "react";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function WeeklyTodoPage() {
  const [todos, setTodos] = useState(
    daysOfWeek.reduce((acc, day) => {
      acc[day] = [];
      return acc;
    }, {})
  );

  const [newTask, setNewTask] = useState("");
  const [selectedDay, setSelectedDay] = useState(daysOfWeek[0]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTodos((prev) => ({
      ...prev,
      [selectedDay]: [...prev[selectedDay], newTask],
    }));
    setNewTask("");
  };

  const deleteTask = (day, index) => {
    setTodos((prev) => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Weekly To-Do List</h1>

      <div className="flex gap-2 mb-4">
        <select
          className="border p-2 rounded"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {daysOfWeek.map((day) => (
            <option key={day}>{day}</option>
          ))}
        </select>
      
  


        <input
          type="text"
          placeholder={'Add a task for ${selectedDay}'}
          className="border p-2 rounded w-64"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />

        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {daysOfWeek.map((day) => (
          <div key={day} className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-3">{day}</h2>
            {todos[day].length === 0 ? (
              <p className="text-gray-400">No tasks yet.</p>
            ) : (
              <ul className="space-y-2">
                {todos[day].map((task, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border rounded p-2"
                  >
                    <span>{task}</span>
                    <button
                      onClick={() => deleteTask(day, index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}