const mongoose = require( 'mongoose')

const conexao = async () => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/acltri')
    //conexao atlas
    var atlas = await mongoose.connect ('mongodb+srv://UserAdmin:do04092005@fiaptecnico.jawtu.mongodb.net/fiap')
}
module.exports = conexao