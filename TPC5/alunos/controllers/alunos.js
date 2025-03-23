var Aluno = require('../models/alunos');

module.exports.list = () => {
    return Aluno.find().sort({nome: 1}).exec()
}

module.exports.findById = id => {
    return Aluno.findOne({_id: id}).exec()
}

module.exports.insert = aluno => {  
    if(Aluno.find({_id: aluno.id}).exec().length != 1) {
        var newAluno = new Aluno(aluno)
        newAluno._id = aluno.id
        return newAluno.save()
    }
}

module.exports.update = (id, aluno) => {  
    const updateOps = { $set: {}, $unset: {} };
    let hasUnset = false;
    
    updateOps.$set.nome = aluno.nome;
    updateOps.$set.gitlink = aluno.gitlink;
    
    for (let i = 1; i <= 8; i++) {
        const tpc = `tpc${i}`;
        if (tpc in aluno) {
        updateOps.$set[tpc] = aluno[tpc];
        } else {
        updateOps.$unset[tpc] = "";
        hasUnset = true;
        }
    }
    
    if (!hasUnset) {
        delete updateOps.$unset;
    }
    
    return Aluno.findByIdAndUpdate(id, updateOps).exec();
}

module.exports.delete = (id, aluno) => {
    return Aluno.findByIdAndDelete({_id: id}).exec()
}
