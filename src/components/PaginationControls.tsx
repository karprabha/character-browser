interface PaginationControlsProps {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    onPageChange: (newPage: number) => void;
    onItemsPerPageChange: (value: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
    currentPage,
    itemsPerPage,
    totalItems,
    onPageChange,
    onItemsPerPageChange,
}) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
        <div className="flex items-center justify-end py-3 px-2 gap-4 border border-t-0">
            <div className="flex items-center">
                <span className="text-sm font-light text-gray-600 mr-2">
                    Items per page:
                </span>
                <select
                    value={itemsPerPage}
                    onChange={(e) =>
                        onItemsPerPageChange(Number(e.target.value))
                    }
                    className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded"
                >
                    {[5, 10, 20].map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex items-center gap-4">
                <span className="text-sm font-light text-gray-600">
                    {startIndex + 1} – {Math.min(endIndex, totalItems)} of{" "}
                    {totalItems}
                </span>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-2.5 pb-1 pt-0.5 rounded ${
                            currentPage === 1
                                ? "bg-gray-300 text-gray-500"
                                : "bg-gray-800 text-white hover:bg-gray-950"
                        }`}
                    >
                        {"<"}
                    </button>
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={endIndex >= totalItems}
                        className={`px-2.5 pb-1 pt-0.5 rounded ${
                            endIndex >= totalItems
                                ? "bg-gray-300 text-gray-500"
                                : "bg-gray-800 text-white hover:bg-gray-950"
                        }`}
                    >
                        {">"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaginationControls;
