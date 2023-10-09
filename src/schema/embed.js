import { Node } from "@tiptap/core";

export const Embed = Node.create({
  name: "embed",

  group() {
    return "block";
  },
  selectable: true,
  addAttributes() {
    return {
      url: {
        default: "",
        parseHTML: (element) => element.getAttribute("src"),
      },
    };
  },
  parseHTML() {
    return [
      {
        tag: 'iframe',
      },
    ]
  },
});

export default Embed;
