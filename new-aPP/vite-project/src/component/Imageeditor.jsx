import React, { useState } from "react";
import './image.css'

function ImageEditor() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div className="App">
			<div className="input-bar">
			<input type="file" onChange={handleChange} />
			</div>
			<img src={file} style={{width:"500px", height:"500px"}}/>
		</div>

	);
}

export default ImageEditor;
