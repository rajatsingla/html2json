import { TextSelection } from "prosemirror-state";
import { Node } from "@tiptap/core";

export const Image = Node.create({
  name: "image",
  group: "block",
  selectable: true,

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
        tag: "img[src]",
      },
    ];
  },
});

export default Image;
