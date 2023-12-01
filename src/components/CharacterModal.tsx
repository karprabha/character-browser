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
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-2 col-span-2 text-center">
                                <span className="text-xl font-bold">
                                    ID: {character.id}
                                </span>
                            </div>

                            <div className="mb-2  justify-items-center">
                                <span className="text-gray-700 font-semibold">
                                    First Name:{" "}
                                </span>
                                <span className="text-gray-800">
                                    {character.firstName}
                                </span>
                            </div>
                            <div className="mb-2">
                                <span className="text-gray-700 font-semibold">
                                    Last Name:{" "}
                                </span>
                                <span className="text-gray-800">
                                    {character.lastName}
                                </span>
                            </div>

                            <div className="mb-2">
                                <span className="text-gray-700 font-semibold">
                                    Full Name:{" "}
                                </span>
                                <span className="text-gray-800">{`${character.firstName} ${character.lastName}`}</span>
                            </div>

                            <div className="mb-2">
                                <span className="text-gray-700 font-semibold">
                                    Title:{" "}
                                </span>
                                <span className="text-gray-800">
                                    {character.title}
                                </span>
                            </div>

                            <div className="mb-2">
                                <span className="text-gray-700 font-semibold">
                                    Family:{" "}
                                </span>
                                <span className="text-gray-800">
                                    {character.family}
                                </span>
                            </div>
                            <div className="mb-2">
                                <span className="text-gray-700 font-semibold">
                                    Image:{" "}
                                </span>
                                <span className="text-gray-800">
                                    {character.image}
                                </span>
                            </div>

                            <div className="mb-2 col-span-2">
                                <span className="text-gray-700 font-semibold">
                                    Image URL:{" "}
                                </span>
                                <span className="text-gray-800">
                                    {character.imageUrl}
                                </span>
                            </div>
                        </div>
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
