const router = express.Router()
const {getAuto, setAuto, updateAuto, deleteAuto} = require ("../controllers/controllerAutos")

router.get ("/", getAuto)
router.post ("/", setAuto)
router.update ("/:id", updateAuto)
router.delete ("/:id", deleteAuto)

module.exports = router