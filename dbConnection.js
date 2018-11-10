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

module.exports = {
    
}