const {Router} = require('express');
const { getMensaje, getTarea, postTarea, editTarea, deleteTarea, editEstado, getMensajeIdioma, getConteoDeNumero } = require('../Controladores/list-edit-routes');
const { getCompletado, getIncompleto } = require('../Controladores/list-view-routes');
const { Validacion, limit, PostJWT, DecodeJWT, idioma } = require('../Middleware/middleware');

const router = Router();
router.get('/',PostJWT, DecodeJWT, getMensaje);
router.get('/idioma/:idioma',idioma,getMensajeIdioma);
router.get('/conteo/:num',limit,getConteoDeNumero);

router.get('/tarea',getTarea);
router.post('/crear_tarea',Validacion,postTarea);
router.put('/editar_tareas/:id',editTarea);
router.put('/editar_estado_tareas/:id',editEstado);
router.delete('/eliminar_tarea/:id',deleteTarea);
// router.post('/login', )



router.get('/tareas_completas',getCompletado);
router.get('/tareas_incompletas',getIncompleto);

module.exports = router;