const applicantService = require('./applicant.service')

async function addApplicant(req, res) {
    
     const applicant = await applicantService.add(req.body)
     res.send(applicant)
}

async function getApplicant(req, res) {
    console.log('applicant ID:', req.params.id);
    
    const applicant = await applicantService.getById(req.params.id)
    try {
        res.send(applicant)
    } catch {
        res.status(401).send()
    }
}
  
async function getApplicant(req, res) {
    const userId = req.query.data

    const applicants = await applicantService.query(userId)
    try {
        res.json(applicants)
    }
    catch(err) {
        console.log(err);
    }
    
}

module.exports = {
    addApplicant,
    getApplicant,
}