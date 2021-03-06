const dbService = require('../../services/db.service')
module.exports = {
    query,
    add
}

async function query() {
    const collection = await dbService.getCollection('applicant')
    try {
        const applicants = await collection.find().toArray();
        return applicants
    } catch (err) {
        console.log('ERROR: cannot find applicants')
        throw err;
    }
}

async function add(applicant) {
    const collection = await dbService.getCollection('applicant')
    try {
        await collection.insertOne(applicant);
        let postStatus = { success: true }
        return postStatus
    } catch (err) {
        console.log(`ERROR: cannot insert applicant`)
        throw err;
    }
}

async function _validateFirstSubmit (applicant) {
    const applications = query()
    return applications.find(application => application.emial = applicant.email)
}