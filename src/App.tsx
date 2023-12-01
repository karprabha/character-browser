import { useEffect, useState } from "react";

interface Character {
    id: number;
    firstName: string;
    lastName: string;
    fullName: string;
    title: string;
    family: string;
    image: string;
    imageUrl: string;
}

function App() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch(
                    "https://thronesapi.com/api/v2/Characters"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data: Character[] = await response.json();
                setCharacters(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchCharacters();
    });

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <ul>
                        {characters.map((character) => (
                            <li>
                                <div>
                                    <img
                                        src={character.imageUrl}
                                        alt={character.fullName}
                                    />
                                </div>
                                <div>
                                    <p>ID: {character.id}</p>
                                    <p>Name: {character.fullName}</p>
                                    <p>Family: {character.family}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default App;
