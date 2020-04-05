const express = require('express')
const router = express.Router()

const { getApplicants, addApplicant } = require('./applicant.controller')

router.get('/', getApplicants)
router.post('/', addApplicant)


module.exports = router