const studentForm = document.getElementById('studentForm');
const studentTableBody = document.querySelector('#studentTable tbody');

let students = [];

studentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const roll = document.getElementById('roll').value.trim();
  const course = document.getElementById('course').value.trim();

  if (name && roll && course) {
    const student = { id: Date.now(), name, roll, course };
    students.push(student);
    renderStudents();
    studentForm.reset();
  }
});

function renderStudents() {
  studentTableBody.innerHTML = '';

  students.forEach(student => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${student.name}</td>
      <td>${student.roll}</td>
      <td>${student.course}</td>
      <td><button class="deleteBtn" data-id="${student.id}">Delete</button></td>
    `;
    studentTableBody.appendChild(tr);
  });

  document.querySelectorAll('.deleteBtn').forEach(button => {
    button.addEventListener('click', () => {
      const id = Number(button.getAttribute('data-id'));
      students = students.filter(s => s.id !== id);
      renderStudents();
    });
  });
}