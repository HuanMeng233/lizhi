import { Component, createSignal, For } from "solid-js";
import { useParams } from "@solidjs/router";
import BackBtn from "../../components/BackBtn/BackBtn";
import { Image, Button, Table, Tbody, Tr, Icon, Td } from "@hope-ui/solid";
import "./MusicList.scss";
import GithubBtn from "../../components/GithubBtn/GithubBtn";
import ToggleColorMode from "../../components/ToggleColorMode/ToggleColorMode";
import IconPlay from "../../icons/Play";
import IconDownload from "../../icons/Download";
import { AP } from "../../components/Player/Player";
import { Musics } from "../../list";
const MusicList: Component = () => {
  const params = useParams();
  var mList: any = [];
  for (let i = 0; i < Musics.length; i++) {
    if (Musics[i].artist == decodeURI(params.name)) {
      mList.push(Musics[i]);
    }
  }

  return (
    <div>
      <GithubBtn />

      <ToggleColorMode />
      <div id="main" class="pb-25">
        <div id="header" class={"w-35"}>
          <BackBtn></BackBtn>
        </div>
        <div id="content" class="p-3 ml-10">
          <div id="info">
            <div id="coverPic">
              <Image id="cover" src={mList[0].cover}></Image>
            </div>
            <div id="albumText">
              <div id="title">{mList[0].artist}</div>
              <div id="author">李志</div>
              <Button
                variant={"subtle"}
                id="playAllBtn"
                leftIcon={<IconPlay />}
                borderRadius={"50px"}
                onclick={() => {
                  AP.list.switch(mList[0].id);
                  AP.play();
                }}
              >
                播放全部
              </Button>
            </div>
          </div>
          <div id="list" class="pt-5">
            <Table highlightOnHover>
              <Tbody>
                <For each={mList}>
                  {(item, i) => (
                    <Tr>
                      <Td>{i() + 1}</Td>
                      <Td>{item.name}</Td>
                      <Td>
                        <Icon
                          boxSize={"22px"}
                          class=" cursor-pointer"
                          onClick={() => {
                            AP.list.switch(item.id);
                            AP.play();
                          }}
                        >
                          <IconPlay />
                        </Icon>
                        <Icon
                          boxSize={"22px"}
                          class=" ml-10 cursor-pointer"
                          onClick={() => {
                            window.open(item.url);
                          }}
                        >
                          <IconDownload />
                        </Icon>
                      </Td>
                    </Tr>
                  )}
                </For>
              </Tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MusicList;
