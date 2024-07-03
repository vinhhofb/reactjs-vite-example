import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const EmployeeTable = ({ data, totalPages, handlePageClick, currentPage }) => {
    const headers = ['ID', 'Name', 'Email', 'Phone Number', 'Projects Count', 'Logo']
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index} scope="col" className="px-6 py-3">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.first_name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.title_name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.last_name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.logo ? (
                                        <img src={item.logo} alt={item.name} className="w-10 h-10 rounded-full" />
                                    ) : (
                                        "No Logo"
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={<span className="px-3">...</span>}
                breakClassName={'break-me'}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={'pagination inline-flex -space-x-px text-sm'}
                previousClassName={'flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                nextClassName={'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                pageClassName={'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                activeClassName={'active'}
                onPageChange={handlePageClick}
                forcePage={currentPage}
            />
        </div>
    );
};

export default EmployeeTable;