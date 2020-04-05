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
        return applicant;
    } catch (err) {
        console.log(`ERROR: cannot insert applicant`)
        throw err;
    }
}
