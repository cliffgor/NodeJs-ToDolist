const mysql = require ('promise-mysql');

const dbConfig ={
    user: "cliffgor",
    password: "cliffgor220",
    database: "todo_dev",
    host: "localhost",
    connectionLimit: 10

}

module.exports = async () => {
    try {
        let pool;
        let con;
        if (pool) con = pool.getConection();
        else{
            pool = await mysql.createPool(dbConfig);
            con - pool.getConnection();
            
        }
        returncon;
    }catch (ex) {
        throw ex;
    }
}

// queries to perform crud

module.exports = {
    insert_todo: `INSERT INTO tbl_todo(title,completed ) VALUES(?, ?)`,
    read_todo: `SELECT * FROM tbl_todo`,
    update_todo: `UPDATE tbl_todo SET tbl_todo.title = ?. tb;_todo.completed =? WHERE tbl_todo.id = ?`,
    delete_todo: `DELETE FROM tbl_todo WHERE tbl.id = ?`
}

