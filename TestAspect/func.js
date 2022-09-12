//функция поиска в базе
module.exports.select = async function Select(tableName, searchField) {
    var mysql = require("mysql2/promise");
    try {
        var pool = mysql.createPool({
            host: "localhost",
            user: "root",
            database: "Aspect",
            password: "4321"
        });
        searchField = "%" + searchField + "%";
        var fields = [searchField, searchField];
        var sql1 = 'SELECT COUNT(*) AS count FROM ' + tableName + ' WHERE name LIKE ? OR description LIKE ?;';
        var result1 = await pool.query(sql1, fields, function (err, results) {
            if (err) console.log(err);
            return results;
        });

        var sql2 = 'SELECT * FROM ' + tableName + ' WHERE name LIKE ? OR description LIKE ? ORDER BY name, description LIMIT 20 ';
        var result2 = await pool.query(sql2, fields, function(err, results) {
            if(err) console.log(err);
            return results;
        });
        pool.end();
    }
    catch (err) {
        console.log(err.message);
        return [0, null];
    }
    return [result1[0][0].count, result2[0]];
}