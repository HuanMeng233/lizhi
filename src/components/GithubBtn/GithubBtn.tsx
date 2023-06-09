import { Component } from "solid-js";
import { Icon, Button } from "@hope-ui/solid";
import IconGithub from "../../icons/Github";
const GithubBtn: Component = () => {
  return (
    <div id="github">
      <Button
        variant="ghost"
        onClick={() => {
          window.open("https://github.com/HuanMeng233/lizhi");
        }}
        size="md"
        class="w-10"
        colorScheme="primary"
        leftIcon={<Icon as={IconGithub} boxSize="20px" class="ml-2" />}
     
     />
    </div>
  );
};
export default GithubBtn;
