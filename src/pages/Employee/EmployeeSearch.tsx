// import React, { useState } from 'react';
// import MultiSelectBox from '../../components/FormUI/MultiSelectBox';
// import SelectBox from '../../components/FormUI/SelectBox';
// import CheckBox from '../../components/FormUI/CheckBox';
// import RadioBox from '../../components/FormUI/RadioBox';
// import DatePickerBox from '../../components/FormUI/DatePickerBox';
// import InputBox from '../../components/FormUI/InputBox';
// import EmployeeTable from '../../../EmployeeTable';
import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import EmployeeTable from './components/EmployeeTable';
import queryString from 'query-string'

const EmployeeForm = () => {
    const [data, setData] = useState([]);
    const location = useLocation()
    const params = queryString.parse(location.search)
    const [currentPage, setCurrentPage] = useState(params.page ? params.page : 1);
    const [totalPages, setTotalPages] = useState(1);
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNzZkODNiMDY2MDMwNzlhZjEyNGU5YjI4M2I2NDM4N2NhZjYwZTRmNGRkZWJiZGQ0ODI3OTA1YzUyNGQ1ZTE2YmUxZWNhYzNlNTE4NDFkNWEiLCJpYXQiOjE3MTkxOTg2ODcuMTQzNDE3LCJuYmYiOjE3MTkxOTg2ODcuMTQzNDE5LCJleHAiOjE3NTA3MzQ2ODcuMTM5NzA3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.GYsO0AXCIDxftndD8NCGNBL_-IvR0jDHZBa1ureGiFN8bkn6vvIS_vqrzfvxwRqsb95VvHi3t51x37k0NSBlEZ1L35BVU2gNzPoTmypBbXvi_l87vRiN6NsgckKA5c-GrnJ8-ipES69Vkr_rgpufQmCMUenwmN58M4LpW4sLWh5ZQ9-Fo69wLyn_LCb6aQik9xJQtWRa7Qoy4GRswJNGsg6KkEYbErmDcso572dSPw-EvFrca-SCuWeyst4EBGLSgZlKJOSF3b0o8d1hk1j93Ll26tzvhssyyYwzWLVzA8rixkJCjrNOktI9VmxvAZhMKaGdh0iz2kA5-m5f9rwt9MzNlWOlHXCfYMn1Ogv0MzMXvaeJTLzOF9AkZVxPKFmISvSz3bYm79GOF15uJdyrnnbNfjip1kDloLYEHpQXG0kcYiXVDDgXNGeaDAD6Ya_2pV7mY7P5D3YiUD9-HvWAF_69bmZAVoxQDLDxmF_GWt2Tnw10Jh-xp2GZi48PVIEn5ZJNodPHnW91DVUzbcbpF9uWyX2RN6FEPtlQwarBaPYo_1ypKRpZbQMOKLjVfrJxoauC72hE5txSsEpUcnit3V5jop5Bv9lzULieEx3h49gDNgyZqDiKGB2Cp8E5dOe1adiwyewJWX55ZhgZfYp4-q62C9wuNdYW7Wtx3VdjrTk';

    useEffect(() => {
        fetchData(currentPage);
    }, []);

    const fetchData = async (page) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/v1/admin/employees?page=${page}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setData(response.data.data.data);
            setTotalPages(response.data.data.pagination.total_page);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    const handlePageClick = (event) => {
        const selectedPage = event.selected + 1; // +1 because API pages are 1-indexed

        setCurrentPage(selectedPage);
 
        window.history.pushState({ page: selectedPage }, `Page ${selectedPage}`, `?page=${selectedPage}`);
        fetchData(selectedPage);
    };

    return (
        <div className="App">
            <EmployeeTable
                data={data}
                totalPages={totalPages}
                handlePageClick={handlePageClick}
                currentPage={currentPage -1}
            />
        </div>
    );
};
export default EmployeeForm;