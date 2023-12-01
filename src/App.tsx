import { useEffect, useState } from "react";

import { Character } from "./types";
import ListItem from "./components/ListItem";
import PaginationControls from "./components/PaginationControls";
import CharacterModal from "./components/CharacterModal";
import ListHeader from "./components/ListHeader";
import SkeletonListItem from "./components/SkeletonListItem";

const ITEMS_PER_PAGE_OPTIONS = [5, 10, 20];

function App() {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState<Character[]>([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE_OPTIONS[1]);

    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [sortColumn, setSortColumn] = useState<"id" | "fullName">("id");

    const [showModal, setShowModal] = useState(false);
    const [selectedCharacter, setSelectedCharacter] =
        useState<Character | null>(null);

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
    }, []);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handleSort = (column: "id" | "fullName") => {
        if (sortColumn !== column) {
            setSortOrder("asc");
            setSortColumn(column);
        } else {
            setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
            setSortColumn(column);
        }
    };

    const sortedCharacters = characters
        .slice(startIndex, endIndex)
        .sort((a, b) => {
            if (sortColumn === "id") {
                return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
            } else if (sortColumn === "fullName") {
                return sortOrder === "asc"
                    ? a.fullName.localeCompare(b.fullName)
                    : b.fullName.localeCompare(a.fullName);
            }
            return 0;
        });

    const handleListItemClick = (character: Character) => {
        setSelectedCharacter(character);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCharacter(null);
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const handleItemsPerPageChange = (value: number) => {
        setItemsPerPage(value);
        setCurrentPage(1);
    };

    return (
        <>
            <header className="bg-gray-800 text-white py-2">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold">
                        Game of Thrones Characters
                    </h1>
                </div>
            </header>

            <main className="container mx-auto p-4 mt-8">
                <div className="max-w-screen-md mx-auto">
                    <table className="w-full border-collapse border bg-white shadow-md">
                        <thead>
                            <ListHeader
                                handleSort={handleSort}
                                sortOrder={sortOrder}
                                sortColumn={sortColumn}
                            />
                        </thead>
                        <tbody>
                            {loading
                                ? Array.from({ length: itemsPerPage }).map(
                                      (_, index) => (
                                          <SkeletonListItem key={index} />
                                      )
                                  )
                                : sortedCharacters.map((character) => (
                                      <ListItem
                                          key={character.id}
                                          character={character}
                                          onListItemClick={handleListItemClick}
                                      />
                                  ))}
                        </tbody>
                    </table>

                    <PaginationControls
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        totalItems={characters.length}
                        onPageChange={handlePageChange}
                        onItemsPerPageChange={handleItemsPerPageChange}
                    />
                </div>
            </main>

            {showModal && selectedCharacter && (
                <CharacterModal
                    character={selectedCharacter}
                    onClose={handleCloseModal}
                />
            )}

            <footer className="bg-gray-800 text-white py-2 mt-8">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Game of Thrones</p>
                </div>
            </footer>
        </>
    );
}

export default App;
