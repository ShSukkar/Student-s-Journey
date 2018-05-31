
/**
 * Transfer a student to a new school
 * @param  {org.schoolsnetwork.TransStudents} transStudents - the trade marble transaction
 * @transaction
 */
async function transStudents(transStudents) {   // eslint-disable-line no-unused-vars
    transStudents.student.CurrentSchool = transStudents.NewSchool;
    const assetRegistry = await getAssetRegistry('org.schoolsnetwork.Students');
    await assetRegistry.update(transStudents.student);
}
