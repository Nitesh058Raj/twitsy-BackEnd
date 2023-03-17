const QUERY = {

    USER: {
        SELECT_ALL: "SELECT * FROM Users",
        SELECT: "SELECT * FROM Users WHERE user_id = ?",
        CREATE: "INSERT INTO Users(name, email) VALUES(?,?)",
        UPDATE: "UPDATE Users SET name = ?, email = ?",
        DELETE: "DELETE FROM Users WHERE user_id = ?"
    },
    TWIT: {
        SELECT_ALL: "SELECT * FROM Twits",
        SELECT: "SELECT * FROM Twits WHERE twit_id = ?",
        CREATE: "INSERT INTO Twits(user_id, title, description) VALUES(?,?,?)",
        UPDATE: "UPDATE Twits SET title = ?, description = ?",
        DELETE: "DELETE FROM Twits WHERE twit_id = ?"
    },
    COMMENT: {

    }
};

export default QUERY;
