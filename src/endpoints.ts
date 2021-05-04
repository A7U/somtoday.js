enum endpoints {
  baseURL = `/rest/v1`,
  appointment = `/afspraken`,
  homeworkWeek = "/studiewijzeritemweektoekenningen",
  homeworkAppointment = `/studiewijzeritemafspraaktoekenningen`,
  homeworkDate = `/studiewijzeritemdagtoekenningen`,
  schoolYears = `/schooljaren`,
  grades = `/resultaten/huidigVoorLeerling`,
}

// TODO: make everything use this
export default endpoints;
