import React from 'react'

const UserTable = () => {
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Email </th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Name Data</td>
                <td>UserName Data</td>
                <td>Email Data</td>
                <td>
                    <button className='button muted-button'>Edit</button>
                    <button className='button muted-button'>Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
  )
}

export default UserTable