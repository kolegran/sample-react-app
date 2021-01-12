import React from "react";

export default function Users(props) {
    if (props.flag) {
        return (
            <div className="users">
                <h1>Users</h1>
            </div>
        );
    } else {
        return (
            <div className="users">
                <h1>Cannot find list of users</h1>
            </div>
        );
    }
}
