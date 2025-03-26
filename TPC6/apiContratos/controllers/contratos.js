var Contrato = require("../models/contratos")

module.exports.getContratos = () => {
    return Contrato
        .find()
        .exec()
}

module.exports.getContratoById = id => {
    return Contrato
        .findById(id)
        .exec()
}

module.exports.getContratoByEntidade = entidade => {
    return Contrato
        .find({entidade_comunicante : entidade})
        .exec()
}

module.exports.getContratoByTipo = tipo => {
    return Contrato
        .find({tipoprocedimento : tipo})
        .exec()
}

module.exports.getContratoByNIPC = nipc => {
    return Contrato
        .find({NIPC_entidade_comunicante : nipc})
        .exec()
}

module.exports.getEntidades = () => {
    return Contrato
        .distinct("entidade_comunicante")
        .sort({entidade_comunicante: 1})
        .exec()
}

module.exports.getTipos = () => {
    return Contrato
        .distinct("tipoprocedimento")
        .sort({tipoprocedimento : 1})
        .exec()
}

module.exports.insert = contr => {
    var contrToSave = new Contrato(contr)
    return contrToSave.save()
}

module.exports.update = (contr, id) => {
    return Contrato 
        .findByIdAndUpdate(id, contr, {new: true})
        .exec()
}

module.exports.delete = id => {
    return Contrato
        .findByIdAndDelete(id)
        .exec()
}


