import { Component } from "solid-js";
import { Image } from "@hope-ui/solid";
import { useNavigate } from "@solidjs/router";
import "./Album.scss";
type AlbumProps = {
  id?: number;
  name: string;
  coverUrl: string;
};
const Album: Component<AlbumProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div
      class="card"
      onClick={() => {
        navigate(`/album/${props.name}`);
      }}
    >
      <Image id="cover" src={props.coverUrl}></Image>
      <div class="icon"></div>
      <p class="text">{props.name}</p>
    </div>
  );
};

export default Album;
