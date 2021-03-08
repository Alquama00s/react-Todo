import { Component } from "react";
import "./stylesheets/list.css";
function List(props) {

    return (

        <div className='list'>
            {props.view}
        </div>
    );

}
export default List;