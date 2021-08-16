import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import './PhotoDropzone.css'
import { Image } from 'semantic-ui-react'

interface Props {
    files: File[];
    setFiles: (files: any) => void;
}

const PhotoDropzone = (props: Props) => {


    const onDrop = useCallback(
        (acceptedFiles) => {
            props.setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));

        }, []);


    const { getRootProps, getInputProps, isDragReject } = useDropzone({
        onDrop,
        accept: "image/*"
    })

    const thumbs = props.files.map((file: any) => (
        <Image src={file.preview} key={file.name} className='uploadedImage' />
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        props.files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    }, [props.files]);

    return (
        <>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className={isDragReject ? 'wrongFile' : 'dropzone'}>
                    {isDragReject ? <span>Yanlış dosya tipi</span> : <span>Sürükle ve Bırak</span>}
                </div>
            </div>
            <Image.Group size='tiny' className='imageWrap'>
                {thumbs}
            </Image.Group>
        </>
    )
}

export default PhotoDropzone
