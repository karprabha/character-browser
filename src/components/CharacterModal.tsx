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
        <div>
            <div>
                <h2>{character.fullName}</h2>
                <button onClick={onClose}>&times;</button>
            </div>
            <div>
                <img src={character.imageUrl} alt={character.fullName} />
                <p>ID: {character.id}</p>
                <p>First Name: {character.firstName}</p>
                <p>Last Name: {character.lastName}</p>
                <p>Title: {character.title}</p>
                <p>Family: {character.family}</p>
                <p>Image: {character.image}</p>
                <p>Image URL: {character.imageUrl}</p>
            </div>
            <div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default CharacterModal;
