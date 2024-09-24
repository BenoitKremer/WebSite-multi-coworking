import { useState, useEffect } from "react";
import useFetchGet from "./useFetchGet";
import "./Database.css";
import useFetchPost from "./useFetchPost";
import useFetchPut from "./useFetchPut";

const Database = () => {
    // State local pour gérer les utilisateurs
    const [users, setUsers] = useState([]);
    
    // Utilisation du custom hook pour récupérer le nom des colonnes
    const { data: columns, isPending: pColumns, error: eColumns } = useFetchGet("http://localhost:3300/columns/users");
    
    // Utilisation du custom hook pour récupérer les utilisateurs
    const { data: fetchedUsers, isPending: pUser, error: eUser } = useFetchGet("http://localhost:3300/users");

    // Utilisation du custom hook pour envoyer les données POST
    const { postData } = useFetchPost("http://localhost:3300/users");

    const { putData } = useFetchPut("http://localhost:3300/users/:id");

    // Mettre à jour les utilisateurs lorsque `fetchedUsers` change
    useEffect(() => {
        if (fetchedUsers) {
            setUsers(fetchedUsers);
        }
    }, [fetchedUsers]);

    // Fonction pour éditer un utilisateur
    const handleEditUser = async (id) => {
        const updatedUser = {
            id: id,
            first_name: "UpdatedFirstName",
            last_name: "UpdatedLastName",
            email: "updated.email@example.com",
            phone_number: "0123456789",
            password: "UpdatedPassword"
        };

        // Envoyer la requête PUT pour mettre à jour l'utilisateur
        await putData(updatedUser);

        // Mettre à jour l'utilisateur dans l'état local sans recharger la page
        setUsers((prevUsers) =>
            prevUsers.map((user) => (user.id === id ? updatedUser : user))
        );
    };

    // Fonction pour supprimer un utilisateur
    const handleDeleteUser = async (id) => {
        // Envoyer la requête DELETE pour supprimer l'utilisateur
        await fetch(`http://localhost:3300/users/${id}`, {
            method: "DELETE",
        });

        // Supprimer l'utilisateur de l'état local sans recharger la page
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    };
    // Fonction pour ajouter un nouvel utilisateur
    const handleAddUser = async () => {
        // Définir les données de l'utilisateur
        const newUser = {
            id: 10, // gérer l'id dynamiquement côté backend
            first_name: "François",
            last_name: "Ramirez",
            email: "François.Ramirez@gmail.com",
            phone_number: "0654879632",
            password: "ElGuevarudo43"
        };

        // Envoyer la requête POST pour ajouter un utilisateur
        await postData(newUser);

        // Ajouter le nouvel utilisateur à l'état local sans recharger la page
        setUsers((prevUsers) => [...prevUsers, newUser]);
    };

    return (
        <div className="database row-span-6 col-span-7 bg-slate-200 m-5 flex justify-center items-center">
            {eColumns && <div>{eColumns}</div>}
            {pColumns && <div>{pColumns}</div>}
            
            <button className="self-start m-5" onClick={handleAddUser}>Add User</button>
            
            <table className="self-start m-5">
                <thead>
                    <tr>
                        {columns && columns.map((item, index) => (
                            <th key={index} className="data-item">
                                {item.column_name}
                            </th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {eUser && <tr><td>{eUser}</td></tr>}
                    {pUser && <tr><td>{pUser}</td></tr>}
                    {users && users.map((item, index) => (
                        <tr key={index}>
                            <td className="data-content">{item.id}</td>
                            <td className="data-content">{item.first_name}</td>
                            <td className="data-content">{item.last_name}</td>
                            <td className="data-content">{item.email}</td>
                            <td className="data-content">{item.phone_number}</td>
                            <td className="data-content">{item.password}</td>
                            <td>
                                <button className="mx-2" onClick={() => handleEditUser(item.id)}>Edit</button>
                                <button className="mx-2" onClick={() => handleDeleteUser(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Database;
