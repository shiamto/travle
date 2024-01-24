"use client"

import { Checkbox, Form, message, Modal, notification, Tabs, Upload } from 'antd'
import { useEffect, useRef, useState } from "react";
import { useFetch } from "../../helpers/hooks";
import { fetchFiles, postFiles } from "../../helpers/backend";
import { BiImages } from "react-icons/bi";
import Button from "../common/button";
import { FiSearch, FiXCircle } from "react-icons/fi";
import Pagination from "../common/pagination";
import { AiOutlineCheckCircle } from "react-icons/ai";

const FormImage = ({name, label, max = 1, required, disabled, ...rest }) => {
    const [files, getFiles] = useFetch(fetchFiles)
    const [visible, setVisible] = useState(false)
    let initRules = [
        { required: required, message: `Please provide ${typeof label === 'string' && label?.toLowerCase() || 'a value'}` },
    ]

    const [tab, setTab] = useState('gallery')
    const [upload, setUpload] = useState([])
    const [showSelected, setShowSelected] = useState(false)
    const [selected, setSelected] = useState([])

    // const onChangeRef = useRef()

    // const onChange = onChangeRef.current || (() => {
    //     console.log('onChange is not defined')
    // })
    const onChange = (selectedFiles) => {
        setSelected(selectedFiles);
        console.log("selectedFiles",selectedFiles)
    };
    

    // const onChange = (selectedFiles) => {
    //     console.log("selectedFiles",selectedFiles)
    //     setSelected(selectedFiles);
    // };

    let images = showSelected ? selected : files

    const handleClick = (file) => {
        let find = selected?.find(d => d.id === file.id)
        if (find) {
            onChange(selected?.filter(d => d.id !== file.id))
        } else {
            if (selected?.length >= max) {
                message.error(`You can select maximum ${max} file`)
            } else {
                onChange([...(selected || []), file])
            }
        }
    }


    const Input = () => {
        // onChangeRef.current = onChange
        // useEffect(() => {
        //     onChange(value)
        // }, [onChange])
        // const handleClick = (file) => {
        //     const find = value.find(d => d.id === file.id);
        //     if (find) {
        //         setValue(value.filter(d => d.id !== file.id));
        //     } else {
        //         if (value.length >= max) {
        //             message.error(`You can select a maximum of ${max} file(s)`);
        //         } else {
        //             setValue([...value, file]);
        //         }
        //     }
        // };
        

        return (
            <>
                <div className="form-control form-image" role="button" onClick={() => !disabled && setVisible(true)}
                    style={{ opacity: disabled ? 0.6 : 1 }}>
                    <span>Browse</span>
                    <span>{selected?.length > 0 ? `${selected?.length} file selected` : 'Select file'}</span>
                </div>
                <div className="flex flex-wrap my-2">
                    {selected?.map((file, index) => (
                        <div className="p-4 relative" style={{ height: 140 }} key={index}>
                            <FiXCircle
                                role="button"
                                onClick={() =>  setSelected(selected.filter(d => d.id !== file.id))}
                                className="absolute shadow-lg text-red-500"
                                style={{ right: 8, top: 8 }} size={20} />
                            <img style={{ maxHeight: '100%', width: 'auto' }} src={file.path} alt="" />
                        </div>
                    ))}
                </div>
            </>
        )
    }

    return (
        <>
            <Form.Item name={name} label={label} className="mb-2" initialValue={[]} rules={[...initRules]}>
                <Input />
            </Form.Item>
            <Modal open={visible} onCancel={() => setVisible(false)} title={null} width={1200} footer={null}>
                <Tabs activeKey={tab} onChange={setTab}>
                    <Tabs.TabPane tab="Gallery" key="gallery">
                        <div className="flex mb-2">
                            <div>
                                <Checkbox
                                    checked={showSelected}
                                    onChange={e => setShowSelected(e.target.checked)}>
                                    Show Selected Only
                                </Checkbox>
                            </div>
                        </div>
                        <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 grid p-2">
                            {images?.map((file, index) => (
                                <div className="" key={index}>
                                    <div className="gallery-card" role="button" onClick={() => handleClick(file)}>
                                        <div className="options">
                                            {selected?.find(d => d.id === file.id) &&
                                                <AiOutlineCheckCircle size={20} className="text-primary" />}
                                        </div>
                                        <div className="image">
                                            <img src={file.path} alt="" />
                                        </div>
                                        <div className="title">{file.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {images?.length === 0 && (
                            <div className="flex justify-center items-center"
                                style={{ height: 300 }}>
                                <div className="text-center">
                                    <p className="ant-upload-drag-icon">
                                        <BiImages size={48} />
                                    </p>
                                    <p className="ant-upload-text">No image found</p>
                                </div>
                            </div>
                        )}
                        <div className="flex justify-between items-center">
                            <div>
                                <div style={{ display: showSelected ? 'none' : 'block' }}>
                                    <Pagination
                                        showLeftTab={false}
                                        total={files?.meta?.total || 0}
                                        page={files?.meta?.current_page || 1}
                                        limit={files?.meta?.per_page}
                                        totalPages={files?.meta?.total_page || 1}
                                        onPageChange={(page) => {
                                            getFiles({ page })
                                        }}
                                    />
                                </div>
                            </div>
                            <Button variant="primary" onClick={() => {
                                setVisible(false)
                            }}>Add Files</Button>
                        </div>

                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Upload" key="upload">
                        <div className="py-3">
                            <Upload.Dragger
                                name="file"
                                style={{ borderRadius: 4 }}
                                fileList={upload}
                                beforeUpload={file => {
                                    if (file.type !== 'image/png' && file.type !== 'image/jpeg' && file.type !== 'image/jpg' && file.type !== 'image/gif' && file.type !== 'image/svg' && file.type !== 'image/x-icon') {
                                        message.error(`${file.name} is not a image file`);
                                        return Upload.LIST_IGNORE
                                    }
                                    return false
                                }}
                                onChange={({ fileList }) => {
                                    setUpload(fileList)
                                }}
                                multiple={true}
                            >
                                <div className="flex justify-center items-center"
                                    style={{ height: 300 }}>
                                    <div>
                                        <p className="ant-upload-drag-icon">
                                            <BiImages size={48} />
                                        </p>
                                        <p className="ant-upload-text">Click or drag image to this area to
                                            upload</p>
                                    </div>
                                </div>
                            </Upload.Dragger>
                            {upload?.length > 0 && (
                                <Button variant="primary" className="mt-3" onClick={async () => {
                                    try {
                                        let files = upload?.map(d => d.originFileObj)
                                        // showLoader()
                                        // let func = seller ? postSellerFiles : postFiles
                                        let { success, message } = await postFiles({image: files[0]}, {
                                            headers: {
                                                'Content-Type': 'multipart/form-data'
                                            }
                                        })
                                        // hideLoader()
                                        if (success === true) {
                                            setUpload([])
                                            getFiles()
                                            setTab('gallery')
                                            notification.success({
                                                message: 'Success',
                                                description: message || 'Successfully uploaded'
                                            })
                                        } else {
                                            notification.success({
                                                message: 'Error',
                                                description: message || 'Something went wrong'
                                            })
                                        }
                                    } catch (e) {
                                        // hideLoader()
                                        notification.success({
                                            message: 'Error',
                                            description: 'Something went wrong'
                                        })
                                    }
                                   
                                }}>Upload</Button>
                            )}
                        </div>
                    </Tabs.TabPane>
                </Tabs>

            </Modal>
        </>
    )
}

export default FormImage