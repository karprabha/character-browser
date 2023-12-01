import { Character } from "../types";

interface ListItemProps {
    character: Character;
}

const ListItem: React.FC<ListItemProps> = ({ character }) => {
    return (
        <li>
            <div>
                <img src={character.imageUrl} alt={character.fullName} />
            </div>
            <div>
                <p>ID: {character.id}</p>
                <p>Name: {character.fullName}</p>
                <p>Family: {character.family}</p>
            </div>
        </li>
    );
};

export default ListItem;
