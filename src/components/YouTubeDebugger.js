// Code YouTubeDebugger Component Here
import React from "react";

export default class YoutubeDebugger extends React.Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p",
      },
    },
  };

  handleBitrate = (event) => {
    this.setState(({ settings }) => {
      return {
        settings: {
          ...settings,
          bitrate: 12,
        },
      };
    });
  };

  handleResolution = ({ settings }) => {
    return {
      settings: {
        ...settings,
        video: { ...settings.video, resolution: "720p" },
      },
    };
  };

  render() {
    return (
      <div>
        <button
          className={"bitrate button"}
          onClick={(event) => this.handleBitrate(event)}
        >
          Change Bitrate
        </button>
        <button
          className={"resolution button"}
          onClick={(event) => this.setState(this.handleResolution)}
        >
          Change Resolution
        </button>
      </div>
    );
  }
}
