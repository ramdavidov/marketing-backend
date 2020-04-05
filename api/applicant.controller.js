const applicantService = require('./applicant.service')

async function addApplicant(req, res) {
    
     const applicant = await applicantService.add(req.body)
     res.send(applicant)
}

async function getApplicants(req, res) {

    const applicants = await boardService.query()
    try {
        res.json(applicants)
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = {
    addApplicant,
    getApplicants,
}