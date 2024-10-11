type VideoParameters = {
    height: number,
    width: number,
    src: string,
    subtitles?: string,
    className? : string

}

export function Video({height,width,src, subtitles, className} : VideoParameters) {
    return (
      <video width={width} height={height} loop autoPlay muted preload="none" className={className}>
        <source src={src} type="video/mp4" />
        <track
          src={ subtitles ? subtitles : "/path/to/captions.vtt"}
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    )
  }