import * as React from "react";

import ImageUploading from "react-images-uploading";

const maxNumber = 1;
const maxMbFileSize = 5;

class MyUploader extends React.Component {
    onChange = (imageList) => {
        console.log("image list : ", imageList);
    };

    onSubmitImg = (image) => {
        this.props.onSubmitImg(image);
    }

    render() {
        return (
            <ImageUploading
                onChange={this.onChange}
                maxNumber={maxNumber}
                maxFileSize={maxMbFileSize}
                acceptType={["jpg", "gif", "png", "jpeg"]}
            >
                {({ imageList, onImageUpload, onImageRemoveAll }) => (

                    <div>
                        <button disabled={imageList.length > 0 ? true : false} className="ui button" onClick={onImageUpload}>choisir une photo</button><br /><br />

                        {imageList.map((image) => (
                            <div key={image.key}>
                                <img src={image.dataURL} alt="" /><br /><br />
                                <button className="ui button" onClick={image.onRemove}>Remove</button>
                                <button className="ui button" onClick={() => this.onSubmitImg(image)}>Valider</button>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        );
    }
}

export default MyUploader;