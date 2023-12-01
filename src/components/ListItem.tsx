import { Character } from "../types";

interface ListItemProps {
    character: Character;
    onListItemClick: (character: Character) => void;
}

const ListItem: React.FC<ListItemProps> = ({ character, onListItemClick }) => {
    return (
        <tr onClick={() => onListItemClick(character)}>
            <td>{character.id}</td>
            <td>{character.fullName}</td>
            <td>
                <img
                    src={character.imageUrl}
                    alt={character.fullName}
                    className="w-16 h-16 object-cover rounded-full"
                />
            </td>
        </tr>
    );
};

export default ListItem;
