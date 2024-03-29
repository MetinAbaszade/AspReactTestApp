import { useSelector } from "react-redux";


export async function GetFueltypes(languageid) {
    try {
        const response = await fetch(`api/Fueltype/getfueltypes/${languageid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });

        if (!response.ok) {
            let error = new Error(`HTTP error! status: ${response.status}`);
            error.status = response.status;
            throw error;
        }

        const authResponse = await response.json();
        return authResponse.$values;
    }
    catch (error) {
        console.error('Error occurred while fetching FuelTypes:', error.message);
        throw error;
    }
}