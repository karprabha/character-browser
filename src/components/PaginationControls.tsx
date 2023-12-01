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
        <div className="flex items-center justify-end mt-4 gap-4">
            <div className="flex items-center">
                <span className="mr-2">Items per page:</span>
                <select
                    value={itemsPerPage}
                    onChange={(e) =>
                        onItemsPerPageChange(Number(e.target.value))
                    }
                >
                    {[5, 10, 20].map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex items-center gap-4">
                <span>
                    {startIndex + 1} – {Math.min(endIndex, totalItems)} of{" "}
                    {totalItems}
                </span>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        {"<"}
                    </button>
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={endIndex >= totalItems}
                    >
                        {">"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaginationControls;
