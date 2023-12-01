import { Character } from "../types";

interface CharacterModalProps {
    character: Character;
    onClose: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({
    character,
    onClose,
}) => {
    return (
        <div
            className="fixed inset-0 z-10 overflow-y-auto bg-gray-600 bg-opacity-50"
            onClick={onClose}
        >
            <div className="flex items-center justify-center min-h-screen">
                <div
                    className="bg-white rounded-lg overflow-hidden shadow-xl w-full max-w-xl m-4"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
                        <h2 className="text-2xl font-bold">
                            {character.fullName}
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-white hover:text-gray-300"
                        >
                            &times;
                        </button>
                    </div>
                    <div className="p-4 flex flex-col items-center">
                        <img
                            src={character.imageUrl}
                            alt={character.fullName}
                            className="w-full h-auto max-h-96 object-contain rounded mb-4"
                        />
                        <p className="mb-2">
                            <span className="font-semibold">ID:</span>{" "}
                            {character.id}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">First Name:</span>{" "}
                            {character.firstName}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Last Name:</span>{" "}
                            {character.lastName}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Title:</span>{" "}
                            {character.title}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Family:</span>{" "}
                            {character.family}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Image:</span>{" "}
                            {character.image}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Image URL:</span>{" "}
                            {character.imageUrl}
                        </p>
                    </div>
                    <div className="flex justify-end p-4">
                        <button
                            onClick={onClose}
                            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterModal;
