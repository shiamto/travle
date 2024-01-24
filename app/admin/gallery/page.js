"use client";
import React, { useEffect, useState } from 'react';
import FormImage from '../../components/common/image';
import {Dropdown, Form, message, Modal, notification, Upload} from "antd";
import { useAction, useActionConfirm, useFetch } from '../../helpers/hooks';
import { deleteFile, fetchFiles, postFiles, postGallery } from '../../helpers/backend';
import { useRouter } from 'next/navigation';
import Card from '../../components/common/card';
import Button from '../../components/common/button';
import { FiArrowLeft, FiCopy, FiDownload, FiInfo, FiMoreVertical, FiSearch, FiTrash } from 'react-icons/fi';
import Pagination from '../../components/common/pagination';
import { BiImages } from 'react-icons/bi';
import { hideLoader, showLoader } from '../../components/common/loader';

const GalleryPage = () => {
    const [files, getFiles] = useFetch(fetchFiles)
    const [show, setShow] = useState(false)
    const { push } = useRouter()
    const [form] = Form.useForm();
    const [upload, setUpload] = useState([])
    const [file, setFile] = useState(null)
    
    console.log("files", upload)
    return (
        <div>
            <Card title="Add Gallery">
                <div className="flex justify-end">
                    <div className=''>
                        <Button
                            variant="primary"
                            className="mb-2.5"
                            style={{ display: show ? 'block' : 'none' }}
                            onClick={() => setShow(false)}>
                            Back
                        </Button>
                    </div>
                    <div style={{ display: show ? 'none' : 'flex' }}>
                        <Button variant="primary" className="mb-2.5" onClick={() => setShow(true)}>Upload</Button>
                    </div>
                </div>

                <div className="body">
                    <div className="overflow-x-hidden overflow-y-auto slim-scroll"
                         style={{display: show ? 'none' : 'block'}}>
                        <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 grid p-2">
                            {files?.map((file, index) => (
                                <div className="" key={index}>
                                    <div className="gallery-card">
                                        <div className="options">
                                            <Dropdown menu={{
                                                items: [
                                                    {
                                                        key: '1',
                                                        label: 'Download',
                                                        icon: <FiDownload/>,
                                                        onClick: () => {
                                                            downloadImage(file.path, file.name)
                                                        }
                                                    },
                                                    {
                                                        key: '2',
                                                        label: 'Copy Link' ,
                                                        icon: <FiCopy/>,
                                                        onClick: () => {
                                                            navigator.clipboard.writeText(file.path)
                                                            notification.success({message: 'Link copied to clipboard'})
                                                        }
                                                    },
                                                    {
                                                        key: '3',
                                                        label: 'Delete',
                                                        icon: <FiTrash/>,
                                                        className: 'text-danger',
                                                        onClick: () => {
                                                            return useActionConfirm(deleteFile, {id: file.id}, () => {
                                                                getFiles()}, 'Are you sure you want to delete this file?', 'Yes, Delete',)

                                                        }
                                                    },
                                                ]
                                            }}
                                                      overlayStyle={{width: 180, borderRadius: 4}}
                                                      placement="bottomRight">
                                                <FiMoreVertical role="button"/>
                                            </Dropdown>
                                        </div>
                                        <div className="image">
                                            <img src={file?.path} alt=""/>
                                        </div>
                                        <div className="title">
                                            {file?.name}
                                        </div>
                                        {/* {
                                            (renameCount === 2 && renameCountKay?.id === file?.id) ?
                                                <FormInput
                                                    name={'rename'}
                                                    placeholder={'Please enter file'}
                                                    onChange={handleFileRename}
                                                    onBlur={async ()=> {
                                                        setRenameCount(0)
                                                        const data = {
                                                            id: renameCountKay?.id,
                                                            name: renameValue + '.' + renameCountKay?.name?.split('.').pop()
                                                        }
                                                        return useAction(postFiles, data, () => {
                                                            getFiles()
                                                            setFile(undefined)
                                                        })
                                                    }}
                                                />
                                                :
                                                <div
                                                    onClick={()=> {
                                                        setRenameCount(pre => pre += 1)
                                                        setRenameCountKey(file)
                                                    }}
                                                    className="title"
                                                >
                                                    {file.name}
                                                </div>
                                        } */}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <Pagination
                                total={files?.meta?.total}
                                page={files?.meta?.current_page}
                                limit={files?.meta?.per_page}
                                totalPages={files?.meta?.total_page}
                                onPageChange={(page) => {
                                    getFiles({page})
                                }}
                            />
                        </div>

                    </div>


                    <div className="py-2" style={{display: show ? 'block' : 'none'}}>
                        <Upload.Dragger
                            name="file"
                            style={{borderRadius: 4}}
                            fileList={upload}
                            beforeUpload={file => {
                                if (file.type !== 'image/png' && file.type !== 'image/jpeg' && file.type !== 'image/jpg' && file.type !== 'image/gif' && file.type !== 'image/svg') {
                                    message.error(`${file.name} is not a image file`);
                                    return Upload.LIST_IGNORE
                                }
                                return false
                            }}
                            onChange={({fileList}) => {
                                setUpload(fileList)
                            }}
                            multiple={true}
                        >
                            <div className="flex justify-center items-center" style={{height: 300}}>
                                <div>
                                    <p className="ant-upload-drag-icon">
                                        <BiImages size={48}/>
                                    </p>
                                    <p className="ant-upload-text">Click or drag image to this area to upload</p>
                                </div>
                            </div>
                        </Upload.Dragger>
                        {upload?.length > 0 && (
                            <Button variant="primary" className="mt-3" onClick={async () => {
                                try {
                                    // let newArray = []
                                    let files = upload?.map(d => d.originFileObj)
                                    // await Promise.all(files.map(async (d) => {
                                    //     const compressedImage = await handleImageUploadCompression(d);
                                    //     newArray.push(compressedImage);
                                    // }));
                                    // showLoader()
                                    let {success, message} = await postFiles({image: files[0]}, {
                                        headers: {
                                            'Content-Type': 'multipart/form-data'
                                        }
                                    })
                                    // hideLoader()
                                    if (success === true) {
                                        setUpload([])
                                        getFiles()
                                        setShow(false)
                                        notification.success({message: 'Success', description: message || 'Successfully uploaded'})
                                    } else {
                                        notification.success({message: 'Error', description: message || 'Something went wrong'})
                                    }
                                } catch (e) {
                                    // hideLoader()
                                    notification.success({message: 'Error', description: 'Something went wrong'})
                                }
                            }}>Upload</Button>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default GalleryPage;


function downloadImage(url, name) {
    fetch(url)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(() => alert('Invalid File'));
}