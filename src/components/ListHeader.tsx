import { useState } from "react";

interface ListHeaderProps {
    sortOrder: string;
    sortColumn: string;
    handleSort: (column: "id" | "fullName") => void;
}

const ListHeader: React.FC<ListHeaderProps> = ({
    handleSort,
    sortOrder,
    sortColumn,
}) => {
    const [hoveredColumn, setHoveredColumn] = useState<
        "id" | "fullName" | null
    >(null);

    return (
        <tr className="bg-gray-800 text-white">
            <th
                className="p-2 cursor-pointer"
                onClick={() => handleSort("id")}
                onMouseEnter={() => setHoveredColumn("id")}
                onMouseLeave={() => setHoveredColumn(null)}
            >
                ID {sortColumn === "id" && (sortOrder === "asc" ? "▲" : "▼")}
                {sortColumn !== "id" &&
                    (hoveredColumn === "id" ? (
                        "▲"
                    ) : (
                        <span className="opacity-0">▲</span>
                    ))}
            </th>
            <th
                className="p-2 cursor-pointer"
                onClick={() => handleSort("fullName")}
                onMouseEnter={() => setHoveredColumn("fullName")}
                onMouseLeave={() => setHoveredColumn(null)}
            >
                Name{" "}
                {sortColumn === "fullName" && (sortOrder === "asc" ? "▲" : "▼")}
                {sortColumn !== "fullName" &&
                    (hoveredColumn === "fullName" ? (
                        "▲"
                    ) : (
                        <span className="opacity-0">▲</span>
                    ))}
            </th>
            <th className="p-2">Image</th>
        </tr>
    );
};

export default ListHeader;
