const fs = require('fs');

const getCompletado =(req,res)=>{
    const db = JSON.parse(fs.readFileSync('./db/db.json','utf8'));
    const taskCompleted = db?.filter(task=>task.estado == true);
    res.json({taskCompleted});
}
const getIncompleto =(req,res)=>{
    const db = JSON.parse(fs.readFileSync('./db/db.json','utf8'));
    const taskCompleted = db?.filter(task=>task.estado == false);
    res.json({taskCompleted});
}

module.exports={
    getCompletado,
    getIncompleto
}