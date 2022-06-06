import * as MaterialDesign from "react-icons/md";
import { Link } from "react-router-dom";
import { AdminRoutes, route } from "../../../core/routing";

const Table = ({items = [], edit}) => {
  return (
   <div className="flex flex-col h-2/6">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden">
            <table className="min-w-full">
            <thead className="border-b bg-gray-100">
                <tr>
                    {/* Only display the keys once */}
                    {Object.keys(items[0]).map(key => (
                        // everything except the id and image
                        <th key={key} scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            {key}
                        </th>
                    ))}

                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left"></th>

                </tr>
            </thead>
            <tbody>
                {
                items.map(item => (
                    <tr key={item.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    {
                    Object.keys(item).map(key => (
                        // everything except the id and image
                        <td key={key} className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                            {item[key]}
                        </td>
                    ))
                    }
                    <td key={item.id}>
                        <Link to={route(edit, { id: item.id, })} className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-no-wrap flex justify-items-center">
                            <MaterialDesign.MdEdit />
                        </Link>
                    </td>
                    </tr>
                ))
                }
            </tbody>
            </table>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Table