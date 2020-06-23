const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let NotificacionSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    contenido: {
        type: Array,
        required: true
    }

},
{
    timestamps: { createdAt: 'created_at' }
}
);

module.exports = mongoose.model('Notifications', NotificacionSchema);