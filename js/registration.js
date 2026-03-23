// Registration Form Handler for UofT Temerty Medicine Alumni
// ===========================================================
// Handles form submission, validation, and Firestore storage.
// Requires firebase-config.js to be loaded first.

async function submitRegistration(event) {
  event.preventDefault();

  const form = document.getElementById('registration-form');
  const submitBtn = form.querySelector('button[type="submit"]');
  const successDiv = document.getElementById('registration-success');

  // Get form values (IDs match the HTML form)
  const firstName = form.querySelector('#first-name').value.trim();
  const lastName = form.querySelector('#last-name').value.trim();
  const email = form.querySelector('#reg-email').value.trim();
  const phone = form.querySelector('#phone').value.trim();
  const studentId = form.querySelector('#student-id').value.trim();
  const linkedin = form.querySelector('#linkedin').value.trim();
  const gradYear = form.querySelector('#grad-year').value;
  const dietary = form.querySelector('#dietary').value.trim();
  const heardFrom = form.querySelector('#hear-about').value;
  const comments = form.querySelector('#comments').value.trim();

  // Validate required fields
  if (!firstName || !lastName || !email || !gradYear) {
    alert('Please fill in all required fields (First Name, Last Name, Email, Graduation Year).');
    return;
  }

  // Validate email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Disable the submit button to prevent double-submission
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';

  // Build registration data object
  var registrationData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone || null,
    studentId: studentId || null,
    linkedin: linkedin || null,
    graduationYear: gradYear,
    dietaryRestrictions: dietary || null,
    heardFrom: heardFrom || null,
    comments: comments || null,
    eventName: 'UofT Physiotherapy Alumni Reception',
    eventDate: '2026-05-18',
    registeredAt: firebase.firestore.FieldValue.serverTimestamp(),
    status: 'confirmed'
  };

  try {
    // Store the registration in Firestore
    await db.collection('event-registrations').add(registrationData);

    // Show success message and hide the form
    form.style.display = 'none';
    successDiv.style.display = 'block';
  } catch (error) {
    console.error('Registration error:', error);
    alert('There was an error submitting your registration. Please try again or contact us at medicine.advancement@utorontoalumni.ca');

    // Re-enable the submit button so the user can retry
    submitBtn.disabled = false;
    submitBtn.textContent = 'Register Now';
  }
}
