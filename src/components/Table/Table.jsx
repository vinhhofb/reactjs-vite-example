import React from 'react';

const Table = ({ headers, data, children }) => {
  console.log(111)
  console.log(data)
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            // Kiểm tra nếu row không phải là object
            // if (typeof row == 'object') {
            //   return null; // Hoặc xử lý theo cách khác tùy vào yêu cầu của bạn
            // }
            console.log(row)
            // return (
            //   <tr key={rowIndex}>
            //     {Object.values(row).map((cell, cellIndex) => (
            //       <td
            //         key={cellIndex}
            //         className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-left"
            //       >
            //         {cell}
            //       </td>
            //     ))}
            //     {/* {children && (
            //       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left">
            //         {children(row, rowIndex)}
            //       </td>
            //     )} */}
            //   </tr>
            // );
          })}
        </tbody>
      </table>
    </div>
  );
  
};

export default Table;
