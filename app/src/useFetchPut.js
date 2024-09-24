import {useState} from 'react';

const useFetchPut = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const putData = async (user) => {
        setIsPending(true);
        setError(null);

        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                throw new Error("Failed to put data");
            }

            setIsPending(false);

            // Vérifie si la réponse a un corps avant d'essayer de la parser en JSON
            const contentType = response.headers.get("Content-Type");
            if (contentType && contentType.includes("application/json")) {
                return await response.json();  // Tenter de parser le JSON si présent
            } else {
                return null;  // Pas de contenu JSON à parser
            }

        } catch (err) {
            setError(err.message);
            setIsPending(false);
        }
    }
    return {putData, isPending, error};
}
 
export default useFetchPut;