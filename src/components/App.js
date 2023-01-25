import React from "react";
import Post from "./Post";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <Post title="Aprendendo react com Rocketset"/>
                <Post title="React e top demais"/>
                <Post title="React mais facil que Angular"/>
            </div>
        );

    }
}