import { Node, nodeInputRule } from "@tiptap/core";

export default Node.create({
  name: "horizontal_rule",

  group: "block",

  selectable: false,

  parseHTML() {
    return [{ tag: "hr" }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["hr", HTMLAttributes];
  },

  addCommands() {
    return {
      setHorizontalRule:
        () =>
        ({ tr, dispatch }) => {
          if (tr.doc.content.size - tr.selection.head === 1)
            tr = tr.insert(
              tr.doc.content.size,
              this.editor.schema.nodes["paragraph"].create()
            );
          tr = tr.replaceSelectionWith(this.type.create());
          return dispatch(tr);
        },
    };
  },

  addInputRules() {
    return [
      nodeInputRule({ find: /^(?:---|—-|___\s|\*\*\*\s)$/, type: this.type }),
    ];
  },
});
