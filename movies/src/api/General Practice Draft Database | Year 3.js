// Use the GeneralPractice database
use('GeneralPractice')

// Define Patients collection with subclasses
db.Patients.insertOne({
  Fname: "John",
  Lname: "Doe",
  DOB: "1990-05-15",
  phone: "123-456-7890",
  email: "johndoe@example.com",
  subclasses: [
    {
      subclassType: "Prescription",
      PresID: "ABC123",
      Test: "Blood Test",
      TestID: "BT001"
    }
  ]
})

// Define Appointments collection with subclasses
db.Appointments.insertOne({
  patientID: ObjectId("611234567890123456789012"), // Reference to the patient
  staffID: ObjectId("711234567890123456789012"),   // Reference to the staff
  date: ISODate("2024-03-05T10:00:00Z"),
  type: "Follow-up",
  notes: "Patient's condition improving.",
  subclasses: [
    {
      subclassType: "AdditionalInfo",
      infoID: "AI001",
      details: "Patient requested a reminder call."
    }
  ]
})

// Define Staff collection with subclasses
db.Staff.insertOne({
  firstName: "Dr. Jane",
  lastName: "Smith",
  specialization: "General Practitioner",
  phone: "987-654-3210",
  email: "drjanesmith@example.com",
  subclasses: [
    {
      subclassType: "Schedule",
      scheduleID: "SCH001",
      availability: ["Monday", "Wednesday", "Friday"]
    }
  ]
})

// Find a patient document
db.Patients.findOne({
  Fname: "John",
  Lname: "Doe"
})

// Find an appointment document
db.Appointments.findOne({
  date: ISODate("2024-03-05T10:00:00Z")
})

// Find a staff document
db.Staff.findOne({
  firstName: "Dr. Jane",
  lastName: "Smith"
})
