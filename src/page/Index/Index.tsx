import { Component, For } from "solid-js";
import { Heading } from "@hope-ui/solid";
import Album from "../../components/Album/Album";
import GithubBtn from "../../components/GithubBtn/GithubBtn";
import ToggerColorMode from "../../components/ToggleColorMode/ToggleColorMode";
import "./Index.scss";
import { AlbumList } from "../../list";
const Index: Component = () => {

  return (
    <div id="index">
      <div id="main" class="p-5">
        <GithubBtn />
        <ToggerColorMode />
        <div id="albums">
          <div id="title">
            <Heading size="3xl">专辑</Heading>
            <Heading size="2xl">👋 为你推荐</Heading>
          </div>
          <div id="content">
            <For each={AlbumList}>
              {(album) => (
                <Album
                  id={album.id}
                  name={album.name}
                  coverUrl={album.coverUrl}
                />
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
