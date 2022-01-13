import "./style.scss";

export default function IframeCoverImg(props) {
    const { image, src } = props;

    function iframeCoverClick(e) {
        const this_ = e.target.offsetParent;
        const iframe = this_.querySelector('iframe');

        iframe.setAttribute("src", iframe.getAttribute("src") + "&amp;autoplay=1");
        this_.classList.add("open");
    }

    return (
        <div onClick={iframeCoverClick} className={`iframe-cover ratio ratio-${props.hasOwnProperty("ratio") ? (props.ratio) : "4x3"}`}>
            <div className="bg-video" style={{ backgroundImage: `url(${image})` }}>
                <div className="bt-play"></div>
            </div>
            <div className="video-container">
                <iframe title={props.hasOwnProperty("title") ? props.title : "video"} color="white" fs="0" modestbranding="1" rel="0" src={src+"&amp;color=white"} frameBorder="0"></iframe>
            </div>
        </div >
    )
}
