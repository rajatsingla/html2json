import { Node} from "@tiptap/core";

export default Node.create({
  name: "code_block",
  group: "block",
  content: "text*",
  marks: "",
  code: true,
  defining: true,
  draggable: false,

  addAttributes() {
    return {
      language: { default: "" },
    };
  },

  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full",
      },
    ];
  },

  renderHTML() {
    return ["pre", ["code", { class: "hljs", spellcheck: "false" }, 0]];
  },

});
