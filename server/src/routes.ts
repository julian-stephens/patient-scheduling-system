import { PatientsController } from "./controller/PatientsController";
import { EmployeesController } from "./controller/EmployeesController";
import { AppointmentsController } from "./controller/AppointmentsController";
import { MedicationsController } from "./controller/MedicationsController";
import { PharmaciesController } from "./controller/PharmaciesController";

export const AppRoutes = [
  // /patients
  {
    method: "get",
    route: "/patients",
    controller: PatientsController,
    action: "getPatients",
  },
  {
    method: "post",
    route: "/patients",
    controller: PatientsController,
    action: "createPatient",
  },
  {
    method: "get",
    route: "/patients/:id",
    controller: PatientsController,
    action: "showPatientById",
  },
  {
    method: "put",
    route: "/patients",
    controller: PatientsController,
    action: "updatePatient",
  },
  {
    method: "delete",
    route: "/patients/:id",
    controller: PatientsController,
    action: "deletePatient",
  },
  {
    method: "get",
    route: "patients/:id/appointments",
    controller: PatientsController,
    action: "getAppointmentsByPatient",
  },
  // /patients/appointments
  {
    method: "get",
    route: "patients/:id/appointments",
    controller: PatientsController,
    action: "getAppointmentsByPatient",
  },
  {
    method: "post",
    route: "patients/:id/appointments",
    controller: PatientsController,
    action: "createAppointmentsByPatient",
  },
  {
    method: "get",
    route: "patients/:id/appointments/:appointment_id",
    controller: PatientsController,
    action: "showAppointmentByPatient",
  },
  {
    method: "put",
    route: "patients/:id/appointments/:appointment_id",
    controller: PatientsController,
    action: "updateAppointmentByPatient",
  },
  {
    method: "delete",
    route: "patients/:id/appointments/:appointment_id",
    controller: PatientsController,
    action: "deleteAppointmentByPatient",
  },
  // /patients/medications
  {
    method: "get",
    route: "patients/:id/medications",
    controller: PatientsController,
    action: "getMedicationsByPatient",
  },
  {
    method: "post",
    route: "patients/:id/medications",
    controller: PatientsController,
    action: "createMedicationsByPatient",
  },
  {
    method: "get",
    route: "patients/:id/medications/:medication_id",
    controller: PatientsController,
    action: "getMedicationByPatient",
  },
  {
    method: "put",
    route: "patients/:id/medications/:medication_id",
    controller: PatientsController,
    action: "updateMedicationByPatient",
  },
  {
    method: "delete",
    route: "patients/:id/medications/:medication_id",
    controller: PatientsController,
    action: "deleteMedicationByPatient",
  },
  // /patients/pharmacies
  {
    method: "get",
    route: "patients/:id/pharmacies",
    controller: PatientsController,
    action: "getPharmaciesByPatient",
  },
  {
    method: "post",
    route: "patients/:id/pharmacies",
    controller: PatientsController,
    action: "createPharmaciesByPatient",
  },
  {
    method: "get",
    route: "patients/:id/pharmacies/:pharmacy_id",
    controller: PatientsController,
    action: "getPharmacyByPatient",
  },
  {
    method: "put",
    route: "patients/:id/pharmacies/:pharmacy_id",
    controller: PatientsController,
    action: "updatePharmacyByPatient",
  },
  {
    method: "delete",
    route: "patients/:id/pharmacies/:pharmacy_id",
    controller: PatientsController,
    action: "deletePharmacyByPatient",
  },
  // /employees
  {
    method: "get",
    route: "/employees",
    controller: EmployeesController,
    action: "getEmployees",
  },
  {
    method: "post",
    route: "/employees",
    controller: EmployeesController,
    action: "createEmployee",
  },
  {
    method: "get",
    route: "/employees/:id",
    controller: EmployeesController,
    action: "showEmployeeById",
  },
  {
    method: "put",
    route: "/employees",
    controller: EmployeesController,
    action: "updateEmployee",
  },
  {
    method: "delete",
    route: "/employees/:id",
    controller: EmployeesController,
    action: "deleteEmployee",
  },
  // /employees/appointments
  {
    method: "get",
    route: "/employees/:id/appointments",
    controller: EmployeesController,
    action: "getAppointmentsByEmployee",
  },
  {
    method: "post",
    route: "/employees/:id/appointments",
    controller: EmployeesController,
    action: "createAppointmentsByEmployee",
  },
  {
    method: "get",
    route: "/employees/:id/appointments/:appointment_id",
    controller: EmployeesController,
    action: "showAppointmentByEmployee",
  },
  {
    method: "put",
    route: "/employees/:id/appointments/:appointment_id",
    controller: EmployeesController,
    action: "updateAppointmentByEmployee",
  },
  {
    method: "delete",
    route: "/employees/:id/appointments/:appointment_id",
    controller: EmployeesController,
    action: "deleteAppointmentByEmployee",
  },
  // /appointments
  {
    method: "get",
    route: "/appointments",
    controller: AppointmentsController,
    action: "getAppointments",
  },
  {
    method: "post",
    route: "/appointments",
    controller: AppointmentsController,
    action: "createAppointment",
  },
  {
    method: "get",
    route: "/appointments/:id",
    controller: AppointmentsController,
    action: "showAppointment",
  },
  {
    method: "post",
    route: "/appointments/:id",
    controller: AppointmentsController,
    action: "updateAppointment",
  },
  {
    method: "delete",
    route: "/appointments/:id",
    controller: AppointmentsController,
    action: "deleteAppointment",
  },
  // /medications
  {
    method: "get",
    route: "/medications",
    controller: MedicationsController,
    action: "getMedications",
  },
  {
    method: "post",
    route: "/medications",
    controller: MedicationsController,
    action: "createMedication",
  },
  {
    method: "get",
    route: "/medications/:id",
    controller: MedicationsController,
    action: "showMedication",
  },
  {
    method: "post",
    route: "/medications/:id",
    controller: MedicationsController,
    action: "updateMedication",
  },
  {
    method: "delete",
    route: "/medications/:id",
    controller: MedicationsController,
    action: "deleteMedication",
  },
  // /pharmacies
  {
    method: "get",
    route: "/pharmacies",
    controller: PharmaciesController,
    action: "getPharmacies",
  },
  {
    method: "post",
    route: "/pharmacies",
    controller: PharmaciesController,
    action: "createPharmacy",
  },
  {
    method: "get",
    route: "/pharmacies/:id",
    controller: PharmaciesController,
    action: "showPharmacy",
  },
  {
    method: "post",
    route: "/pharmacies/:id",
    controller: PharmaciesController,
    action: "updatePharmacy",
  },
  {
    method: "delete",
    route: "/pharmacies/:id",
    controller: PharmaciesController,
    action: "deletePharmacy",
  },
];
