

async function AdminData_rendering() {
    const houses = await GetAllHouses();
    document.getElementById('locationa').innerText = houses.length;
    /*document.getElementById('enventa').innerText = houses.length;
    document.getElementById('enventb').innerText = houses.length;*/

}

const LoadData = async () => {
    try {
        const some_house_data = await requesttoBackend('GET', `triumph`);
        if (some_house_data && some_house_data.length > 0) {
            const house_some_list = document.getElementById('house_some_list');
            let contentHTML = ''; // Initialize an empty string to accumulate HTML

            some_house_data.forEach((some_house) => {
                contentHTML += `
                    <tr>
                        <th scope="row"><a onclick="OpenNew('some_house._id}')"  style="cursor: pointer;">${some_house.type}</a></th>
                        <td>${some_house.ville}</td>
                        <td>${some_house.address}</td>
                        <td>${some_house.prix} F</td>
                        <td>
                            <button type="button" class="btn btn-primary" id="some_house._id}block" onclick="BlockUser('some_house._id}', 'some_house.allow}')">
                                <i class="far fa-eye-slash"></i>
                            </button>
                            <button type="button" class="btn btn-success" id="some_house._id}update" onclick="UpdateUser('some_house._id}')">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button type="button" class="btn btn-danger" id="some_house._id}delete" onclick="DeleteUser('some_house._id}')">
                                <i class="far fa-trash-alt"></i>
                            </button>
                            <button type="button" class="btn btn-danger" id="some_house._id}verify" onclick="VerifyUser('some_house._id}', 'some_house.status}')">
                                <i class="fa-solid fa-check"></i>
                            </button>
                        </td>
                    </tr>
                `;
            });

            house_some_list.innerHTML = contentHTML; // Update the DOM once
            document.getElementById('Dashboarda').style.display = "none"
            document.getElementById('Dashboardb').style.display = "block"
        }

    } catch (error) {
        console.error('Error loading some_house data:', error);
    }
};