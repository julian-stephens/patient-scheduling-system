# OpenAPI Definition

## Resources

- Person:

  - id
  - name
  - email
  - phone
  - address
  - sex
  - dob
  - appointments
  - createdAt
  - personType

- Patient (extends Person)

  - medications
  - pharmacy
  - primaryDoctor
  - admitStatus

- Employee (extends Person)

  - supervisor
  - role

- Appointment

  - id
  - dateTime
  - reason
  - createdAt

- Pharmacy

  - id
  - name
  - address

- Medication

  - id
  - name
  - issueDate
  - dosage
  - duration
  - patientId

## Routes

- /patients
  - GET: Array<Patient>
    - getPatients
  - POST: null
    - createPatient
- /patients/{patientId}
  - GET: Patient
    - showPatientById
  - PUT: null
    - updatePatient
  - DELETE: Patient
    - deletePatient
- /patients/{patientId}/appointments
  - GET: Array<Appointment>
    - getAppointmentsByPatient
  - POST: null
    - createAppointmentByPatient
- /patients/{patientId}/{appointmentId}
  - GET: Appointment
    - showAppointmentByPatient
  - PUT: null
    - updateAppointmentByPatient
  - DELETE: Appointment
    - deleteAppointmentByPatient
- /patients/{patientId}/medications
  - GET: Array<Medication>
    - getMedicationsByPatient
  - POST: null
    - createMedicationByPatient
- /patients/{patientId}/{medicationId}
  - GET: Medication
    - showMedicationByPatient
  - PUT: null
    - updateMedicationByPatient
  - DELETE: Medication
    - deleteMedicationByPatient
- /patients/{patientId}/pharmacies
  - GET: Array<Pharamacy>
    - getPharmaciesByPatient
  - POST: null
    - createPharmacyByPatient
- /patients/{patientId}/{pharmacyId}
  - GET: Pharamacy
    - showPharmaciesByPatient
  - PUT: null
    - updatePharmacyByPatient
  - DELETE: Pharmacy
    - deletePharmacyByPatient
- /employees
  - GET: Array<Employee>
    - getEmployees
  - POST: null
    - createEmployee
- /employees/{employeeId}
  - GET: Employee
    - showEmployeeById
  - PUT: null
    - updateEmployee
  - DELETE: Employee
    - deleteEmployee
- /employees/{employeeId}/appointments
  - GET: Array<Appointment>
    - getAppoinmentsByEmployee
  - POST: null
    - createAppointmentByEmployee
- /employees/{employeeId}/{appointmentId}
  - GET: Appointment
    - showApointmentByEmployee
  - PUT: null
    - updateAppointmentByEmployee
  - DELETE: Appointment
    - deleteAppointmentByEmployee
- /appointments
  - GET: Array<Appointment>
    - getAppointments
  - POST: null
    - createAppointment
- /appointments/{appointmentId}
  - GET: Appointment
    - showAppointmentById
  - PUT: null
    - updateAppointment
  - DELETE: Appointment
    - deleteAppointment
- /medications
  - GET: Array<Medication>
    - getMedications
  - POST: null
    - createMedication
- /medications/{medicationId}
  - GET: Medication
    - showMedicationById
  - PUT: null
    - updateMedication
  - DELETE: Medication
    - deleteMedication
- /pharmacies
  - GET: Array<Pharamacy>
    - getPharmacies
  - POST: null
    - createPharmacy
- /pharmacies/{pharmacyId}
  - GET: Pharamacy
    - showPharmacyById
  - PUT: null
    - updatePharmacy
  - DELETE: Pharmacy
    - deletePharmacy
