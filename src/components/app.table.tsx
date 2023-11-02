
'use client'
import { Button, Table } from "react-bootstrap"
import CreateModal from "./create.modal";
import { useState } from "react";

interface IProp {
    blogs: IBlog[]
}


const AppTable = (prop: IProp) => {
    const { blogs } = prop;

    const [showModalCreate, setShowModalCreate] = useState<boolean>(false);

    return (
        <>
            <div className='mb-3'
                style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Table Blog</h3>
                <Button variant='secondary' onClick={() => setShowModalCreate(true)}>Add new</Button>
            </div>

            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        {/* <th>Content</th> */}
                    </tr>
                </thead>
                <tbody>

                    {blogs.map(blog => {
                        return (
                            <tr key={blog.id}>
                                <td>{blog.id}</td>
                                <td>{blog.title}</td>
                                <td>{blog.author}</td>
                                <td>
                                    <Button>View</Button>
                                    <Button variant="warning" className="mx-3">Edit</Button>
                                    <Button variant="danger">Delete</Button>
                                </td>
                                {/* <td>{blog.content}</td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <CreateModal
                showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
            />
        </>
    )
}

export default AppTable;