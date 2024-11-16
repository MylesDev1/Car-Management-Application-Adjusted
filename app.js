// Fetch and display cars
document.addEventListener('DOMContentLoaded', function() {
    fetchCars();
});

function fetchCars() {
    fetch('/api/cars')  // Assuming you have an API endpoint to get cars
        .then(response => response.json())
        .then(cars => {
            const carList = document.getElementById('car-list');
            carList.innerHTML = '';
            cars.forEach(car => {
                const carItem = document.createElement('div');
                carItem.className = 'car-item';
                carItem.innerHTML = `
                    <h3>${car.title}</h3>
                    <p>${car.description}</p>
                `;
                carList.appendChild(carItem);
            });
        })
        .catch(error => console.error('Error fetching cars:', error));
}
