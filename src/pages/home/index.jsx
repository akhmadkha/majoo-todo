import React from "react";
import Header from "../../components/header";
import ShowTodo from "../../features/todo/show";

function Home() {
  return (
    <div className="home-wrapper mx-auto">
      <Header/>
      <ShowTodo/>
    </div>
  );
}

export default Home;
