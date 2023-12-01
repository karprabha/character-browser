const SkeletonListItem = () => {
    return (
        <tr className="border">
            <td className="p-1">
                <span className="block w-16 h-4 m-auto bg-gray-300 rounded animate-pulse"></span>
            </td>
            <td className="p-1">
                <span className="block w-28 h-4 m-auto bg-gray-300 rounded animate-pulse"></span>
            </td>
            <td className="p-1 text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full m-auto animate-pulse"></div>
            </td>
        </tr>
    );
};

export default SkeletonListItem;
