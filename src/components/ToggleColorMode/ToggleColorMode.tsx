import { Component } from "solid-js";
import { Tooltip , useColorMode, Icon, Button } from "@hope-ui/solid";
import { IconSun } from "../../icons/Sun";
import { IconMoon } from "../../icons/Moon";
const ToggleColorMode:Component=()=>{
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div id="toggleColorMode">
        <Button
          variant="ghost"
          onClick={toggleColorMode}
          size="md"
          class="w-10"
          colorScheme="primary"
          leftIcon={
            <Icon
              as={colorMode() === "dark" ? IconMoon : IconSun}
              boxSize="18px"
              class="ml-2"
            />
          }
        ></Button>
      </div>
    )
}
export default ToggleColorMode;