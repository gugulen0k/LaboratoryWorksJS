const students = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

students.forEach(student => {
    // Handling what happens when you start dragging an element
    student.addEventListener('dragstart', () => {
        student.classList.add('dragging');
    })

    // Handling what happens when you end dragging an element
    student.addEventListener('dragend', () => {
        student.classList.remove('dragging');
        student.classList.remove('dragging-to-container');
    })
})

containers.forEach(container => {
    // Handling what happens when you hover over drop zone
    container.addEventListener('dragover', (e) => {
        console.log('drag over')
        e.preventDefault();
        const draggable = document.querySelector('.dragging');

        if(e.target.classList.contains('bin')) {
            container.classList.add('bin-hover');
        } else {
            const list = container.querySelector('.block .students-list');
            draggable.classList.add('dragging-to-container');
            list.appendChild(document.querySelector('.dragging'));
        }
    })

    container.addEventListener('dragleave', (e) => {
        console.log("leave");
        if(e.target.classList.contains('bin')) {
            container.classList.remove('bin-hover');
        }
    })

    container.addEventListener('drop', (e) => {
        console.log('drag drop')
        const draggable = document.querySelector('.dragging');

        if(e.target.classList.contains('bin')) {
            container.classList.remove('bin-hover')
            draggable.remove()
        }
    })
})