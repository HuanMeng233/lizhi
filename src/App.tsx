import type { Component } from "solid-js";
import { HopeProvider } from "@hope-ui/solid";
import Index from "./page/Index/Index";
import { Routes, Route } from "@solidjs/router";
import MusicList from "./page/MusicList/MusicList";
import { Player } from "./components/Player/Player";

const App: Component = () => {
  return (
    <HopeProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/album/:name" element={<MusicList />} />
      </Routes>
      <Player />
    </HopeProvider>
  );
};

export default App;
