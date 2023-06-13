import { Component } from "solid-js";
import { Icon, Button, Tooltip } from "@hope-ui/solid";
import IconBack from "../../icons/Back";
import { useNavigate } from "@solidjs/router";

const BackBtn: Component = () => {
  const navigate = useNavigate();

  return (
    <Tooltip label="返回" id="back">
      <Button
        variant="ghost"
        onClick={() => {
          navigate(`/`);
        }}
        size="md"
        class="w-10"
        colorScheme="primary"
        leftIcon={<Icon as={IconBack} boxSize="20px" class="ml-1" />}
      ></Button>
    </Tooltip>
  );
};
export default BackBtn;
