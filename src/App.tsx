import { useEffect, useState } from "react";
import ListItem from "./components/ListItem";
import { Character } from "./types";

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
                            <ListItem
                                key={character.id}
                                character={character}
                            />
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default App;
