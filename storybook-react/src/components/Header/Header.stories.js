import {fn} from "storybook/test";
import Header from "./index";


export default {
    title: "Header",
    component: Header,
    argTypes: {
        src: { 
            control: "text" 
        },
        alt: { 
            control: "text" 
        },
        text: { 
            control: "text" 
        },
        linkA: { 
            control: "text" 
        },
        linkB: { 
            control: "text" 
        },
        linkC: { 
            control: "text" 
        },
        buttonA: { 
            control: "text" 
        },
        buttonB: { 
            control: "text" 
        }
    }
}

export const Default = {
    args: {
        label: "Header",
        description: "For testing purposes, use only img URLs on src",
        src: "https://images.vexels.com/media/users/3/144131/isolated/preview/29576a7e0442960346703d3ecd6bac04-icone-de-doodle-de-imagem.png",
        alt: "Logo",
        text: "Jay Art",
        linkA: "#",
        linkTextA: "Home",
        linkB: "#",
        linkTextB: "About",
        linkC: "#",
        linkTextC: "Contact",
        buttonA: "Sign Up",
        buttonB: "Log In"
    }
}