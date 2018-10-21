import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    return <div className="mw6 center ph3 pv4">
      <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "title"])}</h1>
      <div className="flex justify-between grey-3">
        <div style={{
          width: "80px",
          height: "80px"
        }}></div>
        <p>{ format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") }</p>
      </div>
      <div className="cms mw6">
        <p>{ entry.getIn(["data", "description"]) }</p>
        { image && <img src={ image } alt={ entry.getIn(["data", "title"])} /> }
        <div className="flex flex-wrap mhn1">
          {(entry.getIn(["data", "gallery", "photos"]) || []).map((photo, index) => <div className="w-100 w-50-ns ph1-ns" key={index}>
            <img src={photo.get("image") && getAsset(photo.get("image"))} alt="" className="center db mb3"/>
          </div>)}
        </div>
        { widgetFor("body") }
      </div>
    </div>;
  }
}


<div className="flex flex-wrap mhn1">
if true -->
  <div className="w-100 w-50-ns ph1-ns">
    <img src={getAsset(entry.getIn(["data", "main", "image1", "image"]))}/>
  </div>
else --> 

  <div className="w-100 ph1-ns">
    <img src={getAsset(entry.getIn(["data", "main", "image3", "image"]))}/>
  </div>
</div>