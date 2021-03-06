import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import { Redirect } from "react-router-dom";
import UserCard from "../UserCard/UserCard";

function UserList({ isLogin }) {
    const [users, setUsers] = useState([{}]);
    // Fetch Data
    useEffect(() => {
        const fetchData = () => {
            axios
                .get("https://jsonplaceholder.typicode.com/users")
                .then((res) => setUsers(res.data))
                .catch((err) => console.log(err));
        };
        fetchData();
    }, []);

    return (
        <>
            {!isLogin ? (
                <Redirect to="/" />
            ) : (
                <div>
                    <Container>
                        <Row>
                            {users.map((user, i) => (
                                <UserCard user={user} key={i} />
                            ))}
                        </Row>
                    </Container>
                </div>
            )}
        </>
    );
}

export default UserList;
