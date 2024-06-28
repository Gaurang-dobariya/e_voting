import React from 'react'
import { useSelector } from 'react-redux'

const Electors = () => {

    // fetch data
    let connectionData = useSelector((state) => state.connectionReducer)
    // console.log(connectionData);

    

    return (
        <>
            <div className='my-5 d-flex justify-content-end'>
                <button className='btn btn-outline-primary'>Submit</button>

            </div>
            <table class="table text-center border">
                <thead>
                    <tr>
                        <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>No</th>
                        <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>ELECTION</th>
                        <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>PARTY LOGO</th>
                        <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>PARTY NAME</th>
                        <th scope="col" className='text-light text-opacity-75 bg-primary fw-semibold'>SELECT</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        connectionData.connection?.map((val, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{val.election?.election_name}</td>
                                    <td><img src={val.party?.party_logo} width={40} alt="" /></td>
                                    <td>{val.party?.party_name}</td>
                                    <td><input class="border border-secondary form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Electors