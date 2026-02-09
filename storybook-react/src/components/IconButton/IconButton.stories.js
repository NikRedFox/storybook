import { fn } from "storybook/test";
import IconButton from "./index";

export default {
    title: "Components/IconButton",
    component: IconButton,
    argTypes: {
        label: {
            control: "text"
        },
        description: {
            control: "text"
        },
        src: {
            control: "text"
        }
    }
}

export const Default = {
    args: {
        label: "default",
        description: "For testing purposes, use only img URLs on src",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYcJiU-jVZUt-OqEsrWKCYCdcEYaF_ya6Hlw&s"
    }
}