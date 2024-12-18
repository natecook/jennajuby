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
        { widgetFor("body") }
        <div className="flex flex-wrap mhn1">
          {(entry.getIn(["data", "gallery", "photos"]) || []).map((photo, index) => <div className={photo.get("size") ? "w-100 ph1-ns" : "w-100 w-50-ns ph1-ns" } key={index}>
            <img src={photo.get("imagenew") && getAsset(photo.get("imagenew"))} alt="" className="center db mb3"/>
          </div>)}
        </div>
      </div>
    </div>;
  }
}