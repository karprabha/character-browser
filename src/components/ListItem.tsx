import { Character } from "../types";

interface ListItemProps {
    character: Character;
    onListItemClick: (character: Character) => void;
}

const ListItem: React.FC<ListItemProps> = ({ character, onListItemClick }) => {
    return (
        <tr
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => onListItemClick(character)}
        >
            <td className="p-1 text-center">{character.id}</td>
            <td className="p-1 text-center">{character.fullName}</td>
            <td className="p-1 text-center">
                <img
                    src={character.imageUrl}
                    alt={character.fullName}
                    className="w-12 h-12 object-cover rounded-full text-center m-auto"
                />
            </td>
        </tr>
    );
};

export default ListItem;
