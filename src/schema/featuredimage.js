import { Node } from "@tiptap/core";

const Image = Node.create({
  name: "featuredimage",

  group() {
    return "block";
  },

  draggable: false,

  selectable: false,

  addAttributes() {
    return {
      src: {
        default: "",
        parseHTML: (element) => {
          return {
            fallback: element.getAttribute("src"),
            external: true,
          };
        },
      },
    };
  },


  parseHTML() {
    return [
      {
        tag: "featured[src]",
      },
    ];
  },

});

export default Image;
