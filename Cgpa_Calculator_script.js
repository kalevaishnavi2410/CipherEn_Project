function addSubjectFields() {
    const numSubjects = document.getElementById('numSubjects').value;
    const subjectInputs = document.getElementById('subjectInputs');
    subjectInputs.innerHTML = ''; // Clear previous inputs
  
    for (let i = 1; i <= numSubjects; i++) {
      const div = document.createElement('div');
      div.classList.add('input-group');
      div.innerHTML = `
        <label for="credits${i}">Subject ${i} - Earned Credits:</label>
        <input type="number" id="credits${i}" min="1" required>
        <label for="grade${i}">Grade (O, A+, A, B+):</label>
        <input type="text" id="grade${i}" required>
      `;
      subjectInputs.appendChild(div);
    }
  }
  
  function calculateCGPA() {
    const numSubjects = document.getElementById('numSubjects').value;
    let totalCredits = 0;
    let creditGradePoints = 0;
  
    for (let i = 1; i <= numSubjects; i++) {
      const credits = parseInt(document.getElementById(`credits${i}`).value);
      const grade = document.getElementById(`grade${i}`).value.toUpperCase();
      let gradePoint;
  
      switch (grade) {
        case 'O':
          gradePoint = 10;
          break;
        case 'A+':
          gradePoint = 9;
          break;
        case 'A':
          gradePoint = 8;
          break;
        case 'B+':
          gradePoint = 7;
          break;
        default:
          gradePoint = 0; // Handle invalid grades, you can add validation as per the SPPU grading system
      }
  
      creditGradePoints += credits * gradePoint;
      totalCredits += credits;
    }
  
    const cgpa = creditGradePoints / totalCredits;
    document.getElementById('cgpaResult').innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
  }
  